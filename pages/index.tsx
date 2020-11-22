import { useTranslation } from 'react-i18next'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'
import media from 'styled-media-query'

import 'constants/locales/I18n'
import { Prefecture, TotalPrediction } from 'types'
import { getPrefectureList } from 'model/Prefecture'
import { getTotalPredictionList } from 'model/TotalPrediction'
import { toChartFromPredictionList } from 'helper/chart'
import PrefecturePanel from 'components/molecures/PrefecturePanel'
import BasicLayout from './basicLayout'

interface Props {
  prefectureList: Prefecture[]
  totalPredictionList: TotalPrediction[]
}

export async function getServerSideProps() {
  const [prefectureList, totalPredictionList] = await Promise.all([
    getPrefectureList(),
    getTotalPredictionList(),
  ])
  return {
    props: {
      prefectureList: prefectureList,
      totalPredictionList: totalPredictionList,
    },
  }
}

export default function Home({ prefectureList, totalPredictionList }: Props) {
  if (!prefectureList || !totalPredictionList) {
    return null
  }
  const { t } = useTranslation()
  const predictionMappingData = toChartFromPredictionList(totalPredictionList)
  return (
    <BasicLayout>
      <Title>{t('感染者予測データ')}</Title>
      <GraphContainer>
        <Line data={predictionMappingData} />
      </GraphContainer>
      <Title>{t('感染者リスト')}</Title>
      <Container>
        {prefectureList.map((prefecture, index) => {
          return (
            <Wrapper key={index}>
              <PrefecturePanel prefecture={prefecture} />
            </Wrapper>
          )
        })}
      </Container>
    </BasicLayout>
  )
}

const GraphContainer = styled.div`
  padding: 20px;
  max-width: 1024px;
  margin: 0 auto;
`

const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
`

const Title = styled.h3`
  margin: 0 auto;
  text-align: center;
  font-size: 1rem;
  padding: 20px;
`

const Wrapper = styled.div`
  width: 240px;
  margin: 10px;
  ${media.lessThan('small')`
    width: 100%;
  `}
`

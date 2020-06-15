import { useTranslation } from 'react-i18next'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'

import '../constants/locales/I18n'
import { Prefecture, TotalPrediction } from '../interface'
import { getPrefectureList } from '../model/Prefecture'
import { getTotalPredictionList } from '../model/TotalPrediction'
import { ToChartFromPredictionList } from '../helper/chart'
import PrefecturePanel from '../components/molecures/PrefecturePanel'

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
  const predictionMappingData = ToChartFromPredictionList(totalPredictionList)
  return (
    <>
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
    </>
  )
}

const GraphContainer = styled.div`
  padding: 20px;
`

const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const Title = styled.h3`
  margin: 0 auto;
  text-align: center;
  font-size: 1rem;
`

const Wrapper = styled.div`
  width: 31%;
  margin: 15px;
`

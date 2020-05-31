import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import PrefecturePanel from '../components/molecures/PrefecturePanel'
import '../constants/locales/I18n'
import {
  PrefectureInfection,
  getPrefectureInfectionList,
} from '../model/Prefecture'

interface Props {
  prefectureInfectionList: PrefectureInfection[]
}

export async function getStaticProps() {
  const prefectureInfectionList = await getPrefectureInfectionList()
  return {
    props: {
      prefectureInfectionList: prefectureInfectionList,
    },
  }
}

export default function Home({ prefectureInfectionList }: Props) {
  const { t } = useTranslation()
  return (
    <>
      <Title>{t('感染者リスト')}</Title>
      <Container>
        {prefectureInfectionList.map((prefectureInfection, index) => {
          return (
            <Wrapper key={index}>
              <PrefecturePanel prefectureInfection={prefectureInfection} />
            </Wrapper>
          )
        })}
      </Container>
    </>
  )
}

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

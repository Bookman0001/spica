import styled from 'styled-components'

import PrefecturePanel from '../components/molecures/PrefecturePanel'
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
  return (
    <Container>
      <Title>感染者データ一覧</Title>
      {prefectureInfectionList.map((prefectureInfection, index) => {
        return (
          <Wrapper key={index}>
            <PrefecturePanel prefectureInfection={prefectureInfection} />
          </Wrapper>
        )
      })}
    </Container>
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
  font-size: 1rem;
`

const Wrapper = styled.div`
  width: 31%;
  margin: 15px;
`

import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import '../constants/locales/I18n'
import { Prefecture } from '../app_interface'
import { getPrefectureList } from '../model/Prefecture'
import PrefecturePanel from '../components/molecures/PrefecturePanel'

interface Props {
  prefectureList: Prefecture[]
}

export async function getStaticProps() {
  const prefectureList = await getPrefectureList()
  return {
    props: {
      prefectureList: prefectureList,
    },
  }
}

export default function Home({ prefectureList }: Props) {
  const { t } = useTranslation()
  return (
    <>
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

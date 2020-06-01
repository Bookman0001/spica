import { useTranslation } from 'react-i18next'
import styled, { css } from 'styled-components'

import '../../constants/locales/I18n'
import { Prefecture } from '../../app_interface'

interface Props {
  prefecture: Prefecture
}

export default function PrefecturePanel({ prefecture }: Props) {
  const { t } = useTranslation()
  return (
    <PrefectureItem cases={prefecture.cases}>
      <Wrapper>
        <Label>{t('都道府県')}</Label>
        <span>{prefecture.nameJA}</span>
      </Wrapper>
      <Wrapper>
        <Label>{t('感染者数')}</Label>
        <span>{prefecture.cases}人</span>
      </Wrapper>
      <Wrapper>
        <Label>{t('感染による死者数')}</Label>
        <span>{prefecture.deaths}人</span>
      </Wrapper>
      <Wrapper>
        <Label>{t('都道府県人口')}</Label>
        <span>{prefecture.population}人</span>
      </Wrapper>
    </PrefectureItem>
  )
}

const PrefectureItem = styled.div<{ cases: number }>`
  width: 100%;
  border-radius: 10px;
  padding: 5px;
  ${({ cases }) =>
    cases < 500 &&
    css`
      background-color: #ddffdd;
    `}
  ${({ cases }) =>
    cases >= 500 &&
    css`
      background-color: #ffff99;
    `}
  ${({ cases }) =>
    cases >= 1000 &&
    css`
      background-color: #ffccff;
    `}
`

const Wrapper = styled.div`
  width: 100%;
`

const Label = styled.label``

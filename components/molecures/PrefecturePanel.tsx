import styled, { css } from 'styled-components'

import { PrefectureInfection } from '../../model/Prefecture'

interface Props {
  prefectureInfection: PrefectureInfection
}

export default function PrefecturePanel({ prefectureInfection }: Props) {
  return (
    <Prefecture cases={prefectureInfection.cases}>
      <Wrapper>
        <Label>都道府県</Label>
        <span>{prefectureInfection.nameJA}</span>
      </Wrapper>
      <Wrapper>
        <Label>感染者数 </Label>
        <span>{prefectureInfection.cases}人</span>
      </Wrapper>
      <Wrapper>
        <Label>感染による死者数</Label>
        <span>{prefectureInfection.deaths}人</span>
      </Wrapper>
      <Wrapper>
        <Label>都道府県人口</Label>
        <span>{prefectureInfection.population}人</span>
      </Wrapper>
    </Prefecture>
  )
}

const Prefecture = styled.div<{ cases: number }>`
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

import styled from 'styled-components'

interface Props {
  label: string
  onClick: () => void
}

export default function Button({ label, onClick }: Props) {
  return <StandardButton onClick={onClick}>{label}</StandardButton>
}

const StandardButton = styled.button`
  display: block;
  width: 290px;
  height: 40px;
  font-size: 20px;
  background: #f7f7f7;
  color: gray;
  border: 0.5px solid;
  border-radius: 25px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`

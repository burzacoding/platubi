import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  margin: 0 auto;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  width: 184px;
  align-items: center;
`
const Title = styled.p`
  font-size: 14px;
  height: 24px;
  margin-bottom: 6px;
`
const Action = styled(Link)`
user-select: none;
  height: 24px;
  font-weight: 500;
  font-size: 16px;
  background-image: ${p => p.theme.colorBackground};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

export {
  Container, Title, Action
}

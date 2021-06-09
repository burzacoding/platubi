import styled from 'styled-components'
import { Title as AuthTitle } from '../components/pages/Auth/Styles'

const MainContent = styled.div`
  background-color: ${p => p.theme.divBackground};
  transition: background-color 0.25s;
  width: 100%;
  margin: 30px auto 36px auto;
  min-width: 320px;
  max-width: 1440px;
  @media screen and (min-width: 668px) {
    margin: 0;
    padding: 72px 48px;
  }
  @media screen and (min-width: 1025px) {
    padding: 108px 96px;
  }
  @media screen and (min-width: 1368px) {
    margin: 0 auto;
    padding: 164px 0 156px 128px;
  }
  color: ${p => p.theme.fontContrastFive};
`

const Title = styled(AuthTitle)`
  text-align: left;  
`
const P = styled.p`
  font-size: 18px;
  line-height: 150%;
  margin-bottom: 12px;
`

export {MainContent, Title, P}

import styled from 'styled-components'
import { Title as AuthTitle } from '../components/pages/Auth/Styles'
import { ThemeColorPicker } from '../Utils/Utils'

const MainContent = styled.main`
  background-color: ${p => p.theme.divBackground};
  transition: background-color 0.25s;
  width: 100%;
  margin: 30px auto 36px auto;
  padding: 48px 16px;
  min-width: 320px;
  max-width: 1440px;
  @media screen and (min-width: 668px) {
    margin: 0;
    padding: 72px 48px;
  }
  @media screen and (min-width: 1025px) {
    padding: 96px;
  }
  @media screen and (min-width: 1368px) {
    margin: 0 auto;
    padding: 96px 128px;
    padding-bottom: 48px;
  }
  color: ${p => p.theme.fontContrastFive};
`

const Title = styled(AuthTitle)`
  margin: 32px 0;
`

const Article = styled.article`
  margin-bottom: 64px;
`

const Subtitle = styled(AuthTitle)`
  text-align: left;
  font-size: 20px;
  margin-bottom: 8px;
`

const P = styled.p`
  font-size: 18px;
  line-height: 150%;
  margin-bottom: 12px;
  opacity: ${p => ThemeColorPicker(p, '0.75', '0.85')};
  strong {
    opacity: 1;
  }
`

export {MainContent, Title, Article, Subtitle, P}

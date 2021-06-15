import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ThemeColorPicker } from '../Utils/Utils'

const Container = styled.div`
  width: 100%;
  padding: 16px;
  padding-top: 128px;
  margin-top: auto;
  @media screen and (min-width: 768px) {
    padding-top: 16px;
  }
`

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 80%;
  border-top: solid 1px ${p => `${p.theme.fontContrastFive}60`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 16px 0;
  }
`

const ItemsContainer = styled('div')`
  max-width: 996px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 12px 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  a {
  text-decoration: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  text-align: center;
  color: ${p => p.theme.fontContrastFive};
  opacity: ${p => ThemeColorPicker(p, '0.5', '0.75')};
  margin: 12px 0;
  @media screen and (min-width: 768px) {
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }
  }
  &:hover {
  opacity: 1;
  }
  }
`

const Item = styled(Link)`
  text-decoration: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  text-align: center;
  color: ${p => p.theme.fontContrastFive};
  opacity: ${p => ThemeColorPicker(p, '0.5', '0.75')};
  margin: 12px 0;
  @media screen and (min-width: 768px) {
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }
  }
  &:hover {
  opacity: 1;
  }
`

export { Container, InnerContainer, Item, ItemsContainer}

import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface ButtonContainerProps {
  ghost?: boolean | string
}

const ButtonContainer = styled(Link)<ButtonContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #3480C1 -3.62%, #0DCA4F 103.62%);
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  width: 222px;
  height: 38px;
  border-radius: 0.5em;
  font-size: 0.85em;

  text-decoration: none;
  text-align: center;
  span {
    display: block;
    line-height: 140%;
    ${p => p.ghost ? (`
      background-image: linear-gradient(to right,#1269B4, #3BBC76);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;`
    ): `color: #FFFFFF`};
    @media screen and (min-width: 1025px) {
      font-size: 1.2em;
    }
  }
  &:nth-child(1) {
    margin-bottom: 16px;
    @media screen and (min-width: 1366px) {
      margin-bottom: 0;
      margin-right: 34px;
    }
  }

  @media screen and (min-width: 1025px) {
    width: 280px;
    height: 54px;
  }
  @media screen and (min-width: 1366px) {
    width: 312px;
    height: 62px;
  }
`
const GhostContainer = styled.div`
  background-color: ${p => p.theme.divBackground};
  transition: background-color 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 218px;
  height: 34px;
  border-radius: 0.375em;
  margin: auto;
  @media screen and (min-width: 1025px) {
    width: 276px;
    height: 50px;
  }
  @media screen and (min-width: 1366px) {
    width: 308px;
    height: 58px;
  }
`

export {ButtonContainer, GhostContainer}

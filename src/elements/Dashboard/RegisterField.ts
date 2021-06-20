import styled from 'styled-components'

const FieldContainer = styled.div`
  width: 100%;
  height: 40px;
  background-image: ${p => p.theme.horizontalBarBG};
  border-radius: 8px;
  margin-bottom: 8px;
  position: relative;
  padding: 2px;

  @media screen and (min-width: 360px) {
    height: 48px;
  }
`
const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 6px;
  background-color: ${p => p.theme.divBackground};
  transition: background-color 0.25s;
  border-radius: 6px;
  display: flex;
  align-items: center;
  font-family: 'Mandali', sans-serif;
`
const ButtonsContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 6px;
`
interface SVGContainerProps {
  customPadding?:number
}

const SVGContainer = styled.div<SVGContainerProps>`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 6px;
  -webkit-tap-highlight-color: transparent;
  padding: ${p => p.customPadding === undefined ? '0' : `${p.customPadding.toString()}px`};
  svg {
    fill: ${p => p.theme.fontContrastFive}
  }
  &:last-child {
    margin-right: 0;
  }
  @media screen and (min-width: 360px){
    width: 32px;
    height: 32px;
  };
  @media screen and (min-width: 768px){
    width: 36px;
    height: 36px;
  };
`

export {FieldContainer, InnerContainer, SVGContainer, ButtonsContainer}

import styled from 'styled-components'

const FieldContainer = styled.div`
  width: 100%;
  height: 38px;
  background-image: ${p => p.theme.horizontalBarBG};
  border-radius: 8px;
  margin-bottom: 8px;
  position: relative;
  padding: 2px;

  @media screen and (min-width: 360px) {
    height: 44px;
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
  opacity: 0.7;
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

const TextContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  align-items: center;
  padding-right: 24px;
  font-size: 12px;
`
const Text = styled.span`
  width: 100%;
  text-align: center;
  &:last-child {
    min-width: 78px;
  }
`


export {FieldContainer, InnerContainer, SVGContainer, ButtonsContainer, TextContainer, Text}

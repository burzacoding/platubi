import styled from "styled-components";
import { motion } from "framer-motion";
import { Field } from "formik";

const ContainerBackground = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 0 12px;
  padding-top: 110px;
  position: fixed;
  background-color: rgba(0,0,0,0.55);
  z-index: 30;

  @media screen and (min-width: 768px) {
    padding-top: 248px;
  };
  @media screen and (min-width: 1024px) {
    padding-top: 248px;
  };
`

const ModalContainer = styled.div`
  width: 100%;
  min-width: 296px;
  max-width: 664px;
  padding-top: 16px;
  padding-bottom: 32px;
  margin: auto;
  background-color: ${p => p.theme.divBackground};
  border-radius: 8px;
  color: ${p => p.theme.fontContrastTwo};
  position: relative;
  display: flex;
  flex-direction: column;
`

const HorizontalBar = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 16px;
  margin-bottom: 24px;

  background-image: ${ props => props.theme.horizontalBarBG};
`

const Content = styled.div`
  padding: 0 12px;
`
const Title = styled.h2`
  font-weight: 400;
  font-size: 16px;
  height: 20px;
  text-align: center;
`

const OperationsContainer = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`
interface SymbolSvgContainerProps {
  isCurrent: string
}

const SymbolSvgContainer = styled(motion.div)<SymbolSvgContainerProps>`
  height: 100%;
  width: 48px;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  svg {
    fill: ${p => p.isCurrent === 'true' ? '#0F954E' : '#3480C1'};
    transition: fill 0.25s;
  }
`


const Cross = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 22px;
  height: 22px;
  svg {
    fill: #0F954E;
  }
`

const ValueContainer = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

const TextPlaceholder = styled.span`
  display: block;
  width: 72px;
  min-width: 72px;
`
const ValueInputField = styled(Field)`
  width: 100%;
  height: 38px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  margin-left: 36px;
  background-color: transparent;
  border-radius: 4px;
  color: ${p => p.theme.fontContrastTwo};
  border: solid 1px white;
  outline: none !important;
  padding: 0 8px;
  &::placeholder {
    opacity: 0.8
  }
`

const ButtonAdd = styled.button`
  width: 100%;
  height: 42px;
  border-radius: 8px;
  background-color: #3480C1;
  color: #EAEAEA;
  border: none;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  -webkit-tap-highlight-color: transparent;
`


export { ContainerBackground, ModalContainer, HorizontalBar, Content, Title, Cross, OperationsContainer, SymbolSvgContainer, ValueContainer, TextPlaceholder, ValueInputField, ButtonAdd }

import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled.div`
  grid-area: registers;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 334px;
  @media screen and (min-width: 768px) {
    max-height: 386px;
  };
  @media screen and (min-width: 1024px) {
    max-height: 386px;
  };
  @media screen and (min-width: 1366px) {
    max-height: 475px;
  };
`
const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`
interface BottomProps {
  registerExists: string
}

const Bottom = styled.div<BottomProps>`
  width: 100%;
  margin-right: -8px;
  overflow-y: ${p => p.registerExists === 'true' ? 'scroll' : 'hidden'};


   /* width */
  &::-webkit-scrollbar {
    width: 0;
    border-radius: 4px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${p => p.theme.divDarkerBackground};
    border-radius: 8px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #133c6b;
    border-radius: 6px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #15B74E;
  }

`
const Text = styled.span`
  margin-right: 16px;
`
const SVGContainer = styled.div`
  height: 100%;
  width: 28px;
  position: relative;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`
export interface AddRegisterButtonProps {
  inRegisters: string
}
 
const AddRegisterButton = styled(motion.div)<AddRegisterButtonProps>`
  height: 38px;
  width: 100%;
  border-radius: 8px;
  user-select: none;
  cursor: pointer;
  background-color: #3480C1;
  margin-bottom: ${p => p.inRegisters === 'true' ? '8px' : '0'};
  display: ${p => p.inRegisters === 'true' ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  color: #EAEAEA;

  @media screen and (min-width: 768px) {
    display: ${p => p.inRegisters === 'true' ? 'none' : 'flex'};
    max-width: 338px;
    margin-left: auto;
  }
`

const TopText = styled.div`
  display: flex;
  align-items: center;
`

export { Container, Top, Bottom, Text, SVGContainer, AddRegisterButton, TopText }

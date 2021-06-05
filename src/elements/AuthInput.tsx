import styled from 'styled-components'
import ThemeColorPicker from '../Utils/ThemeColorPicker'


interface InputContainerProps {
  border: {
    dark: string,
    light: string
  }
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 26px;
`
const Label = styled.h3`
  margin-bottom: 6px;
`
const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  display: grid;
  grid-template-columns: 42px 1fr;
  width: 100%;
  height: 42px;
  border-radius: 6px;
  background-color: ${p => p.theme.divDarkerBackground};
  transition: background-color 0.25s;
  box-shadow: ${p => p.theme.theme === 'dark' ? p.border.dark : p.border.light};
`
const InputContainerNoSvg = styled(InputContainer)` 
  grid-template-columns: 1fr;
  padding-left: 16px;
`

const InputContainerPwd = styled(InputContainer)`  
  grid-template-columns: 42px 1fr 42px;
`
const SvgContainer = styled.div`
  height: 100%;
  width: 55%;
  margin: auto;
  svg {
    display: block;
    margin: auto;
    width: 100%;
    fill: ${p => p.theme.fontContrastFive};
  }
`
const TextInput = styled.input`
  min-width: 190px;
  font-family: 'Montserrat';
  color: ${p => p.theme.fontContrastFive};
  font-size: 16px;
  letter-spacing: 0.035em;
  grid-column: span 1;
  background-color: transparent;
  height: 100%;
  outline: none;
  border: none;
  &:-webkit-autofill {
    box-shadow: 0 0 0 50px ${p => p.theme.divDarkerBackground} inset;
    -webkit-box-shadow:0 0 0 50px ${p => p.theme.divDarkerBackground} inset; /* Change the color to your own background color */
    -webkit-text-fill-color: ${p => p.theme.fontContrastFive};
    font-size: 16px;
    transition: -webkit-box-shadow 0.25s;
  }
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 50px ${p => p.theme.divDarkerBackground} inset;
    -webkit-box-shadow:0 0 0 50px ${p => p.theme.divDarkerBackground} inset; /* Change the color to your own background color */
    -webkit-text-fill-color: ${p => p.theme.fontContrastFive};
    font-size: 16px;
  }  
  &::placeholder {
    color: ${p => p.theme.fontContrastFive};
    font-family: 'Montserrat';
    opacity: 0.7;
  }
  @media screen and (max-width: 359px) {
    font-size: 12px;
  }
`

const Message = styled.div`
  user-select: none;
  font-size: 15px;
  position: absolute;
  bottom: -24px;
  right: 0;
  color: ${p => ThemeColorPicker(p, '#a56161', '#cc6161')};
`


export { 
  Container,
  Label,
  InputContainer,
  InputContainerNoSvg,
  InputContainerPwd,
  SvgContainer,
  TextInput,
  Message}

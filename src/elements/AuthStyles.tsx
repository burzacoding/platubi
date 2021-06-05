import { Field } from 'formik'
import { ThemeColorPicker } from '../Utils/Utils'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
const Label = styled.label`
  display: inline-block;
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
const NameField = styled(InputContainer)` 
  grid-template-columns: 1fr;
  padding-left: 16px;
`

const Password = styled(InputContainer)`  
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
const Input = styled(Field)`
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
  margin-right: 4px;
  &:-webkit-autofill {
    border-radius: 0 1px 1px 0;
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

const Error = styled.div`
  user-select: none;
  font-size: 15px;
  position: absolute;
  bottom: -24px;
  right: 0;
  color: ${p => ThemeColorPicker(p, '#a56161', '#cc6161')};
`

interface SubtitleProps {
  farbottom?: string
}
const Subtitle = styled(Link)<SubtitleProps>`
display: block;
text-align: right;
color: ${p => ThemeColorPicker(p, '#096635', '#1269B4')};
margin-left: auto;
margin-top: ${p => p.farbottom ? '28px' : '-16px'};
margin-bottom: 20px;
text-decoration: none;

@media screen and (max-width: 359px) {
  margin-top: 8px;
  margin-right: unset;
  margin-left: auto;
}
`

const Ingresar = styled.button`
  background: ${p => p.theme.colorBackground};
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  border: none;

  width: 100%;
  height: 42px;
  border-radius: 0.5em;

  text-decoration: none;
  text-align: center;
  color: #f0f0f0;
  font-size: 14px;
  @media screen and (min-width: 1025px) {
    font-size: 1em;
  }
`

const IngresarMT = styled(Ingresar)`
  margin-top: 4px;
`

export { 
  Container,
  Label,
  InputContainer,
  NameField,
  Password,
  SvgContainer,
  Input,
  Error,
  Subtitle,
  Ingresar,
  IngresarMT}

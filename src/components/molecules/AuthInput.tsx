import { useState } from 'react'
import styled from 'styled-components'
import EyeSVG from '../atoms/SVG/EyeSVG'

const Container = styled.div`
  width: 100%;
  margin-bottom: 24px;
`
const Label = styled.h3`
  margin-bottom: 6px;
`
const InputContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 42px 1fr;
  width: 100%;
  height: 42px;
  border-radius: 6px;
  background-color: ${p => p.theme.divDarkerBackground};
  transition: background-color 0.25s;
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
  color: ${p => p.theme.fontContrastFive};
  font-size: 14px;
  letter-spacing: 0.03em;
  grid-column: span 1;
  background-color: transparent;
  height: 100%;
  outline: none;
  border: none;
  &::placeholder {
    color: ${p => p.theme.fontContrastFive};
    font-family: 'Montserrat';
    opacity: 0.7;
  }
  @media screen and (min-width: 360px) {
    font-size: 16px;
  }
`


export interface AuthInputProps {
  label?: string,
  placeholder: string,
  type: 'text' | 'email'| 'password' | 'textNoSvg';
  svg?: React.ReactNode
}
 
const AuthInput: React.FC<AuthInputProps> = ({label, placeholder, type, svg}) => {
  const isPassword = type === 'password' ? true : false
  const [isVisible, setVisible] = useState(true);
  const toggleVisible = () => {
    setVisible(visible => !visible)
  }
  if (type !== 'textNoSvg') {
  return (
    <Container>
      {label && (
        <Label>{label}</Label>
      )}
      {isPassword ? (
      <InputContainerPwd>
        <SvgContainer>{svg}</SvgContainer>
        <TextInput placeholder={placeholder} type={!isVisible ? 'text' : 'password'}  />
        <SvgContainer onClick={toggleVisible}><EyeSVG isOpen={!isVisible} /></SvgContainer>
      </InputContainerPwd>
      ) : (
        <InputContainer>
          <SvgContainer>{svg}</SvgContainer>
          <TextInput placeholder={placeholder} type={type}  />
        </InputContainer>
        )}
    </Container>
  );
  }
  else {
    return (
      <Container>
          <Label>{label}</Label>
          <InputContainerNoSvg>
            <TextInput placeholder={placeholder} type={type}  />
          </InputContainerNoSvg>
      </Container>
    )
  }
}
 
export default AuthInput;

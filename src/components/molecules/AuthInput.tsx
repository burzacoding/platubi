import { ChangeEvent, useEffect, useRef, useState } from 'react'
import EyeSVG from '../atoms/SVG/EyeSVG'
import { Container, Label, InputContainerPwd, SvgContainer, InputContainer, InputContainerNoSvg, TextInput, Message} from '../../elements/AuthInput'

interface validator  {
  value: string,
  valid: string
}
export interface AuthInputProps {
  label?: string,
  placeholder: string,
  type: 'text' | 'email'| 'password' | 'textNoSvg';
  svg?: React.ReactNode,
  errorMessageProp: string,
  repeatPwdValue?: string,
  autoComplete?: string,
}

 
const AuthInput: React.FC<AuthInputProps> = ({label, placeholder, type, svg, errorMessageProp, repeatPwdValue, autoComplete}) => {
  const isPassword = type === 'password' ? true : false;
  const [visited, setVisited] = useState(false)
  const [isVisible, setVisible] = useState(true);
  const [borderColor, setBorderColor] = useState({dark: 'none', light: 'string'});
  const [errorMessage, setErrorMessage] = useState(false);
  const counter = useRef(0)

  

  const denyValidation = () => {
    setErrorMessage(true);
    setBorderColor({
      dark: '0 0 1px 2px #800000',
      light: '0 0 1px 2px #ca17177a', 
      })
  }

  const allowValidation = () => {
    setErrorMessage(false);
    setBorderColor({
      dark: '0 0 1px 2px #044abb92',
      light: '0 0 1px 2px #00378f92',
      })
  }

  const toggleVisible = () => {
    setVisible(visible => !visible)
  }

  const updateInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (visited) {
      validateInput()
    }
  }

  const validateInput = () => {
    if (!visited) setVisited(true);
  }

  useEffect(() => {
    if (counter.current === 1) {
      validateInput()
    } else {
      counter.current = 1
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repeatPwdValue, counter])

  if (type !== 'textNoSvg') {
  return (
    <Container>
      {label && (
        <Label>{label}</Label>
      )}
      {isPassword ? (
      <InputContainerPwd border={borderColor}>
        <SvgContainer>{svg}</SvgContainer>
        <TextInput placeholder={placeholder} type={!isVisible ? 'text' : 'password'} onChange={updateInput} onBlur={validateInput} autoComplete={autoComplete} />
        <SvgContainer onClick={toggleVisible}><EyeSVG isOpen={!isVisible} /></SvgContainer>
        {errorMessage && (
          <Message>{errorMessageProp}</Message>
        )}
      </InputContainerPwd>
      ) : (
        <InputContainer border={borderColor}>
          <SvgContainer>{svg}</SvgContainer>
          <TextInput placeholder={placeholder} type={type} onChange={updateInput} onBlur={validateInput} autoComplete={autoComplete} />
          {errorMessage && (
            <Message>{errorMessageProp}</Message>
          )}
        </InputContainer>
        )}
    </Container>
  );
  }
  else {
    return (
      <Container>
          <Label>{label}</Label>
          <InputContainerNoSvg border={borderColor}>
            <TextInput 
            placeholder={placeholder} 
            type={type} 
            onChange={updateInput}
            onBlur={validateInput}
            autoComplete={autoComplete} />
          {errorMessage && (
            <Message>{errorMessageProp}</Message>
          )}
          </InputContainerNoSvg>
      </Container>
    )
  }
}
 
export default AuthInput;

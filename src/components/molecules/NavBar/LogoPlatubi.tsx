import logoMobile from '../../../res/Landing/platubi-logo-mobilenav.svg'
import logoPlatubiDesktop from '../../../res/platubi-logo.svg'

import styled from 'styled-components'

export interface LogoPlatubiProps {
  mobile?: boolean | string
}

interface LogoContainerProps {
  mobile?:boolean | string
}

const LogoContainer = styled.img<LogoContainerProps>`
    height: 7vh;
    min-height: 40px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
`
 
const LogoPlatubi: React.FC<LogoPlatubiProps> = ({mobile}) => {
  return (
    <>
    { mobile
    ? 
    <LogoContainer src={logoMobile} alt="logoMobile" mobile="true" />
    :
    <LogoContainer src={logoPlatubiDesktop} alt="logoMobile" />
    }
    </>
  );
}
 
export default LogoPlatubi;

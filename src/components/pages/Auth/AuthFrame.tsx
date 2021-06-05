import styled from 'styled-components'
import { NavSpacer } from '../../../elements/LandingPage'

export interface AuthFrameProps {
  
}
const AuthContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.divBackground};
  transition: background-color 0.25s;
  padding: 16px;
  padding-bottom: 68px;
  @media screen and (orientation: landscape) {
    min-height: 460px;
    padding-top: 10vh;
  }
  @media screen and (min-width: 1368px) {
    padding-top: 128px;
  }
`
 
const AuthFrame: React.FC<AuthFrameProps> = ({children}) => {
  return (
    <AuthContainer>
      <NavSpacer  />
      {children}
    </AuthContainer>
  );
}
 
export default AuthFrame;

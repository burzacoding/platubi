import styled from 'styled-components'
import { NavSpacer } from '../../../elements/LandingPage'

export interface AuthFrameProps {
  
}
const AuthContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  overflow-x: hidden;
  background-color: ${p => p.theme.divBackground};
  transition: background-color 0.25s;
  padding: 16px;
  @media screen and (orientation: landscape) {
    /* min-height: 460px;  */
    padding-top: 10vh;
  }
  @media screen and (min-width: 1366px) {
    padding-top: 96px;
  }
`
 
const AuthFrame: React.FC<AuthFrameProps> = ({children}) => {
  return (
    <AuthContainer>
      <NavSpacer desktop />
      {children}
      <NavSpacer desktop bottom/>
    </AuthContainer>
  );
}
 
export default AuthFrame;

import styled from 'styled-components'

interface ContainerProps {
  colors: {
    dark: string,
    light: string
  }
}

const Container = styled.div<ContainerProps>`
cursor: pointer;
  margin-bottom: 12px;
  width: 100%;
  height: 42px;
  border-radius: 4px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1));
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 5fr;
  background-color: ${p => (
    p.theme.theme === 'dark' ? p.colors.dark : p.colors.light
  )};
  transition: background-color 0.25s ;
`
const IconContainer = styled.div`
  svg {
    display: block;
    margin: auto;
  }
`
const Label = styled.span`
  text-align: center;
  font-size: 16px;
  padding-right: 16%;
`


export interface SocialAuthProps {
  icon: React.ReactNode,
  label: string,
  colors: {
    dark: string,
    light: string
  },
  authSocialMedia: () => void;
 
}
 
const SocialAuthButton: React.FC<SocialAuthProps> = ({icon, label, colors, authSocialMedia}) => {
  return (
    <Container colors={colors} onClick={authSocialMedia}>
      <IconContainer>
        {icon}
      </IconContainer>
      <Label>{label}</Label>
    </Container>
  );
}
 
export default SocialAuthButton;

import styled from 'styled-components'

export const ContainerBase = styled.div`
display: flex;
flex-direction: column;
color: ${p => p.theme.fontContrastFour};
width: 100%;
max-width: 484px;
margin: 0 auto;
`

export const Title = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 26px;
  margin-bottom: 24px;
`
export const Subitle = styled.span`
  width: 100%;
  text-align: center;
  font-size: 16px;
`


export const ButtonContainer = styled.div`
  display: flex;
`

export const SocialAuthButtonsContainer = styled.div`
  margin-bottom: 8px;
  @media screen and (min-width: 536px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
`

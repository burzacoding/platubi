import styled from 'styled-components'

interface ButtonProps {
  colorObj: {
    dark: string,
    light: string
  }
}

export const Form = styled.form`

`

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 42px 1fr;
  align-items: center;
  gap: 4px;
  margin-top: 36px;
`

export const ButtonBack = styled.div<ButtonProps>`
  height: 100%;
  width: 100%;
  border: ${p => p.theme.theme === 'dark' ? `2px solid ${p.colorObj.dark}` : `2px solid ${p.colorObj.light}`};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Message = styled.div`
  width: 100%;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #800000;
  background-color: #a8020218;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -20px;
`

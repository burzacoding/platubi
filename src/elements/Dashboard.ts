import styled from 'styled-components'

const Frame = styled.div`
  width: 100%;
  padding: 12px;
  padding-top: 68px;
  display: grid;
  grid-template-columns: 1fr;
  color: ${p => p.theme.fontContrastFive};
  position: relative;

  @media screen and (min-width: 768px) {
    padding-top: 102px;
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 126px;
    grid-template-columns: 1fr;
  }
`

export { Frame }

import styled from 'styled-components'

const Frame = styled.div`
  width: 100%;
  padding: 16px;
  padding-top: 52px;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    padding-top: 78px;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 94px;
  }
`

export { Frame }

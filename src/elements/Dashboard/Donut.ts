import styled from 'styled-components'

const Container = styled.div`
  display: none;
  position: relative;
  height: 100%;
  aspect-ratio: 1/1;
  margin: auto;
  @media screen and (min-width: 1140px) {
    display: block;
  }
`
export { Container }

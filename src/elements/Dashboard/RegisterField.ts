import styled from 'styled-components'

const FieldContainer = styled.div`
  width: 100%;
  height: 40px;
  background-image: ${p => p.theme.horizontalBarBG};
  border-radius: 8px;
  margin-bottom: 8px;
  position: relative;
  padding: 2px;

  @media screen and (min-width: 360px) {
    height: 48px;
  }
`
const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${p => p.theme.registerBackground};
  border-radius: 6px;
`

export {FieldContainer, InnerContainer}

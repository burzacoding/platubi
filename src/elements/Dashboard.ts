import styled from 'styled-components'

interface FrameProps {
  withAds: string
}

const isTrue = (condition: string) => condition === 'true' ? true : false

const Frame = styled.div<FrameProps>`
  width: 100%;
  padding: 12px;
  padding-top: 68px;
  padding-bottom: 78px;
  display: grid;  
  grid-template-columns: 1fr;
  grid-template-rows: ${p => isTrue(p.withAds) ? '239px auto 72px 226px auto' : '239px auto 226px auto'} ;
  gap: 24px;
  color: ${p => p.theme.fontContrastFive};
  position: relative;

  @media screen and (min-width: 768px) {
    padding-top: 102px;
    padding-bottom: 12px;
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 126px;
    grid-template-columns: 1fr;
  }
`

export { Frame }

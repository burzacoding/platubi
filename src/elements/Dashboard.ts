import styled from 'styled-components'

interface FrameProps {
  withAds: string
}

const isTrue = (condition: string) => condition === 'true' ? true : false

const Container = styled.div`
  @media screen and (min-width: 1366px) {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 106px 1fr;
    grid-template-areas: 'ln dashboard';
  };
`

export const BackToDashboard = styled.h2`
  cursor: pointer;
  text-align: center;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`

const Frame = styled.div<FrameProps>`
  grid-area: dashboard;
  width: 100%;
  padding: 12px;
  padding-top: 68px;
  padding-bottom: 78px;
  display: grid;  
  grid-template-columns: 1fr;
  grid-template-rows: ${p => isTrue(p.withAds) ? '239px auto 72px 226px auto' : '239px auto 226px auto'} ;
  grid-template-areas: 'wv' 'registers' 'wts' 'ts';
  gap: 24px;
  color: ${p => p.theme.fontContrastFive};
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 32px;
    padding-top: 102px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: ${p => isTrue(p.withAds) ? '236px 72px auto auto' : '236px auto auto'} ;
    grid-template-areas: 'wv wts' 'registers registers' 'ts ts';
  }
  @media screen and (min-width: 1024px) {
    padding-top: 126px;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1366px) {
    padding: 36px;
    padding-top: 126px;
    grid-template-rows: ${p => isTrue(p.withAds) ? '256px 72px auto' : '256px auto'} ;
    grid-template-columns: 7fr 9fr 3fr;
    grid-template-areas: 'wv wts ts' 'registers registers ts';
  }
  @media screen and (min-width: 1540px) {
    grid-template-rows: 280px auto;
  }
`

export { Container,Frame }

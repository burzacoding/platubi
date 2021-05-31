import styled from 'styled-components'

export const MainContent = styled.div`
  background-color: ${p => p.theme.divBackground};
  transition: background-color 0.25s;
  width: 100%;
  max-width: 1440px;
  margin: 36px auto;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (min-width: 668px) {
    padding: 48px 24px;
  };
  @media screen and (min-width: 1368px) {
    padding: 96px 128px;
  };

`
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px 0;
  grid-column: span 3;

  @media screen and (min-width: 768px) {
    grid-column: span 1;
    margin: 0;
  };
`

export const ImgCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  img {
    width: 50px;
  }
  @media screen and (min-width: 668px) {
    width: 70px;
    height: 70px;
    
    img {
      width: 60px;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 90px;
    height: 90px;
    
    img {
      width: 70px;
    }
  }
`

export const Text = styled.span`
  color: ${p => p.theme.fontContrastTwo};
  margin-top: 20px;
  display: block;
  text-align: center;
  height: 100px;
  width: 200px;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  @media screen and (min-width: 668px) {
  font-size: 16px;
  margin-top: 24px;
  }
  @media screen and (min-width: 1368px) {
  font-size: 20px;
  width: 320px;
  margin-top: 32px;
  }
`

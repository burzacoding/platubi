import styled from 'styled-components'

const MainContainer = styled.div`
position: relative;
  grid-area: wv;
  width: 100%;
  max-width: 452px;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${p => p.theme.fontContrastSix};

  @media screen and (min-width: 768px) {
    margin: 0;
    max-width: 100%;
    margin-right: auto;
  };
  @media screen and (min-width: 1366px) {
    height: 100%;
  };
 `
const SmallContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 96px 96px;
  gap: 8px;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1366px) {
    grid-template-rows: 1fr 1fr;
    font-size: 32px;
  }
`
const MainTitle = styled.p `
  font-size: 24px;
  margin-bottom: 8px;
`
const Card = styled.div`
  display:flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: 6px 0;
  background-color: ${p => p.theme.divDarkerBackground};
  transition: background-color 0.25s;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  font-size: 16px;
  @media screen and (min-width: 360px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1366px) {
    font-size: 22px;
  }
`
const BigCard = styled(Card)`
  grid-column-start: span 2;
  padding: 6px 0;
`
const Title = styled.h3`
  background-image: linear-gradient(to right, #1269B4, #3BBC76);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  margin-bottom: 8px;
  font-size: 0.75em;
  font-weight: 500;
  font-size: 1em;
`
const BigTitle = styled(Title)`
  font-size: 1.1em;
`

const Budget = styled.p`
  position: relative;
  font-family: 'Mandali', sans-serif;
  @media screen and (min-width: 768px) {
    height: 32px;
    top: -4px;
  }
  @media screen and (min-width: 1366px) {
    height: 36px;
    top: -12px;
  }
`
export {
  MainContainer,
  MainTitle,
  Card,
  BigCard,
  SmallContainer,
  Title,
  BigTitle,
  Budget,
}

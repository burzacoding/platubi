import styled from 'styled-components'

const MainContainer = styled.div`
  grid-area: wv;
  width: 100%;
  max-width: 452px;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;

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
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1366px) {
    font-size: 32px;
  }
`
const MainTitle = styled.p `
  font-size: 24px;
  margin-bottom: 16px;
`
const Card = styled.div`
  display:flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: 6px 0 12px 0;
  background-color: ${p => p.theme.divDarkerBackground};
  transition: background-color 0.25s;
  border-radius: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }
`
const BigCard = styled(Card)`
  grid-column-start: span 2;
`
const Title = styled.h3`
  background-image: linear-gradient(to right, #1269B4, #3BBC76);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  margin-bottom: 8px;
  font-size: 1.1em;
  font-weight: 500;
  @media screen and (min-width: 1366px) {
    font-size: 1em;
    height: 36px;
  }
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
  Budget,
}

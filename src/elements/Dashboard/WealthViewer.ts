import styled from 'styled-components'

const MainContainer = styled.div`
  width: 100%;
  max-width: 452px;
  display: flex;
  flex-direction: column;
  text-align: center;
 `
const SmallContainer = styled.div`
  display: flex;
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
`
const BigCard = styled(Card)`
  margin-bottom: 8px;
`
const Filler = styled.div`
  width: 8px;
  min-width: 8px;
`
const Title = styled.h3`
  background-image: linear-gradient(to right, #1269B4, #3BBC76);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  margin-bottom: 8px;
  font-size: 22px;
  font-weight: 500;
`
const Budget = styled.p `
  font-size: 20px;
`
export {
  MainContainer,
  MainTitle,
  Card,
  BigCard,
  Filler,
  SmallContainer,
  Title,
  Budget,
}

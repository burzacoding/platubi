import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-left: auto;
  height: 100%;
  position: relative;
  @media screen and (min-width: 1366px) {
    height: min-content;
    margin: auto 0 auto auto;
  };
`
interface CardInterface {
  cardColor: string
}

const Card = styled.div<CardInterface>`
  width: 100%;
  height: 46px;
  background-color: ${p => p.cardColor};
  display: grid;
  grid-template-columns: 10fr 1fr 3fr;
  align-items: center;
  padding: 0 14px;
  font-size: 16px;
  color: #EAEAEA;
  border-radius: 8px;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1366px) {
    font-size: 20px;
    grid-template-columns: 1fr 4fr 1fr 1fr;
  };
`
const Symbol = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  width: 100%;
  display: block;

`
const Numbers = styled.span`
  font-family: 'Mandali', sans-serif;
  display: block;
  width: 100%;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
  padding-right: 8px;
  &:last-child {
    padding-right: 0;
  }
`
const SymbolsName = styled(Symbol)`
  padding-left: 12px;
  display: none;
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  @media screen and (min-width: 1366px) {
   display: block;
   width: 100%;
  };
  @media screen and (min-width: 1480px) {
    font-size: 16px;
  };
`

export { Container, Card, Symbol, Numbers, SymbolsName }

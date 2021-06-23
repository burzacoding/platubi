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
  display: flex;
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
  };
`
const Symbol = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  line-height: 20px;
  margin-right: auto;
`
const Numbers = styled.span`
  font-family: 'Mandali', sans-serif;
  line-height: 24px;
  text-align: right;
  margin-right: 24px;
`
const SVGContainer = styled.div`
  width: 28px;
  user-select: none;
  svg {
    fill: #EAEAEA
  }
`
export { Container, Card, Symbol, Numbers, SVGContainer }

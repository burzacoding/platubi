import styled from 'styled-components'

const Container = styled.div`
  grid-area: ts;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }
  @media screen and (min-width: 1042px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 8px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-wrap: nowrap;
  }
  @media screen and (min-width: 1626px) {
    display: flex;
    flex-direction: column;
  }
`

const Card = styled.div`
  width: 100%;
  height: 112px;
  border-radius: 8px;
  padding: 16px 0;
  font-size: 16px;
  background-color: ${p => p.theme.divDarkerBackground};
  transition: background-color 0.25s;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: #2CA95E; //Bearish stock: #B64B4B
  @media screen and (min-width: 768px) {
    max-width: 316px;
  }
`
const Title = styled.h2`
  margin-top: 16px;
  font-size: 1em;
  font-weight: 500;
  @media screen and (min-width: 420px) {
    font-size: 1.25em;
    margin-top: 0;
  }
`
const Body = styled.span`
  font-size: 1em;
  font-weight: 400;
  font-family: 'Mandali', sans-serif;
  line-height: 24px;
  opacity: 0.8;
  @media screen and (min-width: 484px) {
    font-size: 1.25em;
  }
`

export { Container, Card, Title, Body }

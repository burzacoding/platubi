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
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-wrap: nowrap;
  }
  @media screen and (min-width: 1366px) {
    display: flex;
    flex-direction: column;
  }
`

interface CardProps {
  isNegative: string
}

const Card = styled.div<CardProps>`
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
  color:${p => p.isNegative === 'true' ? '#B64B4B' : '#2CA95E'};
  @media screen and (min-width: 768px) {
    max-width: 316px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 286px;
    font-size: 14px;
  }
  @media screen and (min-width: 1366px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1626px) {
    max-width: 100%;
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

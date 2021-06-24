import styled from "styled-components";
import { Title, Body } from "../../elements/Dashboard/TrackedStocks";

export interface TooltipsProps {
  label: string,
  percentage: number,
  symbol?: string,
  value: number
}
 
const Container = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  width: 236px;
  height: 236px;
  top: 0;
  left: 0;
  @media screen and (min-width: 1140px) {
   display: flex;
  };
  @media screen and (min-width: 1366px) {
    width: 274px;
    height: 274px;
  };
`

const Tooltips: React.FC<TooltipsProps> = ({label, percentage, symbol = '', value}) => {
  return (
    <Container>
      <Title>{label}</Title>
      <Body>{`${symbol}${value}`}</Body>
      <Body>{percentage}%</Body>
    </Container>
  );
}
 
export default Tooltips;

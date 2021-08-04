import styled from "styled-components";
import { Title, Body } from "../../elements/Dashboard/TrackedStocks";
import { useDonutStore } from "../../zustand/stores/Donut";
import { TooltipsPropsWithIndex } from "./Donut";

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

const Tooltips: React.FC = () => {

  const tooltipData = useDonutStore(state => state.tooltipData)

  const { label, symbol, value, percentage } = tooltipData as TooltipsPropsWithIndex

  return (
    <Container>
      <Title>{label}</Title>
      <Body>{`${symbol}${value}`}</Body>
      <Body>{percentage}%</Body>
    </Container>
  );
}
 
export default Tooltips;

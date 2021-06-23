import styled from "styled-components";
import { Title, Body } from "../../elements/Dashboard/TrackedStocks";

export interface TooltipsProps {
  
}
 
const Container = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const Tooltips: React.FC<TooltipsProps> = () => {
  return (
    <Container>
      <Title>ARS</Title>
      <Body>$25000</Body>
      <Body>75%</Body>
    </Container>
  );
}
 
export default Tooltips;

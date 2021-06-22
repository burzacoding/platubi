import styled from "styled-components";
import { Title, Body } from "../../elements/Dashboard/TrackedStocks";

export interface TooltipsProps {
  
}
 
const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
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

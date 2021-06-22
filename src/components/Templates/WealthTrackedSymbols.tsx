import styled from 'styled-components'
import CompositionCards from '../molecules/CompositionCards';
import Donut from '../molecules/Donut';
export interface WealthTrackedSymbolsProps {
  
}

const Container = styled.div`
  grid-area: wts;
  width: 100%;
  min-width: 296px;
  height: 100%;
  display: flex;
  border-radius: 8px;
  user-select: none;
`


const WealthTrackedSymbols: React.FC<WealthTrackedSymbolsProps> = () => {
  return (
    <Container>
      <Donut />
      <CompositionCards />
    </Container>
  );
}
 
export default WealthTrackedSymbols;

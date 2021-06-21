import styled from 'styled-components'
export interface WealthTrackedSymbolsProps {
  
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${p => p.theme.divDarkerBackground};
  transition: background-color 0.25s;
`

const WealthTrackedSymbols: React.FC<WealthTrackedSymbolsProps> = () => {
  return (
    <Container />
  );
}
 
export default WealthTrackedSymbols;

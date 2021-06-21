import styled from "styled-components";

export interface OperationSymbolProps {
  operation: string
}

const OperationContainer = styled('div')<OperationSymbolProps>`
  height: 100%;
  width: 100%;
  padding-top: 2px;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  svg {
    fill: ${p => p.operation === 'true' ? '#20a05c' : '#3480C1'};
  }
  @media screen and (min-width: 360px) {
  padding-top: 4px;
  };
`
const OperationSymbol: React.FC<OperationSymbolProps> = ({operation}) => {
  const checkOperation = () => {
    return operation === 'add' ? 'true' : 'false'
  }
  return (
    <OperationContainer operation={checkOperation()} >
      <svg width="100%" height="100%" viewBox={operation === 'add' ? "0 0 28 28" : "0 0 28 4"} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={operation === 'add' ? "M10 10H0V14H10V24H14V14H24V10H14V0H10V10Z" : "M24 0H0V4H24V0Z"} />
      </svg>
    </OperationContainer>
  );
}
 
export default OperationSymbol;

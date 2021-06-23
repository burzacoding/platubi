import styled from "styled-components";
import { FieldContainer, InnerContainer } from "../../elements/Dashboard/RegisterField"

export interface RegisterFieldEmmptyProps {
  
}

const Empty = styled.div`
  margin: auto;
  opacity: 0.7;
`
 
const RegisterFieldEmmpty: React.FC<RegisterFieldEmmptyProps> = () => {
  return (
    <FieldContainer>
      <InnerContainer>
        <Empty>VACIO</Empty>
      </InnerContainer>
    </FieldContainer>
  );
}
 
export default RegisterFieldEmmpty;

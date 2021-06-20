import { registerSchemaTypesWithId } from "../../contexts/DashboardContext";
import { FieldContainer, InnerContainer } from "../../elements/Dashboard/RegisterField";

export interface RegisterFieldProps {
  obj: registerSchemaTypesWithId
}
 
const RegisterField: React.FC<RegisterFieldProps> = ({obj}) => {
  const { operation, symbol, value, createdAt} = obj
  return (
    <FieldContainer>
      <InnerContainer>
        <span>{`${operation} ${symbol} ${value} ${createdAt}`}</span>
      </InnerContainer>
    </FieldContainer>
  );
}
 
export default RegisterField;

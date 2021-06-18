import { registerSchemaTypesWithId } from "../../contexts/DashboardContext";

export interface RegisterFieldProps {
  obj: registerSchemaTypesWithId
}
 
const RegisterField: React.FC<RegisterFieldProps> = ({obj}) => {
  const { operation, symbol, value, key} = obj
  return (
    <div className="">
      <span>{`${operation} ${symbol} ${value} ${key}`}</span>
    </div>
  );
}
 
export default RegisterField;

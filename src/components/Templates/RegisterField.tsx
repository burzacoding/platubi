import { registerSchemaTypes } from "../../contexts/DashboardContext";

export interface RegisterFieldProps {
  obj: registerSchemaTypes
}
 
const RegisterField: React.FC<RegisterFieldProps> = ({obj}) => {
  const { operation, symbol, value} = obj
  return (
    <div className="">
      <span>{`${operation} ${symbol} ${value}`}</span>
    </div>
  );
}
 
export default RegisterField;

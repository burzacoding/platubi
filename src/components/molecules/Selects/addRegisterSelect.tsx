import styled, { useTheme } from "styled-components";
import Select from 'react-select'

export interface AddRegisterSelectProps {
  
}
 
const AddRegisterSelect: React.FC<AddRegisterSelectProps> = () => {

  const theme = useTheme()

  return (
    <Select />
  );
}
 
export default AddRegisterSelect;

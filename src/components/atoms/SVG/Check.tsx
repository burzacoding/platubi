import styled from 'styled-components'
import { ThemeColorPicker } from '../../../Utils/Utils';

const CheckSvg = styled.svg`
  position: absolute;
  left: 0px;
  stroke: ${p => ThemeColorPicker(p, '#096635', '#1269B4')};
  cursor: pointer;
`

export interface CheckProps {
  
}


 
const Check: React.SFC<CheckProps> = () => {
  return (
  <CheckSvg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 11.6333L11.7143 19L26 2" strokeWidth="4"/>
  </CheckSvg>
  );
}
 
export default Check;

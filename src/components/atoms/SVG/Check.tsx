import styled from 'styled-components'
import { ThemeColorPicker } from '../../../Utils/Utils';

const CheckSvg = styled.svg`
  position: absolute;
  left: 0px;
  stop-color: ${p => ThemeColorPicker(p, '#096635', '#1269B4')};
  cursor: pointer;
`

export interface CheckProps {
  
}


 
const Check: React.SFC<CheckProps> = () => {
  return (
  <CheckSvg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 11.6333L11.7143 19L26 2" stroke="url(#paint0_linear-555107)" stroke-width="4"/>
    <defs>
    <linearGradient id="paint0_linear-555107" x1="1.13043" y1="10" x2="26.8696" y2="10" gradientUnits="userSpaceOnUse">
    <stop stopColor="#1B73BE"/>
    <stop offset="1" stopColor="#0DCA4F"/>
    </linearGradient>
    </defs>
  </CheckSvg>
  );
}
 
export default Check;

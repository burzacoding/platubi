import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SVGCont = styled(Link)`
margin: 0 16px;
  svg {
    fill: ${p => p.theme.fontContrastFive};
    opacity: 0.7;
    &:hover {
    opacity: 1;
    }
  }
`

const SmallLogo: React.FC = () => {
  return (
    <SVGCont to="/">
      <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10.4902C0 5.78667 3.70824 1.96016 8.49784 1.96016V0L14.3401 2.82533L8.49784 5.65066V3.85272C4.77259 3.85272 1.92719 6.8319 1.92719 10.4902V27.5233C1.92719 31.1816 4.9471 34.1473 8.67235 34.1473L18.6452 34.1338V36.0263L8.67235 36.0398C3.88274 36.0398 0 32.2269 0 27.5233V10.4902Z"/>
        <path d="M34 27.5098C34 32.2133 30.2917 36.0263 25.5021 36.0263V38L20.1909 35.1747L25.5021 32.0925V34.1338C29.2273 34.1338 32.0728 31.1681 32.0728 27.5098V10.4767C32.0728 6.81838 29.0528 3.85272 25.3276 3.85272H15.9032V1.96016H25.3276C30.1172 1.96016 34 5.77314 34 10.4767V27.5098Z" />
        <path d="M9.48828 28.6403V10.6403H17.9537C19.3695 10.6403 20.5913 10.873 21.6192 11.3385C22.8022 11.873 23.7428 12.6403 24.441 13.6403C25.1392 14.623 25.4883 15.7092 25.4883 16.8989C25.4883 18.0885 25.1392 19.1834 24.441 20.1834C23.7622 21.1834 22.8313 21.9506 21.6483 22.4851C20.6398 22.9506 19.4083 23.1834 17.9537 23.1834H14.7828V28.6403H9.48828Z"/>
      </svg>
    </SVGCont>
  );
}
 
export default SmallLogo;
import styled from 'styled-components'

export interface SeparadorProps {
  position: "bottom" | "top",
  keyID: string
}
interface SeparadorContProps {
  position: "bottom" | "top"
}


const SeparadorContainer = styled.div<SeparadorContProps>`
  width: 100%;
  max-height: 90px;
  position: absolute;
  top: ${p => p.position === 'top' ? '0' : 'auto'};
  bottom: ${p => p.position === 'top' ? 'auto' : '0'};
  transform-origin: center;
  transform: ${p => p.position === 'top' ? 'translateY(-50%)' : 'translateY(50%)'};
  z-index: 10;
`
 
const Separador: React.FC<SeparadorProps> = ({position, keyID}) => {
  return (
    <SeparadorContainer position={position}>
      <svg width="100%" height="100%" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M60 103.741L0 111.33V8.66976L60 5.63387C120 2.59797 240 -3.4738 360 2.59798C480 8.66976 600 26.8851 720 37.5107C840 48.1363 960 51.1722 1080 45.1004C1200 39.0287 1320 23.8492 1380 16.2595L1440 8.66976V111.33L1380 114.366C1320 117.402 1200 123.474 1080 117.402C960 111.33 840 93.1149 720 82.4893C600 71.8637 480 68.8278 360 74.8996C240 80.9713 120 96.1508 60 103.741Z" fill={`url(#paint0${keyID}_linear)`}/>
        <defs>
        <linearGradient id={`paint0${keyID}_linear`} x1="-52.1739" y1="56.4706" x2="1492.17" y2="56.4706" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0DCA4F"/>
        <stop offset="1" stopColor="#3480C1"/>
        </linearGradient>
        </defs>
      </svg>
    </SeparadorContainer>
  );
}
 
export default Separador;

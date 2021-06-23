import styled from 'styled-components'
import TextSvg from './TextSvg'
import { ToLeftVariants, ToRightVariants } from '../../Animations/variants';

export interface MyVectorProps {
  keyID: string,
  bottom?: boolean
}
 
const SvgVector = styled.svg`
    fill: ${p => p.theme.divDarkerBackground};
    transition: fill 0.25s;
`

const MyVector: React.FC<MyVectorProps> = ({keyID, bottom}) => {
    return (
      <>
      {
      bottom ? (<>
        <SvgVector width="100%" height="100%" viewBox="0 0 668 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" >
        <g filter="url(#filter0_i-360392)">
        <path d="M348.352 1.41928C537.205 8.11557 668 8.5017 668 8.5017L668 120L-1.50522e-05 120L-1.0664e-06 8.50168C-1.0664e-06 8.50168 191.061 -4.15788 348.352 1.41928Z"/>
        </g>
        <defs>
        <filter id="filter0_i-360392" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </SvgVector>
        <TextSvg keyID={`first${keyID}bottom`} variants={ToRightVariants} initial="hidden" animate="visible" custom={0} />
        <TextSvg keyID={`second${keyID}bottom`} variants={ToRightVariants} initial="hidden" animate="visible" custom={1} />
        </>
      )
      :
      (
        <>
        <SvgVector width="100%" height="100%" viewBox="0 0 668 140" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" >
              <g id="Vector" filter="url(#myvec)">
              <path d="M365.306 133.519C510.587 148.101 668 133.519 668 133.519L668 -0.000137329L-1.75609e-05 -0.000124707L-8.1295e-07 133.519C-8.1295e-07 133.519 208.291 117.759 365.306 133.519Z" />
              </g>
              <defs>
                <filter id="myvec" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="-4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                </filter>
              </defs>
        </SvgVector>
        <TextSvg keyID={`first${keyID}`} variants={ToLeftVariants} initial="hidden" animate="visible" custom={0} />
        <TextSvg keyID={`second${keyID}`} variants={ToLeftVariants} initial="hidden" animate="visible" custom={1} />
        </>
      )
      }
      </>
    );
}
 
export default MyVector;

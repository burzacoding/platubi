import styled from 'styled-components'

const Svgcont = styled.div`
position: relative;
    width: 100%;
    height: 140px;
    clip-path: url('#mypath');

    svg clipPath {
        transform: scale(0.0015, 0.00685);
    }
` 

export interface ClipDivProps {
    
}
 
const ClipDiv: React.FC<ClipDivProps> = () => {
    return (
        <Svgcont>
            <svg viewBox="0 0 668 140" width="100%" height="100%" preserveAspectRatio="none" clipPathUnits="objectBoundingBox">
                <clipPath id="mypath" clipPathUnits="objectBoundingBox" >
                    <path  d="M365.306 133.519C510.587 148.101 668 133.519 668 133.519L668 -0.000137329L-1.75609e-05 -0.000124707L-8.1295e-07 133.519C-8.1295e-07 133.519 208.291 117.759 365.306 133.519Z"  />          
                </clipPath>
            </svg>
        </Svgcont>
    );
}
 
export default ClipDiv;

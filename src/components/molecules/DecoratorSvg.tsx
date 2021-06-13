import MyVector from './MyVector'
import { Container } from '../../elements/DecoratorSvg'
export interface DecoratorSvgProps {
  keyID: string,
  position: 'top' | 'bottom'
}

const DecoratorSvg: React.FC<DecoratorSvgProps> = ({keyID, position}) => {
    return (
        <>
            {
              position === 'top' ? (
              <Container>
                <MyVector keyID={keyID} />
                <svg viewBox="0 0 668 140" width="100%" height="100%" preserveAspectRatio="none" clipPathUnits="objectBoundingBox">
                    <clipPath id="toppath" clipPathUnits="objectBoundingBox" >
                        <path  d="M365.306 133.519C510.587 148.101 668 133.519 668 133.519L668 -0.000137329L-1.75609e-05 -0.000124707L-8.1295e-07 133.519C-8.1295e-07 133.519 208.291 117.759 365.306 133.519Z"  />          
                    </clipPath>
                </svg>
              </Container>
              )
              :
              (
                <Container bottom>
                  <MyVector keyID={keyID} bottom />
                  <svg viewBox="0 0 668 120" width="100%" height="100%" preserveAspectRatio="none" clipPathUnits="objectBoundingBox">
                      <clipPath id="bottompath" clipPathUnits="objectBoundingBox" >
                          <path  d="M348.352 1.41928C537.205 8.11557 668 8.5017 668 8.5017L668 120L-1.50522e-05 120L-1.0664e-06 8.50168C-1.0664e-06 8.50168 191.061 -4.15788 348.352 1.41928Z"  />          
                      </clipPath>
                  </svg>
                </Container>
                )
            }
        </>
    );
}
 
export default DecoratorSvg;

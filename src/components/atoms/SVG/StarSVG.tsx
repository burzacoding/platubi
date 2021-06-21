import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ThemeColorPicker } from '../../../Utils/Utils'

export interface StarSVGProps {
  isFavorite: boolean
}
interface StarContainerInterface {
  isFavorite: string
}

const StarContainer = styled('div')<StarContainerInterface>`
height: 100%;
width: 100%;
-webkit-tap-highlight-color: rgba(0,0,0,0);
svg {
  display: flex;
  margin: auto;
  fill: ${p => p.isFavorite === 'true' ? ThemeColorPicker(p, '#FFD43E', '#d1aa1e') : 'none'};
  stroke: ${p => p.isFavorite !== 'true' ? p.theme.fontContrastFive : ThemeColorPicker(p, '#FFD43E', '#d1aa1e')};
}
`
const StarSVG: React.FC<StarSVGProps> = ({isFavorite}) => {
  const checkIsFavorite = () => {
    return isFavorite ? 'true' : 'false'
  }
  return (
    <StarContainer isFavorite={checkIsFavorite()}>
      <motion.svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }}>
      <path d="M14.3338 8.98791L14.5039 9.35023L14.8995 9.41066L20.1939 10.2194L16.3382 14.1713L16.0739 14.4423L16.1348 14.8158L17.0367 20.3465L12.3628 17.7629L12 17.5623L11.6372 17.7629L6.96329 20.3465L7.86522 14.8158L7.92614 14.4423L7.66183 14.1713L3.80613 10.2194L9.1005 9.41066L9.49615 9.35023L9.66619 8.98791L12 4.01527L14.3338 8.98791Z" strokeWidth="1.5"/>
      </motion.svg>
    </StarContainer>
  );
}
 
export default StarSVG;

import styled from 'styled-components'
import { motion } from 'framer-motion'


export const TextSvgComp = styled(motion.svg)`
opacity: ${p => p.theme.theme === 'dark' ? '0.2' : '0.35'};
position: absolute;
top: 0;
left: 0;
`

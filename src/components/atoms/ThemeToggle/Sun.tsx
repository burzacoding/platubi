import { Variants, motion } from "framer-motion";

export interface SunProps {
  variants: Variants,
  keyID: string
}
 
const Sun: React.FC<SunProps> = ({variants, keyID}) => {
  return (
    <motion.svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
    variants={variants}
    initial="hiddenSVG"
    animate="visibleSVG"
    exit="exitSVG"
    >
      <g id="sun">
        <motion.path id="eclipse" d="M23.5 16C23.5 20.1421 20.1421 23.5 16 23.5C11.8579 23.5 8.5 20.1421 8.5 16C8.5 11.8579 11.8579 8.5 16 8.5C20.1421 8.5 23.5 11.8579 23.5 16Z" stroke={`url(#sun_${keyID})`} strokeWidth="3"
        variants={variants}
        initial="hiddenPath"
        animate="visiblePath"
        />
        <g id="outer">
          <motion.path d="M14.6667 4V1.33333C14.6667 0.596954 15.2636 0 16 0C16.7364 0 17.3333 0.596954 17.3333 1.33333V4C17.3333 4.73638 16.7364 5.33333 16 5.33333C15.2636 5.33333 14.6667 4.73638 14.6667 4Z" fill={`url(#sun1_${keyID})`}
          variants={variants}
          initial="hiddenFill"
          animate="visibleFill"/>
          <motion.path d="M5.93954 7.82517L4.05392 5.93955C3.53322 5.41886 3.53322 4.57463 4.05392 4.05394C4.57462 3.53324 5.41884 3.53324 5.93954 4.05394L7.82516 5.93955C8.34586 6.46025 8.34586 7.30447 7.82516 7.82517C7.30446 8.34587 6.46024 8.34587 5.93954 7.82517Z" fill={`url(#sun2_${keyID})`}
          variants={variants}
          initial="hiddenFill"
          animate="visibleFill"/>
          <motion.path d="M4 17.3333H1.33333C0.596954 17.3333 3.21882e-08 16.7364 0 16C-3.21882e-08 15.2636 0.596954 14.6667 1.33333 14.6667H4C4.73638 14.6667 5.33333 15.2636 5.33333 16C5.33333 16.7364 4.73638 17.3333 4 17.3333Z" fill={`url(#sun3_${keyID})`}
          variants={variants}
          initial="hiddenFill"
          animate="visibleFill"/>
          <motion.path d="M7.82517 25.9395L5.93955 27.8251C5.41886 28.3458 4.57464 28.3458 4.05394 27.8251C3.53324 27.3045 3.53324 26.4602 4.05394 25.9395L5.93955 24.0539C6.46025 23.5332 7.30447 23.5332 7.82517 24.0539C8.34587 24.5746 8.34587 25.4188 7.82517 25.9395Z" fill={`url(#sun4_${keyID})`}
          variants={variants}
          initial="hiddenFill"
          animate="visibleFill"/>
          <motion.path d="M17.3333 28V30.6667C17.3333 31.403 16.7364 32 16 32C15.2636 32 14.6667 31.403 14.6667 30.6667V28C14.6667 27.2636 15.2636 26.6667 16 26.6667C16.7364 26.6667 17.3333 27.2636 17.3333 28Z" fill={`url(#sun5_${keyID})`}
          variants={variants}
          initial="hiddenFill"
          animate="visibleFill" />
          <motion.path d="M26.384 24.4983L28.2696 26.384C28.7903 26.9047 28.7903 27.7489 28.2696 28.2696C27.7489 28.7903 26.9047 28.7903 26.384 28.2696L24.4984 26.384C23.9777 25.8633 23.9777 25.019 24.4984 24.4983C25.0191 23.9776 25.8633 23.9776 26.384 24.4983Z" fill={`url(#sun6_${keyID})`}
          variants={variants}
          initial="hiddenFill"
          animate="visibleFill" />
          <motion.path d="M28 14.6667H30.6667C31.403 14.6667 32 15.2636 32 16C32 16.7364 31.403 17.3333 30.6667 17.3333H28C27.2636 17.3333 26.6667 16.7364 26.6667 16C26.6667 15.2636 27.2636 14.6667 28 14.6667Z" fill={`url(#sun7_${keyID})`}
          variants={variants}
          initial="hiddenFill"
          animate="visibleFill"/>
          <motion.path d="M24.054 5.93954L25.9396 4.05392C26.4603 3.53322 27.3045 3.53322 27.8252 4.05392C28.3459 4.57462 28.3459 5.41884 27.8252 5.93954L25.9396 7.82516C25.4189 8.34586 24.5747 8.34586 24.054 7.82516C23.5333 7.30446 23.5333 6.46024 24.054 5.93954Z" fill={`url(#sun8_${keyID})`}
          variants={variants}
          initial="hiddenFill"
          animate="visibleFill"/>
        </g>
      </g>
      <defs>
        <linearGradient id={`sun_${keyID}`}
        x1="6.34783" y1="15.4706" x2="25.6522" y2="15.4706" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3480C1"/>
        <stop offset="1" stopColor="#0DCA4F"/>
        </linearGradient>
        <linearGradient id={`sun1_${keyID}`}
        x1="-1.15942" y1="15.0588" x2="33.1594" y2="15.0588" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3480C1"/>
        <stop offset="1" stopColor="#0DCA4F"/>
        </linearGradient>
        <linearGradient id={`sun2_${keyID}`}
        x1="-1.15942" y1="15.0588" x2="33.1594" y2="15.0588" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3480C1"/>
        <stop offset="1" stopColor="#0DCA4F"/>
        </linearGradient>
        <linearGradient id={`sun3_${keyID}`}
        x1="-1.15942" y1="15.0588" x2="33.1594" y2="15.0588" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3480C1"/>
        <stop offset="1" stopColor="#0DCA4F"/>
        </linearGradient>
        <linearGradient id={`sun4_${keyID}`}
        x1="-1.15942" y1="15.0588" x2="33.1594" y2="15.0588" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3480C1"/>
        <stop offset="1" stopColor="#0DCA4F"/>
        </linearGradient>
        <linearGradient id={`sun5_${keyID}`}
        x1="-1.15942" y1="15.0588" x2="33.1594" y2="15.0588" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3480C1"/>
        <stop offset="1" stopColor="#0DCA4F"/>
        </linearGradient>
        <linearGradient id={`sun6_${keyID}`}
        x1="-1.15942" y1="15.0588" x2="33.1594" y2="15.0588" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3480C1"/>
        <stop offset="1" stopColor="#0DCA4F"/>
        </linearGradient>
        <linearGradient id={`sun7_${keyID}`}
        x1="-1.15942" y1="15.0588" x2="33.1594" y2="15.0588" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3480C1"/>
        <stop offset="1" stopColor="#0DCA4F"/>
        </linearGradient>
        <linearGradient id={`sun8_${keyID}`}
        x1="-1.15942" y1="15.0588" x2="33.1594" y2="15.0588" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3480C1"/>
        <stop offset="1" stopColor="#0DCA4F"/>
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
 
export default Sun;

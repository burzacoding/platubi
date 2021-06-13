import { Variants } from 'framer-motion'

export const themeToggleVariants: Variants = {
  hiddenSVG: {
    y: -30,
    opacity: 0
  },
  visibleSVG: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      type: 'spring',
      bounce: 0.55,
      duration: 0.6,
    }
  },
  exitSVG: {
    y: 30,
    opacity: 0,
    transition: {
        type: 'spring',
        duration: 0.75
    },
  },
  hiddenPath :{
    pathLength: 0,
  },
  visiblePath: {
    pathLength: 1,
    transition: {
      delay: 0.1,
      duration: 0.8,
      ease: "easeOut"
    }
  },
  hiddenFill : {
    fillOpacity: 0,
  },
  visibleFill : {
    fillOpacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.8,
    }
  }
}

export const decoRightUpVariants: Variants = {
  hidden: (custom) => ({
      y: 0 + 916 * custom,
  }),
  visible: (custom) => ({
      y: -916 + 916 * custom,
      transition: {
          duration: 96,
          type: 'tween',
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop'
      }
  }),}

export const ToLeftVariants: Variants = {
    hidden: (custom) => ({
        x: 0 + 998 * custom
    }),
    visible: (custom) => ({
        x: -998 + 998 * custom,
        transition: {
            duration: 196,
            type: 'tween',
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop'
        }
    }),
}

export const ToRightVariants: Variants = {
  hidden: (custom) => ({
      x: -998 + 998 * custom
  }),
  visible: (custom) => ({
      x: 0 + 998 * custom,
      transition: {
          duration: 196,
          type: 'tween',
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop'
      }
  }),
}

export const regIndexVariants: Variants = {
  hidden: (custom) => {
    return({
      x: 120 * custom,
      opacity: 0,
    })
  },
  visible: {
      x: 0,
      opacity: 1,
  },
  exit: (custom) => {
    return({
      x: -120 * custom,
      opacity: 0,
    })
  },

}

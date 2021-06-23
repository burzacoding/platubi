import Moon from './Moon'
import Sun from './Sun'
import { forwardRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ThemeImg, SVGContainer } from '../../../elements/ThemeToggle'
import { themeToggleVariants } from '../../../Animations/variants'

export interface ThemeToggleProps {
  setTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>,
  theme: 'dark' | 'light',
  mobileID?: string
}

const ThemeToggle = forwardRef<HTMLDivElement, ThemeToggleProps>(({ setTheme, theme, mobileID = '' }, ref) => {
  const [isClickable, setIsClickable] = useState(true)

  const changeTheme = () => {
    if (isClickable) {
      setIsClickable(false)
      setTheme(theme => theme === 'dark' ? 'light' : 'dark')
      setTimeout(() => {
      setIsClickable(true)
      }, 800)
    }
  }

  return (
    <>
    {mobileID ? (
    <ThemeImg onClick={changeTheme} ref={ref} mobile>
      <SVGContainer>
        <AnimatePresence initial={false}>
          {theme === 'dark'
          ?
          <Moon variants={themeToggleVariants} key="MoonDesktop" keyID={`MoonDesktop${mobileID}`} mobile  />
          :
          <Sun variants={themeToggleVariants} key="SunDesktop" keyID={`SunDesktop${mobileID}`} mobile />
          } 
        </AnimatePresence>
      </SVGContainer>
      {mobileID && (
        <span>Cambiar tema</span>
      )}
    </ThemeImg>
    )
    : (
    <ThemeImg onClick={changeTheme} ref={ref}>
      <AnimatePresence initial={false}>
        {theme === 'dark'
        ?
        <Moon variants={themeToggleVariants} key="MoonDesktop" keyID={`MoonDesktop${mobileID}`}  />
        :
        <Sun variants={themeToggleVariants} key="SunDesktop" keyID={`SunDesktop${mobileID}`} />
        } 
      </AnimatePresence>
    </ThemeImg>
    )
    }
    </>
  )
})
 
export default ThemeToggle;

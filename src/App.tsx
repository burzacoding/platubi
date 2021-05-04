import Footer from "./components/molecules/Footer";
import NavBar from "./components/molecules/NavBar";
import LandingPageOne from "./components/templates/LandingPageOne";
import LandingPageThree from "./components/templates/LandingPageThree";
import LandingPageTwo from "./components/templates/LandingPageTwo";
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

interface themesCSSInterface {
  divBackground: string,
  divDarkerBackground: string,
  fontContrastOne: string,
  fontContrastTwo: string,
  fontContrastThree:string
}

interface themesInterface {
  'dark': themesCSSInterface,
  'light': themesCSSInterface
}

const lighTheme: themesCSSInterface = {
  divBackground: '#F8F8F8',
  divDarkerBackground: '#EAEAEA',
  fontContrastOne: '#5F5F5F',
  fontContrastTwo: '#777777',
  fontContrastThree: '#8A8A8A'

}

const darkTheme: themesCSSInterface = {
  divBackground: '#050D16',
  divDarkerBackground: '#030910',
  fontContrastOne: '#ACACAC',
  fontContrastTwo: '#CACACA',
  fontContrastThree: '#B0B0B0'
}


const themes: themesInterface  = {
  'dark': darkTheme,
  'light': lighTheme
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const appTheme = (theme: 'dark' | 'light') => theme === 'dark' ? 'App' : 'App light-body'

  return (
    <ThemeProvider theme={themes[theme]}>
    <div className={appTheme(theme)}>
      <NavBar theme={theme} setTheme={setTheme}/>
      <LandingPageOne theme={theme} />
      <LandingPageTwo theme={theme} />
      <LandingPageThree theme={theme} />
      <Footer theme={theme} />
    </div>
    </ThemeProvider>
  );
}

export default App;

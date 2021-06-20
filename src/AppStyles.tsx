import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme  {
    theme: 'dark' | 'light',
    divBackground: string,
    divDarkerBackground: string,
    fontContrastOne: string,
    fontContrastTwo: string,
    fontContrastThree:string,
    fontContrastFour: string,
    fontContrastFive: string,
    horizontalBarBG: string,
    horizontalBarShadow: string,
    colorBackground: string,
    registerBackground: string,
  }
}
interface themesInterface {
  'dark': DefaultTheme,
  'light': DefaultTheme
}

const lighTheme: DefaultTheme = {
  theme: 'light',
  divBackground: '#F8F8F8',
  divDarkerBackground: '#e6e6e6',
  fontContrastOne: '#5F5F5F',
  fontContrastTwo: '#777777',
  fontContrastThree: '#8A8A8A',
  fontContrastFour: '#595959',
  fontContrastFive: '#686868',
  horizontalBarBG: 'linear-gradient(to right, #71BAF8, #03A63C)',
  horizontalBarShadow: 'rgba(0, 0, 0, 0.2) 0 2px 12px 4px',
  colorBackground: 'linear-gradient(90deg, #1C4B73 -4%, #4388C4 102%)',
  registerBackground: 'linear-gradient(90deg, #F8F8F8, #E4E4E4)'
}

const darkTheme: DefaultTheme = {
  theme: 'dark',
  divBackground: '#050D16',
  divDarkerBackground: '#02060c',
  fontContrastOne: '#ACACAC',
  fontContrastTwo: '#B0B0B0',
  fontContrastThree: '#CACACA',
  fontContrastFour: '#AFAFAF',
  fontContrastFive: '#A0A0A0',
  horizontalBarBG: 'linear-gradient(to right, #1269B4, #03A63C)',
  horizontalBarShadow: 'rgba(0,0,0,.75) 0 2px 12px 4px',
  colorBackground: 'linear-gradient(90deg, #096635 10%, #2BA665 75%)',
  registerBackground: 'linear-gradient(90deg, #030910, #0F1E2F)',
}


export const themes: themesInterface  = {
  'dark': darkTheme,
  'light': lighTheme
}

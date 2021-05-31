interface themesCSSInterface {
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
  colorBackground: string
}

interface themesInterface {
  'dark': themesCSSInterface,
  'light': themesCSSInterface
}

const lighTheme: themesCSSInterface = {
  theme: 'light',
  divBackground: '#F8F8F8',
  divDarkerBackground: '#EAEAEA',
  fontContrastOne: '#5F5F5F',
  fontContrastTwo: '#777777',
  fontContrastThree: '#8A8A8A',
  fontContrastFour: '#595959',
  fontContrastFive: '#868686',
  horizontalBarBG: 'linear-gradient(to right, #71BAF8, #03A63C)',
  horizontalBarShadow: 'rgba(0, 0, 0, 0.2) 0 2px 12px 4px',
  colorBackground: 'linear-gradient(90deg, #1C4B73 -3.62%, #4388C4 103.62%)'


}

const darkTheme: themesCSSInterface = {
  theme: 'dark',
  divBackground: '#050D16',
  divDarkerBackground: '#030910',
  fontContrastOne: '#ACACAC',
  fontContrastTwo: '#B0B0B0',
  fontContrastThree: '#CACACA',
  fontContrastFour: '#AFAFAF',
  fontContrastFive: '#A0A0A0',
  horizontalBarBG: 'linear-gradient(to right, #1269B4, #03A63C)',
  horizontalBarShadow: 'rgba(0,0,0,.75) 0 2px 12px 4px',
  colorBackground: 'linear-gradient(92.46deg, #096635 9.73%, #2BA665 74.92%)'
}


export const themes: themesInterface  = {
  'dark': darkTheme,
  'light': lighTheme
}

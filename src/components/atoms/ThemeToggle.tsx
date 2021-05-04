
import sun from '../../res/sun.svg'
import moon from '../../res/moon.svg'

export interface ThemeToggleProps {
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>
}
 
const ThemeToggle: React.FC<ThemeToggleProps> = ({theme, setTheme}) => {

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
      document.body.classList.toggle('light-body')
    }
    if (theme === 'light') {
      setTheme('dark')
      document.body.classList.toggle('light-body')
    }
  }
  return (
    <button className="theme-switch" onClick={changeTheme}>
      {
        theme === 'light'
        ? 
        <img src={sun} alt="light-theme" className="theme-switch-svg"/>
        :
        <img src={moon} alt="dark-theme" className="theme-switch-svg"/>
      }
    </button>)
}
 
export default ThemeToggle;

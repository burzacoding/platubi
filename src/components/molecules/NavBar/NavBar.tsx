import registerMobile from '../../../res/Landing/register-mobile.svg'
import loginMobile from '../../../res/Landing/login-mobile.svg'
import help from '../../../res/Landing/help-circle.svg'
import bug from '../../../res/Landing/bug.svg'

import { HorizontalBar, NavBarDesktop, NavBarDesktopContent, NavBarDesktopContainer, NavBarMobileBottom, NavBarMobileContainer, NavBarMobileTop, ContentTop, ContentBottom, OptionNavMobile, MenuMobileNav, LogoNav, OptionsNav, OptionNav, ButtonsDesktopNav, ButtonDesktopNav } from './Styles';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import MobileNavItem from './MobileNavItem';
import ThemeToggle from '../../atoms/ThemeToggle/ThemeToggle'
import SwitchMenu from './SwitchMenu'
import LogoPlatubi from './LogoPlatubi';
import SwitchContainer from './SwitchContainer'

export interface NavBarProps {
  setTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>,
  theme: 'dark' | 'light'
}

const variantsMenu = {
  open: { x: 0, opacity: 1 },
  closed: { x: '100%', opacity: 0 },
}
 
const NavBar:React.FC<NavBarProps> = ({ setTheme, theme }) => {

  const [open, setOpen] = useState(false)
  const MenuRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const ThemeBtnRef = useRef<HTMLDivElement>(null)
  const SwitchMenuRef = useRef<SVGSVGElement>(null)
  const SwitchMenuMobileRef = useRef<HTMLDivElement>(null)
  const ThemeToggleMobileRef = useRef<HTMLDivElement>(null)
  const ToggleMenu = () => {
    setOpen(!open)
  }
  const CloseMenu = () => {
    setOpen(false)
  }
  const isOpen =  open ? 'open' : 'closed'

  useEffect(()=>{
    let handler = (e:MouseEvent) => {
      if (!MenuRef.current.contains(e.target as Node) && !ThemeBtnRef.current?.contains(e.target as Node) && !SwitchMenuRef.current?.contains(e.target as Node) && !SwitchMenuMobileRef.current?.contains(e.target as Node) && !ThemeToggleMobileRef.current?.contains(e.target as Node)){
        CloseMenu()
      }
    }
    document.addEventListener('click', handler)
    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])

  return (
    <>
      <NavBarDesktopContainer>
        <MenuMobileNav variants={variantsMenu} initial={false} animate={isOpen} desktop ref={MenuRef}>
          <MobileNavItem img={help} text='FAQ' alt='help' toUrl='/faq' func={ToggleMenu} />
          <MobileNavItem img={bug} text='Reportar un bug' alt="bug" toUrl="/bug" func={ToggleMenu} />
        </MenuMobileNav>
        <NavBarDesktop >
          <NavBarDesktopContent >
            <LogoNav as={Link} to='/'>
              <LogoPlatubi />
            </LogoNav>
            <OptionsNav>
              <OptionNav to='/'>Inicio</OptionNav>
              <OptionNav to='/contacto'>Contáctenos</OptionNav>
              <OptionNav to='/faq'>FAQ</OptionNav>
            </OptionsNav>
            <ButtonsDesktopNav>
              <ButtonDesktopNav to='/registrarse' blue="true" >Registrate</ButtonDesktopNav>
              <ButtonDesktopNav to='/login' >Inicia sesión</ButtonDesktopNav>
            </ButtonsDesktopNav>
            <ThemeToggle setTheme={setTheme} ref={ThemeBtnRef} theme={theme} />  
            <SwitchMenu open={open} setToggle={setOpen} ref={SwitchMenuRef} />
          </NavBarDesktopContent>
        </NavBarDesktop>
        <HorizontalBar />
      </NavBarDesktopContainer>



      <NavBarMobileContainer>
        <MenuMobileNav variants={variantsMenu} initial={false} animate={isOpen} >
          <MobileNavItem img={help} text='FAQ' alt='help' toUrl='/faq' func={ToggleMenu} />
          <MobileNavItem img={bug} text='Reportar un bug' alt="bug" toUrl="/bug" func={ToggleMenu} />
          <ThemeToggle setTheme={setTheme} ref={ThemeToggleMobileRef} theme={theme} mobileID="Mobile" />
        </MenuMobileNav>
        <NavBarMobileTop>
          <ContentTop>
            <Link to='/' onClick={CloseMenu}><LogoPlatubi mobile  /></Link>
            <SwitchContainer ref={SwitchMenuMobileRef} keyID={2} ToggleMenuFunc={ToggleMenu} open={open}  />
          </ContentTop>
          <HorizontalBar />
        </NavBarMobileTop>
        <NavBarMobileBottom>
          <HorizontalBar />
          <ContentBottom>
            <OptionNavMobile to='/registrarse' onClick={CloseMenu}>
              <img src={registerMobile} alt="register" />
              <span>Registrarse</span>
            </OptionNavMobile>
            <OptionNavMobile to='/login' onClick={CloseMenu}>
            <img src={loginMobile} alt="login" />
            <span>Inicia sesión</span>
            </OptionNavMobile>
          </ContentBottom>
        </NavBarMobileBottom>
      </NavBarMobileContainer>
    </>
  );
}
 
export default NavBar;


        /* 
        
        let classBodyColor = "dark-body-color"
        let classBaseColor = "base-dark"
        let classBarTheme = "dark-bar"
        if (theme === 'light') {
          classBodyColor = "light-body-color"
          classBaseColor = "base-light"
          classBarTheme = "light-bar"
        }

        <div className={`${classBaseColor} navBG`}>
          <div className="navbar">
            <div className="logo-container">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <nav className={`nav ${classBodyColor} regular18px`}>
              <span>Inicio</span><span>Contactenos</span><span>FAQ</span>
            </nav>
            {
            //ESTE BUTTONS-GUESTS PODRIA SER OTRO COMPONENTE QUE CHEQUEE SI EXISTE
            // O NO UN USUARIO LOGUEADO (FIREBASE)
            }
            <div className="buttons-guests">
              <span className="buttons-guests-register">Registrate</span> <span className="buttons-guests-login">Inicia sesión</span>
            </div>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>
        <div className={`horizontal-bar ${classBarTheme}`}></div> */

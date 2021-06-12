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
import { useAuth } from '../../../contexts/AuthContext';

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
    const handler = (e:MouseEvent) => {
      if (!MenuRef.current.contains(e.target as Node) && !ThemeBtnRef.current?.contains(e.target as Node) && !SwitchMenuRef.current?.contains(e.target as Node) && !SwitchMenuMobileRef.current?.contains(e.target as Node) && !ThemeToggleMobileRef.current?.contains(e.target as Node)){
        CloseMenu()
      }
    }
    document.addEventListener('click', handler)
    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])

  const { currentUser, logout } = useAuth()

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
              {currentUser ? (
                <ButtonDesktopNav to='/login' onClick={logout}>Cerrar sesión</ButtonDesktopNav>
              ):(
                <>
                  <ButtonDesktopNav to='/registrarse' blue>Registrate</ButtonDesktopNav>
                  <ButtonDesktopNav to='/login' >Inicia sesión</ButtonDesktopNav>
                </>
              )}
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
          {currentUser && (
            <MobileNavItem img={loginMobile} text='Cerrar sesión' alt="bug" toUrl="/login" func={logout} />
          )}
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

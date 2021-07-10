import registerMobile from '../../../res/Landing/register-mobile.svg'
import loginMobile from '../../../res/Landing/login-mobile.svg'
import help from '../../../res/Landing/help-circle.svg'
import mail from '../../../res/ri_mail-send-line.svg'

import { HorizontalBar, NavBarDesktop, NavBarDesktopContent, NavBarDesktopContainer, NavBarMobileBottom, NavBarMobileContainer, NavBarMobileTop, ContentTop, ContentBottom, OptionNavMobile, MenuMobileNav, LogoNav, OptionsNav, OptionNav, ButtonsDesktopNav, ButtonDesktopNav, OptionNavContainer } from './Styles';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import MobileNavItem from './MobileNavItem';
import SettingsNavItem from './SettingsNavItem'
import ThemeToggle from '../../atoms/ThemeToggle/ThemeToggle'
import SwitchMenu from './SwitchMenu'
import LogoPlatubi from './LogoPlatubi';
import SwitchContainer from './SwitchContainer'
import { useAuth } from '../../../Contexts/AuthContext';
import { useDashboard } from '../../../Contexts/DashboardContext';
import Wallet from '../../atoms/SVG/Wallet';
import GearNav from '../../atoms/SVG/GearNav';

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

  const handler = (e:MouseEvent) => {
    if (!MenuRef.current?.contains(e.target as Node) && !ThemeBtnRef.current?.contains(e.target as Node) && !SwitchMenuRef.current?.contains(e.target as Node) && !SwitchMenuMobileRef.current?.contains(e.target as Node) && !ThemeToggleMobileRef.current?.contains(e.target as Node)){
      CloseMenu()
    }
  }
  const { currentUser, logout } = useAuth();
  useEffect(()=>{
    document.addEventListener('click', handler)
    return () => {
      document.removeEventListener('click', handler)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser])

  const { page, setPage } = useDashboard();

  return (
    <>
      <NavBarDesktopContainer>
        {/*SLIDER APPEARING ON THE RIGHT*/}
          <MenuMobileNav logged={currentUser ? true : false} desktop variants={variantsMenu} initial={false} animate={isOpen} ref={MenuRef}>
            <MobileNavItem text='FAQ' toUrl='/faq' func={ToggleMenu} />
            <MobileNavItem text='Contacto' alt='help' toUrl='/contacto' func={ToggleMenu} />
            {currentUser && <SettingsNavItem />}
          </MenuMobileNav>
        {/*SLIDER APPEARING ON THE RIGHT*/}
        {/*THIS IS THE BOX INSIDE THE CONTAINER THAT HAS A BACKGROUND COLOR*/}
        <NavBarDesktop >
          {/*THIS IS THE CONTAINER WITH MAX WIDTH 1440PX */}
          {currentUser ? (
          <NavBarDesktopContent logged="true">
          <LogoNav logged="true" as={Link} to='/' onClick={() => currentUser && setPage(0)}>
            <LogoPlatubi />
          </LogoNav>
          <ButtonsDesktopNav logged="true">
            <ButtonDesktopNav to='/login' onClick={logout}>Cerrar sesión</ButtonDesktopNav>
          </ButtonsDesktopNav>
          <ThemeToggle setTheme={setTheme} ref={ThemeBtnRef} theme={theme} />  
          <SwitchMenu logged open={open} setToggle={setOpen} ref={SwitchMenuRef} />
          </NavBarDesktopContent>
          ) : (
          <NavBarDesktopContent>
            <LogoNav as={Link} to='/'>
              <LogoPlatubi />
            </LogoNav>
            <OptionsNav>
              <OptionNav to='/'>Inicio</OptionNav>
              <OptionNav to='/contacto'>Contáctenos</OptionNav>
              <OptionNav to='/faq'>FAQ</OptionNav>
            </OptionsNav>
            <ButtonsDesktopNav>
                  <ButtonDesktopNav to='/registrarse' blue='true'>Registrate</ButtonDesktopNav>
                  <ButtonDesktopNav to='/login' >Inicia sesión</ButtonDesktopNav>
            </ButtonsDesktopNav>
            <ThemeToggle setTheme={setTheme} ref={ThemeBtnRef} theme={theme} />
            <SwitchMenu open={open} setToggle={setOpen} ref={SwitchMenuRef} />
          </NavBarDesktopContent>
          )}
        </NavBarDesktop>
        <HorizontalBar />
      </NavBarDesktopContainer>



      <NavBarMobileContainer>
        <MenuMobileNav variants={variantsMenu} initial={false} animate={isOpen} >
          <ThemeToggle setTheme={setTheme} ref={ThemeToggleMobileRef} theme={theme} mobileID="Mobile" />
          <MobileNavItem img={help} text='Ayuda' alt="help" toUrl="/faq" func={ToggleMenu} />
          <MobileNavItem img={mail} text='Contactanos' alt="contact-mobile" toUrl="/contacto" func={ToggleMenu} />
          {currentUser && <MobileNavItem img={loginMobile} text='Cerrar sesión' alt="logout" toUrl="/login" func={logout} />}
        </MenuMobileNav>
        <NavBarMobileTop>
          <ContentTop>
            <Link to='/' onClick={CloseMenu}><LogoPlatubi mobile  /></Link>
            <SwitchContainer ref={SwitchMenuMobileRef} keyID={2} ToggleMenuFunc={ToggleMenu} open={open}  />
          </ContentTop>
          <HorizontalBar />
        </NavBarMobileTop>
        { currentUser ? (
        <NavBarMobileBottom>
          <HorizontalBar />
          <ContentBottom>
              <OptionNavMobile current={page === 0 ? true : false} as="div" onClick={() => {setPage(0)}}>
                <OptionNavContainer>
                  <Wallet current={page === 0 ? true : false} />
                </OptionNavContainer>
                <span>Panel principal</span>
              </OptionNavMobile>
              <OptionNavMobile current={page === 1 ? true : false} as="div" onClick={() => {setPage(1)}}>
                <OptionNavContainer>
                  <GearNav current={page === 1 ? true : false} />
                </OptionNavContainer>
              <span>Ajustes</span>
              </OptionNavMobile>
          </ContentBottom>
        </NavBarMobileBottom>
        ) : (
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
        )}
      </NavBarMobileContainer>
    </>
  );
}
 
export default NavBar;

import * as React from 'react';
import logo from '../../res/platubi-logo.svg'
import sun from '../../res/sun.svg'
import '../../css/Navbar.css'
// import moon from '../../res/moon.svg'

export interface NavBarProps {
  theme: 0|1 
}
 
const NavBar:React.FC<NavBarProps> = ({theme}) => {
  return (
    <>
      <header className="base-white">
        <div className="navbar">
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <nav className="nav light-body-color">
            <span>Inicio</span><span>Contactenos</span><span>FAQ</span>
          </nav>
          <div className="buttons-guests ">
            <span className="buttons-guests-register">Registrate</span> <span className="buttons-guests-login">Inicia sesión</span>
          </div>
          <div className="theme-switch">
            <img src={sun} alt="light-theme" className="theme-switch-svg"/>
          </div>
        </div>
        <div className="horizontal-bar light-bar"></div>
      </header>
    </>
  );
}
 
export default NavBar;

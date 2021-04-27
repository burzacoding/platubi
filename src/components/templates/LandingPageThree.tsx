import * as React from 'react';
import { useEffect } from 'react'
import Separador from '../molecules/Separador';
import '../../css/LandingPage/LandingPageThree.css'
import firebaseLogo from '../../res/Landing/firebase-logo.svg'

export interface LandingPageThreeProps {
  theme: "dark" | "light"
}
 
const LandingPageThree: React.FC<LandingPageThreeProps> = ({theme}) => {
  let classBaseColor = "base-dark"
  if (theme === 'light') {
    classBaseColor = "base-light"
  }

  useEffect(() => {
    const fbBg = document.getElementById('fb-bg')
    setTimeout(() => {
      fbBg?.classList.add('fb-bg-full')
    }, 1000);
  }, [])

  return (
    <article className={`third-page-container ${classBaseColor}`}>
      <Separador position="top" />
      <div className="third-main-container center">
        <div className="fb-bg" id="fb-bg"></div>
        <div className="container-box-grey center">
          <div className="firebase-logo-cont">
            <img src={firebaseLogo} alt="firebase-logo"/>
          </div>
          <div className="content-right">
            <div className="title">
              <p className="sevenColor b0b0b0">Tus datos <span>seguros</span> con la tecnología de </p><span>Google Firebase</span>
            </div>
            <div className="body-content">
              <p className="sevenColor ababab">Toda tu información se encuentra tras la impenetrable seguridad de los servicios de Google.</p>
            </div>
            <div className="register-content center">
              <span className="ffffff">Registrarse ahora mismo</span>
            </div>
          </div> 
        </div>
      </div>
    </article>
  );
}
 
export default LandingPageThree;

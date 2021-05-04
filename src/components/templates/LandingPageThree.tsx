import { useEffect } from 'react'
import Separador from '../molecules/Separador';
import '../../css/LandingPage/LandingPageThree.css'
import firebaseLogo from '../../res/Landing/firebase-logo.svg'
import bg_tech from '../../res/Landing/bg_tech.png'

export interface LandingPageThreeProps {
  theme: "dark" | "light"
}
 
const LandingPageThree: React.FC<LandingPageThreeProps> = ({theme}) => {
  let classBodyColor = "dark-body-color"
  let classBaseColor = "base-dark"
  if (theme === 'light') {
    classBodyColor = "light-body-color"
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
        <div>
          <img src={bg_tech} alt="firebase-background-tech" className="fb-bg"  id="fb-bg"/>
        </div>
        <div className="container-box-grey center">
          <div className="firebase-logo-cont">
            <img src={firebaseLogo} alt="firebase-logo"/>
          </div>
          <div className="content-right">
            <div className="title">
              <p className={`${classBodyColor}`}>Tus datos <span>seguros</span> con la tecnología de </p><span>Google Firebase</span>
            </div>
            <div className="body-content">
              <p className={`${classBodyColor}`}>Toda tu información se encuentra tras la seguridad de los servicios de Google.</p>
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

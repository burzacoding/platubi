import { useEffect } from 'react' 
import '../../css/LandingPage/LandingPageTwo.css'
import logo from '../../res/platubi-logo.svg'
import item1 from '../../res/Landing/calcu.svg'
import item2 from '../../res/Landing/donut.svg'
import item3 from '../../res/Landing/linea-chart.svg'
// import Separador from '../molecules/Separador';

export interface LandingPageTwoProps {
  theme: "dark" | "light"
}
 
const LandingPageTwo: React.FC<LandingPageTwoProps> = ({theme}) => {
  let classBodyColor = "dark-body-color-two"
  let classBaseColor = "base-dark"
  if (theme === 'light') {
    classBodyColor = "light-body-color-two"
    classBaseColor = "base-light"
  }

  useEffect(() => {
    const secondCont = document.getElementById('second-sub-container')
    secondCont?.classList.add('t1s-opacity', 'show')
    setTimeout(() => {
      if (secondCont) {
        const worldMap = document.getElementById('world-map')
        worldMap?.classList.add('world-map-full')
      }
    }, 1000);
  }, [])
  return (
    <article className={`second-page-container ${classBaseColor}`}>
      <div className="second-main-container center">
      {/* <Separador position="top" /> */}
      <div className="second-sub-container" id="second-sub-container">
        <div className="world-map" id="world-map"></div>
        <div className="logo-container-small">
          <img src={logo} alt="logo-small"/>
        </div>
        <div className={`items-cont ${classBodyColor}`}>
          <div className="item">
            <div className="item-svg center">
              <img src={item1} alt=""/>
            </div>
            <span className="item-text">No más cálculos, nosotros te ahorramos el tiempo y te mostramos lo que más te interesa.</span>
          </div>
          <div className="item">
            <div className="item-svg center">
              <img src={item2} alt=""/>
            </div>
            <span className="item-text">Conozca que compone su billetera y en que porcentaje de un solo vistazo.</span>
          </div>
          <div className="item">
            <div className="item-svg center">
              <img src={item3} alt=""/>
            </div>
            <span className="item-text">Platubi siempre esta conectado a los mercados, así que te muestra el valor de tus criptos en tiempo real.</span>
          </div>
        </div>
        <div className="button-two center button-second-page" id="btn-two-register">
          <div className={`inner-container center ${classBaseColor}`}>
            <span>Abrir cuenta gratis</span>
          </div>
        </div>
      </div>

      </div>
    </article>
  );
}
 
export default LandingPageTwo;

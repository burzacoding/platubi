import { useEffect, useRef } from 'react'
import '../../../css/LandingPage/LandingPageLeftContent.css'
export interface LandingPageOneLeftContentProps {
  theme: "dark" | "light"
}
 
const LandingPageOneLeftContent: React.FC<LandingPageOneLeftContentProps> = ({theme}) => {
  let classBodyColor = "dark-body-color"
  let classBaseColor = "base-dark"
  if (theme === 'light') {
    classBodyColor = "light-body-color"
    classBaseColor = "base-light"
  }

  const renderCount = useRef(0)

  useEffect(() => {
      const leftContent = document.getElementById('left-content')
      if (renderCount.current === 0) {
        leftContent?.classList.add('t1s-opacity', 'show')
        setTimeout(() => {
          leftContent?.classList.remove('t1s-opacity')
          document.body.classList.add('themeTrans')
        }, 1000);
        renderCount.current = 1
      }
      if (renderCount.current === 1) {
        leftContent?.classList.add('show')
      }
  },[theme])

  return (
    <div className={`content-container ${classBodyColor}`} id="left-content">
      <h1>Conozca segundo a segundo el valor de su billetera</h1>
      <p className="w300">Platubi calcula el valor de todos los activos que poseas (efectivo, otras divisas, criptos) en tiempo real y te muestra todo el valor de tu billetera en la moneda que quieras, inclusive en pesos cotizados a valor de dolar blue.</p>
      <div className="buttonsPageOneLeft">
        <div className="button-one center">
          <span className="w300">Crear una cuenta</span>
        </div>
        <div className="button-two center">
          <div className={`inner-container center ${classBaseColor}`} >
            <span>Más información</span>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default LandingPageOneLeftContent;

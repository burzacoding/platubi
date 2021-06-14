
import { Container, InnerContainer, ItemsContainer, Item } from "../../elements/Footer";
import SmallLogo from "../atoms/SVG/SmallLogo";
 
const Footer: React.FC = () => {
  return (
    <Container>
      <InnerContainer>
        <ItemsContainer>
          <Item to="/faq">FAQ</Item>
          <Item to="/faq#tyc">Términos y condiciones</Item>
          <Item to="/contacto">Contactenos</Item>
        </ItemsContainer>
        <SmallLogo />
        <ItemsContainer>
          <Item to="/registrarse">Registrarse</Item>
          <Item to="/login">Iniciar sesión</Item>
          <Item to="/bug">Reportar un bug</Item>
        </ItemsContainer>
      </InnerContainer>
    </Container>
  );
}
 
export default Footer;










































// import footerDark from '../../res/footer-bg-black.png'
// import footerLight from '../../res/footer-bg-light.png'
// import logoFooterGreen from '../../res/Landing/platubi_green.svg'
// import logoFooterBlue from '../../res/Landing/platubi_blue.svg'
// import igG from '../../res/ig_green.svg'
// import igB from '../../res/ig_blue.svg'
// import ghG from '../../res/gh_green.svg'
// import ghB from '../../res/gh_blue.svg'
// import send from '../../res/send.svg'
// import '../../css/Footer.css'
// import { useEffect, useRef } from 'react'


// export interface FooterProps {
//   theme: "dark" | "light"
// }
 
// const Footer: React.FC<FooterProps> = ({theme}) => {
//   let classBodyColor = "dark-body-color"
//   let classTitlesColor = "footer-update-green"
//   if (theme === 'light') {
//     classBodyColor = "light-body-color"
//     classTitlesColor = "footer-update-blue"
//   }
//   const counter = useRef(0)
//   const footerDarkRef = useRef<HTMLImageElement>(null)
//   const footerLightRef = useRef<HTMLImageElement>(null)

//   useEffect(() => {
//     if (counter.current === 1) {
//       footerDarkRef.current?.classList.toggle('hidden')
//       footerLightRef.current?.classList.toggle('hidden')
//     }
//     if (counter.current === 0) {
//       counter.current++
//     }
//   }, [theme])

//   return (
//     <footer className="center">
//       <img className="footer-bg" src={footerDark} alt="footer" ref={footerDarkRef}  />
//       <img className="footer-bg hidden" src={footerLight} alt="footer" ref={footerLightRef} />
//       <div className={`footer-content ${classBodyColor}`}>
//         <div className="footer-social">
//           <div className="logo-cont-footer">
//             <img src={
//         theme === 'dark' ? logoFooterGreen : logoFooterBlue
//       } alt="logo-footer"/>
//           </div>
//           <div className="social-cont-footer">
//             <img src={
//         theme === 'dark' ? igG : igB
//       } alt="instagram"/>
//             <img src={
//         theme === 'dark' ? ghG : ghB
//       } alt="github"/>
//           </div>
//         </div>
//         <div className="footer-update" >
//           <h3 className={classTitlesColor} >¿Quieres mantenerte actualizado?</h3>
//           <p>Registrate al newsletter con tu email. Nuestras actualizaciones son concisas y no te molestarán en lo absoluto.</p>
//           <div className="input-update-req">
//             <input type="email" placeholder="Email:"/>
//             <div className="send-svg center">
//               <img src={send} alt="send"/>
//             </div>
//           </div>
//         </div>
//         <div className="footer-support">
//           <h3 className={classTitlesColor}>Soporte</h3>
//           <div className="p-cont sup-footer">
//             <p>Contáctanos</p>
//             <p>Preguntas frecuentes</p>
//             <p>Reportar un bug</p>
//           </div>
//         </div>
//         <div className="footer-nav">
//           <h3 className={classTitlesColor}>Navega</h3>
//           <div className="p-cont nav-footer">
//             <p>Inicio</p>
//             <p>Login</p>
//             <p>Registro</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
 
// export default Footer;

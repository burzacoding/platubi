import * as React from 'react';
import footerDark from '../../res/footer-bg-black.png'
import footerLight from '../../res/footer-bg-light.png'
import logoFooter from '../../res/Landing/logo-green-footer.svg'
import ig from '../../res/instagram.svg'
import gh from '../../res/github.svg'
import send from '../../res/send.svg'
import '../../css/Footer.css'


export interface FooterProps {
  theme: "dark" | "light"
}
 
const Footer: React.FC<FooterProps> = ({theme}) => {
  return (
    <footer className="center">
      <img className="footer-bg"src={
        theme === 'dark' ? footerDark : footerLight
      } alt="footer"/>
      <div className="footer-content">
        <div className="footer-social">
          <div className="logo-cont-footer">
            <img src={logoFooter} alt="logo-footer"/>
          </div>
          <div className="social-cont-footer">
            <img src={ig} alt="instagram"/>
            <img src={gh} alt="github"/>
          </div>
        </div>
        <div className="footer-update">
          <h3>¿Quieres mantenerte actualizado?</h3>
          <p>Registrate al newsletter con tu email. Nuestras actualizaciones son concisas y no te molestarán en lo absoluto.</p>
          <div className="input-update-req">
            <input type="email" placeholder="Email:"/>
            <div className="send-svg center">
              <img src={send} alt="send"/>
            </div>
          </div>
        </div>
        <div className="footer-support">
          <h3>Soporte</h3>
          <div className="p-cont sup-footer">
            <p>Contáctanos</p>
            <p>Preguntas frecuentes</p>
            <p>Reportar un bug</p>
          </div>
        </div>
        <div className="footer-nav">
          <h3>Navega</h3>
          <div className="p-cont nav-footer">
            <p>Inicio</p>
            <p>Login</p>
            <p>Registro</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;

import './Footer.css';
import logo from '../../assets/img/logo-shopping-stgo-2.png'
import MainMenu from '../MainMenu/MainMenu';

function Footer() {
  return (
    <footer>
        <div className="logo">
            <img src={logo} alt="Disquería Stgo" />
        </div>
        <div className="footer-nav">
          <MainMenu />
        </div>
        <p className="footer-copyright">&copy; 2026 Disquería Stgo. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
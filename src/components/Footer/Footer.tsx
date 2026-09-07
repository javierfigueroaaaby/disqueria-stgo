import './Footer.css';
import logo from '../../assets/img/logo-stgo.png'

function Footer() {
  return (
    <footer>
        <div className="logo">
            <img src={logo} alt="Disquería Stgo" />
        </div>
        <p>&copy; 2026 Disquería Stgo. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
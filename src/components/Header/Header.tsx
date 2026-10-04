import './Header.css';
import logo from '../../assets/img/logo-shopping-stgo-1.png'
import MainMenu from '../MainMenu/MainMenu';
import { useState } from 'react';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
        <div className="header-topbar">
            Envíos a todo Chile
        </div>
        <div className="header-logo-nav-icons">
            <div className="logo">
                <img src={logo} alt="Disquería Stgo" />
            </div>
            <div className="header-nav">
                <MainMenu />
            </div>
            <div className="header-icons">  
                <a href="#buscador" className="header-search">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </a>
                <a href="#" className="header-mobile-menu" onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(!isMobileMenuOpen);
                }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </a>
            </div>
        </div>
        <div className="header-mobile-nav" style={{ display: isMobileMenuOpen ? 'block' : 'none' }}>
            <MainMenu />
        </div>
    </header>
    
  );
}

export default Header;
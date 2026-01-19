import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/process', label: 'Process' },
    { path: '/work', label: 'Work' },
    { path: '/about', label: 'About' },
  ];
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <header className="navbar">
      <nav className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Basecamp</span>
          <span className="logo-dot">.</span>
        </Link>
        
        <button 
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="navbar-cta">
            <Button to="/contact" variant="primary" size="sm">
              Book a Call
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

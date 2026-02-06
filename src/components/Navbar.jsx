import { useState, useEffect } from 'react';
import Button from './Button';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  
  const navLinks = [
    { path: '/', label: 'Home', href: '/' },
    { path: '/services', label: 'Services', href: '/services' },
    { path: '/process', label: 'Process', href: '/process' },
    { path: '/work', label: 'Work', href: '/work' },
    { path: '/about', label: 'About', href: '/about' },
  ];
  
  const isActive = (path) => {
    const current = window.location.pathname;
    if (path === '/') return current === '/' || current === '' || current.endsWith('/');
    return current === path || current.startsWith(path + '/');
  };
  
  return (
    <header className="navbar">
      <nav className="navbar-container container">
        <a href="/" className="navbar-logo">
          <img 
            src="/whiteSBArtboard%201@2x.png" 
            alt="SawaBuild Studio" 
            className="logo-image"
          />
          <span className="logo-text">SawaBuild Studio</span>
        </a>
        
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
                <a 
                  href={link.href} 
                  className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
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

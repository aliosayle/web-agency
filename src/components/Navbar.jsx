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
    { path: '/', label: 'Home', href: 'index.html' },
    { path: '/services', label: 'Services', href: 'services.html' },
    { path: '/process', label: 'Process', href: 'process.html' },
    { path: '/work', label: 'Work', href: 'work.html' },
    { path: '/about', label: 'About', href: 'about.html' },
  ];
  
  const isActive = (path) => {
    const current = window.location.pathname;
    const currentFile = current.split('/').pop() || 'index.html';
    
    if (path === '/') {
      return currentFile === 'index.html' || current === '/' || current.endsWith('/');
    }
    
    // Check if current file matches the expected HTML file
    const expectedFile = path.slice(1) + '.html';
    return currentFile === expectedFile || current.includes(path);
  };
  
  return (
    <header className="navbar">
      <nav className="navbar-container container">
        <a href="index.html" className="navbar-logo">
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
            <Button href="contact.html" variant="primary" size="sm">
              Book a Call
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

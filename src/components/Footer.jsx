import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-text">Basecamp</span>
              <span className="logo-dot">.</span>
            </Link>
            <p className="footer-tagline">
              Web design that converts visitors into customers.
            </p>
          </div>
          
          <div className="footer-nav">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/process">Process</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          
          <div className="footer-nav">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services#starter">Starter Website</Link></li>
              <li><Link to="/services#growth">Growth Website</Link></li>
              <li><Link to="/services#custom">Custom Build</Link></li>
            </ul>
          </div>
          
          <div className="footer-nav">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li><Link to="/contact">Book a Call</Link></li>
              <li><a href="mailto:hello@basecamp.studio">hello@basecamp.studio</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Basecamp Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

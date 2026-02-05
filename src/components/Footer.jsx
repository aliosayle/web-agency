import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="index.html" className="footer-logo">
              <img 
                src="/whiteSBArtboard%201@2x.png" 
                alt="SawaBuild Studio" 
                className="footer-logo-image"
              />
              <span className="footer-logo-text">SawaBuild Studio</span>
            </a>
            <p className="footer-tagline">
              Web design that converts visitors into customers.
            </p>
          </div>
          
          <div className="footer-nav">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="process.html">Process</a></li>
              <li><a href="work.html">Work</a></li>
              <li><a href="about.html">About</a></li>
            </ul>
          </div>
          
          <div className="footer-nav">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="services.html#starter">Starter</a></li>
              <li><a href="services.html#business">Business</a></li>
              <li><a href="services.html#premium">Premium</a></li>
            </ul>
          </div>
          
          <div className="footer-nav">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li><a href="contact.html">Book a Call</a></li>
              <li><a href="mailto:support@sawabuildstudio.com">support@sawabuildstudio.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} SawaBuild Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

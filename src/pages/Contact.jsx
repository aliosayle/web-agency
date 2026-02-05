import { useState } from 'react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };
  
  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="page-hero section">
        <div className="container">
          <SectionHeader
            label="Contact"
            title="Let's talk about your project"
            description="Book a free 30-minute discovery call. No sales pitch. No obligation. Just an honest conversation about what you need and whether we can help."
          />
        </div>
      </section>

      {/* Contact Options */}
      <section className="contact-options section">
        <div className="container">
          <div className="options-grid">
            {/* Book a Call */}
            <div className="option-card primary">
              <div className="option-badge">Recommended</div>
              <h2>Book a Discovery Call</h2>
              <p>
                The fastest way to get started. We'll discuss your goals, answer your 
                questions, and determine if we're a good fit.
              </p>
              
              <div className="call-details">
                <div className="detail-item">
                  <span className="detail-label">Duration</span>
                  <span className="detail-value">30 minutes</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Format</span>
                  <span className="detail-value">Video call (Zoom/Meet)</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Cost</span>
                  <span className="detail-value">Free, no obligation</span>
                </div>
              </div>
              
              {/* In production, this would be a Calendly embed */}
              <div className="calendly-placeholder">
                <div className="placeholder-content">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <circle cx="12" cy="15" r="2" />
                  </svg>
                  <p>Calendar booking would appear here</p>
                  <span>Powered by Calendly</span>
                </div>
                <Button 
                  href="https://calendly.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variant="primary" 
                  size="lg" 
                  fullWidth
                >
                  Schedule a Call
                </Button>
              </div>
              
              <div className="trust-note">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>We respect your time. No follow-up spam.</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="option-card">
              <h2>Send a Message</h2>
              <p>
                Prefer to write? Tell us about your project and we'll get back to you 
                within one business day.
              </p>
              
              {isSubmitted ? (
                <div className="success-message">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h3>Message sent</h3>
                  <p>We'll get back to you within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Smith"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company">Company / Business</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="budget">Budget range</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option value="">Select range</option>
                        <option value="3500-5000">$3,500 – $5,000</option>
                        <option value="5000-10000">$5,000 – $10,000</option>
                        <option value="10000-20000">$10,000 – $20,000</option>
                        <option value="20000+">$20,000+</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="timeline">Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-2months">1-2 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="exploring">Just exploring</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Tell us about your project *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="What are you building? What problem are you trying to solve? What does success look like for this project?"
                    />
                  </div>
                  
                  <Button type="submit" variant="secondary" size="lg" fullWidth>
                    Send Message
                  </Button>
                </form>
              )}
              
              <div className="trust-note">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>Your information stays private. No spam, ever.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-faq section section-alt">
        <div className="container">
          <SectionHeader
            label="Questions"
            title="Before you reach out"
          />
          
          <div className="faq-grid">
            <div className="faq-item">
              <h4>What happens after I book a call?</h4>
              <p>
                You'll get a calendar invite with a video link. Before the call, we'll send 
                a few questions to help us prepare. On the call, we'll discuss your goals 
                and answer your questions.
              </p>
            </div>
            
            <div className="faq-item">
              <h4>Is the discovery call really free?</h4>
              <p>
                Yes. No catch. We use it to understand your needs and see if we're a good 
                fit. If we are, great. If not, we'll tell you and maybe suggest alternatives.
              </p>
            </div>
            
            <div className="faq-item">
              <h4>How quickly do you respond to messages?</h4>
              <p>
                Within one business day, usually faster. If you haven't heard from us in 
                24 hours, check your spam folder or book a call directly.
              </p>
            </div>
            
            <div className="faq-item">
              <h4>What if I'm not ready to start yet?</h4>
              <p>
                That's fine. Many clients book calls months before they're ready. It helps 
                to plan ahead, and we can give you a realistic timeline and budget to work with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="direct-contact section">
        <div className="container">
          <div className="direct-layout">
            <div className="direct-info">
              <h3>Prefer email?</h3>
              <p>
                Reach us directly at <a href="mailto:support@sawabuildstudio.com">support@sawabuildstudio.com</a>. 
                We read every email personally.
              </p>
            </div>
            
            <div className="timezone-info">
              <h3>Our timezone</h3>
              <p>
                We're based in EST (Eastern Standard Time). We typically respond during 
                business hours, Monday through Friday.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

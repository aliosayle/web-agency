import Button from '../components/Button';
import HeroVisual from '../components/HeroVisual';
import SectionHeader from '../components/SectionHeader';
import './Home.css';

export default function Home() {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Websites that turn visitors into paying customers
            </h1>
            <p className="hero-subtitle">
              We design and build conversion-focused websites for businesses in <strong>Lebanon</strong> and beyond. 
              No fluff. No delays. Just results.
            </p>
            <div className="hero-ctas">
              <Button to="/contact" variant="primary" size="lg">
                Book a Call
              </Button>
              <Button to="/work" variant="outline" size="lg">
                View Work
              </Button>
            </div>
            <p className="hero-note">Free 30-minute consultation. No strings attached.</p>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust section section-alt">
        <div className="container">
          <SectionHeader
            label="The elephant in the room"
            title="Why trust us without a portfolio?"
            description="You're right to ask. Here's why new doesn't mean unproven."
          />
          
          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-icon">01</div>
              <h3>We show our thinking</h3>
              <p>
                Every project in our work section includes the strategy, decisions, and reasoning. 
                You'll see how we think, not just what we make.
              </p>
            </div>
            
            <div className="trust-card">
              <div className="trust-icon">02</div>
              <h3>Milestone payments</h3>
              <p>
                You pay as we deliver. If we don't hit a milestone to your satisfaction, 
                you don't pay for it. Your risk is limited by design.
              </p>
            </div>
            
            <div className="trust-card">
              <div className="trust-icon">03</div>
              <h3>Clear contracts</h3>
              <p>
                No legal jargon. Our contracts spell out exactly what you get, when you get it, 
                and what happens if things go wrong.
              </p>
            </div>
            
            <div className="trust-card">
              <div className="trust-icon">04</div>
              <h3>Small team advantage</h3>
              <p>
                You work directly with the people doing the work. No account managers. 
                No telephone game. Faster decisions, better outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview section">
        <div className="container">
          <SectionHeader
            label="What we do"
            title="Packages (Starting From)"
            description="Three packages designed for different stages of your business. All focused on one thing: converting visitors into customers."
          />
          
          <div className="services-grid">
            <div className="service-card">
              <span className="service-tag">Starting out</span>
              <h3>Starter</h3>
              <p className="service-price">$300 – $500</p>
              <p className="service-desc">
                A clean one-page website for businesses that need to establish credibility 
                and start generating leads.
              </p>
              <ul className="service-features">
                <li>Single page design</li>
                <li>Mobile responsive</li>
                <li>Contact form</li>
                <li>1-week delivery</li>
              </ul>
              <div className="service-support">
                <span className="support-label">Optional support from $25/mo</span>
              </div>
              <Button to="/services#starter" variant="outline" fullWidth>
                Learn More
              </Button>
            </div>
            
            <div className="service-card featured">
              <span className="service-tag">Most popular</span>
              <h3>Business</h3>
              <p className="service-price">$800 – $1,200</p>
              <p className="service-desc">
                A multi-page website with SEO and analytics for businesses 
                ready to scale their online presence.
              </p>
              <ul className="service-features">
                <li>Up to 5 pages</li>
                <li>SEO foundation</li>
                <li>Analytics setup</li>
                <li>2-week delivery</li>
              </ul>
              <div className="service-support">
                <span className="support-label">Optional support from $50/mo</span>
              </div>
              <Button to="/services#business" variant="primary" fullWidth>
                Learn More
              </Button>
            </div>
            
            <div className="service-card">
              <span className="service-tag">Full custom</span>
              <h3>Premium</h3>
              <p className="service-price">Custom</p>
              <p className="service-desc">
                Custom web applications, e-commerce, and complex sites built 
                to your exact specifications.
              </p>
              <ul className="service-features">
                <li>Custom functionality</li>
                <li>E-commerce ready</li>
                <li>API integrations</li>
                <li>Timeline varies</li>
              </ul>
              <div className="service-support">
                <span className="support-label">Custom support plans available</span>
              </div>
              <Button to="/services#premium" variant="outline" fullWidth>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-overview section section-alt">
        <div className="container">
          <SectionHeader
            label="How we work"
            title="A process you can predict"
            description="No surprises. No scope creep. Just a clear path from idea to launch."
          />
          
          <div className="process-steps">
            <div className="process-step">
              <span className="step-number">01</span>
              <div className="step-content">
                <h3>Discovery Call</h3>
                <p>We learn about your business, goals, and what success looks like for you.</p>
              </div>
            </div>
            
            <div className="process-step">
              <span className="step-number">02</span>
              <div className="step-content">
                <h3>Strategy & Proposal</h3>
                <p>You receive a detailed plan with timeline, deliverables, and fixed pricing.</p>
              </div>
            </div>
            
            <div className="process-step">
              <span className="step-number">03</span>
              <div className="step-content">
                <h3>Design</h3>
                <p>We create mockups for your review. Two rounds of revisions included.</p>
              </div>
            </div>
            
            <div className="process-step">
              <span className="step-number">04</span>
              <div className="step-content">
                <h3>Development</h3>
                <p>We build your site with clean code, fast load times, and mobile-first design.</p>
              </div>
            </div>
            
            <div className="process-step">
              <span className="step-number">05</span>
              <div className="step-content">
                <h3>Launch</h3>
                <p>Final review, then we take your site live with full handoff documentation.</p>
              </div>
            </div>
          </div>
          
          <div className="process-cta">
            <Button to="/process" variant="primary" size="lg">
              See Full Process
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to build a website that works?</h2>
            <p>
              Book a free 30-minute call. We'll discuss your goals and see if we're a good fit. 
              No pressure. No sales pitch.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Book Your Free Call
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import './About.css';

export default function About() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="page-hero section">
        <div className="container">
          <SectionHeader
            label="About Us"
            title="Small team. Big ownership. Zero bureaucracy."
            description="We're a small web design studio focused on one thing: building websites that turn visitors into customers for small businesses and startups."
          />
        </div>
      </section>

      {/* Story - No Fake Story */}
      <section className="story section section-alt">
        <div className="container">
          <div className="story-layout">
            <div className="story-content">
              <h2>No origin story. Just the truth.</h2>
              <p>
                We're not going to pretend we started in a garage with a dream. We're not going 
                to tell you we're "passionate about pixels" or that we "live and breathe design."
              </p>
              <p>
                Here's the reality: We're designers and developers who got tired of working at 
                agencies that overcharge, underdeliver, and treat clients like ticket numbers. 
                We started SawaBuild Studio to do things differently.
              </p>
              <p>
                We take on fewer projects so we can actually focus. We charge fair prices because 
                we have low overhead. We communicate directly because there's no account manager 
                layer to filter through.
              </p>
              <p>
                That's it. No inspiring origin story. Just a better way to work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Small Team Advantage */}
      <section className="advantages section">
        <div className="container">
          <SectionHeader
            label="Why small works"
            title="The small team advantage"
            description="Being small isn't a limitation. It's our competitive edge."
          />
          
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>Direct access</h3>
              <p>
                You work with the people who do the work. When you email, you get a response 
                from someone who actually knows your project. No telephone game. No waiting 
                for account managers to "check with the team."
              </p>
            </div>
            
            <div className="advantage-card">
              <div className="advantage-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Faster decisions</h3>
              <p>
                No committees. No approval chains. When something needs to change, we change it. 
                When you have feedback, we act on it immediately. Our velocity is a feature, 
                not a bug.
              </p>
            </div>
            
            <div className="advantage-card">
              <div className="advantage-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>Full ownership</h3>
              <p>
                When there's nowhere to hide, you take ownership. Every project is personal. 
                Our reputation is on the line with every site we launch. We can't afford to 
                mail it in—and we don't.
              </p>
            </div>
            
            <div className="advantage-card">
              <div className="advantage-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3>Lower costs</h3>
              <p>
                No office. No overhead. No bloated team billing hours to justify their existence. 
                We pass those savings to you. Same quality as big agencies, better price, 
                more attention.
              </p>
            </div>
            
            <div className="advantage-card">
              <div className="advantage-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3>Honest feedback</h3>
              <p>
                We'll tell you when your idea won't work. We'll push back when you're making 
                a mistake. We're not here to be yes-people—we're here to get you results. 
                Sometimes that means uncomfortable conversations.
              </p>
            </div>
            
            <div className="advantage-card">
              <div className="advantage-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3>Focused expertise</h3>
              <p>
                We don't try to be everything. We build conversion-focused websites for small 
                businesses. That's it. No app development, no branding packages, no social media 
                management. We do one thing well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="beliefs section section-alt">
        <div className="container">
          <SectionHeader
            label="Our approach"
            title="What we believe"
          />
          
          <div className="beliefs-list">
            <div className="belief-item">
              <h3>Results over aesthetics</h3>
              <p>
                A beautiful website that doesn't convert is a failure. We design for outcomes 
                first, then make it look good. Every design decision should drive toward your 
                business goals.
              </p>
            </div>
            
            <div className="belief-item">
              <h3>Clarity over cleverness</h3>
              <p>
                Your visitors should understand what you do in seconds. We avoid jargon, 
                clever wordplay, and confusing navigation. Simple works. Complicated fails.
              </p>
            </div>
            
            <div className="belief-item">
              <h3>Speed over perfection</h3>
              <p>
                A launched website beats a perfect mockup that never ships. We move fast, 
                iterate based on real data, and improve continuously. Done is better than perfect.
              </p>
            </div>
            
            <div className="belief-item">
              <h3>Transparency over salesmanship</h3>
              <p>
                We tell you what we can and can't do. We explain our pricing. We share our 
                process. If we're not the right fit, we'll say so. No games, no bait-and-switch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Not For Everyone */}
      <section className="not-for section">
        <div className="container">
          <div className="not-for-layout">
            <div className="not-for-content">
              <span className="section-label">Fair warning</span>
              <h2>We're not for everyone</h2>
              <p>
                We're selective about who we work with. Not because we're snobs, but because 
                fit matters. Projects go wrong when expectations don't align.
              </p>
            </div>
            
            <div className="not-for-lists">
              <div className="not-for-card good">
                <h4>Good fit</h4>
                <ul>
                  <li>You value clear communication</li>
                  <li>You can make decisions quickly</li>
                  <li>You want a partner, not a pixel-pusher</li>
                  <li>You measure success by business outcomes</li>
                  <li>You're ready to invest in quality</li>
                </ul>
              </div>
              
              <div className="not-for-card bad">
                <h4>Not a good fit</h4>
                <ul>
                  <li>You need 10 stakeholders to approve a color</li>
                  <li>You want unlimited revisions</li>
                  <li>You're looking for the cheapest option</li>
                  <li>You don't trust your vendors</li>
                  <li>You measure success by how busy we look</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta section section-alt">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Think we might be a fit?</h2>
            <p>
              Let's find out. Book a 30-minute call. We'll learn about your business and 
              tell you honestly whether we can help.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Book a Call
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

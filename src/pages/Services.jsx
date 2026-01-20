import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import './Services.css';

export default function Services() {
  return (
    <main className="services-page">
      {/* Hero */}
      <section className="page-hero section">
        <div className="container">
          <SectionHeader
            label="Services"
            title="Clear packages. Fair prices. No surprises."
            description="Choose the package that fits your stage. Every option includes design, development, and launch support."
          />
        </div>
      </section>

      {/* Starter Package */}
      <section id="starter" className="package section section-alt">
        <div className="container">
          <div className="package-layout">
            <div className="package-info">
              <span className="package-tag">For new businesses</span>
              <h2>Starter</h2>
              <p className="package-price">
                <span className="price">$300 – $500</span>
                <span className="timeline">1 week delivery</span>
              </p>
              <p className="package-desc">
                A clean, professional one-page website for businesses that need to establish credibility online 
                and start generating leads. Perfect for freelancers, consultants, and new startups.
              </p>
              
              <h4>This is for you if:</h4>
              <ul className="who-list">
                <li>You're launching a new business and need an online presence fast</li>
                <li>You have a clear service offering and target audience</li>
                <li>You want to validate your business before investing more</li>
                <li>You need something professional, not a DIY template</li>
              </ul>
            </div>
            
            <div className="package-details">
              <div className="details-card">
                <h4>What's included</h4>
                <ul className="included-list">
                  <li>Single-page responsive design</li>
                  <li>Mobile-first development</li>
                  <li>Contact form with email notifications</li>
                  <li>Basic SEO setup (meta tags, sitemap)</li>
                  <li>2 rounds of design revisions</li>
                  <li>Deployment to your hosting</li>
                  <li>14 days of launch support</li>
                </ul>
              </div>
              
              <div className="details-card">
                <h4>What's not included</h4>
                <ul className="excluded-list">
                  <li>Multiple pages</li>
                  <li>Blog or CMS</li>
                  <li>E-commerce functionality</li>
                  <li>Custom animations</li>
                  <li>Copywriting</li>
                </ul>
              </div>

              <div className="details-card support-card">
                <h4>Optional Monthly Support</h4>
                <p className="support-intro">Keep your site updated, secure, and growing.</p>
                <div className="support-tiers">
                  <div className="support-tier">
                    <span className="tier-name">Basic</span>
                    <span className="tier-price">$25/mo</span>
                    <span className="tier-desc">Security updates, backups, uptime monitoring</span>
                  </div>
                  <div className="support-tier">
                    <span className="tier-name">Standard</span>
                    <span className="tier-price">$50/mo</span>
                    <span className="tier-desc">Basic + 2 content updates, minor tweaks</span>
                  </div>
                  <div className="support-tier">
                    <span className="tier-name">Growth</span>
                    <span className="tier-price">$100/mo</span>
                    <span className="tier-desc">Standard + 1 new feature/page per month</span>
                  </div>
                </div>
              </div>
              
              <Button to="/contact" variant="primary" size="lg" fullWidth>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Package */}
      <section id="business" className="package section">
        <div className="container">
          <div className="package-layout">
            <div className="package-info">
              <span className="package-tag featured">Most popular</span>
              <h2>Business</h2>
              <p className="package-price">
                <span className="price">$800 – $1,200</span>
                <span className="timeline">2 week delivery</span>
              </p>
              <p className="package-desc">
                A multi-page website built for businesses ready to grow. Includes SEO foundation, 
                analytics, and everything you need to scale your online presence.
              </p>
              
              <h4>This is for you if:</h4>
              <ul className="who-list">
                <li>You have an established business and want to level up</li>
                <li>You need multiple pages to explain your services properly</li>
                <li>You want to track visitor behavior and optimize conversions</li>
                <li>You're ready to invest in a site that grows with you</li>
              </ul>
            </div>
            
            <div className="package-details">
              <div className="details-card">
                <h4>What's included</h4>
                <ul className="included-list">
                  <li>Up to 5 pages (Home, About, Services, etc.)</li>
                  <li>Custom responsive design</li>
                  <li>Mobile-first development</li>
                  <li>Contact forms with notifications</li>
                  <li>SEO foundation (technical + on-page)</li>
                  <li>Google Analytics setup</li>
                  <li>3 rounds of design revisions</li>
                  <li>Deployment + DNS configuration</li>
                  <li>30 days of launch support</li>
                </ul>
              </div>
              
              <div className="details-card">
                <h4>What's not included</h4>
                <ul className="excluded-list">
                  <li>More than 5 pages (add $100/page)</li>
                  <li>E-commerce functionality</li>
                  <li>Custom web applications</li>
                  <li>Ongoing SEO services</li>
                </ul>
              </div>

              <div className="details-card support-card">
                <h4>Optional Monthly Support</h4>
                <p className="support-intro">Keep your site updated, secure, and growing.</p>
                <div className="support-tiers">
                  <div className="support-tier">
                    <span className="tier-name">Basic</span>
                    <span className="tier-price">$50/mo</span>
                    <span className="tier-desc">Security updates, backups, uptime monitoring</span>
                  </div>
                  <div className="support-tier">
                    <span className="tier-name">Standard</span>
                    <span className="tier-price">$100/mo</span>
                    <span className="tier-desc">Basic + 4 content updates, minor tweaks</span>
                  </div>
                  <div className="support-tier">
                    <span className="tier-name">Growth</span>
                    <span className="tier-price">$200/mo</span>
                    <span className="tier-desc">Standard + 2 new features/pages per month</span>
                  </div>
                </div>
              </div>
              
              <Button to="/contact" variant="primary" size="lg" fullWidth>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Package */}
      <section id="premium" className="package section section-alt">
        <div className="container">
          <div className="package-layout">
            <div className="package-info">
              <span className="package-tag">For complex needs</span>
              <h2>Premium</h2>
              <p className="package-price">
                <span className="price">Custom Pricing</span>
                <span className="timeline">Timeline varies</span>
              </p>
              <p className="package-desc">
                Custom web applications and complex sites for businesses with specific requirements. 
                E-commerce, integrations, custom functionality—we'll build exactly what you need.
              </p>
              
              <h4>This is for you if:</h4>
              <ul className="who-list">
                <li>You need custom functionality beyond a standard website</li>
                <li>You require integrations with third-party services or APIs</li>
                <li>You want e-commerce or payment processing</li>
                <li>You need ongoing development and dedicated support</li>
              </ul>
            </div>
            
            <div className="package-details">
              <div className="details-card">
                <h4>What can be included</h4>
                <ul className="included-list">
                  <li>Unlimited pages</li>
                  <li>Custom UI/UX design</li>
                  <li>E-commerce integration</li>
                  <li>CMS integration (WordPress, Sanity, etc.)</li>
                  <li>API integrations</li>
                  <li>User authentication systems</li>
                  <li>Payment processing</li>
                  <li>Advanced SEO setup</li>
                  <li>Performance optimization</li>
                  <li>Comprehensive documentation</li>
                </ul>
              </div>
              
              <div className="details-card">
                <h4>How it works</h4>
                <ul className="addon-list">
                  <li>Free discovery call to understand your needs</li>
                  <li>Custom proposal with detailed scope</li>
                  <li>Fixed pricing based on requirements</li>
                  <li>Milestone-based payments</li>
                  <li>Dedicated project manager</li>
                </ul>
              </div>

              <div className="details-card support-card">
                <h4>Optional Monthly Support</h4>
                <p className="support-intro">Ongoing development, updates, and priority support.</p>
                <div className="support-tiers">
                  <div className="support-tier">
                    <span className="tier-name">Maintenance</span>
                    <span className="tier-price">$150/mo</span>
                    <span className="tier-desc">Security, backups, monitoring, bug fixes</span>
                  </div>
                  <div className="support-tier">
                    <span className="tier-name">Growth</span>
                    <span className="tier-price">$300/mo</span>
                    <span className="tier-desc">Maintenance + 5 hrs dev time, priority support</span>
                  </div>
                  <div className="support-tier">
                    <span className="tier-name">Scale</span>
                    <span className="tier-price">Custom</span>
                    <span className="tier-desc">Dedicated hours, SLA, direct access</span>
                  </div>
                </div>
              </div>
              
              <Button to="/contact" variant="primary" size="lg" fullWidth>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq section">
        <div className="container">
          <SectionHeader
            label="Questions"
            title="What you might be wondering"
          />
          
          <div className="faq-grid">
            <div className="faq-item">
              <h4>What if I need something between packages?</h4>
              <p>
                We can customize. The packages are starting points. Book a call and we'll 
                figure out what makes sense for your specific situation.
              </p>
            </div>
            
            <div className="faq-item">
              <h4>Do you offer payment plans?</h4>
              <p>
                Yes. We typically split payments into milestones: 50% upfront, 50% at launch. 
                For larger projects, we can discuss monthly payments.
              </p>
            </div>
            
            <div className="faq-item">
              <h4>What if I'm not happy with the design?</h4>
              <p>
                Each package includes revision rounds. If we're still not aligned after revisions, 
                we'll discuss options—including refunding the remaining balance.
              </p>
            </div>
            
            <div className="faq-item">
              <h4>Do I need the monthly support?</h4>
              <p>
                It's optional. Your site will work fine without it. But if you want ongoing updates, 
                security patches, and someone to call when you need changes—it's worth it.
              </p>
            </div>
            
            <div className="faq-item">
              <h4>What about hosting and domain?</h4>
              <p>
                We'll help you set up hosting and connect your domain. Hosting costs are separate 
                (typically $5-20/month depending on needs). You own everything.
              </p>
            </div>
            
            <div className="faq-item">
              <h4>How fast can you start?</h4>
              <p>
                Usually within a few days. We take on a limited number of projects at a time 
                to ensure quality. Book a call to check current availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta section section-alt">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Not sure which package fits?</h2>
            <p>
              Book a free call. We'll learn about your business and recommend the best path forward. 
              No commitment required.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Book a Free Call
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

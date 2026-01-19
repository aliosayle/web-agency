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
            title="Clear packages. Fixed prices. No surprises."
            description="Choose the package that fits your stage. Every option includes strategy, design, development, and launch support."
          />
        </div>
      </section>

      {/* Starter Package */}
      <section id="starter" className="package section section-light">
        <div className="container">
          <div className="package-layout">
            <div className="package-info">
              <span className="package-tag">For new businesses</span>
              <h2>Starter Website</h2>
              <p className="package-price">
                <span className="price">$3,500 – $5,000</span>
                <span className="timeline">2 week delivery</span>
              </p>
              <p className="package-desc">
                A focused, single-page website for businesses that need to establish credibility online 
                and start generating leads. Perfect for service providers, consultants, and new startups.
              </p>
              
              <h4>This is for you if:</h4>
              <ul className="who-list">
                <li>You're launching a new business and need an online presence fast</li>
                <li>You have a clear service offering and target audience</li>
                <li>You want to validate your business before investing in a larger site</li>
                <li>You need something professional, not a DIY template</li>
              </ul>
            </div>
            
            <div className="package-details">
              <div className="details-card">
                <h4>What's included</h4>
                <ul className="included-list">
                  <li>Strategy call to define goals and messaging</li>
                  <li>Single-page responsive design</li>
                  <li>Mobile-first development</li>
                  <li>Contact form with email notifications</li>
                  <li>Basic SEO setup (meta tags, sitemap)</li>
                  <li>2 rounds of design revisions</li>
                  <li>Deployment to your hosting</li>
                  <li>30 days of launch support</li>
                </ul>
              </div>
              
              <div className="details-card">
                <h4>What's not included</h4>
                <ul className="excluded-list">
                  <li>Multiple pages</li>
                  <li>Blog or CMS</li>
                  <li>E-commerce functionality</li>
                  <li>Custom animations</li>
                  <li>Ongoing maintenance</li>
                  <li>Copywriting (we can refer you)</li>
                </ul>
              </div>
              
              <Button to="/contact" variant="primary" size="lg" fullWidth>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Package */}
      <section id="growth" className="package section">
        <div className="container">
          <div className="package-layout">
            <div className="package-info">
              <span className="package-tag featured">Most popular</span>
              <h2>Growth Website</h2>
              <p className="package-price">
                <span className="price">$7,500 – $12,000</span>
                <span className="timeline">4 week delivery</span>
              </p>
              <p className="package-desc">
                A multi-page website built for businesses ready to scale. Includes conversion optimization, 
                analytics, and SEO foundation to help you grow your online presence.
              </p>
              
              <h4>This is for you if:</h4>
              <ul className="who-list">
                <li>You have an established business and want to level up your online presence</li>
                <li>You need multiple pages to explain your services properly</li>
                <li>You want to track visitor behavior and optimize for conversions</li>
                <li>You're ready to invest in a professional site that grows with you</li>
              </ul>
            </div>
            
            <div className="package-details">
              <div className="details-card">
                <h4>What's included</h4>
                <ul className="included-list">
                  <li>Discovery session + competitor research</li>
                  <li>Up to 5 pages (Home, About, Services, etc.)</li>
                  <li>Custom responsive design</li>
                  <li>Mobile-first development</li>
                  <li>Contact forms with CRM integration option</li>
                  <li>SEO foundation (technical + on-page)</li>
                  <li>Google Analytics + event tracking</li>
                  <li>3 rounds of design revisions</li>
                  <li>Content management setup</li>
                  <li>Deployment + DNS configuration</li>
                  <li>60 days of launch support</li>
                </ul>
              </div>
              
              <div className="details-card">
                <h4>What's not included</h4>
                <ul className="excluded-list">
                  <li>More than 5 pages (add $800/page)</li>
                  <li>E-commerce functionality</li>
                  <li>Custom web applications</li>
                  <li>Ongoing SEO services</li>
                  <li>Paid ad management</li>
                </ul>
              </div>
              
              <Button to="/contact" variant="primary" size="lg" fullWidth>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Package */}
      <section id="custom" className="package section section-light">
        <div className="container">
          <div className="package-layout">
            <div className="package-info">
              <span className="package-tag">For complex needs</span>
              <h2>Custom Build</h2>
              <p className="package-price">
                <span className="price">$15,000+</span>
                <span className="timeline">6–8 week delivery</span>
              </p>
              <p className="package-desc">
                Custom web applications and complex sites for businesses with specific technical requirements. 
                Built to your exact specifications with ongoing support options.
              </p>
              
              <h4>This is for you if:</h4>
              <ul className="who-list">
                <li>You need custom functionality beyond a standard website</li>
                <li>You require integrations with third-party services or APIs</li>
                <li>You have complex business logic that needs to live online</li>
                <li>You want a dedicated team for ongoing development</li>
              </ul>
            </div>
            
            <div className="package-details">
              <div className="details-card">
                <h4>What's included</h4>
                <ul className="included-list">
                  <li>In-depth discovery + technical planning</li>
                  <li>Unlimited pages</li>
                  <li>Custom UI/UX design</li>
                  <li>Custom functionality development</li>
                  <li>CMS integration (Sanity, Strapi, etc.)</li>
                  <li>API integrations</li>
                  <li>Advanced SEO setup</li>
                  <li>Performance optimization</li>
                  <li>Security hardening</li>
                  <li>Comprehensive documentation</li>
                  <li>90 days of launch support</li>
                </ul>
              </div>
              
              <div className="details-card">
                <h4>Optional add-ons</h4>
                <ul className="addon-list">
                  <li>E-commerce integration</li>
                  <li>User authentication systems</li>
                  <li>Payment processing</li>
                  <li>Ongoing maintenance retainer</li>
                  <li>Dedicated support hours</li>
                </ul>
              </div>
              
              <Button to="/contact" variant="primary" size="lg" fullWidth>
                Discuss Your Project
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
                Yes. We typically split payments into milestones: 50% upfront, 25% at design 
                approval, 25% at launch. For larger projects, we can do monthly payments.
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
              <h4>Do you write the copy?</h4>
              <p>
                We can help refine and edit copy, but full copywriting is an add-on service. 
                We can also refer you to copywriters we've worked with.
              </p>
            </div>
            
            <div className="faq-item">
              <h4>What about hosting and domain?</h4>
              <p>
                We'll help you set up hosting and connect your domain. Hosting costs are separate 
                (typically $20-50/month depending on needs). You own everything.
              </p>
            </div>
            
            <div className="faq-item">
              <h4>How fast can you start?</h4>
              <p>
                Usually within 1-2 weeks. We take on a limited number of projects at a time 
                to ensure quality. Book a call to check current availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Not sure which package fits?</h2>
            <p>
              Book a free call. We'll learn about your business and recommend the best path forward. 
              No commitment required.
            </p>
            <Button to="/contact" variant="white" size="lg">
              Book a Free Call
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

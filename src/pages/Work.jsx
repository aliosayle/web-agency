import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';
import './Work.css';

export default function Work() {
  const projects = [
    {
      id: 'fintech-landing',
      tag: 'Concept Project',
      title: 'Fintech Startup Landing Page',
      businessType: 'B2B SaaS — Payment Processing',
      problem: 'A fictional payment processing startup needs a landing page that explains complex technology in simple terms and converts visitors into demo requests. The challenge: making financial infrastructure feel accessible without dumbing it down.',
      decisions: [
        'Used progressive disclosure to layer technical details. The hero speaks to outcomes ("Accept payments in 5 minutes"), with technical specs available for those who scroll.',
        'Created a clear visual hierarchy that guides eyes toward CTAs. Removed navigation clutter by using a minimal header.',
        'Built trust through specificity: real numbers, real integrations, real API documentation preview.',
        'Mobile-first approach ensures the key message lands before any scrolling is needed.'
      ],
      techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      outcome: 'A landing page designed to achieve 4-6% demo request conversion rate based on industry benchmarks. Clear value proposition visible within 3 seconds. Technical credibility established through live code examples.',
      color: '#2563eb'
    },
    {
      id: 'law-firm',
      tag: 'Concept Project',
      title: 'Personal Injury Law Firm',
      businessType: 'Legal Services — Personal Injury',
      problem: 'A solo personal injury attorney needs a website that generates qualified leads. Most law firm websites look identical and fail to differentiate. The challenge: standing out in a crowded, skeptical market.',
      decisions: [
        'Focused on client outcomes, not credentials. Led with case results and recovery amounts rather than degrees and awards.',
        'Removed legal jargon entirely. Every sentence written at an 8th-grade reading level.',
        'Prominent phone number and contact form on every section—not just the contact page.',
        'Added FAQ section optimized for the exact questions potential clients search for.'
      ],
      techStack: ['HTML', 'CSS', 'JavaScript', 'Netlify Forms'],
      outcome: 'A website designed to rank for local search terms and convert anxious visitors into consultations. Estimated 8-12 form submissions per 1,000 visitors based on comparable law firm sites.',
      color: '#059669'
    },
    {
      id: 'saas-dashboard',
      tag: 'Concept Project',
      title: 'Analytics SaaS Marketing Site',
      businessType: 'B2B SaaS — Marketing Analytics',
      problem: 'A marketing analytics platform needs to explain a complex product to non-technical marketers. Competitors overwhelm with features. The challenge: communicate value without feature dumping.',
      decisions: [
        'Structured around jobs-to-be-done, not features. "See which campaigns drive revenue" beats "Multi-touch attribution modeling."',
        'Interactive product tour replaces static screenshots. Visitors click through key workflows without signing up.',
        'Social proof from recognizable brands placed strategically throughout—not just a logo bar.',
        'Pricing page with honest comparison to alternatives. Addresses objections before they arise.'
      ],
      techStack: ['Next.js', 'TypeScript', 'Sanity CMS', 'Vercel'],
      outcome: 'A marketing site designed for 15%+ pricing page view rate and 3%+ trial conversion. Clear differentiation from competitors through transparency and UX.',
      color: '#7c3aed'
    },
    {
      id: 'coaching-business',
      tag: 'Concept Project',
      title: 'Executive Coach Personal Brand',
      businessType: 'Professional Services — Executive Coaching',
      problem: 'An executive coach transitioning from referrals to inbound leads needs a site that establishes authority and books discovery calls. No team, just one person. The challenge: building trust when you are the product.',
      decisions: [
        'Focused on specific outcomes with specific clients, not vague transformational claims.',
        'Removed stock photos entirely. Used typography and whitespace to convey premium positioning.',
        'Long-form content on the homepage—executives read more than they admit, especially when making high-ticket decisions.',
        'Calendly embedded directly on site. Removed friction from booking. One click to schedule.'
      ],
      techStack: ['Webflow', 'Calendly Integration', 'Custom CSS'],
      outcome: 'A personal brand site designed to convert 2-4% of visitors into discovery calls. Premium positioning supports $15K+ engagement pricing.',
      color: '#dc2626'
    },
    {
      id: 'ecommerce-brand',
      tag: 'Concept Project',
      title: 'DTC Skincare Brand',
      businessType: 'E-commerce — Beauty & Skincare',
      problem: 'A direct-to-consumer skincare brand needs a Shopify store that educates and converts. Ingredient-focused positioning in a crowded market. The challenge: making science accessible without losing credibility.',
      decisions: [
        'Product pages lead with the problem, not the product. "For dry, sensitive skin" before "Hyaluronic Acid Serum."',
        'Ingredient education built into the shopping experience. Click any ingredient for research-backed explanations.',
        'Before/after photos with realistic expectations and timeframes. No miraculous overnight claims.',
        'Subscription model presented as default with clear savings—but easy to choose one-time purchase.'
      ],
      techStack: ['Shopify', 'Liquid', 'Custom Theme', 'Klaviyo'],
      outcome: 'An e-commerce experience designed for 2.5%+ conversion rate with 30%+ subscription adoption. Higher AOV through education and bundling.',
      color: '#ec4899'
    }
  ];

  return (
    <main className="work-page">
      <SEO 
        title="Our Work"
        description="Concept projects showcasing our web design approach. See the strategy, decisions, and thinking behind each project. Full transparency on how we work."
        keywords="web design portfolio, concept projects, web design case studies"
        canonical="/work"
      />
      {/* Hero */}
      <section className="page-hero section">
        <div className="container">
          <SectionHeader
            label="Our Work"
            title="Concept projects that show how we think"
            description="We're new, so we don't have client work to show. Instead, we've created detailed concept projects that demonstrate our strategy, decision-making, and execution."
          />
          
          <div className="work-disclaimer">
            <p>
              <strong>Full transparency:</strong> These are not real client projects. 
              They're concept pieces we've designed to show our approach. Each one includes 
              the thinking behind every decision—something you rarely see in a traditional portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects-section section">
        <div className="container">
          {projects.map((project) => (
            <article key={project.id} className="project-card" id={project.id}>
              <div className="project-header">
                <span className="project-tag">{project.tag}</span>
                <h2>{project.title}</h2>
                <p className="project-type">{project.businessType}</p>
              </div>
              
              <div className="project-body">
                <div className="project-section">
                  <h4>The Problem</h4>
                  <p>{project.problem}</p>
                </div>
                
                <div className="project-section">
                  <h4>Design & Technical Decisions</h4>
                  <ul className="decisions-list">
                    {project.decisions.map((decision, i) => (
                      <li key={i}>{decision}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-meta">
                  <div className="meta-item">
                    <h4>Tech Stack</h4>
                    <div className="tech-tags">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="project-section outcome">
                  <h4>Projected Outcome</h4>
                  <p>{project.outcome}</p>
                </div>
              </div>
              
              <div className="project-accent" style={{ backgroundColor: project.color }} />
            </article>
          ))}
        </div>
      </section>

      {/* Why Concept Projects */}
      <section className="why-concepts section section-alt">
        <div className="container">
          <div className="concepts-layout">
            <div className="concepts-info">
              <span className="section-label">Why concept projects?</span>
              <h2>Real work shows what. Concepts show why.</h2>
              <p>
                Most portfolios are just pretty pictures. They don't show the strategy, 
                the constraints, or the reasoning behind decisions. You can't tell if the 
                designer got lucky or actually knows what they're doing.
              </p>
              <p>
                Our concept projects are fully documented case studies. You'll see how we 
                analyze problems, make decisions, and think about conversion. That tells you 
                more about what we'll do for you than a carousel of screenshots ever could.
              </p>
            </div>
            
            <div className="concepts-comparison">
              <div className="comparison-card">
                <h4>Traditional portfolio</h4>
                <ul className="comparison-list con">
                  <li>Screenshots without context</li>
                  <li>No explanation of strategy</li>
                  <li>Can't see problem-solving process</li>
                  <li>Looks good, but did it work?</li>
                </ul>
              </div>
              
              <div className="comparison-card">
                <h4>Our concept projects</h4>
                <ul className="comparison-list pro">
                  <li>Full strategic breakdown</li>
                  <li>Every decision explained</li>
                  <li>Clear problem → solution flow</li>
                  <li>Projected outcomes based on data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Want to be our first client project?</h2>
            <p>
              Our first clients get extra attention and our best pricing. 
              We're building our reputation—and we'll work hard to earn your referral.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Let's Talk
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

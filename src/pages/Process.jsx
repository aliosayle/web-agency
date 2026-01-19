import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';
import './Process.css';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      duration: '30 minutes',
      description: 'We start with a free call to understand your business, goals, and challenges. No sales pitch—just an honest conversation about what you need and whether we can help.',
      whatHappens: [
        'Learn about your business and target audience',
        'Discuss your goals and what success looks like',
        'Review your current situation and pain points',
        'Answer your questions about our process',
        'Determine if we\'re a good fit for each other',
      ],
      outcome: 'You\'ll know if we\'re the right team for you. If we are, we move to the next step. If not, no hard feelings—we may even refer you to someone better suited.'
    },
    {
      number: '02',
      title: 'Strategy & Proposal',
      duration: '3–5 days after discovery',
      description: 'We analyze your needs and create a detailed proposal. No surprises. You\'ll know exactly what you\'re getting, when you\'re getting it, and what it costs.',
      whatHappens: [
        'Research your competitors and industry',
        'Define the project scope and requirements',
        'Create a detailed timeline with milestones',
        'Prepare fixed pricing with payment schedule',
        'Draft the project agreement',
      ],
      outcome: 'You receive a comprehensive proposal document. Take your time to review it. Ask questions. Once you approve and sign, we schedule the kickoff.'
    },
    {
      number: '03',
      title: 'Kickoff & Content',
      duration: 'Week 1',
      description: 'We gather everything needed to start design. This is where you provide your content, brand assets, and any specific requirements.',
      whatHappens: [
        'Kickoff call to align on vision and priorities',
        'Collect your content (copy, images, logos)',
        'Review brand guidelines if you have them',
        'Define sitemap and page structure',
        'Identify key user actions and conversion goals',
      ],
      outcome: 'We have everything needed to start designing. You\'ll have a clear checklist of what\'s due and when. No chasing you for assets mid-project.'
    },
    {
      number: '04',
      title: 'Design',
      duration: '1–2 weeks',
      description: 'We design your website in Figma. You\'ll see exactly how it will look before we write any code. Revisions happen here, not during development.',
      whatHappens: [
        'Create wireframes to establish layout and hierarchy',
        'Design high-fidelity mockups for key pages',
        'Design mobile and tablet variations',
        'Present designs with walkthrough call',
        'Incorporate your feedback (2–3 revision rounds)',
      ],
      outcome: 'Approved designs that you\'re confident in. We don\'t move to development until you sign off. This prevents costly changes later.'
    },
    {
      number: '05',
      title: 'Development',
      duration: '1–3 weeks',
      description: 'We build your site with clean, fast, accessible code. You\'ll see progress in a staging environment and can flag issues as we go.',
      whatHappens: [
        'Set up development environment and hosting',
        'Build responsive pages from approved designs',
        'Integrate contact forms and any third-party tools',
        'Optimize for speed and search engines',
        'Test across browsers and devices',
      ],
      outcome: 'A fully functional website on a staging URL. You can test everything before it goes live. We fix any bugs you find.'
    },
    {
      number: '06',
      title: 'Review & Revisions',
      duration: '3–5 days',
      description: 'You test the staging site thoroughly. We fix issues and make final adjustments. This is your last chance for changes before launch.',
      whatHappens: [
        'You review every page and feature',
        'Test all forms, links, and interactions',
        'Provide consolidated feedback',
        'We implement final changes',
        'Conduct final QA and testing',
      ],
      outcome: 'A launch-ready website that you\'ve fully tested and approved. All issues resolved. Ready to go live.'
    },
    {
      number: '07',
      title: 'Launch & Handoff',
      duration: '1 day + ongoing support',
      description: 'We take your site live, connect your domain, and hand over everything you need to manage it going forward.',
      whatHappens: [
        'Deploy to production hosting',
        'Connect your domain and configure DNS',
        'Set up analytics and tracking',
        'Submit sitemap to search engines',
        'Provide documentation and training',
      ],
      outcome: 'Your website is live and you own everything. We provide 14-30 days of launch support (depending on package) to fix any issues that come up.'
    },
  ];

  return (
    <main className="process-page">
      <SEO 
        title="Our Process"
        description="A clear 7-step process from discovery to launch. Fixed pricing, predictable timelines, and no surprises. See exactly how we work."
        keywords="web design process, website development timeline, how we work"
        canonical="/process"
      />
      {/* Hero */}
      <section className="page-hero section">
        <div className="container">
          <SectionHeader
            label="Our Process"
            title="A clear path from idea to launch"
            description="We've refined our process to eliminate surprises, reduce back-and-forth, and deliver on time. Here's exactly what working with us looks like."
          />
          
          <div className="process-highlights">
            <div className="highlight">
              <span className="highlight-value">7</span>
              <span className="highlight-label">Clear steps</span>
            </div>
            <div className="highlight">
              <span className="highlight-value">1–2</span>
              <span className="highlight-label">Weeks to launch</span>
            </div>
            <div className="highlight">
              <span className="highlight-value">Fixed</span>
              <span className="highlight-label">Pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="process-steps-section section">
        <div className="container">
          {steps.map((step, index) => (
            <div key={step.number} className={`process-step-full ${index % 2 === 1 ? 'alt' : ''}`}>
              <div className="step-header">
                <span className="step-num">{step.number}</span>
                <div>
                  <h2>{step.title}</h2>
                  <span className="step-duration">{step.duration}</span>
                </div>
              </div>
              
              <div className="step-body">
                <p className="step-intro">{step.description}</p>
                
                <div className="step-details">
                  <div className="step-what">
                    <h4>What happens</h4>
                    <ul>
                      {step.whatHappens.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="step-outcome">
                    <h4>Outcome</h4>
                    <p>{step.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to Expect */}
      <section className="expectations section section-alt">
        <div className="container">
          <SectionHeader
            label="Expectations"
            title="What we need from you"
            description="Successful projects require participation. Here's what we'll need from you to stay on schedule."
          />
          
          <div className="expectations-grid">
            <div className="expectation-card">
              <h3>Timely feedback</h3>
              <p>
                We build buffer into our timelines, but delays in feedback delay the project. 
                We'll agree on review windows upfront—typically 2-3 business days for major reviews.
              </p>
            </div>
            
            <div className="expectation-card">
              <h3>Content ready</h3>
              <p>
                We can't design effectively without real content. We'll provide a content checklist 
                at kickoff with clear deadlines. Stock content leads to stock results.
              </p>
            </div>
            
            <div className="expectation-card">
              <h3>Decision maker access</h3>
              <p>
                We need to work with someone who can approve decisions. If multiple stakeholders 
                are involved, please consolidate feedback before sending it.
              </p>
            </div>
            
            <div className="expectation-card">
              <h3>Trust the process</h3>
              <p>
                We'll push back when we disagree. We'll explain our reasoning. We ask that you 
                consider our recommendations—that's what you're paying for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revision Policy */}
      <section className="revisions section">
        <div className="container">
          <div className="revisions-layout">
            <div className="revisions-info">
              <span className="section-label">Important</span>
              <h2>About revisions</h2>
              <p>
                Unlimited revisions sound great until they lead to scope creep, delayed launches, 
                and frustrated teams. We take a different approach.
              </p>
              <p>
                Each package includes a defined number of revision rounds at each stage. This keeps 
                projects focused and on schedule. Additional revisions can be purchased if needed.
              </p>
            </div>
            
            <div className="revisions-breakdown">
              <div className="revision-tier">
                <h4>Starter</h4>
                <span>2 design revisions</span>
              </div>
              <div className="revision-tier">
                <h4>Business</h4>
                <span>3 design revisions</span>
              </div>
              <div className="revision-tier">
                <h4>Premium</h4>
                <span>Negotiated per project</span>
              </div>
              <p className="revision-note">
                A revision round means consolidated feedback implemented once. 
                Not individual back-and-forth on every small change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta section section-alt">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to start?</h2>
            <p>
              Book a discovery call. It's free, it's 30 minutes, and you'll know exactly 
              what working with us looks like.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Book Your Discovery Call
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

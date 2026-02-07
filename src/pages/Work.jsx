import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import './Work.css';

export default function Work() {
  const projects = [
    {
      id: 'science-contact-hub',
      tag: 'Client Work',
      title: 'Science Contact Hub',
      businessType: 'Research Collaboration Platform',
      problem: 'A research-focused organization needed a clear, professional platform to connect researchers and facilitate collaboration across the scientific community. The site had to serve as a central hub for science contact and discovery.',
      decisions: [
        'Designed a clean, focused presence that puts research collaboration and contact at the center.',
        'Structured content and navigation to support researchers finding and connecting with the right contacts.',
        'Built for clarity and credibility in an academic and scientific context.'
      ],
      techStack: ['Custom build'],
      outcome: 'A live research collaboration platform that acts as the central hub for science contact and community connection.',
      color: '#0ea5e9',
      url: 'https://www.sciencecontacthub.com/'
    },
    {
      id: 'celticverbs-ai',
      tag: 'Client Work',
      title: 'CelticVerbs AI',
      businessType: 'Industrial AI Integration & Engineering',
      problem: 'CelticVerbs AI needed a website that communicates their complex offering—LLM and automation integration inside enterprise systems—to both technical and executive audiences. The challenge: establishing credibility through methodology, live metrics, and responsible AI governance without overwhelming visitors.',
      decisions: [
        'Structured the site around core delivery: integration engineering, automation design, production operations, and measured outcomes.',
        'Surfaced industry-specific proof points with real numbers: integration nodes, enterprise partners, reliability records, and workflow metrics.',
        'Clear four-phase methodology (Discovery, Design, Build, Operate) so prospects see how engagements run.',
        'Platform-agnostic tech stack visibility (cloud, APIs, data, security, industrial systems) for technical buyers.',
        'Live operational log and capacity status to reinforce production-grade positioning.',
        'Dedicated Responsible AI section covering scope, human oversight, and auditability for regulated industries.'
      ],
      techStack: ['Modern front-end', 'Content strategy', 'Conversion-focused UX'],
      outcome: 'A production-grade marketing site that positions CelticVerbs AI for industrial and regulated sectors, with clear pathways for integration discovery and engineering contact.',
      color: '#1e3a5f',
      url: 'https://celticverbs.com/'
    },
    {
      id: 'ironway-subinfra',
      tag: 'Client Work',
      title: 'Ironway Subinfra',
      businessType: 'Digital Systems Integration & Engineering',
      problem: 'A digital systems integration and engineering company needed a professional web presence to communicate their capabilities and attract B2B clients. The site had to convey technical credibility and support lead generation.',
      decisions: [
        'Focused on clarity and professionalism for engineering and operations audiences.',
        'Structured content around digital systems integration and engineering services.',
        'Designed to support discovery and contact for potential partners and clients.'
      ],
      techStack: ['Custom build'],
      outcome: 'A clear, professional site that represents Ironway Subinfra’s brand and supports business development in digital systems integration.',
      color: '#475569',
      url: 'https://www.ironwaysubinfra.com/'
    },
    {
      id: 'saned',
      tag: 'Client Work',
      title: 'Saned',
      businessType: 'Web presence',
      problem: 'Saned needed a clear, professional website to represent their organization online and reach their audience effectively.',
      decisions: [
        'Designed a focused, accessible site aligned with their goals and brand.',
        'Structured content and navigation for clear communication and discovery.',
        'Built and deployed for reliability and performance on Netlify.'
      ],
      techStack: ['Custom build', 'Netlify'],
      outcome: 'A live website that serves as Saned’s central presence online.',
      color: '#0d9488',
      url: 'https://sanedorg.netlify.app/'
    },
    {
      id: 'gym-pos',
      tag: 'Client Work',
      title: 'Gym Membership & POS System',
      businessType: 'Fitness — Membership & Point of Sale',
      problem: 'A gym needed a full-featured system to manage memberships, check-ins, payments, and point-of-sale operations under one roof. The challenge was delivering a single platform that handles sign-ups, renewals, access control, and in-house retail and services.',
      decisions: [
        'Built an integrated gym management platform with membership lifecycle (sign-up, renewals, upgrades, freezes, cancellations).',
        'Designed and implemented a complete POS for retail, supplements, merchandise, and service add-ons at the front desk.',
        'Unified reporting and dashboards for revenue, attendance, and inventory across membership and POS.',
        'Role-based access for staff, managers, and owners with audit trails for compliance.'
      ],
      techStack: ['Full-stack application', 'Payments integration', 'Membership & POS modules'],
      outcome: 'A single system that runs the gym’s membership and front-desk operations end to end, with all features, reporting, and controls in one place.',
      color: '#16a34a'
    },
    {
      id: 'orca',
      tag: 'Client Work',
      title: 'ORCA — Importation & Supply Chain Management',
      businessType: 'Enterprise — Import & Supply Chain',
      problem: 'A large company needed a dedicated system to manage importation, logistics, and supply chain operations. The challenge was handling orders, customs, inventory, and supplier coordination at scale with full visibility and control.',
      decisions: [
        'Designed ORCA as a central platform for import workflows: purchase orders, shipping, customs documentation, and landed cost tracking.',
        'Built supply chain management features for supplier management, lead times, reorder points, and multi-location inventory.',
        'Integrated reporting and analytics for spend, lead times, stock levels, and compliance across the import pipeline.',
        'Scaled architecture and access controls for enterprise use across teams and regions.'
      ],
      techStack: ['Enterprise platform', 'Supply chain logic', 'Import & customs workflows', 'Reporting & analytics'],
      outcome: 'ORCA delivers end-to-end importation and supply chain management for the organization, with full visibility, controls, and reporting at scale.',
      color: '#0369a1'
    }
  ];

  return (
    <main className="work-page">
      {/* Hero */}
      <section className="page-hero section">
        <div className="container">
          <SectionHeader
            label="Our Work"
            title="Projects we've built"
            description="Websites and software we've designed and built for clients—from marketing sites to membership systems and enterprise supply chain platforms."
          />
          
          <div className="work-disclaimer">
            <p>
              Where we can share them, projects include a link to the <strong>live site</strong>. Some work is confidential or internal and is listed without a public link.
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
                <div className="project-header-top">
                  <span className="project-tag">{project.tag}</span>
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                      View live site →
                    </a>
                  )}
                </div>
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
                  <h4>Outcome</h4>
                  <p>{project.outcome}</p>
                </div>
              </div>
              
              <div className="project-accent" style={{ backgroundColor: project.color }} />
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Have a project in mind?</h2>
            <p>
              From marketing sites to membership systems and enterprise software, 
              we design and build solutions that fit your business.
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

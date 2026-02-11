import './PageStyles.css'

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Professional Services</h1>
            <p className="tagline">Strategic communications and media production services</p>
            <p className="lead">
              AG Media offers comprehensive professional services combining South Sudanese 
              cultural expertise with Australian media industry standards. Our institutional 
              approach ensures quality, authenticity, and strategic impact for all client partnerships.
            </p>
          </div>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          
          <div className="services-overview">
            <h2>Service Portfolio</h2>
            <p className="overview-text">
              Our professional services are designed for institutions, corporations, government agencies, 
              and organisations requiring authoritative South Sudanese cultural perspective combined 
              with media production excellence. Each engagement is managed through formal project 
              protocols ensuring accountability, quality assurance, and measurable outcomes.
            </p>
          </div>

          <div className="services-grid">
            
            <div className="service-offering">
              <div className="service-header">
                <div className="service-icon">🎬</div>
                <h3>Documentary Production</h3>
                <span className="service-type">Full-Service Production</span>
              </div>
              <div className="service-description">
                <p>Comprehensive documentary production services from concept development through post-production and distribution. Our team combines journalistic rigor with cinematic storytelling to create compelling narratives that meet broadcast and festival standards.</p>
                
                <div className="service-capabilities">
                  <h4>Production Capabilities</h4>
                  <ul>
                    <li>Concept development and research</li>
                    <li>Pre-production planning and logistics</li>
                    <li>Multi-camera field production</li>
                    <li>Post-production and color grading</li>
                    <li>Distribution strategy and delivery</li>
                    <li>Festival submission and promotion</li>
                  </ul>
                </div>

                <div className="target-clients">
                  <strong>Ideal for:</strong> Broadcasting networks, educational institutions, 
                  cultural organizations, government agencies, NGOs
                </div>
              </div>
            </div>

            <div className="service-offering">
              <div className="service-header">
                <div className="service-icon">📷</div>
                <h3>Photography & Videography</h3>
                <span className="service-type">Visual Communications</span>
              </div>
              <div className="service-description">
                <p>Professional visual content creation services specializing in cultural documentation, corporate communications, and event coverage. Our approach combines technical excellence with cultural sensitivity and journalistic integrity.</p>
                
                <div className="service-capabilities">
                  <h4>Technical Expertise</h4>
                  <ul>
                    <li>Corporate photography and headshots</li>
                    <li>Event documentation and coverage</li>
                    <li>Commercial videography</li>
                    <li>Cultural ceremony documentation</li>
                    <li>Digital asset management</li>
                    <li>Multi-platform content optimization</li>
                  </ul>
                </div>

                <div className="target-clients">
                  <strong>Ideal for:</strong> Corporations, cultural institutions, event organizers, 
                  government departments, community organizations
                </div>
              </div>
            </div>

            <div className="service-offering">
              <div className="service-header">
                <div className="service-icon">📊</div>
                <h3>Media & PR Consultancy</h3>
                <span className="service-type">Strategic Communications</span>
              </div>
              <div className="service-description">
                <p>Strategic communications consultancy services focusing on South Sudanese community engagement, cultural competency, and media strategy. Our advisory approach combines institutional knowledge with practical implementation frameworks.</p>
                
                <div className="service-capabilities">
                  <h4>Consultancy Services</h4>
                  <ul>
                    <li>Communications strategy development</li>
                    <li>Media relations and outreach</li>
                    <li>Crisis communication planning</li>
                    <li>Stakeholder engagement protocols</li>
                    <li>Cultural competency assessment</li>
                    <li>Message development and testing</li>
                  </ul>
                </div>

                <div className="target-clients">
                  <strong>Ideal for:</strong> Government agencies, multinational corporations, 
                  political campaigns, advocacy organizations, international development agencies
                </div>
              </div>
            </div>

            <div className="service-offering">
              <div className="service-header">
                <div className="service-icon">🎓</div>
                <h3>Training & Workshops</h3>
                <span className="service-type">Capacity Development</span>
              </div>
              <div className="service-description">
                <p>Professional development programs designed to build cultural competency, media literacy, and cross-cultural communication skills. Our training methodology combines academic frameworks with practical application and real-world case studies.</p>
                
                <div className="service-capabilities">
                  <h4>Program Offerings</h4>
                  <ul>
                    <li>Cultural competency training</li>
                    <li>Media literacy workshops</li>
                    <li>Cross-cultural communication</li>
                    <li>Community engagement protocols</li>
                    <li>Journalism ethics and standards</li>
                    <li>Executive briefings and consultations</li>
                  </ul>
                </div>

                <div className="target-clients">
                  <strong>Ideal for:</strong> Corporate training departments, educational institutions, 
                  government agencies, healthcare organizations, media companies
                </div>
              </div>
            </div>

          </div>

          <div className="engagement-process">
            <h3>Professional Engagement Process</h3>
            <div className="process-steps">
              <div className="process-step">
                <span className="step-number">01</span>
                <h4>Initial Consultation</h4>
                <p>Comprehensive needs assessment and project scoping</p>
              </div>
              <div className="process-step">
                <span className="step-number">02</span>
                <h4>Proposal Development</h4>
                <p>Detailed project proposal with timelines and deliverables</p>
              </div>
              <div className="process-step">
                <span className="step-number">03</span>
                <h4>Contract Agreement</h4>
                <p>Formal service agreement and project commencement</p>
              </div>
              <div className="process-step">
                <span className="step-number">04</span>
                <h4>Project Delivery</h4>
                <p>Professional execution with regular milestone reporting</p>
              </div>
            </div>
          </div>

          <div className="contact-services">
            <h3>Professional Inquiries</h3>
            <p>
              For detailed service information, capability statements, or to discuss specific 
              project requirements, please contact our business development team. All inquiries 
              are managed through formal consultation processes to ensure appropriate project fit 
              and resource allocation.
            </p>
            <div className="contact-info">
              <strong>Business Development:</strong> services@agmedia.com.au<br/>
              <strong>Project Inquiries:</strong> +61 (0)2 XXXX XXXX
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Services
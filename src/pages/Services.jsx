import styles from './Services.module.css'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Documentary Production',
      description: 'Research-informed documentary production focused on cultural documentation, civic engagement, and institutional storytelling.',
      scope: [
        'Concept development and research',
        'Field production and interviews',
        'Post-production and editing',
        'Archival documentation',
        'Distribution consultation'
      ]
    },
    {
      id: 2,
      title: 'Photography & Videography',
      description: 'Editorial documentation and institutional coverage for organizations requiring cultural authenticity and professional standards.',
      scope: [
        'Event documentation',
        'Institutional photography',
        'Cultural ceremony coverage',
        'Editorial portraiture',
        'Archival image management'
      ]
    },
    {
      id: 3,
      title: 'Media & Communications Consultancy',
      description: 'Strategic communications advisory for organisations, NGOs, and community institutions seeking structured media engagement and narrative clarity.',
      scope: [
        'Media strategy development',
        'Public engagement frameworks',
        'Campaign documentation',
        'Institutional messaging support',
        'Crisis communication protocols'
      ]
    },
    {
      id: 4,
      title: 'Training & Workshops',
      description: 'Educational programs addressing media literacy, documentary ethics, and community documentation practices for institutional capacity building.',
      scope: [
        'Media literacy training',
        'Documentary ethics workshops',
        'Youth storytelling programs',
        'Community documentation training',
        'Cultural competency development'
      ]
    }
  ]

  return (
    <div className={styles.servicesPage}>
      {/* Minimal Hero */}
      <section className={styles.servicesHero}>
        <div className={styles.container}>
          <h1>Services</h1>
          <p>
            AG Media provides professional media production, documentation, and communications services 
            aligned with international standards and grounded in South Sudanese cultural understanding.
          </p>
        </div>
      </section>

      {/* Service Overview Statement */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <p className={styles.overviewText}>
            Our services address institutional requirements for cultural documentation, 
            professional media production, and strategic communications within South Sudanese contexts.
          </p>
        </div>
      </section>

      {/* Service Blocks */}
      <section className={styles.servicesContent}>
        <div className={styles.container}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceBlock}>
              <h2>{service.title}</h2>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.serviceScope}>
                {service.scope.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process & Standards */}
      <section className={styles.standardsSection}>
        <div className={styles.container}>
          <h2>Professional Standards</h2>
          <p>
            All services are delivered in accordance with ethical documentation practices, 
            cultural sensitivity protocols, and professional media production standards. 
            Projects are managed through structured consultation processes ensuring 
            accountability and measurable outcomes.
          </p>
          
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>01</span>
              <h4>Initial Consultation</h4>
              <p>Comprehensive project assessment and scope definition</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>02</span>
              <h4>Proposal Development</h4>
              <p>Detailed project framework with deliverables and timelines</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>03</span>
              <h4>Project Execution</h4>
              <p>Professional delivery with milestone reporting and quality assurance</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>04</span>
              <h4>Documentation & Handover</h4>
              <p>Complete project documentation and asset transfer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className={styles.collaborationSection}>
        <div className={styles.container}>
          <h2>Collaborate With AG Media</h2>
          <p>
            Organisations and institutions seeking responsible media production or advisory support 
            may contact AG Media to discuss structured collaboration opportunities.
          </p>
          <div className={styles.contactInfo}>
            <p>
              <strong>Professional Inquiries:</strong> services@agmedia.com.au<br/>
              <strong>Project Consultation:</strong> Available by appointment
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
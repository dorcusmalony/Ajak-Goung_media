import './PageStyles.css'

const Services = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Services</h1>
          <p className="lead">
            Professional communications and cultural consultation services for 
            organisations working with South Sudanese communities.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="services-grid">
            <div className="service">
              <h2>Cultural Consultation</h2>
              <p>Expert guidance for organisations, researchers, and policymakers requiring authentic South Sudanese cultural context and community understanding.</p>
            </div>
            <div className="service">
              <h2>Media Production</h2>
              <p>Professional content creation services including articles, documentaries, and multimedia projects that meet international standards.</p>
            </div>
            <div className="service">
              <h2>Community Engagement</h2>
              <p>Strategic communications planning and implementation for organisations seeking to engage effectively with South Sudanese communities.</p>
            </div>
            <div className="service">
              <h2>Educational Resources</h2>
              <p>Development of culturally appropriate educational materials and resources for academic institutions and training programmes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
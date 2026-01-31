import './PageStyles.css'

const Newsroom = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Newsroom</h1>
          <p className="lead">
            Professional journalism covering South Sudanese communities with 
            the rigour and integrity of established news institutions.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="newsroom-info">
            <div className="editorial-standards">
              <h2>Editorial Standards</h2>
              <p>
                Our newsroom operates under strict editorial guidelines, maintaining 
                independence, accuracy, and fairness in all reporting. We adhere to 
                Australian Press Council standards whilst respecting South Sudanese 
                cultural protocols.
              </p>
            </div>
            
            <div className="coverage-areas">
              <h2>Coverage Areas</h2>
              <ul>
                <li>Community news and developments</li>
                <li>Cultural events and celebrations</li>
                <li>Policy analysis affecting South Sudanese communities</li>
                <li>Diaspora experiences and achievements</li>
                <li>Educational and youth initiatives</li>
                <li>Business and economic developments</li>
              </ul>
            </div>

            <div className="contact-newsroom">
              <h2>Media Enquiries</h2>
              <p>
                For press releases, story tips, or media enquiries, please contact 
                our editorial team. We welcome community input whilst maintaining 
                editorial independence and professional standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Newsroom
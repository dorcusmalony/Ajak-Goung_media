import './PageStyles.css'

const JoinSupport = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Join & Support</h1>
          <p className="lead">
            Support our mission to preserve South Sudanese culture and provide 
            professional media services to our communities.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="support-options">
            <div className="support-option">
              <h2>Community Contributors</h2>
              <p>
                We welcome community members who wish to contribute stories, cultural 
                knowledge, or expertise. All contributions are reviewed by our editorial 
                team to ensure they meet our professional standards.
              </p>
            </div>

            <div className="support-option">
              <h2>Professional Partnerships</h2>
              <p>
                Organisations, educational institutions, and media outlets interested 
                in partnering with AG Media to better serve South Sudanese communities 
                are encouraged to reach out.
              </p>
            </div>

            <div className="support-option">
              <h2>Institutional Support</h2>
              <p>
                As a serious cultural documentation platform, we seek partnerships 
                with institutions that share our commitment to preserving South 
                Sudanese heritage and supporting community development.
              </p>
            </div>

            <div className="support-option">
              <h2>Volunteer Opportunities</h2>
              <p>
                Skilled professionals in journalism, cultural research, translation, 
                and digital media are invited to contribute their expertise to our 
                long-term institutional mission.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JoinSupport
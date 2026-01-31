import './PageStyles.css'

const Contact = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Contact</h1>
          <p className="lead">
            Connect with AG Media for professional enquiries, media requests, 
            or institutional partnerships.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-section">
              <h2>Editorial Enquiries</h2>
              <p>
                For story submissions, press releases, or editorial matters, 
                please contact our newsroom team. All submissions are reviewed 
                according to our professional editorial standards.
              </p>
              <p><strong>Email:</strong> editorial@agmedia.com.au</p>
            </div>

            <div className="contact-section">
              <h2>Partnership Opportunities</h2>
              <p>
                Organisations interested in partnering with AG Media for cultural 
                documentation, community engagement, or educational initiatives 
                should reach out to our partnerships team.
              </p>
              <p><strong>Email:</strong> partnerships@agmedia.com.au</p>
            </div>

            <div className="contact-section">
              <h2>Media & Communications</h2>
              <p>
                For media enquiries, interview requests, or communications 
                services, please contact our media relations team.
              </p>
              <p><strong>Email:</strong> media@agmedia.com.au</p>
            </div>

            <div className="contact-section">
              <h2>General Enquiries</h2>
              <p>
                For all other enquiries, including community contributions 
                and general information about AG Media's work and mission.
              </p>
              <p><strong>Email:</strong> info@agmedia.com.au</p>
            </div>
          </div>

          <div className="contact-note">
            <p>
              <strong>Please note:</strong> AG Media operates as a professional 
              media institution. All enquiries are handled with appropriate 
              editorial consideration and response times reflect our commitment 
              to quality and thoroughness.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
import './PageStyles.css'

const MediaContent = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Media & Content</h1>
          <p className="lead">
            Professional media content that documents South Sudanese experiences 
            with journalistic integrity and cultural authenticity.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="content-types">
            <div className="content-type">
              <h2>Articles & Features</h2>
              <p>In-depth journalism covering South Sudanese community issues, cultural events, and diaspora experiences.</p>
            </div>
            <div className="content-type">
              <h2>Interviews & Profiles</h2>
              <p>Conversations with community leaders, cultural practitioners, and individuals shaping South Sudanese narratives.</p>
            </div>
            <div className="content-type">
              <h2>Cultural Documentation</h2>
              <p>Systematic preservation of traditions, ceremonies, and cultural practices for educational and archival purposes.</p>
            </div>
            <div className="content-type">
              <h2>Analysis & Commentary</h2>
              <p>Expert perspectives on policy, social issues, and cultural developments affecting South Sudanese communities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MediaContent
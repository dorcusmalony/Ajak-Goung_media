import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>AG Media</h1>
            <h2>Cultural Documentation & Communications Platform</h2>
            <p className="hero-description">
              A serious media, communications and cultural documentation platform 
              rooted in South Sudanese experience and Australian professional standards. 
              We communicate credibility, cultural authority, and long-term institutional vision 
              through newsroom discipline with ancestral memory.
            </p>
            <div className="hero-actions">
              <Link to="/about" className="btn btn-primary">About Our Mission</Link>
              <Link to="/our-work" className="btn btn-secondary">View Our Work</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-statement">
        <div className="container">
          <h2>Our Purpose</h2>
          <div className="mission-grid">
            <div className="mission-item">
              <h3>Cultural Authority</h3>
              <p>
                Documenting and preserving South Sudanese cultural heritage with 
                the depth and respect it deserves, bridging ancestral wisdom with 
                contemporary discourse.
              </p>
            </div>
            <div className="mission-item">
              <h3>Professional Standards</h3>
              <p>
                Maintaining Australian journalistic excellence whilst honouring 
                South Sudanese storytelling traditions and community values.
              </p>
            </div>
            <div className="mission-item">
              <h3>Institutional Vision</h3>
              <p>
                Building a lasting platform that serves communities at home and 
                in the diaspora, educators, researchers, and international audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="audiences">
        <div className="container">
          <h2>Who We Serve</h2>
          <div className="audience-grid">
            <div className="audience-card">
              <h4>South Sudanese Communities</h4>
              <p>At home and in the diaspora, connecting our people through shared stories and cultural documentation.</p>
            </div>
            <div className="audience-card">
              <h4>Educational Sector</h4>
              <p>Youth, educators, and researchers seeking authentic South Sudanese perspectives and cultural insights.</p>
            </div>
            <div className="audience-card">
              <h4>Policy & Development</h4>
              <p>NGOs and policymakers requiring credible cultural context and community understanding.</p>
            </div>
            <div className="audience-card">
              <h4>International Audiences</h4>
              <p>Global communities interested in African storytelling, culture, and civic education.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
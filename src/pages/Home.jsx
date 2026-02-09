import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>AG Media</h1>
            <h2> AG Media is a casual  media, communications and cultural documentation platform rooted in South Sudanese experience and Australian professional standards. 
              The site must communicate credibility, cultural authority, and long-term institutional vision. Think newsroom discipline with ancestral memory.
              Documenting South Sudanese Stories with Newsroom Discipline</h2>
            <p className="hero-description">
              The flatform exist to preserve South Sudanese cultural memory and elevate community voices 
              through professional documentary filmmaking, investigative journalism, and authentic storytelling. 
              Rooted in ancestral wisdom, driven by Australian media standards, we bridge heritage and modernity 
              for communities, educators, and global audiences.
            </p>
            <div className="hero-actions">
              <Link to="/media-content" className="btn btn-success">
                <span className="btn-icon">▶</span> Watch Our Documentaries
              </Link>
              <Link to="/newsroom" className="btn btn-success">
                <span className="btn-icon"></span> Read Our Stories
              </Link>
              <Link to="/join-support" className="btn btn-success">
                <span className="btn-icon">🤝</span> Collaborate With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <p className="section-intro">
            Flagship documentaries and investigations that exemplify our commitment to cultural preservation and truth-telling.
          </p>
          <div className="projects-grid">
            <div className="project-card featured">
              <div className="project-badge">Featured Documentary</div>
              <h3>Voices of Juba: Urban Youth in South Sudan</h3>
              <p className="project-description">
                A 60-minute documentary exploring the aspirations, challenges, and resilience of young South Sudanese 
                navigating identity between tradition and modernity in the capital city.
              </p>
              <div className="project-meta">
                <span className="meta-item">Documentary</span>
                <span className="meta-item">2025</span>
                <span className="meta-item">60 min</span>
              </div>
              <Link to="/media-content" className="project-link">Watch Now →</Link>
            </div>
            
            <div className="project-card">
              <div className="project-badge">Investigation</div>
              <h3>The Diaspora Bridge: Remittances & Community</h3>
              <p className="project-description">
                An investigative series examining how Australian-South Sudanese communities maintain cultural 
                and economic connections across continents.
              </p>
              <div className="project-meta">
                <span className="meta-item">Journalism</span>
                <span className="meta-item">2025</span>
                <span className="meta-item">5-part series</span>
              </div>
              <Link to="/newsroom" className="project-link">Read Series →</Link>
            </div>

            <div className="project-card">
              <div className="project-badge">Cultural Archive</div>
              <h3>Oral Histories: Elders Speak</h3>
              <p className="project-description">
                Preserving the wisdom of South Sudanese elders through recorded interviews, transcriptions, 
                and educational resources for future generations.
              </p>
              <div className="project-meta">
                <span className="meta-item">Archive</span>
                <span className="meta-item">Ongoing</span>
                <span className="meta-item">50+ interviews</span>
              </div>
              <Link to="/our-work" className="project-link">Explore Archive →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Join Our Mission</h2>
          <p className="cta-intro">
            Whether you're a community member with a story, an educator seeking resources, 
            or a partner organization—there's a place for you in this work.
          </p>
          <div className="cta-grid">
            <div className="cta-card">
              <div className="cta-icon"></div>
              <h3>Share Your Story</h3>
              <p>Have a story that needs to be told? We're listening. Our documentary team works with communities to amplify authentic voices.</p>
              <Link to="/contact" className="cta-link">Get in Touch →</Link>
            </div>
            <div className="cta-card">
              <div className="cta-icon">💰</div>
              <h3>Support Our Work</h3>
              <p>Help us continue producing high-quality cultural documentation through donations, sponsorships, or partnerships.</p>
              <Link to="/join-support" className="cta-link">Ways to Support →</Link>
            </div>
            <div className="cta-card">
              <div className="cta-icon">📚</div>
              <h3>Use Our Resources</h3>
              <p>Educators and researchers can access our growing archive of documentaries, articles, and cultural materials.</p>
              <Link to="/services" className="cta-link">Access Resources →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
import './About.css'
import ajakPhoto from '../assets/ajakdeng.jpeg'
import peterPhoto from '../assets/peter.jpeg'
import cholPhoto from '../assets/chol.jpeg'
import abrahamPhoto from '../assets/abraham.jpeg'

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About AG Media</h1>
            <p className="lead">
              An institutional media platform committed to cultural preservation, journalistic integrity, 
              and civic responsibility—documenting South Sudanese experience with professional rigor and ancestral respect.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              AG Media was founded on the recognition that South Sudanese communities—both at home and across 
              the diaspora—needed a media platform that could bridge the gap between ancestral storytelling 
              traditions and modern journalistic standards. We emerged from a commitment to preserve cultural 
              memory while addressing the urgent need for credible, professional documentation of our community's 
              evolving narrative.
            </p>
            <p>
              Unlike casual creator platforms or community blogs, AG Media operates as a serious institutional 
              endeavor. We combine newsroom discipline with cultural authority, ensuring that every documentary, 
              article, and archive we produce meets rigorous professional standards while honoring the depth and 
              complexity of South Sudanese heritage.
            </p>
            <p>
              Our platform serves multiple audiences: South Sudanese communities seeking authentic representation, 
              educators and researchers requiring credible sources, policymakers needing cultural context, and 
              global audiences interested in African storytelling. Through this work, we contribute to civic 
              discourse, cultural preservation, and institutional knowledge-building.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <h2>Mission & Vision</h2>
          <div className="mission-vision-content">
            <div className="mission-text">
              <h3>Mission</h3>
              <p>
                To preserve, document, and amplify South Sudanese cultural heritage through professional 
                media production that bridges ancestral wisdom with contemporary storytelling. We serve 
                as a trusted institutional platform that honors community voices while meeting rigorous 
                journalistic standards, ensuring authentic representation for current and future generations.
              </p>
            </div>

            <div className="vision-text">
              <h3>Vision</h3>
              <p>
                To become the definitive institutional archive and media resource for South Sudanese 
                cultural knowledge, civic discourse, and community narratives. We envision a future where 
                our documented heritage serves as both cultural foundation and educational resource, 
                empowering informed civic participation and preserving invaluable community wisdom 
                for generations to come.
              </p>
            </div>
          </div>

          <div className="mission-statement">
            <blockquote>
              "We document not just events, but the essence of our communities—preserving the depth 
              of South Sudanese experience with the professionalism it deserves while honoring the 
              cultural authority from which we speak."
            </blockquote>
            <cite> AG Media Editorial Standards</cite>
          </div>
        </div>
      </section>

      <section className="core-values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Integrity & Truth</h3>
              <p>
                We maintain unwavering commitment to factual accuracy, ethical journalism, and editorial 
                independence. Every story is fact-checked, every source verified, every claim substantiated. 
                Our credibility is our foundation.
              </p>
            </div>

            <div className="value-card">
              <h3>Cultural Documentation</h3>
              <p>
                We preserve South Sudanese heritage through professional archiving of oral histories, cultural 
                practices, and community narratives. This is not nostalgia—it's institutional memory-building 
                for future generations.
              </p>
            </div>

            <div className="value-card">
              <h3>Civic Responsibility</h3>
              <p>
                We serve the public interest through accountability journalism, educational resources, and 
                community empowerment. Our platform facilitates informed civic participation and strengthens 
                democratic discourse.
              </p>
            </div>

            <div className="value-card">
              <h3>Professional Excellence</h3>
              <p>
                We uphold Australian media standards while honoring South Sudanese storytelling traditions. 
                Every piece meets newsroom-level quality in research, production, editing, and presentation.
              </p>
            </div>

            <div className="value-card">
              <h3>Community Accountability</h3>
              <p>
                We remain deeply connected to the communities we document, operating with transparency, 
                cultural sensitivity, and respect for lived experiences. Our work serves people, not metrics.
              </p>
            </div>

            <div className="value-card">
              <h3>Institutional Vision</h3>
              <p>
                We build for longevity, not virality. Our platform is designed to serve communities and 
                researchers for decades, creating lasting value through quality over quantity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="founder-section">
        <div className="container">
          <h2>Leadership & Expertise</h2>
          <div className="founder-profile">
            <div className="founder-image">
              <div className="founder-photo">
                <img 
                  src={ajakPhoto} 
                  alt="Ajak Deng Chiengkou ,Founder and Chief Executive Officer" 
                  className="founder-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <span className="photo-icon" style={{display: 'none'}}></span>
              </div>
            </div>
            <div className="founder-content">
              <div className="founder-info">
                <h3>Ajak Deng Chiengkou </h3>
                <p className="founder-title">Founder and Chief Executive Officer</p>
                
                <div className="founder-bio">
                  <p>
                    Ajak Deng Chiengkou is the Founder and Chief Executive Officer of AG Media Co. Ltd.
                     He established AG Media as a digital platform and uploaded its first production on 19 November 2008, 
                     marking the beginning of a long-term commitment to multimedia storytelling and cultural documentation.
                  </p>
                  <p>
                    A professional journalist, producer, videographer and editor, Ajak leads the company’s strategic direction and editorial standards.
                     His background in broadcast journalism shapes AG Media’s commitment to accuracy, clarity and cultural integrity. 
                     He oversees major productions, provides creative direction, and ensures that all work aligns with the company’s mission to preserve and amplify South Sudanese narratives locally and internationally.

                     Under his leadership, AG Media has evolved from a grassroots social channel into a structured production company with a defined creative and operational framework.
                  </p>
                </div>

                <div className="founder-credentials">
                  <h4>Professional Focus Areas</h4>
                  <ul>
                    <li>Documentary filmmaking and oral history preservation</li>
                    <li>Investigative journalism focused on diaspora communities</li>
                    <li>Cultural documentation and archival methodology</li>
                    <li>Cross-cultural media ethics and community accountability</li>
                    <li>Educational resource development for civic engagement</li>
                  </ul>
                </div>

                <div className="founder-approach">
                  <h4>Editorial Philosophy</h4>
                  <p>
                    "Our work is not about individual visibility—it's about institutional responsibility. 
                    Every documentary, every article, every archive entry serves a larger purpose: preserving 
                    cultural knowledge, facilitating civic participation, and ensuring South Sudanese voices 
                    are documented with the professionalism they deserve. This is generational work, built on 
                    integrity, research, and respect."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Our Team</h2>
          <p className="team-intro">
            Professional expertise rooted in cultural understanding—our team combines journalistic rigor 
            with deep community connection.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-photo">
                <div className="photo-placeholder">
                  <img 
                    src={peterPhoto} 
                    alt="Peter - Senior Producer" 
                    className="team-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <span className="photo-icon" style={{display: 'none'}}>👤</span>
                </div>
              </div>
              <div className="team-member-info">
                <h3>Peter Deng Akuei</h3>
                <p className="team-role">Managing Director, South Sudan</p>
                
                <div className="team-bio">
                  <p>
                    Peter Deng Akuei serves as the Managing Director of AG Media in South Sudan. In a focused 
                    and lean production structure, he carries both executive responsibility and hands-on 
                    technical duties.
                  </p>
                  <p>
                    Deng functions as Executive Producer, videographer, editor and photographer. Beyond his 
                    managerial role, he is directly involved in field production and post-production, and he 
                    is the principal editor behind much of the content published on Ajakguong social platforms.
                  </p>
                  <p>
                    With more than six years of service at AG Media, he has played a significant role in 
                    strengthening the company's digital presence and production consistency. His training in 
                    various areas of technology supports efficient workflow management, equipment handling 
                    and delivery standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="team-photo">
                <div className="photo-placeholder">
                  <img 
                    src={cholPhoto} 
                    alt="Chol - Research & Archives Coordinator" 
                    className="team-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <span className="photo-icon" style={{display: 'none'}}>👤</span>
                </div>
              </div>
              <div className="team-member-info">
                <h3>Chol Philip Achiek (Chopa)</h3>
                <p className="team-role">Photographer and Videographer</p>
                
                <div className="team-bio">
                  <p>
                    Chol Philip Achiek, known professionally as Chopa, is a university student specialising 
                    in photography, videography and digital editing. Skilled in photographic and 
                    post-production software, he contributes modern visual techniques to AG Media's 
                    creative output.
                  </p>
                  <p>
                    As a photographer and videographer, he supports event coverage, cultural documentation 
                    and digital content development. His technical growth and creative discipline strengthen 
                    AG Media's visual identity across platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="team-photo">
                <div className="photo-placeholder">
                  <img 
                    src={abrahamPhoto} 
                    alt="Abraham - Content Specialist" 
                    className="team-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <span className="photo-icon" style={{display: 'none'}}>👤</span>
                </div>
              </div>
              <div className="team-member-info">
                <h3>Abraham Akuei Manyok</h3>
                <p className="team-role">Cinematographer and Technical Specialist</p>
                
                <div className="team-bio">
                  <p>
                    Abraham Akuei Manyok is a Computer Science graduate and one of AG Media's longest-serving 
                    cameramen. His technical discipline and practical field experience contribute to the 
                    visual stability and consistency of the company's productions.
                  </p>
                  <p>
                    He has filmed a wide range of projects, including culturally significant documentation 
                    that reflects under-recorded aspects of South Sudanese heritage. His work supports AG 
                    Media's long-term commitment to visual archiving and high production standards.
                  </p>
                  <p>
                    Akuei combines technical knowledge with field adaptability, ensuring dependable camera 
                    operation in diverse production environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="commitment-statement">
        <div className="container">
          <h2>Our Commitment to You</h2>
          <div className="commitment-grid">
            <div className="commitment-item">
              <h3>To Our Communities</h3>
              <p>
                We document your stories with dignity, accuracy, and cultural sensitivity. Your experiences 
                deserve professional treatment, not sensationalism. We are accountable to you first.
              </p>
            </div>

            <div className="commitment-item">
              <h3>To Educators & Researchers</h3>
              <p>
                We provide credible, well-researched resources that meet academic standards. Our archives, 
                documentaries, and articles are designed for institutional use and long-term reference.
              </p>
            </div>

            <div className="commitment-item">
              <h3>To the Public Interest</h3>
              <p>
                We serve democracy through accountability journalism, fact-based reporting, and civic education. 
                Our work strengthens public discourse and informed participation.
              </p>
            </div>

            <div className="commitment-item">
              <h3>To Future Generations</h3>
              <p>
                We build institutional memory that will serve communities for decades. Today's documentation 
                becomes tomorrow's heritage—we treat it accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
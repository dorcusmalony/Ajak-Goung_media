import './About.css'

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About AG Media</h1>
          <p className="lead">
            A serious media, communications and cultural documentation platform 
            rooted in South Sudanese experience and Australian professional standards.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-section">
              <h2>Our Foundation</h2>
              <p>
                AG Media operates at the intersection of cultural preservation and contemporary 
                journalism, maintaining the highest professional standards whilst honouring 
                South Sudanese storytelling traditions. We are not a casual blog or creator 
                portfolio—we are an institutional platform with long-term vision.
              </p>
              <p>
                Our approach combines newsroom discipline with ancestral memory, creating 
                a unique voice that serves both immediate community needs and lasting 
                cultural documentation.
              </p>
            </div>

            <div className="content-section">
              <h2>Our Standards</h2>
              <p>
                Every piece of content we produce adheres to rigorous journalistic standards, 
                fact-checking protocols, and ethical guidelines. We maintain editorial 
                independence whilst remaining deeply connected to the communities we serve.
              </p>
              <p>
                Our team brings together South Sudanese cultural expertise with Australian 
                media professionalism, ensuring authenticity without compromising on quality 
                or credibility.
              </p>
            </div>

            <div className="content-section">
              <h2>Our Vision</h2>
              <p>
                We envision AG Media as a lasting institution that bridges generations, 
                connecting South Sudanese communities globally whilst educating international 
                audiences about our rich cultural heritage and contemporary experiences.
              </p>
              <p>
                Through careful documentation and professional storytelling, we aim to 
                preserve cultural knowledge for future generations whilst contributing 
                meaningfully to current discourse on African identity, migration, and 
                community resilience.
              </p>
            </div>

            <div className="content-section">
              <h2>Our Commitment</h2>
              <p>
                We are committed to serving South Sudanese communities at home and in 
                the diaspora with dignity, accuracy, and cultural sensitivity. Our work 
                supports educators, researchers, policymakers, and international audiences 
                seeking authentic perspectives.
              </p>
              <p>
                Every story we tell, every document we preserve, and every connection we 
                facilitate serves our broader mission of cultural authority and institutional 
                excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
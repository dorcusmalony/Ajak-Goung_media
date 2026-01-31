import './PageStyles.css'

const OurWork = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Work</h1>
          <p className="lead">
            Cultural documentation, media production, and communications that serve 
            South Sudanese communities with professional excellence and cultural authority.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="work-categories">
            <div className="work-category">
              <h2>Cultural Documentation</h2>
              <p>
                Preserving South Sudanese cultural heritage through systematic documentation 
                of traditions, oral histories, and community practices. Our work ensures 
                cultural knowledge is maintained for future generations.
              </p>
            </div>

            <div className="work-category">
              <h2>Media Production</h2>
              <p>
                Professional content creation including articles, interviews, documentaries, 
                and multimedia projects that meet international journalism standards whilst 
                honouring South Sudanese storytelling traditions.
              </p>
            </div>

            <div className="work-category">
              <h2>Community Communications</h2>
              <p>
                Strategic communications that connect South Sudanese communities globally, 
                facilitate dialogue between generations, and bridge cultural understanding 
                with international audiences.
              </p>
            </div>

            <div className="work-category">
              <h2>Educational Resources</h2>
              <p>
                Developing materials for educators, researchers, and institutions seeking 
                authentic South Sudanese perspectives for academic and policy work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurWork
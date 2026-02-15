import { useState } from 'react'
import styles from './OurWork.module.css'

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [visibleCount, setVisibleCount] = useState(12)

  const projects = [
    {
      id: 1,
      title: 'Voices of Juba',
      type: 'documentaries',
      year: 2025,
      duration: '60 min',
      location: 'Juba, South Sudan',
      thumbnail: '/api/placeholder/400/300',
      community: 'Urban Communities',
      description: 'Contemporary urban narratives from South Sudan\'s capital city.'
    },
    {
      id: 2,
      title: 'Traditional Dance - Lakes State',
      type: 'cultural-archive',
      year: 2025,
      location: 'Lakes State',
      thumbnail: '/api/placeholder/400/300',
      community: 'Dinka',
      occasion: 'Harvest Ceremony',
      description: 'Documentation of traditional communal dance practices.'
    },
    {
      id: 3,
      title: 'The Diaspora Bridge',
      type: 'documentaries',
      year: 2025,
      duration: 'Series',
      location: 'Global',
      thumbnail: '/api/placeholder/400/300',
      community: 'Diaspora Communities',
      description: 'Connecting South Sudanese communities across continents.'
    },
    {
      id: 4,
      title: 'Oral Histories: Elders Speak',
      type: 'cultural-archive',
      year: 2024,
      location: 'Multiple States',
      thumbnail: '/api/placeholder/400/300',
      community: 'Community Elders',
      interviews: '50+ recorded',
      description: 'Preserving wisdom and historical memory through elder testimonies.'
    },
    {
      id: 5,
      title: 'Youth Leadership Initiative',
      type: 'civic-projects',
      year: 2025,
      location: 'Juba',
      thumbnail: '/api/placeholder/400/300',
      participants: '120+ youth',
      description: 'Developing next-generation civic leadership capacity.'
    },
    {
      id: 6,
      title: 'Stories of Resilience',
      type: 'documentaries',
      year: 2024,
      duration: '45 min',
      location: 'Warrap State',
      thumbnail: '/api/placeholder/400/300',
      community: 'Rural Communities',
      description: 'Rural community adaptation and survival strategies.'
    },
    {
      id: 7,
      title: 'Traditional Music Archive',
      type: 'cultural-archive',
      year: 2024,
      location: 'Multiple States',
      thumbnail: '/api/placeholder/400/300',
      community: 'Traditional Musicians',
      recordings: '200+ songs',
      description: 'Comprehensive collection of traditional musical heritage.'
    },
    {
      id: 8,
      title: 'Civic Engagement Workshops',
      type: 'civic-projects',
      year: 2024,
      location: 'Central Equatoria',
      thumbnail: '/api/placeholder/400/300',
      workshops: '24 sessions',
      description: 'Building democratic participation and civic awareness.'
    },
    {
      id: 9,
      title: 'Cultural Crossroads',
      type: 'documentaries',
      year: 2024,
      duration: '52 min',
      location: 'Unity State',
      thumbnail: '/api/placeholder/400/300',
      community: 'Multi-ethnic',
      description: 'Inter-community dialogue and cultural exchange documentation.'
    },
    {
      id: 10,
      title: 'Cultural Practices Documentation',
      type: 'cultural-archive',
      year: 2025,
      location: 'Eastern Equatoria',
      thumbnail: '/api/placeholder/400/300',
      community: 'Acholi',
      ceremonies: '12 documented',
      description: 'Systematic documentation of ceremonial and daily cultural practices.'
    },
    {
      id: 11,
      title: 'Community Dialogue Forums',
      type: 'civic-projects',
      year: 2025,
      status: 'Ongoing',
      location: 'Multiple States',
      thumbnail: '/api/placeholder/400/300',
      forums: '36+ sessions',
      description: 'Facilitating inter-community dialogue and conflict resolution.'
    },
    {
      id: 12,
      title: 'Migration Stories Collection',
      type: 'cultural-archive',
      year: 2024,
      location: 'Regional',
      thumbnail: '/api/placeholder/400/300',
      community: 'Displaced Communities',
      stories: '180+ documented',
      description: 'Documenting displacement experiences and adaptation narratives.'
    }
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeCategory)

  const visibleProjects = filteredProjects.slice(0, visibleCount)
  const hasMoreProjects = visibleProjects.length < filteredProjects.length

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12)
  }

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setVisibleCount(12)
  }

  return (
    <div className={styles.ourWork}>
      {/* Institutional Introduction */}
      <section className={styles.workHero}>
        <div className={styles.container}>
          <h1>Our Work</h1>
          <p>
            AG Media documents cultural traditions, civic life, and contemporary realities through structured, research-informed media production.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <nav className={styles.categoryFilter}>
            <button 
              className={`${styles.filterButton} ${activeCategory === 'all' ? styles.active : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
              All
            </button>
            <button 
              className={`${styles.filterButton} ${activeCategory === 'documentaries' ? styles.active : ''}`}
              onClick={() => handleCategoryChange('documentaries')}
            >
              Documentaries
            </button>
            <button 
              className={`${styles.filterButton} ${activeCategory === 'cultural-archive' ? styles.active : ''}`}
              onClick={() => handleCategoryChange('cultural-archive')}
            >
              Cultural Archive
            </button>
            <button 
              className={`${styles.filterButton} ${activeCategory === 'civic-projects' ? styles.active : ''}`}
              onClick={() => handleCategoryChange('civic-projects')}
            >
              Civic Projects
            </button>
          </nav>
        </div>
      </section>

      {/* Project Grid */}
      <section className={styles.projectGrid}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {visibleProjects.map((project, index) => (
              <article key={project.id} className={`${styles.projectCard} ${index % 2 === 0 ? styles.greenCard : styles.blueCard}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.categoryBadge}>
                    {project.type === 'documentaries' && 'Documentary'}
                    {project.type === 'cultural-archive' && 'Cultural Archive'}
                    {project.type === 'civic-projects' && 'Civic Project'}
                  </div>
                  <div className={styles.yearBadge}>{project.year}</div>
                </div>
                <div className={styles.thumbnail}>
                  <img src={project.thumbnail} alt={project.title} />
                  <div className={styles.playOverlay}>
                    <span className={styles.playIcon}>▶</span>
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <h3>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.projectMeta}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Location:</span>
                      <span className={styles.metaValue}>{project.location}</span>
                    </div>
                    {project.duration && (
                      <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Duration:</span>
                        <span className={styles.metaValue}>{project.duration}</span>
                      </div>
                    )}
                    {project.community && (
                      <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Community:</span>
                        <span className={styles.metaValue}>{project.community}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.cardFooter}>
                  <button className={styles.viewProject}>View Project</button>
                </div>
              </article>
            ))}
          </div>

          {hasMoreProjects && (
            <div className={styles.loadMore}>
              <button className={styles.loadMoreButton} onClick={handleLoadMore}>
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default OurWork
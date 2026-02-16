import { useState } from 'react'
import styles from './Newsroom.module.css'

const Newsroom = () => {
  const [category, setCategory] = useState('all')
  const [visibleCount, setVisibleCount] = useState(10)

  const articles = [
    {
      id: 2,
      title: 'Cultural Heritage Documentation: Preserving Oral Traditions in Digital Archives',
      standfirst: 'How South Sudanese communities are adapting traditional knowledge preservation to contemporary digital platforms while maintaining cultural authenticity.',
      author: 'Dr. Rebecca Garang',
      role: 'Cultural Researcher',
      date: '2025-02-08',
      category: 'Features'
    },
    {
      id: 3,
      title: 'Field Reflection: Community Dialogue Sessions in Warrap State',
      standfirst: 'First-hand observations from community reconciliation efforts, examining the role of traditional authorities in contemporary conflict resolution.',
      author: 'James Deng',
      role: 'Field Reporter',
      date: '2025-02-05',
      category: 'Field Reflections'
    },
    {
      id: 4,
      title: 'Editorial: The Imperative of Cultural Documentation',
      standfirst: 'Why systematic documentation of South Sudanese cultural practices serves both preservation and contemporary identity formation.',
      author: 'AG Media Editorial Board',
      role: 'Editorial Team',
      date: '2025-02-03',
      category: 'Editorial'
    },
    {
      id: 5,
      title: 'Educational Infrastructure and Community Resilience: A Rural Perspective',
      standfirst: 'Analysis of how rural communities are developing educational solutions despite limited formal infrastructure support.',
      author: 'Mary Akol',
      role: 'Education Correspondent',
      date: '2025-01-30',
      category: 'Features'
    },
    {
      id: 6,
      title: 'Field Reflection: Women\'s Leadership in Economic Cooperatives',
      standfirst: 'Direct observations from women-led economic initiatives in Juba markets, documenting organizational structures and community impact.',
      author: 'Sarah Majok',
      role: 'Economics Reporter',
      date: '2025-01-28',
      category: 'Field Reflections'
    },
    {
      id: 7,
      title: 'Diaspora Civic Participation: Transnational Political Engagement',
      standfirst: 'How South Sudanese diaspora communities are engaging in both homeland and host country political processes.',
      author: 'Emmanuel Jal',
      role: 'Diaspora Correspondent',
      date: '2025-01-25',
      category: 'Features'
    },
    {
      id: 8,
      title: 'Editorial: Media Responsibility in Cultural Representation',
      standfirst: 'Our editorial position on maintaining cultural authenticity while engaging contemporary media practices.',
      author: 'AG Media Editorial Board',
      role: 'Editorial Team',
      date: '2025-01-22',
      category: 'Editorial'
    },
    {
      id: 9,
      title: 'Traditional Medicine and Modern Healthcare: Integration Challenges',
      standfirst: 'Field documentation of how traditional healing practices intersect with contemporary healthcare delivery in rural areas.',
      author: 'Dr. Gabriel Yak',
      role: 'Health Correspondent',
      date: '2025-01-20',
      category: 'Features'
    },
    {
      id: 10,
      title: 'Field Reflection: Language Preservation in Urban Settings',
      standfirst: 'Observations from Juba households on maintaining mother tongue languages amid urban multilingual environments.',
      author: 'Agnes Lino',
      role: 'Language Documentation Specialist',
      date: '2025-01-18',
      category: 'Field Reflections'
    },
    {
      id: 11,
      title: 'Religious Leadership and Social Cohesion: A Community Analysis',
      standfirst: 'How religious institutions function as social cohesion mechanisms in post-conflict South Sudanese communities.',
      author: 'Rev. Peter Gai',
      role: 'Social Correspondent',
      date: '2025-01-15',
      category: 'Features'
    },
    {
      id: 12,
      title: 'Editorial: The Ethics of Field Documentation',
      standfirst: 'Our framework for ethical documentation practices when working within South Sudanese communities.',
      author: 'AG Media Editorial Board',
      role: 'Editorial Team',
      date: '2025-01-12',
      category: 'Editorial'
    }
  ]

  const filteredArticles = category === 'all' 
    ? articles 
    : articles.filter(article => article.category === category)

  const visibleArticles = filteredArticles.slice(0, visibleCount)
  const hasMoreArticles = visibleArticles.length < filteredArticles.length

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 10)
  }

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory)
    setVisibleCount(10)
  }

  return (
    <div className={styles.newsroom}>
      {/* Hero Section */}
      <section className={styles.newsroomHero}>
        <div className={styles.container}>
          <h1>Newsroom</h1>
          <p>
            Documenting the lived realities, civic experiences and cultural knowledge of South Sudan and its global diaspora.
Our reporting, field reflections and editorial analysis preserve memory, inform public understanding and support responsible dialogue.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <nav className={styles.categoryFilter}>
            <button 
              className={`${styles.filterButton} ${category === 'all' ? styles.active : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
              All
            </button>
            <button 
              className={`${styles.filterButton} ${category === 'Features' ? styles.active : ''}`}
              onClick={() => handleCategoryChange('Features')}
            >
              Features
            </button>
            <button 
              className={`${styles.filterButton} ${category === 'Field Reflections' ? styles.active : ''}`}
              onClick={() => handleCategoryChange('Field Reflections')}
            >
              Field Reflections
            </button>
            <button 
              className={`${styles.filterButton} ${category === 'Editorial' ? styles.active : ''}`}
              onClick={() => handleCategoryChange('Editorial')}
            >
              Editorial
            </button>
          </nav>
        </div>
      </section>

      {/* Articles List */}
      <section className={styles.articlesSection}>
        <div className={styles.container}>
          <div className={styles.articlesList}>
            {visibleArticles.map((article) => (
              <article key={article.id} className={styles.articleCard}>
                <div className={styles.articleImage}>
                  <img src="/api/placeholder/300/200" alt={article.title} />
                  <div className={styles.categoryLabel}>
                    {article.category}
                  </div>
                </div>
                <div className={styles.articleContent}>
                  <h3>{article.title}</h3>
                  <p className={styles.standfirst}>{article.standfirst}</p>
                  <div className={styles.articleMeta}>
                    <span className={styles.author}>{article.author}</span>
                    <span className={styles.date}>{article.date}</span>
                  </div>
                  <button className={styles.readFullArticle}>Read Full Article</button>
                </div>
              </article>
            ))}
          </div>

          {hasMoreArticles && (
            <div className={styles.pagination}>
              <button className={styles.loadMoreButton} onClick={handleLoadMore}>
                Load Older Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Newsroom
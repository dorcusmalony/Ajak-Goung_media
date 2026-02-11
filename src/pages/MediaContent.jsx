import { useState } from 'react'
import './MediaContent.css'

const MediaContent = () => {
  const [format, setFormat] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(12)

  const mediaContent = [
    {
      id: 1,
      title: 'Traditional Dinka Dance Ceremony',
      format: 'videos',
      date: '2025-01-15',
      duration: '12:34',
      location: 'Lakes State',
      thumbnail: '/api/placeholder/400/225',
      description: 'Documentation of traditional harvest ceremony in Lakes State.'
    },
    {
      id: 2,
      title: 'Voices from the Diaspora',
      format: 'podcasts',
      date: '2025-01-10',
      duration: '45:20',
      guest: 'Dr. Mary Akol',
      thumbnail: '/api/placeholder/400/225',
      description: 'Conversation with South Sudanese academic on diaspora identity.'
    },
    {
      id: 3,
      title: 'Life in Juba Markets',
      format: 'photo-essays',
      date: '2025-01-08',
      location: 'Juba',
      images: 24,
      thumbnail: '/api/placeholder/400/225',
      description: 'Daily economic life in South Sudan\'s capital markets.'
    },
    {
      id: 4,
      title: 'Youth Leadership Summit',
      format: 'videos',
      date: '2024-12-20',
      duration: '8:15',
      location: 'Central Equatoria',
      thumbnail: '/api/placeholder/400/225',
      description: 'Coverage of regional youth leadership gathering.'
    },
    {
      id: 5,
      title: 'Elders Speak: Oral History Project',
      format: 'podcasts',
      date: '2024-12-15',
      duration: '38:45',
      guest: 'Chief Gabriel Yak',
      thumbnail: '/api/placeholder/400/225',
      description: 'Historical testimony from community elder.'
    },
    {
      id: 6,
      title: 'Cultural Heritage Sites',
      format: 'photo-essays',
      date: '2024-12-10',
      location: 'Upper Nile',
      images: 18,
      thumbnail: '/api/placeholder/400/225',
      description: 'Visual documentation of significant cultural locations.'
    },
    {
      id: 7,
      title: 'Community Resilience Stories',
      format: 'videos',
      date: '2024-12-05',
      duration: '15:22',
      location: 'Warrap State',
      thumbnail: '/api/placeholder/400/225',
      description: 'Rural community adaptation strategies.'
    },
    {
      id: 8,
      title: 'Music and Identity',
      format: 'podcasts',
      date: '2024-11-28',
      duration: '42:10',
      guest: 'Emmanuel Jal',
      thumbnail: '/api/placeholder/400/225',
      description: 'Discussion on music as cultural preservation.'
    },
    {
      id: 9,
      title: 'Women in Leadership',
      format: 'photo-essays',
      date: '2024-11-20',
      location: 'Western Equatoria',
      images: 32,
      thumbnail: '/api/placeholder/400/225',
      description: 'Portraits of women in community leadership roles.'
    },
    {
      id: 10,
      title: 'Educational Challenges',
      format: 'videos',
      date: '2024-11-15',
      duration: '11:48',
      location: 'Unity State',
      thumbnail: '/api/placeholder/400/225',
      description: 'Documenting educational infrastructure challenges.'
    },
    {
      id: 11,
      title: 'Traditional Medicine Practices',
      format: 'podcasts',
      date: '2024-11-10',
      duration: '35:15',
      guest: 'Dr. Rebecca Garang',
      thumbnail: '/api/placeholder/400/225',
      description: 'Traditional healing practices and modern medicine.'
    },
    {
      id: 12,
      title: 'Nile River Communities',
      format: 'photo-essays',
      date: '2024-11-05',
      location: 'Jonglei',
      images: 28,
      thumbnail: '/api/placeholder/400/225',
      description: 'Life along the Nile River in Jonglei State.'
    }
  ]

  const filteredContent = mediaContent
    .filter(item => format === 'all' || item.format === format)
    .filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location?.toLowerCase().includes(searchQuery.toLowerCase())
    )

  const visibleContent = filteredContent.slice(0, visibleCount)
  const hasMoreContent = visibleContent.length < filteredContent.length

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12)
  }

  const handleFormatChange = (newFormat) => {
    setFormat(newFormat)
    setVisibleCount(12)
  }

  const getFormatLabel = (format) => {
    switch(format) {
      case 'videos': return 'Video'
      case 'podcasts': return 'Podcast'
      case 'photo-essays': return 'Photo Essay'
      default: return format
    }
  }

  const getMetaInfo = (item) => {
    switch(item.format) {
      case 'videos':
        return `${item.duration} · ${item.location}`
      case 'podcasts':
        return `${item.duration} · ${item.guest}`
      case 'photo-essays':
        return `${item.images} photos · ${item.location}`
      default:
        return item.location
    }
  }

  return (
    <div className="media-page">
      {/* Minimal Hero */}
      <section className="media-hero">
        <div className="container">
          <h1>Media & Content</h1>
          <p>
            A structured collection of video reports, podcasts, and photo essays documenting South Sudanese cultural and civic life.
          </p>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="media-controls">
        <div className="container">
          <div className="controls-wrapper">
            <nav className="format-filter">
              <button 
                className={`filter-btn ${format === 'all' ? 'active' : ''}`}
                onClick={() => handleFormatChange('all')}
              >
                All
              </button>
              <button 
                className={`filter-btn ${format === 'videos' ? 'active' : ''}`}
                onClick={() => handleFormatChange('videos')}
              >
                Videos
              </button>
              <button 
                className={`filter-btn ${format === 'podcasts' ? 'active' : ''}`}
                onClick={() => handleFormatChange('podcasts')}
              >
                Podcasts
              </button>
              <button 
                className={`filter-btn ${format === 'photo-essays' ? 'active' : ''}`}
                onClick={() => handleFormatChange('photo-essays')}
              >
                Photo Essays
              </button>
            </nav>
            
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Search content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="media-grid-section">
        <div className="container">
          <div className="media-grid">
            {visibleContent.map((item) => (
              <article key={item.id} className="media-card">
                <div className="media-thumbnail">
                  <img src={item.thumbnail} alt={item.title} loading="lazy" />
                  {item.format === 'videos' && (
                    <div className="play-overlay">
                      <span className="play-icon">▶</span>
                    </div>
                  )}
                  {item.format === 'podcasts' && (
                    <div className="podcast-overlay">
                      <span className="podcast-icon">🎙️</span>
                    </div>
                  )}
                </div>
                
                <div className="media-info">
                  <span className="media-label">{getFormatLabel(item.format)}</span>
                  <h3>{item.title}</h3>
                  <p className="media-meta">
                    {item.date} · {getMetaInfo(item)}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {hasMoreContent && (
            <div className="load-more">
              <button className="load-more-btn" onClick={handleLoadMore}>
                Load More Content
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default MediaContent
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const location = useLocation()

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Media & Content', path: '/media-content' },
    { name: 'Services', path: '/services' },
    { name: 'Newsroom', path: '/newsroom' },
    { name: 'Join & Support', path: '/join-support' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <h1>AG Media</h1>
            <p className="tagline">Cultural Documentation & Communications</p>
          </Link>
        </div>
        
        <nav className="navigation">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.path} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
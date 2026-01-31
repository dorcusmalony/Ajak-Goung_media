import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AG Media</h3>
            <p>
              A serious media, communications and cultural documentation platform 
              rooted in South Sudanese experience and Australian professional standards.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/our-work">Our Work</Link></li>
              <li><Link to="/media-content">Media & Content</Link></li>
              <li><Link to="/services">Services</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <ul className="footer-links">
              <li><Link to="/newsroom">Newsroom</Link></li>
              <li><Link to="/join-support">Join & Support</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Mission</h4>
            <p>
              Communicating credibility, cultural authority, and long-term 
              institutional vision through newsroom discipline with ancestral memory.
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} AG Media. All rights reserved.</p>
          <p>Cultural Documentation & Communications Platform</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
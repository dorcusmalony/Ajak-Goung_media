import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import OurWork from './pages/OurWork'
import MediaContent from './pages/MediaContent'
import Services from './pages/Services'
import Newsroom from './pages/Newsroom'
import JoinSupport from './pages/JoinSupport'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/media-content" element={<MediaContent />} />
            <Route path="/services" element={<Services />} />
            <Route path="/newsroom" element={<Newsroom />} />
            <Route path="/join-support" element={<JoinSupport />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

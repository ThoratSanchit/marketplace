import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = ({ searchTerm, setSearchTerm }) => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <h1>CodeMarket</h1>
          <span className="tagline">Premium Software Projects</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Projects
          </Link>
          <Link
            to="/categories"
            className={`nav-link ${location.pathname === '/categories' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Categories
          </Link>
          <Link
            to="/about"
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </nav>

        <div className="header-right">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>

          <div className="header-actions">
            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary">Sell Project</button>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-overlay" onClick={closeMobileMenu}></div>
        )}
      </div>
    </header>
  )
}

export default Header

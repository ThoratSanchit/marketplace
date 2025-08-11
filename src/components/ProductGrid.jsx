import React, { useState, useMemo } from 'react'
import './ProductGrid.css'

const ProductGrid = ({ searchTerm, selectedCategory }) => {
  const [sortBy, setSortBy] = useState('popular')

  const products = [
    {
      id: 1,
      title: "E-Commerce Website with React & Node.js",
      description: "Full-stack e-commerce platform with payment integration, admin panel, and user authentication.",
      price: 49.99,
      originalPrice: 79.99,
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      featured: true,
      level: 'Intermediate'
    },
    {
      id: 2,
      title: "Flutter Food Delivery App",
      description: "Complete mobile app with real-time tracking, payment gateway, and restaurant management.",
      price: 39.99,
      originalPrice: 59.99,
      category: 'mobile',
      technologies: ['Flutter', 'Firebase', 'Google Maps', 'Razorpay'],
      rating: 4.9,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      featured: true,
      level: 'Advanced'
    },
    {
      id: 3,
      title: "Machine Learning Stock Predictor",
      description: "AI-powered stock price prediction system using LSTM neural networks and real-time data.",
      price: 59.99,
      originalPrice: 89.99,
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Alpha Vantage API'],
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
      featured: false,
      level: 'Advanced'
    },
    {
      id: 4,
      title: "Network Security Scanner",
      description: "Comprehensive network vulnerability scanner with automated reporting and threat detection.",
      price: 44.99,
      originalPrice: 69.99,
      category: 'cybersecurity',
      technologies: ['Python', 'Nmap', 'Scapy', 'SQLite'],
      rating: 4.6,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
      featured: false,
      level: 'Intermediate'
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with scheduling and engagement tracking.",
      price: 34.99,
      originalPrice: 54.99,
      category: 'web',
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Chart.js'],
      rating: 4.5,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      featured: true,
      level: 'Beginner'
    },
    {
      id: 6,
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system built on Ethereum blockchain with smart contracts.",
      price: 69.99,
      originalPrice: 99.99,
      category: 'blockchain',
      technologies: ['Solidity', 'Web3.js', 'React', 'Truffle'],
      rating: 4.8,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
      featured: false,
      level: 'Advanced'
    }
  ]

  const filteredProducts = useMemo(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'popular':
      default:
        filtered.sort((a, b) => b.reviews - a.reviews)
        break
    }

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

  return (
    <section className="product-grid-section">
      <div className="product-grid-container">
        <div className="section-header">
          <div className="section-title">
            <h2>Featured Projects</h2>
            <p>High-quality software projects ready for your academic success</p>
          </div>
          
          <div className="filters">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              {product.featured && <div className="featured-badge">Featured</div>}
              
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                <div className="product-overlay">
                  <button className="btn-preview">Quick Preview</button>
                  <button className="btn-demo">Live Demo</button>
                </div>
              </div>

              <div className="product-content">
                <div className="product-header">
                  <h3 className="product-title">{product.title}</h3>
                  <span className="product-level">{product.level}</span>
                </div>
                
                <p className="product-description">{product.description}</p>
                
                <div className="product-technologies">
                  {product.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {product.technologies.length > 3 && (
                    <span className="tech-more">+{product.technologies.length - 3}</span>
                  )}
                </div>

                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="rating-text">{product.rating} ({product.reviews} reviews)</span>
                </div>

                <div className="product-footer">
                  <div className="product-price">
                    <span className="current-price">${product.price}</span>
                    <span className="original-price">${product.originalPrice}</span>
                  </div>
                  <button className="btn-buy">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-results">
            <h3>No projects found</h3>
            <p>Try adjusting your search or category filters</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductGrid

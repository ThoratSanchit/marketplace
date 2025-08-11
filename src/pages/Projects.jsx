import React from 'react'
import { categories } from '../data'
import ProductGrid from '../components/ProductGrid'
import './Projects.css'

const Projects = ({ searchTerm, selectedCategory, setSelectedCategory }) => {

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <div className="projects-hero-container">
          <h1>All Software Projects</h1>
          <p>Browse our complete collection of premium software projects for students and developers</p>
        </div>
      </div>

      <div className="projects-filters">
        <div className="projects-filters-container">
          <h3>Filter by Category:</h3>
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <ProductGrid 
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
      />
    </div>
  )
}

export default Projects

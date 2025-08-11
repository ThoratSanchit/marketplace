import { products, getCategoriesWithCounts } from '../data'
import './Categories.css'

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  // Get categories with updated counts based on actual products
  const categoriesWithCounts = getCategoriesWithCounts(products)

  return (
    <section className="categories">
      <div className="categories-container">
        <div className="categories-header">
          <h2>Browse by Category</h2>
          <p>Find the perfect project for your academic or professional needs</p>
        </div>
        
        <div className="categories-grid">
          {categoriesWithCounts.map((category) => (
            <div
              key={category.id}
              className={`category-card ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-name">{category.name}</h3>
              <span className="category-count">{category.count} projects</span>
              <div className="category-overlay">
                <span>View Projects</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories

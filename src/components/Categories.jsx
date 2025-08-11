import './Categories.css'

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    { id: 'all', name: 'All Projects', icon: '🌟', count: 500 },
    { id: 'web', name: 'Web Development', icon: '💻', count: 150 },
    { id: 'mobile', name: 'Mobile Apps', icon: '📱', count: 80 },
    { id: 'ai', name: 'AI/ML', icon: '🤖', count: 60 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🔒', count: 45 },
    { id: 'desktop', name: 'Desktop Apps', icon: '🖥️', count: 40 },
    { id: 'game', name: 'Game Development', icon: '🎮', count: 35 },
    { id: 'blockchain', name: 'Blockchain', icon: '⛓️', count: 25 },
    { id: 'iot', name: 'IoT Projects', icon: '🌐', count: 30 },
    { id: 'data', name: 'Data Science', icon: '📊', count: 35 }
  ]

  return (
    <section className="categories">
      <div className="categories-container">
        <div className="categories-header">
          <h2>Browse by Category</h2>
          <p>Find the perfect project for your academic or professional needs</p>
        </div>
        
        <div className="categories-grid">
          {categories.map((category) => (
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

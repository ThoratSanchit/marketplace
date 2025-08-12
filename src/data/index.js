// Import data modules
import { products } from './products'
import { categories } from './categories'

// Export all data modules
export { products } from './products'
export { categories, getCategoryById, getCategoriesWithCounts } from './categories'
export { teamMembers, getTeamMemberById, getTeamMembersByRole } from './team'
export { contactInfo, faqs, getFaqsByCategory, getFaqCategories } from './contact'
export { siteConfig } from './siteConfig'

// Utility functions for data manipulation
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id))
}

export const getProductsByCategory = (categoryId) => {
  if (categoryId === 'all') return products
  return products.filter(product => product.category === categoryId)
}

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured)
}

export const getProductsByTechnology = (technology) => {
  return products.filter(product =>
    product.technologies.some(tech =>
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  )
}

export const searchProducts = (searchTerm) => {
  const term = searchTerm.toLowerCase()
  return products.filter(product =>
    product.title.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term) ||
    product.technologies.some(tech => tech.toLowerCase().includes(term)) ||
    product.tags.some(tag => tag.toLowerCase().includes(term))
  )
}

export const sortProducts = (products, sortBy) => {
  const sortedProducts = [...products]
  
  switch (sortBy) {
    case 'price-low':
      return sortedProducts.sort((a, b) => a.price - b.price)
    case 'price-high':
      return sortedProducts.sort((a, b) => b.price - a.price)
    case 'rating':
      return sortedProducts.sort((a, b) => b.rating - a.rating)
    case 'newest':
      return sortedProducts.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
    case 'downloads':
      return sortedProducts.sort((a, b) => b.downloadCount - a.downloadCount)
    case 'popular':
    default:
      return sortedProducts.sort((a, b) => b.reviews - a.reviews)
  }
}

export const filterProducts = (products, filters) => {
  let filtered = [...products]
  
  // Filter by category
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(product => product.category === filters.category)
  }
  
  // Filter by price range
  if (filters.minPrice !== undefined) {
    filtered = filtered.filter(product => product.price >= filters.minPrice)
  }
  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter(product => product.price <= filters.maxPrice)
  }
  
  // Filter by rating
  if (filters.minRating !== undefined) {
    filtered = filtered.filter(product => product.rating >= filters.minRating)
  }
  
  // Filter by level
  if (filters.level) {
    filtered = filtered.filter(product => product.level === filters.level)
  }
  
  // Filter by technologies
  if (filters.technologies && filters.technologies.length > 0) {
    filtered = filtered.filter(product =>
      filters.technologies.some(tech =>
        product.technologies.some(productTech =>
          productTech.toLowerCase().includes(tech.toLowerCase())
        )
      )
    )
  }
  
  // Search filter
  if (filters.search) {
    const searchResults = searchProducts(filters.search)
    filtered = filtered.filter(product =>
      searchResults.some(searchProduct => searchProduct.id === product.id)
    )
  }
  
  return filtered
}

// Analytics and statistics
export const getProductStats = () => {
  return {
    totalProducts: products.length,
    totalCategories: categories.length - 1, // Exclude 'all' category
    averagePrice: products.reduce((sum, product) => sum + product.price, 0) / products.length,
    averageRating: products.reduce((sum, product) => sum + product.rating, 0) / products.length,
    totalDownloads: products.reduce((sum, product) => sum + product.downloadCount, 0),
    featuredCount: products.filter(product => product.featured).length,
    priceRange: {
      min: Math.min(...products.map(product => product.price)),
      max: Math.max(...products.map(product => product.price))
    }
  }
}

export const getTechnologyStats = () => {
  const techCount = {}

  products.forEach(product => {
    product.technologies.forEach(tech => {
      techCount[tech] = (techCount[tech] || 0) + 1
    })
  })

  return Object.entries(techCount)
    .map(([tech, count]) => ({ technology: tech, count }))
    .sort((a, b) => b.count - a.count)
}

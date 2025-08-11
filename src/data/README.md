# Data Structure Documentation

This directory contains all the data structures and configurations for the CodeMarket application. The data is organized in a scalable way to make it easy to maintain and extend.

## Files Overview

### `products.js`
Contains all product/project data with the following structure:
```javascript
{
  id: number,
  title: string,
  description: string,
  price: number,
  originalPrice: number,
  category: string,
  technologies: string[],
  rating: number,
  reviews: number,
  image: string,
  featured: boolean,
  level: 'Beginner' | 'Intermediate' | 'Advanced',
  downloadCount: number,
  lastUpdated: string,
  demoUrl: string,
  sourceFiles: string[],
  requirements: string[],
  tags: string[]
}
```

### `categories.js`
Contains category definitions and utility functions:
- `categories`: Array of all available categories
- `getCategoryById(id)`: Get category by ID
- `getCategoriesWithCounts(products)`: Get categories with product counts

### `team.js`
Contains team member information:
```javascript
{
  id: number,
  name: string,
  role: string,
  image: string,
  description: string,
  linkedin: string,
  twitter: string,
  email: string,
  skills: string[]
}
```

### `contact.js`
Contains contact information and FAQ data:
- `contactInfo`: Contact methods and details
- `faqs`: Frequently asked questions
- `getFaqsByCategory(category)`: Filter FAQs by category
- `getFaqCategories()`: Get all FAQ categories

### `siteConfig.js`
Contains site-wide configuration:
- Company information
- Social media links
- Navigation structure
- Site statistics
- Features list
- SEO settings

### `index.js`
Main export file with utility functions:
- `getProductById(id)`
- `getProductsByCategory(categoryId)`
- `getFeaturedProducts()`
- `searchProducts(searchTerm)`
- `sortProducts(products, sortBy)`
- `filterProducts(products, filters)`
- `getProductStats()`
- `getTechnologyStats()`

## Usage Examples

### Import specific data
```javascript
import { products, categories } from '../data'
```

### Import utility functions
```javascript
import { getProductsByCategory, searchProducts } from '../data'
```

### Filter and sort products
```javascript
import { filterProducts, sortProducts } from '../data'

const filters = {
  category: 'web',
  minPrice: 30,
  maxPrice: 60,
  search: 'react'
}

const filtered = filterProducts(products, filters)
const sorted = sortProducts(filtered, 'price-low')
```

## Adding New Data

### Adding a New Product
1. Open `products.js`
2. Add new product object to the array
3. Ensure all required fields are included
4. Update category counts if needed

### Adding a New Category
1. Open `categories.js`
2. Add new category to the array
3. Update any related components

### Adding Team Members
1. Open `team.js`
2. Add new team member object
3. Include all required fields

## Data Validation

All data should follow these guidelines:
- IDs should be unique and sequential
- Prices should be positive numbers
- Images should be valid URLs
- Categories should match existing category IDs
- Technologies should use consistent naming

## Scalability Features

1. **Modular Structure**: Each data type is in its own file
2. **Utility Functions**: Reusable functions for common operations
3. **Type Safety**: Clear data structures for easy validation
4. **Easy Extension**: Simple to add new fields or data types
5. **Performance**: Efficient filtering and sorting functions

## Future Enhancements

- Add data validation schemas
- Implement caching for large datasets
- Add database integration layer
- Create data migration utilities
- Add automated testing for data integrity

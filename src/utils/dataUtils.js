// Utility functions for data manipulation and formatting

export const formatPrice = (price, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(price)
}

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const formatNumber = (number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + 'M'
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + 'K'
  }
  return number.toString()
}

export const calculateDiscount = (originalPrice, currentPrice) => {
  const discount = ((originalPrice - currentPrice) / originalPrice) * 100
  return Math.round(discount)
}

export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-')
}

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text
  return text.substr(0, maxLength).trim() + '...'
}

export const getRandomItems = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export const groupBy = (array, key) => {
  return array.reduce((groups, item) => {
    const group = item[key]
    groups[group] = groups[group] || []
    groups[group].push(item)
    return groups
  }, {})
}

export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validateForm = (formData, rules) => {
  const errors = {}
  
  Object.keys(rules).forEach(field => {
    const value = formData[field]
    const rule = rules[field]
    
    if (rule.required && (!value || value.trim() === '')) {
      errors[field] = `${field} is required`
    }
    
    if (rule.minLength && value && value.length < rule.minLength) {
      errors[field] = `${field} must be at least ${rule.minLength} characters`
    }
    
    if (rule.maxLength && value && value.length > rule.maxLength) {
      errors[field] = `${field} must be no more than ${rule.maxLength} characters`
    }
    
    if (rule.email && value && !validateEmail(value)) {
      errors[field] = 'Please enter a valid email address'
    }
  })
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export const localStorage = {
  get: (key, defaultValue = null) => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return defaultValue
    }
  },
  
  set: (key, value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error writing to localStorage:', error)
    }
  },
  
  remove: (key) => {
    try {
      window.localStorage.removeItem(key)
    } catch (error) {
      console.error('Error removing from localStorage:', error)
    }
  }
}

export const analytics = {
  track: (event, properties = {}) => {
    // Placeholder for analytics tracking
    console.log('Analytics Event:', event, properties)
  },
  
  page: (pageName, properties = {}) => {
    // Placeholder for page tracking
    console.log('Page View:', pageName, properties)
  }
}

export const seo = {
  updateTitle: (title) => {
    document.title = title
  },
  
  updateMeta: (name, content) => {
    let meta = document.querySelector(`meta[name="${name}"]`)
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = name
      document.head.appendChild(meta)
    }
    meta.content = content
  }
}

export const siteConfig = {
  name: 'CodeMarket',
  tagline: 'Premium Software Projects',
  description: 'Your trusted marketplace for premium software projects. Empowering students and developers with high-quality, ready-to-use code solutions.',
  url: 'https://codemarket.com',
  logo: '/logo.png',
  favicon: '/favicon.ico',
  
  // Company Information
  company: {
    name: 'CodeMarket Inc.',
    address: {
      street: '123 Tech Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      country: 'USA'
    },
    phone: '+1 (555) 123-4567',
    email: 'support@codemarket.com',
    founded: '2023'
  },

  // Social Media Links
  social: {
    twitter: 'https://twitter.com/codemarket',
    linkedin: 'https://linkedin.com/company/codemarket',
    github: 'https://github.com/codemarket',
    facebook: 'https://facebook.com/codemarket',
    instagram: 'https://instagram.com/codemarket',
    youtube: 'https://youtube.com/codemarket'
  },

  // Navigation Links
  navigation: {
    main: [
      { name: 'Home', href: '/', icon: '🏠' },
      { name: 'Projects', href: '/projects', icon: '💻' },
      { name: 'Categories', href: '/categories', icon: '📂' },
      { name: 'About', href: '/about', icon: 'ℹ️' },
      { name: 'Contact', href: '/contact', icon: '📞' }
    ],
    footer: {
      categories: [
        { name: 'Web Development', href: '/projects?category=web' },
        { name: 'Mobile Apps', href: '/projects?category=mobile' },
        { name: 'AI/ML Projects', href: '/projects?category=ai' },
        { name: 'Cybersecurity', href: '/projects?category=cybersecurity' },
        { name: 'Desktop Apps', href: '/projects?category=desktop' },
        { name: 'Game Development', href: '/projects?category=game' }
      ],
      support: [
        { name: 'Help Center', href: '/help' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Community', href: '/community' },
        { name: 'Bug Reports', href: '/bugs' },
        { name: 'Feature Requests', href: '/features' }
      ],
      company: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Press', href: '/press' },
        { name: 'Partners', href: '/partners' },
        { name: 'Affiliate Program', href: '/affiliate' }
      ],
      legal: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Refund Policy', href: '/refunds' }
      ]
    }
  },

  // Site Statistics
  stats: {
    projects: 500,
    students: 10000,
    technologies: 50,
    satisfaction: 95,
    downloads: 25000,
    countries: 120
  },

  // Features
  features: [
    {
      icon: '🎯',
      title: 'Quality Assurance',
      description: 'Every project is thoroughly tested and reviewed by our expert team before being listed.'
    },
    {
      icon: '💡',
      title: 'Innovation Focus',
      description: 'We feature cutting-edge projects using the latest technologies and best practices.'
    },
    {
      icon: '🤝',
      title: 'Community Driven',
      description: 'Built by developers, for developers. We understand your needs and challenges.'
    },
    {
      icon: '📚',
      title: 'Learning Oriented',
      description: 'Each project comes with comprehensive documentation and learning resources.'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'All projects follow security best practices and are regularly updated.'
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Instant access to your purchased projects with immediate download links.'
    }
  ],

  // Pricing & Currency
  currency: {
    symbol: '$',
    code: 'USD',
    locale: 'en-US'
  },

  // SEO & Meta
  seo: {
    keywords: [
      'software projects',
      'source code',
      'programming',
      'web development',
      'mobile apps',
      'student projects',
      'code marketplace',
      'ready-made projects'
    ],
    author: 'CodeMarket Team'
  }
}

export default siteConfig

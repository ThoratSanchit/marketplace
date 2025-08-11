export const contactInfo = [
  {
    id: 1,
    icon: '📧',
    title: 'Email Us',
    content: 'support@codemarket.com',
    description: 'Send us an email anytime',
    link: 'mailto:support@codemarket.com',
    available: '24/7'
  },
  {
    id: 2,
    icon: '💬',
    title: 'Live Chat',
    content: 'Available 24/7',
    description: 'Chat with our support team',
    link: '#chat',
    available: '24/7'
  },
  {
    id: 3,
    icon: '📞',
    title: 'Call Us',
    content: '+1 (555) 123-4567',
    description: 'Mon-Fri, 9AM-6PM EST',
    link: 'tel:+15551234567',
    available: 'Mon-Fri, 9AM-6PM EST'
  },
  {
    id: 4,
    icon: '📍',
    title: 'Visit Us',
    content: 'San Francisco, CA',
    description: 'Schedule an appointment',
    link: '#location',
    available: 'By appointment'
  }
]

export const faqs = [
  {
    id: 1,
    category: 'General',
    question: 'How do I purchase a project?',
    answer: 'Simply browse our projects, click on the one you like, and follow the checkout process. You\'ll receive instant access to download the project files and documentation.'
  },
  {
    id: 2,
    category: 'General',
    question: 'Are the projects original?',
    answer: 'Yes, all our projects are original and developed by our team of experienced developers. Each project is unique, thoroughly tested, and comes with comprehensive documentation.'
  },
  {
    id: 3,
    category: 'Support',
    question: 'Do you provide support after purchase?',
    answer: 'Absolutely! We provide 30 days of free support for any technical questions or issues you might encounter with your purchased project. Our support team is available via email and live chat.'
  },
  {
    id: 4,
    category: 'Technical',
    question: 'Can I customize the projects?',
    answer: 'Yes, all projects come with full source code and detailed documentation, allowing you to customize and modify them according to your specific needs and requirements.'
  },
  {
    id: 5,
    category: 'Payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and various other payment methods through our secure payment gateway powered by Stripe.'
  },
  {
    id: 6,
    category: 'Technical',
    question: 'What\'s included with each project?',
    answer: 'Each project includes complete source code, detailed documentation, setup instructions, database schemas (if applicable), and any necessary configuration files.'
  },
  {
    id: 7,
    category: 'Licensing',
    question: 'Can I use these projects commercially?',
    answer: 'Yes, our standard license allows commercial use. You can use the projects for personal learning, academic purposes, or commercial applications. Reselling the source code is not permitted.'
  },
  {
    id: 8,
    category: 'Technical',
    question: 'Do you provide installation support?',
    answer: 'Yes, each project comes with detailed installation instructions. If you encounter any issues during setup, our support team is available to help you get everything running smoothly.'
  },
  {
    id: 9,
    category: 'General',
    question: 'How often do you add new projects?',
    answer: 'We add new projects weekly! Our team is constantly working on fresh, innovative projects using the latest technologies and best practices.'
  },
  {
    id: 10,
    category: 'Account',
    question: 'Do I need to create an account to purchase?',
    answer: 'While you can browse projects without an account, creating one allows you to track your purchases, download projects anytime, and receive updates and new project notifications.'
  }
]

export const getFaqsByCategory = (category) => {
  if (category === 'all') return faqs
  return faqs.filter(faq => faq.category.toLowerCase() === category.toLowerCase())
}

export const getFaqCategories = () => {
  const categories = [...new Set(faqs.map(faq => faq.category))]
  return ['All', ...categories]
}

export const categories = [
  { 
    id: 'all', 
    name: 'All Projects', 
    icon: '🌟', 
    count: 500,
    description: 'Browse our complete collection of premium software projects across all categories.',
    technologies: ['All Technologies'],
    color: '#667eea'
  },
  { 
    id: 'web', 
    name: 'Web Development', 
    icon: '💻', 
    count: 150,
    description: 'Full-stack web applications, APIs, and frontend projects using React, Vue, Angular, Node.js, and more.',
    technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'Express', 'Django', 'Laravel', 'Next.js'],
    color: '#4299e1'
  },
  { 
    id: 'mobile', 
    name: 'Mobile Apps', 
    icon: '📱', 
    count: 80,
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'Xamarin'],
    color: '#48bb78'
  },
  { 
    id: 'ai', 
    name: 'AI/ML Projects', 
    icon: '🤖', 
    count: 60,
    description: 'Machine learning models, AI applications, and data science projects.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
    color: '#ed8936'
  },
  { 
    id: 'cybersecurity', 
    name: 'Cybersecurity', 
    icon: '🔒', 
    count: 45,
    description: 'Security tools, vulnerability scanners, and penetration testing frameworks.',
    technologies: ['Python', 'Kali Linux', 'Metasploit', 'Nmap', 'Wireshark', 'Burp Suite'],
    color: '#e53e3e'
  },
  { 
    id: 'desktop', 
    name: 'Desktop Applications', 
    icon: '🖥️', 
    count: 40,
    description: 'Cross-platform desktop applications and system utilities.',
    technologies: ['Electron', 'Qt', 'JavaFX', 'WPF', 'Tkinter', 'PyQt'],
    color: '#805ad5'
  },
  { 
    id: 'game', 
    name: 'Game Development', 
    icon: '🎮', 
    count: 35,
    description: '2D and 3D games, game engines, and interactive entertainment projects.',
    technologies: ['Unity', 'Unreal Engine', 'Godot', 'Pygame', 'Phaser', 'Three.js'],
    color: '#d69e2e'
  },
  { 
    id: 'blockchain', 
    name: 'Blockchain', 
    icon: '⛓️', 
    count: 25,
    description: 'Smart contracts, DApps, and cryptocurrency-related projects.',
    technologies: ['Solidity', 'Web3.js', 'Ethereum', 'Hyperledger', 'Truffle', 'Hardhat'],
    color: '#38b2ac'
  },
  { 
    id: 'iot', 
    name: 'IoT Projects', 
    icon: '🌐', 
    count: 30,
    description: 'Internet of Things devices, sensors, and connected systems.',
    technologies: ['Arduino', 'Raspberry Pi', 'ESP32', 'MQTT', 'LoRaWAN', 'Zigbee'],
    color: '#319795'
  },
  { 
    id: 'data', 
    name: 'Data Science', 
    icon: '📊', 
    count: 35,
    description: 'Data analysis, visualization, and business intelligence projects.',
    technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Apache Spark', 'Jupyter'],
    color: '#3182ce'
  }
]

export const getCategoryById = (id) => {
  return categories.find(category => category.id === id) || categories[0]
}

export const getCategoriesWithCounts = (products) => {
  return categories.map(category => {
    if (category.id === 'all') {
      return { ...category, count: products.length }
    }
    const count = products.filter(product => product.category === category.id).length
    return { ...category, count }
  })
}

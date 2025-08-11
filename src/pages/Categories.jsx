import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    { 
      id: 'web', 
      name: 'Web Development', 
      icon: '💻', 
      count: 150,
      description: 'Full-stack web applications, APIs, and frontend projects using React, Vue, Angular, Node.js, and more.',
      technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'Express', 'Django', 'Laravel']
    },
    { 
      id: 'mobile', 
      name: 'Mobile Apps', 
      icon: '📱', 
      count: 80,
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'Xamarin']
    },
    { 
      id: 'ai', 
      name: 'AI/ML Projects', 
      icon: '🤖', 
      count: 60,
      description: 'Machine learning models, AI applications, and data science projects.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy']
    },
    { 
      id: 'cybersecurity', 
      name: 'Cybersecurity', 
      icon: '🔒', 
      count: 45,
      description: 'Security tools, vulnerability scanners, and penetration testing frameworks.',
      technologies: ['Python', 'Kali Linux', 'Metasploit', 'Nmap', 'Wireshark', 'Burp Suite']
    },
    { 
      id: 'desktop', 
      name: 'Desktop Applications', 
      icon: '🖥️', 
      count: 40,
      description: 'Cross-platform desktop applications and system utilities.',
      technologies: ['Electron', 'Qt', 'JavaFX', 'WPF', 'Tkinter', 'PyQt']
    },
    { 
      id: 'game', 
      name: 'Game Development', 
      icon: '🎮', 
      count: 35,
      description: '2D and 3D games, game engines, and interactive entertainment projects.',
      technologies: ['Unity', 'Unreal Engine', 'Godot', 'Pygame', 'Phaser', 'Three.js']
    },
    { 
      id: 'blockchain', 
      name: 'Blockchain', 
      icon: '⛓️', 
      count: 25,
      description: 'Smart contracts, DApps, and cryptocurrency-related projects.',
      technologies: ['Solidity', 'Web3.js', 'Ethereum', 'Hyperledger', 'Truffle', 'Hardhat']
    },
    { 
      id: 'iot', 
      name: 'IoT Projects', 
      icon: '🌐', 
      count: 30,
      description: 'Internet of Things devices, sensors, and connected systems.',
      technologies: ['Arduino', 'Raspberry Pi', 'ESP32', 'MQTT', 'LoRaWAN', 'Zigbee']
    },
    { 
      id: 'data', 
      name: 'Data Science', 
      icon: '📊', 
      count: 35,
      description: 'Data analysis, visualization, and business intelligence projects.',
      technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Apache Spark', 'Jupyter']
    }
  ]

  return (
    <div className="categories-page">
      <div className="categories-page-hero">
        <div className="categories-page-hero-container">
          <h1>Project Categories</h1>
          <p>Explore our diverse collection of software projects organized by technology and domain</p>
        </div>
      </div>

      <div className="categories-page-content">
        <div className="categories-page-container">
          <div className="categories-detailed-grid">
            {categories.map((category) => (
              <div key={category.id} className="category-detailed-card">
                <div className="category-detailed-header">
                  <div className="category-detailed-icon">{category.icon}</div>
                  <div className="category-detailed-info">
                    <h3>{category.name}</h3>
                    <span className="category-detailed-count">{category.count} projects</span>
                  </div>
                </div>
                
                <p className="category-detailed-description">{category.description}</p>
                
                <div className="category-detailed-technologies">
                  <h4>Popular Technologies:</h4>
                  <div className="tech-tags">
                    {category.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="category-detailed-actions">
                  <Link 
                    to="/projects" 
                    className="btn-explore"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    Explore Projects
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories

import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: '🔍',
      title: 'Browse & Search',
      description: 'Explore our extensive collection of software projects. Use filters to find projects that match your academic requirements and technology preferences.',
      features: ['Filter by category', 'Search by technology', 'View project details']
    },
    {
      id: 2,
      icon: '💳',
      title: 'Purchase & Download',
      description: 'Secure payment process with instant access. Get complete source code, documentation, and setup instructions immediately after purchase.',
      features: ['Secure payment', 'Instant download', 'Complete documentation']
    },
    {
      id: 3,
      icon: '🚀',
      title: 'Implement & Learn',
      description: 'Follow our detailed setup guides to run the project locally. Customize, learn from the code, and submit for your academic requirements.',
      features: ['Step-by-step setup', 'Video tutorials', '24/7 support']
    }
  ]

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2>How It Works</h2>
          <p>Get your perfect software project in just 3 simple steps</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.id} className="step-card">
              <div className="step-number">{step.id}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <ul className="step-features">
                {step.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="how-it-works-cta">
          <button className="btn-get-started">Get Started Now</button>
          <span className="cta-note">Join 5,000+ students who trust our projects</span>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

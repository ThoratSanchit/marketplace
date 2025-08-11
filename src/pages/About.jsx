import React from 'react'
import { siteConfig, teamMembers } from '../data'
import './About.css'

const About = () => {
  const { features, stats } = siteConfig

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-container">
          <h1>About CodeMarket</h1>
          <p>Empowering the next generation of developers with premium software projects</p>
        </div>
      </div>

      <div className="about-content">
        <div className="about-container">
          <section className="about-mission">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                At CodeMarket, we believe that every student and aspiring developer deserves access to 
                high-quality, real-world software projects. Our mission is to bridge the gap between 
                academic learning and industry requirements by providing a curated marketplace of 
                premium software projects.
              </p>
              <p>
                We understand the challenges students face when looking for quality project references 
                for their coursework, portfolios, or learning purposes. That's why we've created a 
                platform where they can find professionally developed, well-documented projects at 
                affordable prices.
              </p>
            </div>
            <div className="mission-image">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop" alt="Team collaboration" />
            </div>
          </section>

          <section className="about-features">
            <h2>Why Choose CodeMarket?</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="about-stats">
            <h2>Our Impact</h2>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="about-team">
            <h2>Meet Our Team</h2>
            <div className="team-grid">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div key={index} className="team-card">
                  <img src={member.image} alt={member.name} className="team-image" />
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="about-cta">
            <div className="cta-content">
              <h2>Ready to Start Your Journey?</h2>
              <p>Join thousands of students and developers who trust CodeMarket for their project needs.</p>
              <div className="cta-buttons">
                <button className="btn-primary">Browse Projects</button>
                <button className="btn-secondary">Contact Us</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About

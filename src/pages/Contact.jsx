import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      content: 'support@codemarket.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      content: 'Available 24/7',
      description: 'Chat with our support team'
    },
    {
      icon: '📞',
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      content: 'San Francisco, CA',
      description: 'Schedule an appointment'
    }
  ]

  const faqs = [
    {
      question: 'How do I purchase a project?',
      answer: 'Simply browse our projects, click on the one you like, and follow the checkout process. You\'ll receive instant access to download the project files.'
    },
    {
      question: 'Are the projects original?',
      answer: 'Yes, all our projects are original and developed by our team of experienced developers. Each project is unique and thoroughly tested.'
    },
    {
      question: 'Do you provide support after purchase?',
      answer: 'Absolutely! We provide 30 days of free support for any technical questions or issues you might encounter with your purchased project.'
    },
    {
      question: 'Can I customize the projects?',
      answer: 'Yes, all projects come with full source code and documentation, allowing you to customize and modify them according to your needs.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and various other payment methods through our secure payment gateway.'
    }
  ]

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-container">
          <h1>Get in Touch</h1>
          <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-container">
          <div className="contact-main">
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-submit">Send Message</button>
              </form>
            </div>

            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-card">
                    <div className="contact-info-icon">{info.icon}</div>
                    <div className="contact-info-content">
                      <h3>{info.title}</h3>
                      <p className="contact-info-main">{info.content}</p>
                      <p className="contact-info-desc">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

'use client'

import { FormEvent, useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Get Zapier webhook URL from environment variable
      const zapierWebhook = process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL

      if (zapierWebhook) {
        // Send form data to Zapier webhook
        const response = await fetch(zapierWebhook, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone || 'Not provided',
            message: formData.message,
            timestamp: new Date().toISOString(),
          }),
        })

        if (response.ok) {
          alert(`Thank you ${formData.name}! We've received your message and will get back to you soon.`)
          setFormData({ name: '', email: '', phone: '', message: '' })
        } else {
          alert('There was an error sending your message. Please try again or call us directly.')
        }
      } else {
        // Fallback if webhook not configured
        console.log('Form submitted:', formData)
        alert(`Thank you ${formData.name}! We'll get back to you soon.`)
        setFormData({ name: '', email: '', phone: '', message: '' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error sending your message. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="section-title">Contact Us</h2>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <p className="contact-intro">
              Ready to transform your body and unlock your potential?
              Get in touch with us today and let&apos;s discuss your fitness goals.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>1234 Empire Boulevard<br />Suite 100<br />Your City, ST 12345</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p>info@bodysbybertfitness.com</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">⏰</div>
                <div>
                  <h4>Hours</h4>
                  <p>Mon-Fri: 5:00 AM - 10:00 PM<br />
                  Sat: 6:00 AM - 8:00 PM<br />
                  Sun: 7:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your fitness goals and how we can help..."
                ></textarea>
              </div>

              <button type="submit" className="btn-submit" disabled={isSubmitting}>
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

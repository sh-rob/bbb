'use client'

import { FormEvent, useState } from 'react'
import styles from './Contact.module.css'

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
    <section className={styles.contact} id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="section-title">Contact Us</h2>
        </div>

        <div className={styles.contactWrapper}>
          <div>
            <p className={styles.contactIntro}>
              Ready to transform your body and unlock your potential at Douglasville&apos;s premier fitness facility?
              Get in touch with us today and let&apos;s discuss your fitness goals.
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.contactDetailItem}>
                <div className={styles.contactIcon}>📍</div>
                <div>
                  <h3>Location</h3>
                  <p>8105 Odessa Pl Unit B<br />Douglasville, GA 30134</p>
                </div>
              </div>

              <div className={styles.contactDetailItem}>
                <div className={styles.contactIcon}>📞</div>
                <div>
                  <h3>Phone</h3>
                  <p>(470) 535-7638</p>
                </div>
              </div>

              <div className={styles.contactDetailItem}>
                <div className={styles.contactIcon}>✉️</div>
                <div>
                  <h3>Email</h3>
                  <p>info@bodysbybertfitness.com</p>
                </div>
              </div>

              <div className={styles.contactDetailItem}>
                <div className={styles.contactIcon}>⏰</div>
                <div>
                  <h3>Hours</h3>
                  <p>Mon-Fri: 5:00 AM - 10:00 PM<br />
                  Sat: 6:00 AM - 8:00 PM<br />
                  Sun: 7:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contactFormContainer}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
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

              <div className={styles.formGroup}>
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

              <div className={styles.formGroup}>
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

              <div className={styles.formGroup}>
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

              <button type="submit" className={styles.btnSubmit} disabled={isSubmitting}>
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

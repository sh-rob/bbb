import styles from './Location.module.css'

export default function Location() {
  const hours = [
    { day: 'Monday - Friday', time: '5:00 AM - 10:00 PM' },
    { day: 'Saturday', time: '6:00 AM - 8:00 PM' },
    { day: 'Sunday', time: '7:00 AM - 6:00 PM' },
  ]

  return (
    <section className={styles.location} id="location">
      <div className="container">
        <div className={styles.locationGrid}>
          <div>
            <div className="section-header">
              <span className="section-label">FIND US</span>
              <h2 className="section-title">Training Facility</h2>
            </div>
            <div className={styles.infoBlock}>
              <h3>Address</h3>
              <p>8105 Odessa Pl Unit B<br />Douglasville, GA 30134</p>
            </div>
            <div className={styles.infoBlock}>
              <h3>Phone</h3>
              <p>(470) 535-7638</p>
            </div>
            <div className={styles.infoBlock}>
              <h3>Hours</h3>
              <div className={styles.hours}>
                {hours.map((schedule, index) => (
                  <div key={index} className={styles.hourRow}>
                    <span>{schedule.day}</span>
                    <span>{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.locationMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.08646821124!2d-84.74241252343919!3d33.758431373269204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f52665c906ab4f%3A0x2cda9a6e06a55dc8!2s8105%20Odessa%20Pl%20b%2C%20Douglasville%2C%20GA%2030134!5e0!3m2!1sen!2sus!4v1766888769227!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Body's By Bert Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

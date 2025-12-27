export default function Location() {
  const hours = [
    { day: 'Monday - Friday', time: '5:00 AM - 10:00 PM' },
    { day: 'Saturday', time: '6:00 AM - 8:00 PM' },
    { day: 'Sunday', time: '7:00 AM - 6:00 PM' },
  ]

  return (
    <section className="location" id="location">
      <div className="container">
        <div className="location-grid">
          <div className="location-info">
            <div className="section-header">
              <span className="section-label">FIND US</span>
              <h2 className="section-title">Training Facility</h2>
            </div>
            <div className="info-block">
              <h4>Address</h4>
              <p>1234 Empire Boulevard<br />Suite 100<br />Your City, ST 12345</p>
            </div>
            <div className="info-block">
              <h4>Phone</h4>
              <p>(555) 123-4567</p>
            </div>
            <div className="info-block">
              <h4>Hours</h4>
              <div className="hours">
                {hours.map((schedule, index) => (
                  <div key={index} className="hour-row">
                    <span>{schedule.day}</span>
                    <span>{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="location-map">
            <div className="map-placeholder">
              <p>MAP LOCATION</p>
              <span>Interactive map goes here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect } from 'react'

export default function Booking() {
  useEffect(() => {
    // Load Setmore embed script
    const script = document.createElement('script')
    script.src = 'https://storage.googleapis.com/fullintegration-live/webComponentAppListing/Container/setmoreIframeLive.js'
    script.type = 'text/javascript'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  // TODO: Replace this with your actual Setmore booking page URL
  // Find this in your Setmore account under: Settings > Booking Page
  const setmoreUrl = process.env.NEXT_PUBLIC_SETMORE_URL || 'https://booking.setmore.com/scheduleappointment/YOUR_BUSINESS_ID'

  return (
    <section className="booking" id="booking">
      <div className="container">
        <div className="section-header">
          <span className="section-label">READY TO START?</span>
          <h2 className="section-title">Book Your Session</h2>
        </div>
        <div className="booking-content">
          <p className="booking-intro">
            Select your preferred training program and book your session below.
            Payment is processed securely through our scheduling system.
          </p>

          {/* Setmore Scheduling Embed */}
          <div className="setmore-embed-container">
            <iframe
              src={setmoreUrl}
              width="100%"
              height="800"
              frameBorder="0"
              title="Schedule Appointment"
              scrolling="yes"
            ></iframe>
          </div>

          {/* Alternative: Direct Link Option */}
          <div className="booking-alt">
            <p>Prefer to open in a new window?</p>
            <a
              href={setmoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-booking-alt"
            >
              OPEN BOOKING PAGE
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

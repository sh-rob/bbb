export default function Services() {
  const services = [
    {
      icon: '⚔️',
      title: 'Strength Training',
      description: 'Build raw power and muscle mass with our specialized strength programs designed to push your limits.',
    },
    {
      icon: '⚡',
      title: 'HIIT Combat',
      description: 'High-intensity interval training that combines martial arts movements with explosive cardio.',
    },
    {
      icon: '🎯',
      title: 'Personal Training',
      description: 'One-on-one sessions with elite trainers who customize every workout to your unique goals.',
    },
    {
      icon: '🔥',
      title: 'Warrior Bootcamp',
      description: 'Transform your body in 8 weeks with our intense bootcamp program. Results guaranteed.',
    },
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">TRAINING PROGRAMS</span>
          <h2 className="section-title">Choose Your Path</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

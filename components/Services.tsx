import styles from './Services.module.css'

export default function Services() {
  const services = [
    {
      icon: '⚔️',
      title: 'Strength Training',
      description: 'Build raw power and muscle mass with our specialized strength programs in Douglasville, GA designed to push your limits.',
    },
    {
      icon: '⚡',
      title: 'HIIT Combat',
      description: 'High-intensity interval training that combines martial arts movements with explosive cardio at our Douglasville facility.',
    },
    {
      icon: '🎯',
      title: 'Personal Training',
      description: 'One-on-one personal training sessions in Douglasville with elite trainers who customize every workout to your unique goals.',
    },
    {
      icon: '🔥',
      title: 'Warrior Bootcamp',
      description: 'Transform your body in 8 weeks with our intense bootcamp program in Douglasville, Georgia. Results guaranteed.',
    },
  ]

  return (
    <section className={styles.services} id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">TRAINING PROGRAMS</span>
          <h2 className="section-title">Choose Your Path</h2>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

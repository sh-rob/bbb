'use client'

import styles from './Gallery.module.css'

export default function Gallery() {
  const galleryItems = [
    'TRAINING AREA 1',
    'EQUIPMENT ZONE',
    'COMBAT AREA',
    'CARDIO DECK',
    'STRENGTH ZONE',
    'RECOVERY AREA',
  ]

  const handleImageClick = (itemName: string) => {
    alert(`Gallery image: ${itemName}\n\nLightbox functionality coming soon!`)
  }

  return (
    <section className={styles.gallery} id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-label">THE FORTRESS</span>
          <h2 className="section-title">Our Douglasville Training Facility</h2>
        </div>
        <div className={styles.galleryGrid}>
          {galleryItems.map((item, index) => (
            <div key={index} className={styles.galleryItem} onClick={() => handleImageClick(item)}>
              <div className={styles.galleryPlaceholder}>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

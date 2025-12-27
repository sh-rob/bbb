'use client'

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
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-label">THE FORTRESS</span>
          <h2 className="section-title">Our Training Ground</h2>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item" onClick={() => handleImageClick(item)}>
              <div className="gallery-placeholder">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

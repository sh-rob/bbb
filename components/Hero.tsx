'use client'

import { useEffect, useRef } from 'react'
import RedParticles from './RedParticles'
import StarWarsShips from './StarWarsShips'
import styles from './Hero.module.css'

export default function Hero() {
  const heroContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroContentRef.current) {
        const scrolled = window.pageYOffset
        heroContentRef.current.style.transform = `translateY(${scrolled * 0.3}px)`
        heroContentRef.current.style.opacity = String(1 - (scrolled / 700))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={`${styles.hero} hero`}>
      <RedParticles />
      <StarWarsShips />
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent} ref={heroContentRef}>
        <h1 className={styles.heroH1}>Personal Training in Douglasville, GA</h1>
        <h2 className={styles.heroH2}>Embrace the Power</h2>
        <p className={styles.heroSubtitle}>
          Transform your body with elite personal training, strength programs,
          and bootcamps in Douglasville, Georgia.
        </p>
        <a href="#booking" className={styles.btnHero}>BEGIN YOUR JOURNEY</a>
      </div>
      <div className={styles.scrollIndicator}>
        <span>SCROLL</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  )
}

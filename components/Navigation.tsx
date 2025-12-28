'use client'

import { useState, useEffect } from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`} id="navbar">
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <span className={styles.logoText}>BODY'S BY BERT</span>
            <span className={styles.logoSubtitle}>PERFORMANCE & FITNESS</span>
          </div>
          <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`} id="navMenu">
            <li><a href="#services" onClick={closeMenu}>Training Programs</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#location" onClick={closeMenu}>Location</a></li>
            <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
          </ul>
          <a href="#booking" className={styles.btnBook}>
            BOOK NOW
          </a>
          <div className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} id="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <a href="#booking" className={styles.mobileCtaButton}>
        BOOK NOW
      </a>
    </>
  )
}

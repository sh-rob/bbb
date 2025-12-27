'use client'

import { useEffect, useRef } from 'react'
import RedParticles from './RedParticles'

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
    <section className="hero">
      <RedParticles />
      <div className="hero-overlay"></div>
      <div className="hero-content" ref={heroContentRef}>
        <h1 className="hero-title">
          <span className="title-line">EMBRACE</span>
          <span className="title-line">THE POWER</span>
        </h1>
        <p className="hero-subtitle">Transform your body. Master your mind. Join the dark side of fitness.</p>
        <a href="#booking" className="btn-hero">BEGIN YOUR JOURNEY</a>
      </div>
      <div className="scroll-indicator">
        <span>SCROLL</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

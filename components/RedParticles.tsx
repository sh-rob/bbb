'use client'

import { useEffect } from 'react'

export default function RedParticles() {
  useEffect(() => {
    const hero = document.querySelector('.hero')
    if (!hero) return

    const particles: HTMLDivElement[] = []
    const particleCount = 25 // Optimized number for performance

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'red-particle'

      // Random starting position
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'

      // Random animation delay for variety
      particle.style.animationDelay = Math.random() * 5 + 's'

      // Random animation duration (between 8-15 seconds)
      particle.style.animationDuration = (8 + Math.random() * 7) + 's'

      // Add CSS variables for random movement
      particle.style.setProperty('--random-x', String(Math.random()))
      particle.style.setProperty('--random-y', String(Math.random()))

      hero.appendChild(particle)
      particles.push(particle)
    }

    // Cleanup on unmount
    return () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      })
    }
  }, [])

  return null // This component doesn't render anything itself
}

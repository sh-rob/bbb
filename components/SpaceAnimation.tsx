'use client'

import { useEffect, useRef } from 'react'
import styles from './SpaceAnimation.module.css'

export default function SpaceAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.opacity = Math.random() * 0.5 + 0.3

        // Use design token colors: white, orange tint, or blue tint
        const colorChoice = Math.random()
        if (colorChoice < 0.7) {
          this.color = 'rgba(255, 255, 255, ' + this.opacity + ')'
        } else if (colorChoice < 0.85) {
          this.color = 'rgba(255, 107, 53, ' + this.opacity + ')' // Primary orange
        } else {
          this.color = 'rgba(14, 165, 233, ' + this.opacity + ')' // Secondary blue
        }
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 15000))
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    let animationFrameId: number
    const animate = () => {
      if (!ctx) return

      // Clear canvas with slight trail effect
      ctx.fillStyle = 'rgba(15, 15, 15, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={styles.spaceCanvas}
      aria-hidden="true"
    />
  )
}

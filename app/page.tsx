'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Location from '@/components/Location'
import Gallery from '@/components/Gallery'
import Booking from '@/components/Booking'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SpaceAnimation from '@/components/SpaceAnimation'

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const id = target.getAttribute('href')?.substring(1)
        const element = document.getElementById(id || '')
        if (element) {
          const offsetTop = element.offsetTop - 80
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          target.style.opacity = '1'
          target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    // Animate sections on scroll
    const sections = document.querySelectorAll('.about, .services, .location, .gallery, .booking, .contact')
    sections.forEach((section) => {
      const el = section as HTMLElement
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      observer.observe(section)
    })

    // Animate service cards individually
    const cards = document.querySelectorAll('.service-card')
    cards.forEach((card, index) => {
      const el = card as HTMLElement
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`

      const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.style.opacity = '1'
            target.style.transform = 'translateY(0)'
          }
        })
      }, observerOptions)

      cardObserver.observe(card)
    })

    // Animate gallery items
    const items = document.querySelectorAll('.gallery-item')
    items.forEach((item, index) => {
      const el = item as HTMLElement
      el.style.opacity = '0'
      el.style.transform = 'scale(0.9)'
      el.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`

      const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.style.opacity = '1'
            target.style.transform = 'scale(1)'
          }
        })
      }, observerOptions)

      galleryObserver.observe(item)
    })

    // Console message
    console.log('%c BODY\'S BY BERT PERFORMANCE & FITNESS ', 'background: #dc0000; color: #fff; font-size: 20px; padding: 10px; font-weight: bold;')
    console.log('%c Embrace the Power. Transform Your Body. ', 'background: #000; color: #dc0000; font-size: 14px; padding: 5px;')

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <SpaceAnimation />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Location />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
    </>
  )
}

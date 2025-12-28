'use client'

import { useEffect, useState } from 'react'

// Simple X-Wing SVG component
const XWing = ({ color }: { color: 'red' | 'blue' }) => {
  const colors = {
    red: { main: '#dc0000', bright: '#ff0000', glow: '#ff6666' },
    blue: { main: '#0085b8', bright: '#00d4ff', glow: '#4dd0ff' }
  }
  const c = colors[color]

  return (
    <svg viewBox="0 0 40 40" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main body */}
      <rect x="18" y="15" width="4" height="10" fill={c.main} />
      {/* Cockpit */}
      <circle cx="20" cy="20" r="3" fill={c.bright} />
      {/* Wings */}
      <path d="M10 10 L18 18 L18 22 L10 30 Z" fill={c.main} opacity="0.8" />
      <path d="M30 10 L22 18 L22 22 L30 30 Z" fill={c.main} opacity="0.8" />
      <path d="M10 30 L18 22 L18 18 L10 10 Z" fill={c.main} opacity="0.6" />
      <path d="M30 30 L22 22 L22 18 L30 10 Z" fill={c.main} opacity="0.6" />
      {/* Engine glow */}
      <circle cx="20" cy="28" r="2" fill={c.glow} opacity="0.8" />
    </svg>
  )
}

// Simple TIE Fighter SVG component
const TIEFighter = ({ color }: { color: 'red' | 'blue' }) => {
  const colors = {
    red: { main: '#dc0000', bright: '#ff0000', glow: '#ff6666' },
    blue: { main: '#0085b8', bright: '#00d4ff', glow: '#4dd0ff' }
  }
  const c = colors[color]

  return (
    <svg viewBox="0 0 40 40" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Side panels */}
      <rect x="5" y="12" width="10" height="16" fill={c.main} opacity="0.7" />
      <rect x="25" y="12" width="10" height="16" fill={c.main} opacity="0.7" />
      {/* Panel details */}
      <line x1="5" y1="16" x2="15" y2="16" stroke={c.bright} strokeWidth="0.5" />
      <line x1="5" y1="20" x2="15" y2="20" stroke={c.bright} strokeWidth="0.5" />
      <line x1="5" y1="24" x2="15" y2="24" stroke={c.bright} strokeWidth="0.5" />
      <line x1="25" y1="16" x2="35" y2="16" stroke={c.bright} strokeWidth="0.5" />
      <line x1="25" y1="20" x2="35" y2="20" stroke={c.bright} strokeWidth="0.5" />
      <line x1="25" y1="24" x2="35" y2="24" stroke={c.bright} strokeWidth="0.5" />
      {/* Cockpit */}
      <circle cx="20" cy="20" r="6" fill={c.main} />
      <circle cx="20" cy="20" r="4" fill={c.bright} />
      {/* Cockpit window */}
      <circle cx="20" cy="20" r="2" fill="#000000" opacity="0.5" />
    </svg>
  )
}

// Explosion component
const Explosion = ({ color }: { color: 'red' | 'blue' }) => {
  const colors = {
    red: { inner: '#ff0000', middle: '#ff6600', outer: '#ffaa00', spark: '#ffff00' },
    blue: { inner: '#00d4ff', middle: '#0099ff', outer: '#4dd0ff', spark: '#80e0ff' }
  }
  const c = colors[color]

  return (
    <svg viewBox="0 0 60 60" width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg" className="explosion">
      {/* Multiple explosion particles */}
      <circle cx="30" cy="30" r="8" fill={c.inner} opacity="0.9" />
      <circle cx="30" cy="30" r="15" fill={c.middle} opacity="0.6" />
      <circle cx="30" cy="30" r="22" fill={c.outer} opacity="0.3" />
      {/* Sparks */}
      <circle cx="20" cy="20" r="3" fill={c.spark} opacity="0.8" />
      <circle cx="40" cy="20" r="3" fill={c.spark} opacity="0.8" />
      <circle cx="20" cy="40" r="3" fill={c.spark} opacity="0.8" />
      <circle cx="40" cy="40" r="3" fill={c.spark} opacity="0.8" />
      <circle cx="30" cy="15" r="2" fill="#ffffff" opacity="0.9" />
      <circle cx="30" cy="45" r="2" fill="#ffffff" opacity="0.9" />
      <circle cx="15" cy="30" r="2" fill="#ffffff" opacity="0.9" />
      <circle cx="45" cy="30" r="2" fill="#ffffff" opacity="0.9" />
    </svg>
  )
}

interface Ship {
  id: number
  type: 'xwing' | 'tie'
  color: 'red' | 'blue'
  left: number
  top: number
  duration: number
  delay: number
  willCrash: boolean
  randomX: number
  randomY: number
}

export default function StarWarsShips() {
  const [ships, setShips] = useState<Ship[]>([])

  useEffect(() => {
    const newShips: Ship[] = []

    // Create 5 ships - mix of blue and red
    for (let i = 0; i < 5; i++) {
      newShips.push({
        id: i,
        type: i % 2 === 0 ? 'xwing' : 'tie', // Alternate between X-Wing and TIE
        color: i < 3 ? 'blue' : 'red', // First 3 ships blue, last 2 red
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 8 + Math.random() * 12, // 8-20 seconds
        delay: Math.random() * 5, // 0-5 seconds
        willCrash: i < 2, // First 2 ships will crash
        randomX: Math.random(),
        randomY: Math.random(),
      })
    }

    setShips(newShips)
  }, [])

  return (
    <>
      {ships.map((ship) => (
        <div
          key={ship.id}
          className={`star-wars-ship ${ship.color}-ship ${ship.willCrash ? 'crashing-ship' : ''}`}
          style={{
            left: `${ship.left}%`,
            top: `${ship.top}%`,
            animationDuration: `${ship.duration}s`,
            animationDelay: `${ship.delay}s`,
            // @ts-ignore - CSS custom properties
            '--random-x': ship.randomX,
            '--random-y': ship.randomY,
          }}
        >
          {ship.type === 'xwing' ? <XWing color={ship.color} /> : <TIEFighter color={ship.color} />}
          {ship.willCrash && <Explosion color={ship.color} />}
        </div>
      ))}
    </>
  )
}

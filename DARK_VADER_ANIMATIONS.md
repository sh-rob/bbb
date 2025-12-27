# Dark Vader Animation Themes Guide

Transform your fitness website with powerful Dark Vader themed animations that enhance the dark, intense aesthetic.

## 🎨 Animation Theme Categories

### 1. **Red Lightsaber Effects** ⚔️

Add glowing red lightsaber-inspired effects to buttons and interactive elements.

**What it looks like:**
- Buttons glow red on hover like an activated lightsaber
- Menu items have a red "ignition" effect
- Form borders pulse with red energy when focused

**Implementation:**
```css
/* Add to app/globals.css */

/* Lightsaber Button Glow */
.btn-hero,
.btn-book,
.btn-submit {
    position: relative;
    box-shadow: 0 0 20px rgba(220, 0, 0, 0.3);
}

.btn-hero:hover,
.btn-book:hover,
.btn-submit:hover {
    box-shadow:
        0 0 30px rgba(220, 0, 0, 0.8),
        0 0 60px rgba(220, 0, 0, 0.6),
        0 0 90px rgba(220, 0, 0, 0.4);
    animation: lightsaberPulse 1.5s ease-in-out infinite;
}

@keyframes lightsaberPulse {
    0%, 100% {
        box-shadow: 0 0 30px rgba(220, 0, 0, 0.8);
    }
    50% {
        box-shadow: 0 0 50px rgba(220, 0, 0, 1);
    }
}

/* Lightsaber Text Glow */
.logo-text,
.section-title {
    text-shadow:
        0 0 10px rgba(220, 0, 0, 0.8),
        0 0 20px rgba(220, 0, 0, 0.6),
        0 0 30px rgba(220, 0, 0, 0.4);
}
```

---

### 2. **Force Power Effects** 💫

Elements that appear to be pulled by "The Force" - perfect for scroll animations.

**What it looks like:**
- Service cards "force pull" into view when scrolling
- Gallery items appear with force-push effect
- Buttons react when cursor approaches (force field)

**Implementation:**
```javascript
// Add to app/page.tsx

// Force Pull Effect on Scroll
useEffect(() => {
  const forcePullElements = document.querySelectorAll('.service-card, .gallery-item')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'forcePull 0.8s ease-out forwards'
      }
    })
  })

  forcePullElements.forEach(el => observer.observe(el))
}, [])
```

```css
/* Add to app/globals.css */

@keyframes forcePull {
    0% {
        opacity: 0;
        transform: scale(0.5) translateY(100px);
        filter: blur(10px);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
        filter: blur(0);
    }
}
```

---

### 3. **Red Energy Particles** ✨

Floating red particles in the hero section for a "dark side energy" effect.

**What it looks like:**
- Red glowing particles float across the hero background
- Particles pulse and fade
- Creates an otherworldly, powerful atmosphere

**Implementation:**
```typescript
// Create components/RedParticles.tsx

'use client'

import { useEffect } from 'react'

export default function RedParticles() {
  useEffect(() => {
    const hero = document.querySelector('.hero')
    if (!hero) return

    // Create 30 particles
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div')
      particle.className = 'red-particle'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      particle.style.animationDelay = Math.random() * 5 + 's'
      particle.style.animationDuration = (5 + Math.random() * 10) + 's'
      hero.appendChild(particle)
    }
  }, [])

  return null
}
```

```css
/* Add to app/globals.css */

.red-particle {
    position: absolute;
    width: 3px;
    height: 3px;
    background: var(--color-red);
    border-radius: 50%;
    box-shadow:
        0 0 10px rgba(220, 0, 0, 0.8),
        0 0 20px rgba(220, 0, 0, 0.6);
    animation: floatParticle 10s infinite ease-in-out;
    pointer-events: none;
    z-index: 1;
}

@keyframes floatParticle {
    0%, 100% {
        transform: translate(0, 0);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    50% {
        transform: translate(
            calc(-50px + 100px * var(--random-x, 0.5)),
            calc(-50px + 100px * var(--random-y, 0.5))
        );
    }
}
```

---

### 4. **Hologram/Glitch Effects** 📺

Text and images with a holographic, futuristic glitch effect.

**What it looks like:**
- Section titles have occasional glitch effect
- Text appears with hologram scan lines
- RGB color split on hover

**Implementation:**
```css
/* Add to app/globals.css */

/* Hologram Text Effect */
.section-title {
    position: relative;
    animation: hologramFlicker 8s infinite;
}

.section-title::before,
.section-title::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.section-title::before {
    animation: glitchTop 2s infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    transform: translate(-2px, -2px);
    opacity: 0.8;
}

.section-title::after {
    animation: glitchBottom 2.5s infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    transform: translate(2px, 2px);
    opacity: 0.8;
}

@keyframes hologramFlicker {
    0%, 94%, 96%, 100% {
        opacity: 1;
    }
    95%, 97% {
        opacity: 0.7;
    }
}

@keyframes glitchTop {
    0%, 90%, 100% {
        transform: translate(0, 0);
    }
    92% {
        transform: translate(-5px, 0);
    }
    94% {
        transform: translate(5px, 0);
    }
}

@keyframes glitchBottom {
    0%, 90%, 100% {
        transform: translate(0, 0);
    }
    91% {
        transform: translate(5px, 0);
    }
    93% {
        transform: translate(-5px, 0);
    }
}

/* Scan Lines Effect */
.hero::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(220, 0, 0, 0.05) 2px,
        rgba(220, 0, 0, 0.05) 4px
    );
    pointer-events: none;
    animation: scanLines 8s linear infinite;
    z-index: 1;
}

@keyframes scanLines {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(50px);
    }
}
```

---

### 5. **Red Lightning Cursor Trail** ⚡

Your cursor leaves a trail of red energy/lightning as you move.

**What it looks like:**
- Red glowing trail follows your mouse
- Fades out like dissipating energy
- Creates feeling of power

**Implementation:**
```typescript
// Create components/CursorTrail.tsx

'use client'

import { useEffect } from 'react'

export default function CursorTrail() {
  useEffect(() => {
    const trail: HTMLDivElement[] = []
    const trailLength = 20

    const handleMouseMove = (e: MouseEvent) => {
      const dot = document.createElement('div')
      dot.className = 'cursor-trail-dot'
      dot.style.left = e.pageX + 'px'
      dot.style.top = e.pageY + 'px'
      document.body.appendChild(dot)

      trail.push(dot)

      if (trail.length > trailLength) {
        const oldDot = trail.shift()
        oldDot?.remove()
      }

      setTimeout(() => {
        dot.style.opacity = '0'
        setTimeout(() => dot.remove(), 500)
      }, 50)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      trail.forEach(dot => dot.remove())
    }
  }, [])

  return null
}
```

```css
/* Add to app/globals.css */

.cursor-trail-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    background: var(--color-red);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    box-shadow:
        0 0 10px rgba(220, 0, 0, 0.8),
        0 0 20px rgba(220, 0, 0, 0.6);
    transition: opacity 0.5s;
}
```

---

### 6. **Power Level Indicators** 📊

Progress bars and loading states styled like Sith power levels.

**What it looks like:**
- Form submission shows power charging animation
- Section loading has red energy build-up
- Progress bars glow and pulse

**Implementation:**
```css
/* Add to app/globals.css */

/* Power Level Loading */
@keyframes powerCharge {
    0% {
        width: 0%;
        box-shadow: 0 0 5px rgba(220, 0, 0, 0.5);
    }
    50% {
        box-shadow: 0 0 20px rgba(220, 0, 0, 1);
    }
    100% {
        width: 100%;
        box-shadow: 0 0 30px rgba(220, 0, 0, 1);
    }
}

.btn-submit:disabled::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background: var(--color-red);
    animation: powerCharge 2s ease-in-out infinite;
}
```

---

### 7. **Dark Side Transitions** 🌑

Page section transitions with dark force effects.

**What it looks like:**
- Sections fade in from darkness
- Red energy swoosh between sections
- Dramatic reveals

**Implementation:**
```css
/* Add to app/globals.css */

/* Dark Reveal Effect */
.about, .services, .contact {
    position: relative;
    overflow: hidden;
}

.about::before,
.services::before,
.contact::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(220, 0, 0, 0.3),
        transparent
    );
    animation: darkReveal 1.5s ease-out;
    pointer-events: none;
    z-index: 10;
}

@keyframes darkReveal {
    0% {
        left: -100%;
    }
    100% {
        left: 100%;
    }
}
```

---

### 8. **Imperial March Background Audio** 🎵

Optional background music/sound effects.

**What it looks like:**
- Subtle Vader breathing sound on hover (optional)
- Imperial march theme music (muted, toggle-able)
- Sound effects for button clicks

**Implementation:**
```typescript
// Create components/AudioEffects.tsx

'use client'

import { useState, useRef } from 'react'

export default function AudioEffects() {
  const [muted, setMuted] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleAudio = () => {
    if (audioRef.current) {
      if (muted) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
      setMuted(!muted)
    }
  }

  return (
    <>
      <button
        onClick={toggleAudio}
        className="audio-toggle"
        aria-label="Toggle background music"
      >
        {muted ? '🔇' : '🔊'}
      </button>

      <audio
        ref={audioRef}
        loop
        src="/audio/imperial-march.mp3"
      />
    </>
  )
}
```

```css
/* Add to app/globals.css */

.audio-toggle {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: var(--color-medium-gray);
    border: 2px solid var(--color-red);
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 1000;
    transition: var(--transition);
}

.audio-toggle:hover {
    background: var(--color-red);
    box-shadow: 0 0 20px rgba(220, 0, 0, 0.6);
}
```

---

### 9. **Red Energy Borders** ⚡

Animated red energy flowing along borders.

**What it looks like:**
- Service cards have flowing red energy borders
- Contact form has pulsing red outline
- Gallery items have animated borders

**Implementation:**
```css
/* Add to app/globals.css */

.service-card,
.contact-form-container,
.gallery-item {
    position: relative;
    border: 2px solid transparent;
}

.service-card::before,
.contact-form-container::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
        45deg,
        var(--color-red),
        transparent,
        var(--color-red)
    );
    background-size: 400% 400%;
    border-radius: inherit;
    z-index: -1;
    animation: energyFlow 3s ease infinite;
}

@keyframes energyFlow {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}
```

---

### 10. **Matrix Rain Effect** 💻

Red "matrix" code rain in the background.

**What it looks like:**
- Falling red characters in hero background
- Creates depth and movement
- Cyberpunk/tech aesthetic

**Implementation:**
```typescript
// Create components/MatrixRain.tsx

'use client'

import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = '01'
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#dc0000'
      ctx.font = fontSize + 'px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="matrix-rain"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.3,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
```

---

## 🎯 Recommended Combinations

### **Subtle & Professional**
- Red Lightsaber button glows
- Force Pull scroll animations
- Red Energy borders
- **Best for**: Mainstream fitness audience

### **Medium Intensity**
- All of Subtle package
- Red Energy Particles in hero
- Hologram text effects
- Power Level indicators
- **Best for**: Tech-savvy fitness enthusiasts

### **Full Dark Side Experience**
- Everything above
- Cursor trail
- Matrix rain background
- Dark transitions
- Optional audio toggle
- **Best for**: True Dark Vader fans, immersive experience

---

## 🚀 Quick Start

### Option 1: Add Lightsaber Glows (Easiest)

Just copy the lightsaber CSS from Section 1 to your `app/globals.css` file. Instant upgrade!

### Option 2: Add Red Particles

1. Create `components/RedParticles.tsx` with code from Section 3
2. Import in `components/Hero.tsx`:
   ```typescript
   import RedParticles from '@/components/RedParticles'

   // In the component:
   return (
     <section className="hero">
       <RedParticles />
       {/* rest of hero */}
     </section>
   )
   ```

### Option 3: Full Package

Create an `animations.css` file with all the CSS animations and import it in your layout.

---

## ⚠️ Performance Considerations

- **Particles**: Limit to 20-30 for good performance
- **Cursor Trail**: May impact on slower devices - make it optional
- **Matrix Rain**: Use canvas for better performance than HTML elements
- **Audio**: Always muted by default, let users opt-in
- **Mobile**: Disable heavy animations on mobile devices

---

## 🎨 Color Customization

All animations use your CSS variables, so changing the theme color updates everything:

```css
:root {
    --color-red: #ff0000; /* Change to your preferred red */
}
```

For a more "electric blue" Vader look:
```css
:root {
    --color-red: #00d4ff; /* Electric blue */
}
```

---

**Choose your darkness level and transform your fitness website into a Sith training ground!** ⚔️

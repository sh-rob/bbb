import type { Metadata } from 'next'
import { Orbitron, Rajdhani } from 'next/font/google'
import './globals.css'
import '../dark-vader-enhancements.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-orbitron',
  display: 'swap',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Body\'s By Bert Performance & Fitness - Embrace Your Power',
  description: 'Transform your body. Master your mind. Join the dark side of fitness. Elite personal training and fitness programs with Bert.',
  keywords: ['fitness', 'personal training', 'gym', 'strength training', 'HIIT', 'bootcamp', 'performance training'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable}`}>
      <body>{children}</body>
    </html>
  )
}

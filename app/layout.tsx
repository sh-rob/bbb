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
  title: 'Personal Training Douglasville GA | Body\'s By Bert Fitness',
  description: 'Top-rated personal training in Douglasville, GA. Expert one-on-one training, group fitness classes, and athlete training. Transform your body with Body\'s By Bert. Call (470) 535-7638.',
  keywords: [
    'personal training Douglasville GA',
    'fitness trainer Douglasville',
    'personal trainer near me',
    'gym Douglasville Georgia',
    'strength training Douglasville',
    'bootcamp fitness Douglasville',
    'athletic training Douglasville',
    'group fitness classes Douglasville',
    'weight loss trainer Douglasville',
    'muscle building Douglasville',
    'Body\'s By Bert',
    'Albert Bryant trainer'
  ],
  authors: [{ name: 'Body\'s By Bert' }],
  creator: 'Body\'s By Bert',
  publisher: 'Body\'s By Bert',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bodysbybertfitness.com',
    siteName: 'Body\'s By Bert Performance & Fitness',
    title: 'Personal Training Douglasville GA | Body\'s By Bert',
    description: 'Top-rated personal training in Douglasville, GA. Expert one-on-one training, group fitness classes, and athlete training.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Body\'s By Bert Personal Training Douglasville GA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Training Douglasville GA | Body\'s By Bert',
    description: 'Top-rated personal training in Douglasville, GA. Transform your body with expert training.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you get them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable}`}>
      <head>
        <link rel="canonical" href="https://bodysbybertfitness.com" />
        <meta name="geo.region" content="US-GA" />
        <meta name="geo.placename" content="Douglasville" />
        <meta name="geo.position" content="33.758431;-84.742413" />
        <meta name="ICBM" content="33.758431, -84.742413" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://bodysbybertfitness.com',
              name: "Body's By Bert Performance & Fitness",
              image: 'https://bodysbybertfitness.com/og-image.jpg',
              description: 'Top-tier personal training and fitness services in Douglasville, Georgia. One-on-one training, group classes, and athlete training.',
              url: 'https://bodysbybertfitness.com',
              telephone: '(470) 535-7638',
              email: 'info@bodysbybertfitness.com',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '8105 Odessa Pl Unit B',
                addressLocality: 'Douglasville',
                addressRegion: 'GA',
                postalCode: '30134',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 33.758431,
                longitude: -84.742413,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '05:00',
                  closes: '22:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '06:00',
                  closes: '20:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Sunday',
                  opens: '07:00',
                  closes: '18:00',
                },
              ],
              sameAs: [
                'https://www.facebook.com/bodysbybert',
              ],
              founder: {
                '@type': 'Person',
                name: 'Albert Bryant',
                jobTitle: 'Head Trainer',
              },
              areaServed: {
                '@type': 'City',
                name: 'Douglasville',
                containedIn: {
                  '@type': 'State',
                  name: 'Georgia',
                },
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Fitness Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Personal Training',
                      description: 'One-on-one personalized training sessions',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Group Fitness Classes',
                      description: 'Dynamic group training sessions',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Athlete Training',
                      description: 'Specialized training for athletes',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

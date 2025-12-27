# Body's By Bert Performance & Fitness - Next.js Website

A modern, responsive fitness website built with **Next.js 14**, **TypeScript**, and **React**. Features a Dark Vader theme with red, black, and white colors.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI components with hooks
- **CSS3** - Custom styling with CSS variables
- **Google Fonts** - Orbitron & Rajdhani fonts

## Features

- ✅ **Server-Side Rendering (SSR)** with Next.js
- ✅ **TypeScript** for type safety
- ✅ **Setmore Scheduling Integration** - Embedded booking and payment processing
- ✅ **Zapier Contact Form Integration** - Get email & SMS alerts for new contacts
- ✅ **Responsive Design** - Works on all devices
- ✅ **Dark Vader Theme** - Black, red, and white color scheme
- ✅ **Optional Dark Vader Animations** - Lightsaber glows, force effects, energy particles
- ✅ **Smooth Animations** - Scroll-triggered fade-ins and parallax effects
- ✅ **Component-Based Architecture** - Modular and maintainable
- ✅ **SEO Optimized** - Meta tags and semantic HTML
- ✅ **Fast Performance** - Optimized fonts and lazy loading

## Project Structure

```
bbb/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Sticky navigation bar
│   ├── Hero.tsx           # Hero section with parallax
│   ├── About.tsx          # About section
│   ├── Services.tsx       # Training programs grid
│   ├── Location.tsx       # Location and hours
│   ├── Gallery.tsx        # Photo gallery
│   ├── Booking.tsx        # Setmore Scheduling embed
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer with newsletter
├── public/                # Static assets (images, etc.)
├── package.json
├── tsconfig.json
└── next.config.js
```

## Getting Started

### Installation

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

The page auto-updates as you edit files.

### Setmore Scheduling Setup

To enable booking and payment processing:

1. **Set up your Setmore account** at [setmore.com](https://www.setmore.com)
2. **Get your booking page URL** from Settings > Booking Page > Share Your Booking Page
3. **Create `.env.local`** file in the project root:
   ```bash
   NEXT_PUBLIC_SETMORE_URL=https://booking.setmore.com/scheduleappointment/YOUR_BUSINESS_ID
   ```
4. **Restart the dev server** to apply changes

📖 **Full setup guide**: See [SETMORE_SETUP.md](./SETMORE_SETUP.md) for detailed instructions.

### Contact Form Notifications with Zapier

Get instant **email and SMS alerts** when customers submit the contact form:

1. **Sign up for Zapier** at [zapier.com](https://zapier.com) (free plan available)
2. **Create a new Zap** with "Webhooks by Zapier" trigger
3. **Copy your webhook URL** from Zapier
4. **Add to `.env.local`**:
   ```bash
   NEXT_PUBLIC_ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/XXXXXX/YYYYYY/
   ```
5. **Set up actions** in Zapier:
   - Email notification → Get emails when forms are submitted
   - SMS notification → Get text messages instantly
6. **Restart the dev server** to apply changes

📖 **Complete guide**: See [ZAPIER_SETUP.md](./ZAPIER_SETUP.md) for step-by-step instructions with screenshots.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Website Sections

1. **Navigation** - Sticky header with smooth scroll navigation
2. **Hero** - Full-screen hero with animated title and parallax effect
3. **About** - Training philosophy and introduction
4. **Services** - 4 training program cards with hover effects
5. **Location** - Contact info, address, and business hours
6. **Gallery** - 6-item photo grid (placeholders ready for images)
7. **Booking** - Embedded Setmore Scheduling with payment processing
8. **Contact** - Contact form with name, email, phone, and message fields
9. **Footer** - Links, contact info, social media, newsletter signup

## Dark Vader Animation Themes

Want to add more **Dark Side power** to your website? Check out these optional animation themes:

### Quick Start - Add Enhanced Glows

Import the ready-to-use enhancements file in `app/layout.tsx`:

```typescript
import './dark-vader-enhancements.css'
```

This adds:
- ⚔️ **Lightsaber button glows** - Red pulsing effects on hover
- ✨ **Glowing text shadows** - Logo and titles with red energy
- 📺 **Hologram scan lines** - Futuristic effects in hero
- ⚡ **Energy borders** - Animated red borders on cards
- 🔋 **Power charging effects** - Loading states with energy build-up

### More Animation Options

See **[DARK_VADER_ANIMATIONS.md](./DARK_VADER_ANIMATIONS.md)** for 10+ animation themes including:

1. **Red Lightsaber Effects** - Glowing buttons and interactive elements
2. **Force Power Effects** - Elements pulled by "The Force"
3. **Red Energy Particles** - Floating particles in background
4. **Hologram/Glitch Effects** - Futuristic text animations
5. **Red Lightning Cursor Trail** - Energy following your mouse
6. **Power Level Indicators** - Sith-styled progress bars
7. **Dark Side Transitions** - Dramatic section reveals
8. **Imperial March Audio** - Optional background music
9. **Matrix Rain Effect** - Falling red code
10. **And more!**

### Animation Intensity Levels

**Subtle** (Professional):
- Just add `dark-vader-enhancements.css`
- Lightsaber glows + energy borders

**Medium** (Recommended):
- Enhanced CSS + Red particles component
- Great balance of style and performance

**Full Dark Side**:
- All animations enabled
- Maximum immersion for true fans

📖 **Full guide**: [DARK_VADER_ANIMATIONS.md](./DARK_VADER_ANIMATIONS.md)

## Customization Guide

### Update Content

**Branding:**
Edit `components/Navigation.tsx` to change the logo and business name.

**Services:**
Modify the `services` array in `components/Services.tsx`:

```typescript
const services = [
  {
    icon: '⚔️',
    title: 'Your Service',
    description: 'Your description here',
  },
  // Add more services...
]
```

**Location Information:**
Edit `components/Location.tsx` to update address, phone, and hours.

**Contact Info:**
Update footer details in `components/Footer.tsx`.

### Change Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
    --color-red: #dc0000;        /* Primary brand color */
    --color-red-dark: #a00000;   /* Darker variant */
    --color-red-bright: #ff0000; /* Bright accent */
}
```

### Add Real Images

Place images in the `public/` folder and update components:

**Gallery Images:**
Edit `components/Gallery.tsx`:

```tsx
import Image from 'next/image'

// In the gallery item:
<div className="gallery-item">
  <Image
    src="/images/training-area.jpg"
    alt="Training Area"
    width={400}
    height={400}
  />
</div>
```

**Hero Background:**
Add a background image to `.hero` in `app/globals.css`:

```css
.hero {
    background-image: url('/images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
}
```

### Add Google Maps

Replace the map placeholder in `components/Location.tsx`:

```tsx
<div className="location-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
    width="100%"
    height="500"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
  />
</div>
```

### Connect Booking System

Update the booking button handlers in `components/Navigation.tsx` and `components/Hero.tsx`:

```typescript
const handleBooking = () => {
  // Replace with your booking URL or open a modal
  window.location.href = 'https://your-booking-system.com'
}
```

### Contact Form Integration

The contact form in `components/Contact.tsx` is ready to send notifications via Zapier.

**Option 1: Use Zapier (Recommended - Email & SMS alerts)**

Get instant notifications when customers contact you! See [ZAPIER_SETUP.md](./ZAPIER_SETUP.md) for complete setup.

**Option 2: Use Formspree (Email only, no Zapier needed)**
```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsSubmitting(true)

  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })

  if (response.ok) {
    alert(`Thank you ${formData.name}! We'll get back to you soon.`)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }
  setIsSubmitting(false)
}
```

**Option 2: Use EmailJS**
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Update the form handler

**Option 3: Create your own API route**
Create `app/api/contact/route.ts` and use services like Resend, SendGrid, or Nodemailer.

### Newsletter Integration

Connect to your email service (Mailchimp, SendGrid, etc.) in `components/Footer.tsx`:

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  // Add your API call here
  const response = await fetch('/api/newsletter', {
    method: 'POST',
    body: JSON.stringify({ email }),
  })
}
```

## Adding New Pages

Create a new page in the `app/` directory:

```bash
# Create a new page
mkdir app/about
touch app/about/page.tsx
```

Example `app/about/page.tsx`:

```tsx
export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Your content here</p>
    </div>
  )
}
```

The page will be available at `/about`.

## Environment Variables

Create a `.env.local` file for environment variables:

```env
NEXT_PUBLIC_API_URL=https://your-api.com
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your-key-here
```

Access in components:

```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy:

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Other Platforms

- **Netlify**: Connect GitHub and deploy
- **AWS Amplify**: Deploy via CLI or console
- **Self-hosted**: Run `npm run build` then `npm start`

## Performance Optimizations

- ✅ Next.js automatic code splitting
- ✅ Optimized Google Fonts loading
- ✅ Image optimization with Next.js Image component (when you add images)
- ✅ CSS optimized and minified in production
- ✅ Intersection Observer for scroll animations
- ✅ Client components only where needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Future Enhancements

- Add blog/news section with MDX
- Create member dashboard
- Implement booking system with calendar
- Add testimonials carousel
- Create trainer profiles pages
- Add before/after transformation gallery
- Integrate payment processing
- Add workout tracking features
- Create mobile app with React Native

## TypeScript

This project uses TypeScript for type safety. Type definitions are automatically generated.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

Custom template for Body's By Bert Performance & Fitness. Modify and use as needed.

---

**Body's By Bert Performance & Fitness** - Embrace the Power. Transform Your Body.

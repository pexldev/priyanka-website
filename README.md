# Dental Practice Website

A modern, fully responsive dental practice website built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

- 🦷 **6 Specialized Services**: Complete/Partial Removable Denture, Cast Partial Denture, Fixed Partial Denture, Implants, Full Mouth Rehabilitation, Veneers Smile Designing
- 📸 **Before/After Gallery**: Interactive gallery with filtering and lightbox
- 📝 **Booking System**: Contact form with email notifications
- 📱 **Fully Responsive**: Mobile-first design approach
- ⚡ **Performance Optimized**: Fast loading with Next.js Image optimization
- 🎨 **Modern UI/UX**: Smooth animations with Framer Motion

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3+
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Email Service**: Resend

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd priyanka_website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Edit the `.env.local` file with your actual values:
```env
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_EMAIL=your_email@example.com
```

To get a Resend API key:
- Sign up at https://resend.com
- Create an API key in your dashboard
- Add your domain (or use their test domain for development)

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
priyanka_website/
├── app/                      # Next.js App Router pages
│   ├── api/                 # API routes
│   │   └── booking/         # Booking form handler
│   ├── contact/             # Contact/booking page
│   ├── gallery/             # Gallery page
│   ├── services/            # Services pages
│   │   ├── [slug]/         # Dynamic service detail pages
│   │   └── page.tsx        # Services listing
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/              # React components
│   ├── BeforeAfterGallery.tsx
│   ├── BookingForm.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ServiceCard.tsx
│   └── Testimonials.tsx
├── data/                    # Static data
│   ├── gallery.ts           # Gallery images data
│   ├── services.ts          # Services information
│   └── testimonials.ts      # Patient testimonials
├── public/                  # Static assets
│   ├── images/             # Images organized by service
│   └── videos/             # Process videos
├── types/                   # TypeScript types
│   └── index.ts
└── README.md
```

## Adding Content

### Adding Images

1. Place images in `/public/images/[service-name]/`
2. Use WebP format for best performance
3. Name files descriptively (e.g., `case-1-before.webp`, `case-1-after.webp`)
4. Update image paths in `/data/gallery.ts`

### Adding Services

Edit `/data/services.ts` to add or modify services:
```typescript
{
  id: 7,
  name: "New Service",
  slug: "new-service",
  description: "Brief description",
  icon: "/images/icons/new-service.svg",
  details: "Full details...",
  process: ["Step 1", "Step 2"],
  benefits: ["Benefit 1", "Benefit 2"],
  faqs: [
    {
      question: "Question?",
      answer: "Answer..."
    }
  ]
}
```

### Adding Testimonials

Edit `/data/testimonials.ts`:
```typescript
{
  id: 11,
  name: "Patient Name",
  service: "service-slug",
  text: "Testimonial text...",
  rating: 5,
  image: "/images/testimonials/patient.webp",
  date: "Month Year"
}
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The website can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages

## Customization

### Colors

Edit `/tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: { ... },
  secondary: { ... }
}
```

### Contact Information

Update contact details in:
- `/components/Footer.tsx`
- `/app/contact/page.tsx`

### Business Hours

Edit the hours in `/app/contact/page.tsx`

## Image Requirements

- **Format**: WebP (primary), JPG (fallback)
- **Size**: Max 150KB per image
- **Dimensions**: Consistent aspect ratios
- **Alt Text**: Always include descriptive alt text

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- iOS Safari: iOS 12+
- Android Chrome: Android 8+

## Performance

The website is optimized for Core Web Vitals:
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

## Support

For questions or issues:
1. Check this README
2. Review Next.js documentation: https://nextjs.org/docs
3. Check Tailwind CSS docs: https://tailwindcss.com/docs

## License

All rights reserved.

---

**Built with Next.js 14+, TypeScript, and Tailwind CSS**

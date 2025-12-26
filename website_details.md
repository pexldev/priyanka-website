# Dental Practice Website - Technical Specification

**Project:** Dental Practice Website (Custom Specializations)
**website inspired from:** (https://cosmetiquedental.com.au/)
**Client:** Dental Practice  
**Date:** December 2025  
**Status:** Development Ready  
**Specializations:** Complete/Partial Removable Denture, Cast Partial Denture, Fixed Partial Denture, Implants, Full Mouth Rehabilitation, Veneers Smile Designing

---

## 1. Project Overview

Build a modern, fully responsive dental practice website with unified mobile and desktop experience. The website must display identical layouts, content, and media across all devices (mobile, tablet, desktop) with seamless responsiveness. No CMS required - all content is static, stored in project files. Focus on clean design, patient galleries, service information, and booking functionality.
You can consider it to make it exacly like https://cosmetiquedental.com.au/

---

## 2. Tech Stack

### Frontend
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3+
- **State Management:** React Context API (minimal state needed)
- **Animation:** Framer Motion (smooth transitions)
- **Form Handling:** React Hook Form
- **Image Optimization:** Next Image component (local images)
- **Mobile First:** 100% mobile-first design approach

### Backend
- **Runtime:** Node.js
- **Framework:** Next.js API Routes
- **Form Handling:** Simple Node.js handlers for contact/booking forms
- **Email Service:** Resend (simple, Vercel-friendly) or SendGrid

### Image & Asset Management
- **Storage:** Local project files (`/public` directory)
- **Image Formats:** WebP (primary), JPG (fallback)
- **Optimization:** Next.js Image component with automatic optimization
- **File Structure:** `/public/images` organized by category

### Hosting & Deployment
- **Hosting:** Vercel (Next.js native)
- **Repository:** GitHub
- **CI/CD:** Vercel auto-deployment on push

### Third-Party Services
- **Appointments/Booking:** Calendly embed OR custom booking form (email notification)
- **Email Notifications:** Resend or SendGrid (booking confirmations)

---

## 3. Core Features & Functionality

### 3.1 Services Section
Display all six specializations with dedicated service pages:

1. **Complete & Partial Removable Denture**
2. **Cast Partial Denture**
3. **Fixed Partial Denture**
4. **Implants**
5. **Full Mouth Rehabilitation**
6. **Veneers Smile Designing**

Each service page should include:
- Service description/overview
- Before/after gallery (images provided by you)
- Process explanation (with visuals if available)
- FAQ section
- CTA button for booking/inquiry

### 3.2 Before & After Gallery
- **Layout:** Responsive grid (adjusts dynamically on all screen sizes)
- **Filtering:** Filter by service type
- **Image Display:** Before/after side-by-side on desktop, stacked on mobile, BUT SAME ASPECT RATIO AND SIZE across all devices
- **Lightbox:** Full-screen view modal for detailed inspection
- **Same Media Across Devices:** 100% identical image display - no different images for mobile

### 3.3 Homepage
- **Hero Section:** Compelling headline, trust indicators, main CTA
- **Services Grid:** All six services with icons/images
- **Gallery Preview:** Showcase 4-6 best before/after cases
- **Testimonials:** Patient reviews/feedback section
- **CTA Section:** "Book Consultation" prominent placement

### 3.4 Booking/Contact System
- **Booking Form:** 
  - Fields: Name, Email, Phone, Service Type (dropdown), Preferred Date, Message
  - Validation: Client-side (React Hook Form) + server-side
  - Email Notification: Confirmation to patient + notification to clinic
- **Direct Contact:** Phone number, email, location details
- **Calendly Integration (Optional):** Embed for appointment scheduling

### 3.5 Responsive Design Requirements

**CRITICAL:** Identical experience across all devices

- **Breakpoints:**
  - Mobile: 320px - 767px
  - Tablet: 768px - 1024px
  - Desktop: 1025px+

- **Same Media Everywhere:**
  - Gallery images display same size ratios across devices
  - Text scales proportionally
  - Navigation adapts but content structure remains identical
  - NO mobile-specific images/content
  - NO desktop-specific images/content

- **Navigation:**
  - Desktop: Horizontal navbar with dropdown menus
  - Mobile: Hamburger menu (same services visible)
  - Tablet: Adaptive (can be horizontal or hamburger)

---

## 4. Project File Structure

```
dental-practice-website/
├── public/
│   ├── images/
│   │   ├── removable-denture/
│   │   │   ├── case-1-before.webp
│   │   │   ├── case-1-after.webp
│   │   │   ├── case-2-before.webp
│   │   │   └── case-2-after.webp
│   │   ├── cast-partial-denture/
│   │   ├── fixed-partial-denture/
│   │   ├── implants/
│   │   ├── full-mouth-rehab/
│   │   ├── veneers/
│   │   ├── testimonials/
│   │   └── icons/
│   └── videos/
│       ├── removable-denture-process.mp4
│       ├── implants-process.mp4
│       └── veneers-process.mp4
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx (homepage)
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   ├── [service]/
│   │   │   │   └── page.tsx
│   │   ├── gallery/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── api/
│   │       ├── send-email/
│   │       │   └── route.ts
│   │       └── booking/
│   │           └── route.ts
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── BeforeAfterGallery.tsx
│   │   ├── BookingForm.tsx
│   │   ├── Testimonials.tsx
│   │   └── Hero.tsx
│   ├── data/
│   │   ├── services.ts (service metadata)
│   │   ├── gallery.ts (image paths & data)
│   │   └── testimonials.ts (patient reviews)
│   ├── styles/
│   │   └── globals.css (Tailwind config)
│   └── types/
│       └── index.ts
├── .env.local (API keys for Resend/email)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 5. Page Structure & Components

### 5.1 Homepage (`/`)
- Hero with tagline & main CTA
- Services overview grid (all 6 services)
- Featured gallery (4-6 before/after cases)
- Testimonials carousel
- Footer with contact info

### 5.2 Services (`/services`)
- Grid/list of all 6 services
- Each service card clickable → redirects to `/services/[service-slug]`

### 5.3 Service Detail Page (`/services/[service-slug]`)
Examples: `/services/removable-denture`, `/services/implants`

Structure:
- Service hero/header
- Service description
- Process/procedure overview (with images if available)
- Before/after gallery filtered to this service
- FAQ section
- Patient testimonials for this service
- Booking CTA button

### 5.4 Gallery Page (`/gallery`)
- Full gallery of all before/after images
- Filter by service type
- Responsive grid (same aspect ratio across devices)
- Lightbox modal for full-screen view
- No pagination - infinite scroll OR load more button

### 5.5 Contact/Booking Page (`/contact`)
- Contact form (name, email, phone, service, message)
- Calendly embed (if using Calendly) OR custom date/time selector
- Google Map embed (if location provided)
- Direct contact information
- Business hours

---

## 6. Data Structure

### 6.1 Services Data (`src/data/services.ts`)
```typescript
const services = [
  {
    id: 1,
    name: "Complete & Partial Removable Denture",
    slug: "removable-denture",
    description: "...",
    icon: "/images/icons/removable-denture.svg",
    details: "...",
    faqs: [...]
  },
  // ... other 5 services
];
```

### 6.2 Gallery Data (`src/data/gallery.ts`)
```typescript
const galleryImages = [
  {
    id: 1,
    service: "removable-denture",
    before: "/images/removable-denture/case-1-before.webp",
    after: "/images/removable-denture/case-1-after.webp",
    title: "Case 1: Full Denture",
    testimonial: "..."
  },
  // ... more cases
];
```

### 6.3 Testimonials Data (`src/data/testimonials.ts`)
```typescript
const testimonials = [
  {
    id: 1,
    name: "Patient Name",
    service: "implants",
    text: "...",
    rating: 5,
    image: "/images/testimonials/patient-1.webp"
  }
];
```

---

## 7. Responsive Design Implementation

### 7.1 Mobile-First Approach
- Start with mobile layout
- Scale up to tablet, then desktop
- Use Tailwind responsive classes: `sm:`, `md:`, `lg:`

### 7.2 Image Responsiveness
```typescript
<Image
  src="/images/removable-denture/case-1-before.webp"
  alt="Before"
  width={600}
  height={600}
  className="w-full h-auto aspect-square"
/>
```

### 7.3 Gallery Grid Examples
```
Mobile (320px+): 1 column (stacked before/after)
Tablet (768px+): 2 columns
Desktop (1024px+): 3-4 columns
IMPORTANT: Before/after pairs maintain same aspect ratio
```

### 7.4 Text Scaling
- Base font: 16px (mobile)
- Scale via Tailwind: `text-base sm:text-lg md:text-xl`
- Line heights maintain readability

### 7.5 Navigation
```
Mobile: Hamburger menu (fixed header)
Tablet: Horizontal nav with dropdowns (same items)
Desktop: Full navbar with submenu dropdowns
```

---

## 8. Performance Requirements

- **Image Optimization:**
  - All images WebP format (with JPG fallback)
  - Use Next.js Image component for lazy loading
  - Max file size: 150KB per image
  - Responsive srcset generation

- **Core Web Vitals:**
  - LCP: < 2.5s
  - FID: < 100ms
  - CLS: < 0.1

- **Code Splitting:**
  - Dynamic imports for heavy components
  - Route-based code splitting (Next.js default)

---

## 9. Styling Guidelines

### 9.1 Color Palette (Customize as needed)
- **Primary:** Professional blue/teal
- **Secondary:** Accent color (gold/accent)
- **Neutral:** Grays for text/backgrounds
- **Success:** Green for CTAs

### 9.2 Typography
- **Headings:** Sans-serif (Inter, Poppins)
- **Body:** Sans-serif for readability
- **Font Sizes:** Scalable via Tailwind

### 9.3 Spacing
- Use Tailwind spacing scale: `p-4`, `m-8`, etc.
- Consistent spacing across all breakpoints
- Mobile padding: 16px-20px
- Desktop padding: 24px-32px

---

## 10. Forms & Validation

### 10.1 Booking Form Validation
```typescript
- Name: Required, min 2 characters
- Email: Valid email format
- Phone: Valid phone number
- Service: Required dropdown selection
- Message: Optional, max 500 characters
- Date (if custom): Future date only
```

### 10.2 Email Notifications
- **To Patient:** Confirmation of booking/inquiry
- **To Clinic:** New booking notification with all details
- **Service:** Resend or SendGrid
- **Template:** Professional HTML template

---

## 11. Browser & Device Support

**Minimum Support:**
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- iOS Safari: iOS 12+
- Android Chrome: Android 8+

**Testing:**
- Mobile: iPhone 12/13/14, Samsung Galaxy S21, iPad
- Desktop: 1920x1080, 2560x1440
- Tablet: iPad (all sizes)

---

## 12. SEO Basics (Light)

- **Meta Tags:** Title, description for each page
- **Open Graph:** og:image, og:title, og:description
- **Structured Data:** Basic schema.json for LocalBusiness
- **Sitemap:** Auto-generated by Next.js
- **Robots.txt:** Standard configuration

---

## 13. Development Workflow

### 13.1 Setup
```bash
npx create-next-app@latest --typescript --tailwind
cd dental-practice-website
npm install react-hook-form framer-motion resend
```

### 13.2 Environment Variables
```
RESEND_API_KEY=your_key_here
NEXT_PUBLIC_SITE_URL=your_vercel_domain
```

### 13.3 Deployment
```bash
# Push to GitHub
git push origin main

# Auto-deploys on Vercel
# Monitor at vercel.com dashboard
```

---

## 14. Key Implementation Notes

### 14.1 Image Organization
- You will provide all images (before/after, testimonials, videos)
- Store in `/public/images` organized by service
- Use WebP format for web (convert JPG/PNG)
- Include alt text for accessibility

### 14.2 Content Updates
- All text content in `/src/data/*.ts` files
- No CMS needed - edit TypeScript files directly
- Re-deploy via git push
- Simple & straightforward

### 14.3 Booking System Options

**Option A: Simple Email Form**
- User fills form → Email sent to clinic
- Clinic replies via email
- Simple, no integrations needed

**Option B: Calendly Embed**
- Embed Calendly in contact page
- Auto-sync with clinic calendar
- User can self-schedule
- Requires Calendly account

**RECOMMENDATION:** Option A for simplicity, Option B for automation

### 14.4 Responsive Media
- All images display same size/aspect ratio across devices
- No cropping or resizing for mobile
- Grid adapts by changing number of columns
- Video players responsive via `aspect-video` class

---

## 15. Testing Checklist

- [ ] Mobile responsiveness (320px-480px width)
- [ ] Tablet responsiveness (768px-1024px)
- [ ] Desktop responsiveness (1920px+)
- [ ] Image loading & optimization
- [ ] Form submission & validation
- [ ] Email notifications working
- [ ] Navigation accessible on mobile
- [ ] Booking/Calendly functionality
- [ ] Video playback across devices
- [ ] Gallery filters work correctly
- [ ] Lightbox opens/closes properly
- [ ] Accessibility (WCAG AA standard)
- [ ] Lighthouse score > 85 across all metrics

---

## 16. Deliverables Timeline

**Phase 1 (Week 1-2):** Setup, homepage, services pages  
**Phase 2 (Week 2-3):** Gallery, responsive design perfection  
**Phase 3 (Week 3-4):** Booking form, email integration  
**Phase 4 (Week 4-5):** Testing, performance optimization  
**Phase 5 (Week 5-6):** Polish, deployment, handoff

---

## 17. Handoff & Maintenance

- **Code:** Organized, well-commented TypeScript
- **Documentation:** README with setup instructions
- **Image Assets:** Folder structure provided by client
- **Content Updates:** Client can edit `/src/data/*.ts` files
- **Deployment:** Vercel auto-deploys on GitHub push
- **Support:** Frontend engineer provides 2-week post-launch support

---

## 18. Contact & Escalation

**Questions during development?**
- Clarify with: [Frontend Engineer Name]
- Images/content from: [Client/Sister Name]
- Deployment questions: Vercel docs or Vercel support
- Always generate 

---

**Document Version:** 1.0  
**Last Updated:** December 2025  
**Status:** Ready for Development
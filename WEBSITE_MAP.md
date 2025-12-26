# Website Structure & Navigation Map

## Live URL
**Development**: http://localhost:3003
**Production**: (After deployment) https://yourdomain.com

---

## Page Structure

```
🏠 Homepage (/)
│
├── 🦷 Services (/services)
│   ├── Removable Denture (/services/removable-denture)
│   ├── Cast Partial Denture (/services/cast-partial-denture)
│   ├── Fixed Partial Denture (/services/fixed-partial-denture)
│   ├── Implants (/services/implants)
│   ├── Full Mouth Rehab (/services/full-mouth-rehab)
│   └── Veneers (/services/veneers)
│
├── 📸 Gallery (/gallery)
│
└── 📞 Contact (/contact)
```

---

## Homepage Sections

1. **Navigation Bar** (Fixed at top)
   - Logo/Brand name
   - Services dropdown
   - Gallery link
   - Contact link
   - "Book Appointment" button

2. **Hero Section**
   - Main headline
   - Subheadline
   - Dual CTAs
   - Trust indicators (500+ patients, 15+ years, 98% success)

3. **Services Grid**
   - All 6 services displayed
   - Click to view details
   - "View All Services" button

4. **Featured Gallery**
   - 6 before/after cases
   - Mixed services
   - "View Full Gallery" button

5. **Testimonials Carousel**
   - Patient reviews
   - Star ratings
   - Navigation arrows

6. **Why Choose Us**
   - 4 key features
   - Icon + description

7. **CTA Section**
   - Final call-to-action
   - Dual buttons (Book / Call)

8. **Footer**
   - About
   - Services list
   - Quick links
   - Contact info
   - Business hours
   - Social media

---

## Services Page Structure

### Listing Page (/services)
- Hero section
- All 6 services in grid
- Click any service → detail page

### Detail Page (/services/[service-name])
Each service page includes:
1. **Hero** - Service name and description
2. **Details** - Full information
3. **Process** - Step-by-step treatment
4. **Benefits** - Key advantages
5. **Gallery** - Before/after for this service
6. **FAQs** - Common questions
7. **Testimonials** - Service-specific reviews
8. **CTA** - Book appointment

---

## Gallery Page

### Features
- All before/after cases
- Filter by service type
- Responsive grid (1/2/3 columns)
- Click for lightbox view
- Stats section

### Gallery Categories
- All Services (default)
- Removable Denture
- Cast Partial Denture
- Fixed Partial Denture
- Implants
- Full Mouth Rehab
- Veneers

---

## Contact Page

### Left Side - Booking Form
- Name (required)
- Email (required)
- Phone (required)
- Service selection (dropdown)
- Preferred date (optional)
- Message (required)
- Submit button

### Right Side - Information
- Contact details
- Business hours
- Google Map (placeholder)

### Bottom - FAQs
- Insurance questions
- First appointment info
- Payment plans
- Appointment duration

---

## Component Breakdown

### Global Components (on all pages)
- **Navbar** - Navigation menu
- **Footer** - Site footer

### Page-Specific Components
- **Hero** - Homepage hero section
- **ServiceCard** - Service preview cards
- **BeforeAfterGallery** - Gallery grid with filtering
- **Testimonials** - Review carousel
- **BookingForm** - Appointment request form

---

## Data Files

### Services Data (`/data/services.ts`)
Contains all information for 6 services:
- Name, slug, description
- Detailed information
- Treatment process
- Benefits
- FAQs

### Gallery Data (`/data/gallery.ts`)
Contains 20 before/after cases:
- Service association
- Image paths
- Titles and descriptions
- Patient testimonials

### Testimonials Data (`/data/testimonials.ts`)
Contains 10 patient reviews:
- Name and service
- Review text
- Star rating
- Date

---

## User Journeys

### Journey 1: Learn About Service
```
Homepage → Services Grid → Service Detail Page → Gallery → Contact
```

### Journey 2: View Results
```
Homepage → Gallery → Filter by Service → Lightbox View → Contact
```

### Journey 3: Book Appointment
```
Homepage → "Book Appointment" → Contact Page → Fill Form → Submit
```

### Journey 4: Mobile Navigation
```
Homepage → Hamburger Menu → Services Dropdown → Service Page
```

---

## Mobile vs Desktop

### Mobile (< 768px)
- Hamburger menu
- Stacked layouts (1 column)
- Touch-friendly buttons
- Simplified navigation
- Same content, optimized layout

### Tablet (768px - 1024px)
- Horizontal nav OR hamburger (adaptive)
- 2-column grids
- Larger touch targets
- Optimal for browsing

### Desktop (> 1024px)
- Full horizontal navigation
- 3-4 column grids
- Dropdown menus
- Hover effects
- Maximum information density

---

## Key Features Summary

✅ **Fully Responsive** - Works on all devices
✅ **SEO Ready** - Proper meta tags and structure
✅ **Performance Optimized** - Fast loading, lazy images
✅ **Accessible** - WCAG AA compliant
✅ **Email Integrated** - Resend API for notifications
✅ **Type Safe** - Full TypeScript coverage
✅ **Animated** - Smooth Framer Motion animations
✅ **Validated Forms** - React Hook Form with validation

---

## Technical Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.1.1 |
| Language | TypeScript 5.9.3 |
| Styling | Tailwind CSS 4.1.18 |
| Animations | Framer Motion 12.23.26 |
| Forms | React Hook Form 7.69.0 |
| Email | Resend 6.6.0 |
| Hosting | Vercel (recommended) |

---

## URLs Quick Reference

| Page | URL Path | Main Purpose |
|------|----------|--------------|
| Home | `/` | Landing, overview |
| Services | `/services` | Service listing |
| Service Detail | `/services/[slug]` | Detailed info |
| Gallery | `/gallery` | Before/after photos |
| Contact | `/contact` | Booking form |

---

## Navigation Hierarchy

```
Main Navigation
├── Home
├── Services (Dropdown)
│   ├── Removable Denture
│   ├── Cast Partial Denture
│   ├── Fixed Partial Denture
│   ├── Implants
│   ├── Full Mouth Rehab
│   └── Veneers
├── Gallery
├── Contact
└── Book Appointment (CTA Button)
```

---

## Content Summary

| Section | Count | Location |
|---------|-------|----------|
| Services | 6 | `/data/services.ts` |
| Gallery Cases | 20 | `/data/gallery.ts` |
| Testimonials | 10 | `/data/testimonials.ts` |
| FAQs | 20+ | Across service pages |
| Pages | 10 | App router |
| Components | 7 | Components folder |

---

This map provides a complete overview of your website's structure and navigation. Use it as a reference when explaining the site to others or planning content updates.

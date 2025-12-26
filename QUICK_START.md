# Quick Start Guide

## Getting the Website Running (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit: **http://localhost:3003** (or the port shown in terminal)

That's it! The website is now running locally.

---

## Common Tasks

### Adding a New Before/After Image

1. **Add image files** to `/public/images/[service-name]/`:
   - `case-X-before.webp`
   - `case-X-after.webp`

2. **Update** `/data/gallery.ts`:
```typescript
{
  id: 21,  // Next available ID
  service: 'implants',  // Service slug
  before: '/images/implants/case-X-before.webp',
  after: '/images/implants/case-X-after.webp',
  title: 'Case Title',
  description: 'Brief description',
  testimonial: 'Optional patient quote'
}
```

3. Save and refresh browser - new images appear immediately!

### Adding a New Testimonial

Edit `/data/testimonials.ts`:
```typescript
{
  id: 11,
  name: 'Patient Name',
  service: 'veneers',  // Service slug
  text: 'The testimonial text here...',
  rating: 5,
  date: 'December 2024'
}
```

### Changing Contact Information

**Phone & Email**: Edit `/components/Footer.tsx` and `/app/contact/page.tsx`

**Address**: Edit `/components/Footer.tsx` (lines ~100-110)

**Business Hours**: Edit `/app/contact/page.tsx` (lines ~150-160)

### Changing Colors

Edit `/tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#007da7',  // Main blue
    // ... other shades
  },
  secondary: {
    500: '#f5c30f',  // Gold/accent color
  }
}
```

### Updating Service Information

Edit `/data/services.ts` - find the service and update:
- `name` - Service title
- `description` - Short description
- `details` - Full description
- `process` - Treatment steps array
- `benefits` - Benefits array
- `faqs` - Questions & answers array

---

## File Locations Cheat Sheet

| What to Update | File Location |
|----------------|---------------|
| Images | `/public/images/` |
| Gallery data | `/data/gallery.ts` |
| Services info | `/data/services.ts` |
| Testimonials | `/data/testimonials.ts` |
| Contact info | `/components/Footer.tsx` & `/app/contact/page.tsx` |
| Colors | `/tailwind.config.ts` |
| Business hours | `/app/contact/page.tsx` |
| Homepage content | `/app/page.tsx` |

---

## Environment Variables (.env.local)

```env
# Resend Email Service
RESEND_API_KEY=re_YourKeyHere

# Your email to receive bookings
CONTACT_EMAIL=info@yourpractice.com

# Website URL (update when deployed)
NEXT_PUBLIC_SITE_URL=http://localhost:3003
```

---

## Deployment (Quick Version)

### To Vercel:
1. Push code to GitHub
2. Go to vercel.com
3. Import GitHub repository
4. Add environment variables
5. Deploy!

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

---

## Troubleshooting

### "Port in use" error
Another app is using the port. The server will automatically use the next available port (shown in terminal).

### Images not showing
- Check file exists in `/public/images/`
- Verify path in data file matches actual file
- Make sure path starts with `/images/` not `/public/images/`

### Form not submitting
- Check `.env.local` has `RESEND_API_KEY`
- Verify Resend account is set up
- Check browser console for errors

### Changes not appearing
- Hard refresh browser (Ctrl/Cmd + Shift + R)
- Check you saved the file
- Restart dev server if needed

---

## Need Help?

1. Check [README.md](README.md) for setup instructions
2. Check [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help
3. Check [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) for project overview

---

**Your website is ready to customize and deploy!** 🚀

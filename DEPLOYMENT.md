# Deployment Guide

## Pre-Deployment Checklist

### 1. Add Real Images
- [ ] Replace placeholder images in `/public/images/` with actual before/after photos
- [ ] Ensure all images are in WebP format
- [ ] Keep file sizes under 150KB
- [ ] Update image paths in `/data/gallery.ts`

### 2. Update Contact Information
- [ ] Edit contact details in `/components/Footer.tsx`
- [ ] Update phone, email, address in `/app/contact/page.tsx`
- [ ] Set business hours in contact page
- [ ] Add Google Maps embed (replace placeholder)

### 3. Configure Email Service (Resend)

**Step 1: Create Resend Account**
1. Go to https://resend.com
2. Sign up for free account
3. Verify your email

**Step 2: Add Domain (or use test domain)**
1. In Resend dashboard, go to "Domains"
2. Add your domain (e.g., dentalcare.com)
3. Add DNS records as shown (or use test domain for now)

**Step 3: Create API Key**
1. Go to "API Keys" in Resend dashboard
2. Create new API key
3. Copy the key (you won't see it again!)

**Step 4: Update Environment Variables**
Edit `.env.local`:
```env
RESEND_API_KEY=re_your_actual_key_here
CONTACT_EMAIL=info@yourdomain.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 4. Update Email Templates
In `/app/api/booking/route.ts`, update:
- `from` email addresses to match your verified domain
- Email content and branding
- Contact phone number

### 5. Customize Branding
- [ ] Update site name "DentalCare" to your practice name
- [ ] Change color scheme in `/tailwind.config.ts` if needed
- [ ] Update metadata in `/app/layout.tsx`
- [ ] Add your logo (replace text logo in Navbar)

## Deploying to Vercel (Recommended)

### Step 1: Prepare Repository
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Dental practice website"

# Create GitHub repository and push
git remote add origin https://github.com/yourusername/dental-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure project:
   - Framework Preset: Next.js
   - Root Directory: `./` (default)
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Step 3: Add Environment Variables
In Vercel project settings:
1. Go to "Settings" → "Environment Variables"
2. Add:
   - `RESEND_API_KEY` = your_resend_key
   - `CONTACT_EMAIL` = your_email
   - `NEXT_PUBLIC_SITE_URL` = https://yourdomain.vercel.app

### Step 4: Deploy
1. Click "Deploy"
2. Wait for build to complete
3. Your site will be live at `https://your-project.vercel.app`

### Step 5: Add Custom Domain (Optional)
1. In Vercel project settings, go to "Domains"
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_SITE_URL` in environment variables

## Alternative: Deploy to Netlify

### Step 1: Build Configuration
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Deploy
1. Go to https://netlify.com
2. Import from Git
3. Select repository
4. Add environment variables
5. Deploy

## Post-Deployment Tasks

### 1. Test Everything
- [ ] Test all pages load correctly
- [ ] Test booking form submission
- [ ] Check email notifications arrive
- [ ] Test on mobile devices
- [ ] Test all service pages
- [ ] Test gallery filtering and lightbox
- [ ] Verify responsive design on different screen sizes

### 2. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics (optional)
- [ ] Update meta descriptions if needed
- [ ] Add robots.txt if needed (Next.js handles this)

### 3. Performance Check
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Optimize any slow-loading pages
- [ ] Verify images are properly optimized

### 4. Security
- [ ] Ensure HTTPS is enabled
- [ ] Check environment variables are secure
- [ ] Verify email API key is not exposed

## Monitoring & Maintenance

### Regular Updates
- Update testimonials regularly
- Add new before/after photos
- Keep service information current
- Update business hours if changed

### Performance Monitoring
- Use Vercel Analytics (free tier available)
- Monitor Core Web Vitals
- Check email delivery rates

### Content Updates
To update content without redeploying:
1. Edit files in `/data/` directory
2. Commit and push to GitHub
3. Vercel auto-deploys changes

## Troubleshooting

### Build Fails
- Check for TypeScript errors: `npm run build` locally
- Verify all dependencies installed
- Check environment variables are set

### Emails Not Sending
- Verify Resend API key is correct
- Check domain verification in Resend
- Review API route logs in Vercel
- Test with Resend test domain first

### Images Not Loading
- Ensure images are in `/public/images/`
- Check image paths in data files
- Verify image formats (WebP, JPG)

### Mobile Issues
- Test on real devices
- Use browser dev tools mobile view
- Check responsive breakpoints in Tailwind

## Support Resources

- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Resend Docs: https://resend.com/docs
- Tailwind CSS: https://tailwindcss.com/docs

---

**Ready to Deploy!** Follow the steps above and your website will be live in minutes.

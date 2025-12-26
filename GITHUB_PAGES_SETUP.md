# GitHub Pages Setup Instructions

Your site is now configured for GitHub Pages deployment! Follow these steps to enable it:

## 1. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub: https://github.com/pexldev/priyanka-website
2. Click on **Settings** (top navigation)
3. In the left sidebar, click on **Pages** (under "Code and automation")
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. Save the settings

## 2. Wait for Deployment

- The GitHub Action will automatically run when you push changes
- You can monitor the deployment progress in the **Actions** tab
- First deployment takes 2-5 minutes

## 3. Access Your Site

Once deployed, your site will be available at:

**https://pexldev.github.io/priyanka-website/**

## 4. Share with Your Sister

Send her this link:
👉 **https://pexldev.github.io/priyanka-website/**

## Automatic Updates

Every time you push changes to the `main` branch, GitHub Pages will automatically rebuild and redeploy your site!

## Troubleshooting

If the site doesn't load:

1. Check the **Actions** tab to see if the deployment succeeded
2. Make sure GitHub Pages is enabled in Settings → Pages
3. Wait a few minutes after the first deployment
4. Try clearing your browser cache

## Local Testing

To test the static build locally before deploying:

```bash
npm run build
npx serve@latest out
```

This will show you exactly what will be deployed to GitHub Pages.

---

🎉 Your site is ready to share!

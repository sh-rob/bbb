# Deployment Guide - GitHub & Vercel

Deploy your Body's By Bert Performance & Fitness website to the web in minutes!

## Prerequisites

- GitHub account ([sign up](https://github.com/signup) if you don't have one)
- Vercel account ([sign up](https://vercel.com/signup) - free, use GitHub to sign in)
- Git installed on your computer

## Step 1: Initialize Git Repository

Run these commands in your project directory:

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Body's By Bert Fitness website

- Next.js 14 with TypeScript
- Setmore booking integration
- Zapier contact form notifications
- Dark Vader theme with animations
- Fully responsive design"
```

## Step 2: Create GitHub Repository

### Option A: Using GitHub Website

1. **Go to GitHub**: [github.com/new](https://github.com/new)

2. **Create new repository**:
   - Repository name: `bodys-by-bert-fitness` (or your preferred name)
   - Description: `Body's By Bert Performance & Fitness - Next.js website`
   - **Keep it Public** (or Private if you have paid GitHub)
   - **Do NOT** initialize with README, .gitignore, or license (we already have these)

3. **Click "Create repository"**

4. **Copy the commands** GitHub shows for "push an existing repository"

### Option B: Using GitHub CLI (if installed)

```bash
gh repo create bodys-by-bert-fitness --public --source=. --remote=origin --push
```

## Step 3: Push to GitHub

Use the commands from GitHub (will look something like this):

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/bodys-by-bert-fitness.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

## Step 4: Deploy to Vercel

### Quick Deploy (Recommended)

1. **Go to Vercel**: [vercel.com](https://vercel.com)

2. **Sign in with GitHub**

3. **Import Project**:
   - Click **"Add New..."** → **"Project"**
   - Select your `bodys-by-bert-fitness` repository
   - Click **"Import"**

4. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `next build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)

5. **Environment Variables** (IMPORTANT!):

   Click **"Environment Variables"** and add:

   ```
   NEXT_PUBLIC_SETMORE_URL=https://booking.setmore.com/scheduleappointment/YOUR_BUSINESS_ID

   NEXT_PUBLIC_ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/XXXXXX/YYYYYY/
   ```

   **Add both if you've set them up!** (If not set up yet, you can add them later)

6. **Deploy**:
   - Click **"Deploy"**
   - Wait 2-3 minutes for build to complete
   - Vercel will give you a URL like: `bodys-by-bert-fitness.vercel.app`

7. **Done!** 🎉
   - Your site is now live!
   - Any future `git push` will auto-deploy

## Step 5: Set Up Custom Domain (Optional)

### Add Your Domain to Vercel

1. **Go to your project** in Vercel dashboard

2. **Click "Settings"** → **"Domains"**

3. **Add domain**:
   - Enter your domain: `bodysbybertfitness.com`
   - Click **"Add"**

4. **Configure DNS**:

   Vercel will show you DNS records to add. Go to your domain registrar (GoDaddy, Namecheap, etc.):

   **For apex domain (bodysbybertfitness.com)**:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www subdomain**:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

5. **Wait for DNS propagation** (5 minutes to 48 hours, usually ~1 hour)

6. **Done!** Your site is now at your custom domain with free HTTPS!

## Post-Deployment Checklist

After deploying, verify everything works:

### Test Checklist

- [ ] Website loads at Vercel URL
- [ ] All sections display correctly
- [ ] Dark Vader animations working
- [ ] Setmore booking calendar shows (if configured)
- [ ] Contact form submits successfully
- [ ] Zapier notifications received (if configured)
- [ ] Mobile responsive design works
- [ ] Dark theme displays correctly

### Environment Variables to Add (if not done yet)

Go to Vercel dashboard → Settings → Environment Variables:

1. **Setmore** (for booking):
   ```
   NEXT_PUBLIC_SETMORE_URL=your-setmore-booking-url
   ```

2. **Zapier** (for contact form):
   ```
   NEXT_PUBLIC_ZAPIER_WEBHOOK_URL=your-zapier-webhook-url
   ```

After adding/changing env variables:
- Go to **Deployments** tab
- Click **"..."** on latest deployment
- Click **"Redeploy"**

## Updating Your Site

After making changes locally:

```bash
# Stage changes
git add .

# Commit changes
git commit -m "Description of what you changed"

# Push to GitHub
git push

# Vercel automatically deploys! ✨
```

That's it! Vercel detects the push and redeploys automatically.

## Common Issues & Solutions

### Issue: Build fails on Vercel

**Check:**
1. Environment variables are set correctly
2. No TypeScript errors (run `npm run build` locally first)
3. All dependencies in `package.json`

**Solution:**
```bash
# Test build locally
npm run build

# Fix any errors shown
# Then commit and push again
```

### Issue: Environment variables not working

**Solution:**
1. Go to Vercel → Settings → Environment Variables
2. Make sure variables start with `NEXT_PUBLIC_`
3. Click **"Redeploy"** after adding variables

### Issue: Setmore booking page not showing

**Check:**
1. `NEXT_PUBLIC_SETMORE_URL` is set in Vercel
2. URL is correct (copy from Setmore settings)
3. You redeployed after adding the env variable

### Issue: Contact form not sending to Zapier

**Check:**
1. `NEXT_PUBLIC_ZAPIER_WEBHOOK_URL` is set in Vercel
2. Webhook URL is correct (test in Zapier)
3. Zap is turned ON in Zapier dashboard

### Issue: Animations not working

**Likely cause:** The CSS file didn't import correctly

**Solution:**
1. Check `app/layout.tsx` has `import '../dark-vader-enhancements.css'`
2. Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
3. Redeploy on Vercel

### Issue: Custom domain not working

**Check:**
1. DNS records are correct (match Vercel exactly)
2. Wait longer (DNS can take up to 48 hours)
3. Use [DNS Checker](https://dnschecker.org) to verify propagation

## Vercel Dashboard Features

### Analytics
- See visitor count, page views
- Free on all plans

### Deployment History
- See all past deployments
- Rollback to previous version instantly

### Logs
- View build logs
- Check for errors

### Preview Deployments
- Every git branch gets a preview URL
- Test changes before merging to main

## Costs

### Free Tier Includes:
- ✅ Unlimited personal projects
- ✅ 100GB bandwidth/month
- ✅ Free SSL certificate
- ✅ Automatic deployments
- ✅ Preview deployments
- ✅ Analytics

**Perfect for your fitness website!** You likely won't need to upgrade unless you get massive traffic (100k+ visitors/month).

## Security Best Practices

### Never Commit Sensitive Data

Already configured in `.gitignore`:
```
.env*.local
```

This keeps your:
- Setmore URLs
- Zapier webhook URLs
- API keys

...safe and not in public GitHub repo.

### Webhook URLs are Safe

Even though webhook URLs are in code:
- Zapier webhooks are meant to be public-facing
- They can only receive data (POST), not leak it
- Rate-limited by Zapier

## Backup & Version Control

Your code is now safely backed up:
- ✅ GitHub repo (version history)
- ✅ Vercel deployments (rollback anytime)
- ✅ Local copy on your computer

## Support Links

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Discord**: [vercel.com/discord](https://vercel.com/discord)
- **Next.js Deploy Guide**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

---

## Quick Reference Commands

```bash
# Check status
git status

# Stage all changes
git add .

# Commit
git commit -m "Your message here"

# Push to GitHub (triggers Vercel deploy)
git push

# View git log
git log --oneline

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

---

**Your website is now live and professional! Share your Vercel URL with clients!** 🚀

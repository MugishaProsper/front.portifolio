# Deployment Guide

This guide covers deploying your Next.js portfolio to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Done! Your site is live

### Method 2: Vercel CLI

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Deploy to Production:**
```bash
vercel --prod
```

### Environment Variables (if needed)
- Go to your project settings on Vercel
- Navigate to "Environment Variables"
- Add any required variables
- Redeploy

## 🌐 Netlify

### Method 1: GitHub Integration

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify:**
   - Go to https://netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

### Method 2: Netlify CLI

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Login:**
```bash
netlify login
```

3. **Initialize:**
```bash
netlify init
```

4. **Deploy:**
```bash
netlify deploy --prod
```

## 🐳 Docker

### Create Dockerfile

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Build and Run

```bash
# Build
docker build -t portfolio .

# Run
docker run -p 3000:3000 portfolio
```

## ☁️ AWS (EC2)

### 1. Launch EC2 Instance
- Choose Ubuntu Server
- Select t2.micro (free tier)
- Configure security group (allow HTTP/HTTPS)

### 2. Connect and Setup

```bash
# Connect to EC2
ssh -i your-key.pem ubuntu@your-ec2-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
sudo npm install -g pm2

# Clone your repository
git clone https://github.com/yourusername/your-repo.git
cd your-repo

# Install dependencies
npm install

# Build
npm run build

# Start with PM2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

### 3. Setup Nginx (Optional)

```bash
# Install Nginx
sudo apt install nginx

# Configure Nginx
sudo nano /etc/nginx/sites-available/portfolio

# Add configuration:
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Enable site
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 🌍 Custom Domain

### Vercel
1. Go to project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify
1. Go to site settings
2. Navigate to "Domain management"
3. Add custom domain
4. Update DNS records

### DNS Configuration
Add these records to your domain provider:

```
Type    Name    Value
A       @       Your-Server-IP
CNAME   www     your-domain.com
```

## 🔒 SSL Certificate

### Vercel/Netlify
- Automatic SSL (Let's Encrypt)
- No configuration needed

### AWS/Custom Server
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal
sudo certbot renew --dry-run
```

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images:**
```bash
# Use Next.js Image component (already implemented)
# Compress images before uploading
```

2. **Analyze Bundle:**
```bash
npm run build
# Check .next/analyze for bundle size
```

3. **Enable Compression:**
```javascript
// next.config.ts
const nextConfig = {
  compress: true,
  // ... other config
};
```

### After Deployment

1. **Enable CDN** (Vercel/Netlify do this automatically)
2. **Monitor Performance** with Lighthouse
3. **Check Core Web Vitals**
4. **Set up Analytics** (Google Analytics, Vercel Analytics)

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - run: npm run test # if you have tests
      # Add deployment steps here
```

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Environment Variables Not Working
- Check variable names match exactly
- Restart the deployment
- Verify variables are set in platform settings

## 📝 Pre-Deployment Checklist

- [ ] All content updated
- [ ] Images optimized
- [ ] CV/Resume uploaded
- [ ] Contact information correct
- [ ] Meta tags updated
- [ ] Build succeeds locally
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Theme switching works
- [ ] All links work
- [ ] Forms submit correctly

## 🎯 Post-Deployment

1. **Test Everything:**
   - Visit all pages
   - Test on mobile
   - Check all links
   - Test contact form
   - Verify theme switching

2. **Monitor:**
   - Set up error tracking (Sentry)
   - Enable analytics
   - Monitor performance
   - Check uptime

3. **Share:**
   - Update LinkedIn
   - Share on social media
   - Add to resume
   - Submit to directories

## 📞 Support

If you encounter deployment issues:
- Check platform documentation
- Review build logs
- Check environment variables
- Verify Node.js version
- Clear cache and rebuild

---

Good luck with your deployment! 🚀

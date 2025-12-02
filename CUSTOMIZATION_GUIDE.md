# Customization Guide

This guide will help you customize your portfolio to match your personal brand and content.

## 🎨 Quick Customization Checklist

### 1. Personal Information
**File:** `src/lib/data.ts`

Update the `contactInfo` object:
```typescript
export const contactInfo = {
  email: "your.email@example.com",        // Your email
  phone: "+1 234 567 8900",               // Your phone
  location: "Your City, Country",         // Your location
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  instagram: "https://instagram.com/yourusername"
};
```

### 2. Projects
**File:** `src/lib/data.ts`

Update the `projects` array with your own projects:
```typescript
{
  _id: "unique-id",
  projectName: "Your Project Name",
  projectDescription: "Detailed description of your project...",
  sampleImages: [
    "https://your-image-url.com/image1.jpg",
    "https://your-image-url.com/image2.jpg"
  ],
  technologies: ["React", "Node.js", "MongoDB"],
  categories: ["Web Development", "Full-Stack"],
  projectStatus: "COMPLETED", // or "IN_PROGRESS" or "PLANNED"
  projectUrl: "https://your-project-url.com",
  createdAt: "2024-01-15T10:00:00.000Z",
  statistics: {
    likes: 0,
    views: 0,
    comments_count: 0
  }
}
```

**Image Sources:**
- Use Unsplash for free high-quality images: https://unsplash.com
- Or upload your own screenshots to a CDN
- Or use local images in the `public` folder

### 3. Testimonials
**File:** `src/lib/data.ts`

Update the `testimonials` array:
```typescript
{
  _id: "unique-id",
  clientName: "Client Name",
  clientRole: "CEO / CTO / etc",
  project: "Project Name",
  message: "Full testimonial message from the client...",
  rating: 5, // 1-5 stars
  image: "https://ui-avatars.com/api/?name=Client+Name",
  createdAt: "2024-01-15T10:00:00.000Z"
}
```

### 4. About Section
**File:** `src/components/sections/About.tsx`

Update the journey text (lines 70-85):
```typescript
<p>
  Your personal story and background...
</p>
<p>
  Your expertise and specializations...
</p>
<p>
  Your interests and activities...
</p>
```

Update skills (lines 25-30):
```typescript
const skills = [
  { name: "Your Skill 1", level: 95, color: "bg-blue-500" },
  { name: "Your Skill 2", level: 90, color: "bg-purple-500" },
  // Add more skills...
];
```

### 5. Hero Section
**File:** `src/components/sections/Hero.tsx`

Update the tagline (line 45):
```typescript
<p>
  Your personal tagline or mission statement...
</p>
```

Update skill preview cards (lines 55-75):
```typescript
<div className="card-ai p-6 text-center">
  <YourIcon className="w-10 h-10 mx-auto mb-3" />
  <h3>Your Skill Category</h3>
  <p>Your technologies</p>
</div>
```

### 6. Skills Section
**File:** `src/components/sections/Skills.tsx`

Update skill categories (lines 10-50):
```typescript
const skillCategories = [
  {
    title: "Your Category",
    icon: YourIcon,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    skills: [
      { name: "Technology 1", level: 88 },
      { name: "Technology 2", level: 85 },
    ]
  },
  // Add more categories...
];
```

Update technologies (lines 52-60):
```typescript
const technologies = [
  { name: "Tech Name", icon: TechIcon, color: "text-blue-500" },
  // Add more technologies...
];
```

### 7. Colors and Theme
**File:** `src/app/globals.css`

Update color variables (lines 3-10):
```css
@theme {
  --color-ai-primary: #6366f1;      /* Your primary color */
  --color-ai-secondary: #8b5cf6;    /* Your secondary color */
  --color-ai-accent: #06b6d4;       /* Your accent color */
  --color-ai-success: #10b981;      /* Success color */
  --color-ai-warning: #f59e0b;      /* Warning color */
  --color-ai-error: #ef4444;        /* Error color */
}
```

### 8. Logo
**Files:** `public/logo.svg` and `public/logo_dark.svg`

Replace these files with your own logo:
- `logo.svg` - For light theme
- `logo_dark.svg` - For dark theme

Or update the text in the SVG files:
```svg
<text x="5" y="28" ...>
  YOUR_NAME
</text>
```

### 9. Resume/CV
**File:** `public/cv/MugishaProsperResume.pdf`

Replace with your actual resume:
1. Export your resume as PDF
2. Name it appropriately
3. Place it in `public/cv/`
4. Update the link in Navbar.tsx if you changed the filename

### 10. Meta Tags and SEO
**File:** `src/app/layout.tsx`

Update metadata (lines 13-35):
```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title | Portfolio",
  description: "Your professional description...",
  keywords: ["Your", "Keywords", "Here"],
  authors: [{ name: "Your Name" }],
  // Update OpenGraph and Twitter metadata too
};
```

## 🎨 Advanced Customization

### Change Animation Speed
**File:** `src/app/globals.css`

Update animation durations:
```css
@theme {
  --transition-fast: 0.15s ease-in-out;
  --transition-normal: 0.3s ease-in-out;
  --transition-slow: 0.5s ease-in-out;
}
```

### Add New Section
1. Create new component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Add navigation link in `src/components/sections/Navbar.tsx`

### Change Fonts
**File:** `src/app/layout.tsx`

Update the font import:
```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({ 
  subsets: ["latin"],
  variable: "--font-your-font",
});
```

### Modify Glassmorphism Effect
**File:** `src/app/globals.css`

Adjust the glass effect:
```css
.glass {
  background: rgba(255, 255, 255, 0.8);  /* Adjust opacity */
  backdrop-filter: blur(16px);            /* Adjust blur */
  border: 1px solid rgba(46, 43, 43, 0.1);
}
```

## 📸 Image Guidelines

### Project Images
- **Recommended size:** 1200x800px
- **Format:** JPG or PNG
- **Optimization:** Use compressed images
- **Sources:** 
  - Unsplash: https://unsplash.com
  - Your own screenshots
  - Design mockups

### Testimonial Images
- **Recommended size:** 200x200px
- **Format:** JPG or PNG
- **Fallback:** UI Avatars API (automatic)

## 🎯 Content Writing Tips

### Project Descriptions
- Start with the problem you solved
- Highlight key features
- Mention technologies used
- Include results/impact
- Keep it concise (150-200 words)

### Testimonials
- Use real client feedback when possible
- Include specific details
- Mention the project name
- Add client's role and company
- Keep it authentic

### About Section
- Tell your story
- Highlight your expertise
- Show your personality
- Keep it professional yet personal
- Update regularly

## 🚀 Deployment Checklist

Before deploying:
- [ ] Update all personal information
- [ ] Replace placeholder images
- [ ] Add real projects
- [ ] Update testimonials
- [ ] Replace CV/Resume
- [ ] Update meta tags
- [ ] Test on mobile devices
- [ ] Check all links
- [ ] Test contact form
- [ ] Verify theme switching
- [ ] Run `npm run build` successfully

## 📝 Maintenance

### Regular Updates
- Add new projects as you complete them
- Update skills and technologies
- Refresh testimonials
- Update CV/Resume
- Check for broken links
- Update dependencies

### Performance Monitoring
- Use Lighthouse for performance checks
- Monitor Core Web Vitals
- Optimize images regularly
- Keep dependencies updated

## 🆘 Common Issues

### Images Not Loading
- Check image URLs are accessible
- Verify Next.js image configuration in `next.config.ts`
- Ensure images are in `public` folder or from allowed domains

### Theme Not Switching
- Check localStorage is enabled
- Verify ThemeProvider is wrapping the app
- Check browser console for errors

### Build Errors
- Run `npm run build` to see specific errors
- Check TypeScript errors with `npm run lint`
- Verify all imports are correct

## 📞 Need Help?

If you encounter issues:
1. Check the README.md
2. Review component comments
3. Check Next.js documentation
4. Review Tailwind CSS documentation
5. Check Framer Motion documentation

---

Happy customizing! 🎨

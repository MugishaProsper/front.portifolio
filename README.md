# MUGISHA Prosper - AI Developer Portfolio (Next.js)

A modern, AI-themed personal portfolio built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion. Features a stunning glassmorphism design with smooth animations and responsive layout.

## 🚀 Features

- **Next.js 16** - Latest Next.js with App Router and React Server Components
- **React 19** - Modern React with latest features
- **Tailwind CSS 4** - Utility-first CSS framework with custom AI theme
- **Framer Motion** - Smooth animations and transitions
- **shadcn/ui** - Beautiful UI components with toast notifications
- **TypeScript** - Type-safe code
- **Hardcoded Data** - No external API dependencies
- **Dark/Light Mode** - Theme switching with system preference detection
- **Responsive Design** - Works perfectly on all devices
- **SEO Optimized** - Meta tags and structured data
- **Performance Optimized** - Image optimization, code splitting, and lazy loading

## 🎨 Design Features

- **Glassmorphism Effects** - Translucent cards with backdrop blur
- **Gradient Backgrounds** - AI-inspired color gradients
- **Custom Animations** - Smooth scroll animations and hover effects
- **Typography** - Modern font hierarchy with gradient text effects
- **Color Palette** - AI-themed colors with primary, secondary, and accent variants

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx      # Navigation component
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Skills.tsx      # Skills and technologies
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer component
│   ├── ui/
│   │   ├── button.tsx      # Button component
│   │   ├── toast.tsx       # Toast component
│   │   └── toaster.tsx     # Toast provider
│   └── ThemeToggle.tsx     # Theme switcher
├── contexts/
│   └── theme-context.tsx   # Theme context provider
├── hooks/
│   └── use-toast.ts        # Toast hook
└── lib/
    ├── data.ts             # Hardcoded data (projects, testimonials)
    └── utils.ts            # Utility functions
```

## 🎯 Sections

1. **Hero** - Landing section with animated background and skill preview
2. **About** - Personal information, stats, and technical skills
3. **Projects** - Portfolio showcase with category filtering and modals
4. **Skills** - Technology stack with progress bars and icons
5. **Testimonials** - Client feedback with ratings and project details
6. **Contact** - Contact form with toast notifications
7. **Footer** - Social links and additional information

## 🎨 Customization

### Colors
The portfolio uses CSS custom properties for easy color customization. Edit the variables in `src/app/globals.css`:

```css
@theme {
  --color-ai-primary: #6366f1;
  --color-ai-secondary: #8b5cf6;
  --color-ai-accent: #06b6d4;
  /* ... more colors */
}
```

### Content
Update the content in `src/lib/data.ts`:
- **Projects**: Add your projects with images, technologies, and descriptions
- **Testimonials**: Add client testimonials with ratings and project details
- **Contact Info**: Update email, phone, location, and social links

### Styling
- **Glassmorphism**: Use `.glass` class
- **Gradients**: Apply `.text-gradient-ai` for gradient text
- **Animations**: Use Framer Motion components for animations

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Other Platforms
```bash
npm run build
npm start
```

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🛠️ Technologies

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **shadcn/ui** - UI components
- **Lucide React** - Icons
- **date-fns** - Date formatting

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please reach out through the contact form on the portfolio or via email at nelsonprox92@gmail.com.

---

Built with ❤️ by MUGISHA Prosper (Polo)

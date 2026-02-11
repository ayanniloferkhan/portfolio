# Ayan Khan - Personal Portfolio Website

A modern, fully responsive personal portfolio website built with ReactJS, Vite, TailwindCSS, and Framer Motion.

## Features

- ✨ **Modern Design**: Clean, professional aesthetic with smooth animations
- 🌓 **Dark/Light Mode**: Fully functional theme toggle with localStorage persistence
- 📱 **Fully Responsive**: Works seamlessly on all device sizes
- ⚡ **Performance Optimized**: Fast load times with lazy loading and optimized assets
- 📧 **Contact Form**: Integrated with EmailJS for email functionality
- 🎨 **Smooth Animations**: Framer Motion animations throughout
- 🔍 **SEO Ready**: Optimized for search engines
- 📦 **Easy Deployment**: Ready for Vercel, Netlify, or any static host

## Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS 3 with dark mode (class strategy)
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons
- **Email**: EmailJS
- **Routing**: React Router 6
- **State Management**: React Context API

## Project Structure

```
client/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── Education.tsx
│       └── Contact.tsx
├── contexts/
│   └── ThemeContext.tsx
├── pages/
│   ├── Index.tsx (Home)
│   └── NotFound.tsx
├── App.tsx
└── global.css

tailwind.config.ts
package.json
```

## Installation & Setup

### Prerequisites
- Node.js 16+ 
- pnpm (or npm/yarn)

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd <your-repo>
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Configure EmailJS (Optional but Recommended)

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service and template
3. Get your credentials:
   - Service ID
   - Template ID
   - Public Key
4. Update `client/components/sections/Contact.tsx`:
   ```typescript
   const EMAILJS_SERVICE_ID = 'your_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_template_id';
   const EMAILJS_PUBLIC_KEY = 'your_public_key';
   ```

### 4. Run Development Server
```bash
pnpm dev
```

The app will be available at `http://localhost:8080`

## Building for Production

### Build the Project
```bash
pnpm build
```

This creates optimized production builds in the `dist` directory.

### Local Production Preview
```bash
pnpm start
```

## Deployment

### Deploy to Vercel (Recommended)

#### Option 1: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Option 2: Using Git Integration
1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Select your GitHub repository
5. Vercel will automatically detect the Vite configuration
6. Click "Deploy"

#### Environment Variables
If using EmailJS, add your public key as an environment variable in Vercel:
- Go to Project Settings → Environment Variables
- Add `VITE_EMAILJS_PUBLIC_KEY` with your EmailJS public key

### Deploy to Netlify

#### Option 1: Using Netlify CLI
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Option 2: Using Git Integration
1. Connect your GitHub repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `dist`
4. Deploy

### Deploy to Other Platforms

The app can be deployed to any platform that supports static sites:
- GitHub Pages
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps

## Customization

### Update Portfolio Information
Edit the following sections in `client/components/sections/`:
- **About**: `About.tsx` - Add your professional summary
- **Experience**: `Experience.tsx` - Update work history
- **Projects**: `Projects.tsx` - Showcase your projects
- **Skills**: `Skills.tsx` - List your technical skills
- **Education**: `Education.tsx` - Add your education

### Change Color Scheme
Update the theme colors in:
- `client/global.css` - CSS variables for light/dark themes
- `tailwind.config.ts` - Tailwind color configuration

### Update Contact Information
In `client/components/sections/Contact.tsx`:
- Email
- Phone
- LinkedIn URL

## Available Commands

```bash
# Development
pnpm dev          # Start dev server

# Build
pnpm build        # Build for production
pnpm build:client # Build client only
pnpm build:server # Build server only

# Utilities
pnpm typecheck    # Check TypeScript types
pnpm test         # Run tests
pnpm format.fix   # Format code with Prettier
pnpm start        # Start production server
```

## Performance Tips

1. **Images**: Use optimized image formats (WebP, AVIF)
2. **Lazy Loading**: Images and components load on demand
3. **Code Splitting**: Vite automatically handles code splitting
4. **CSS Optimization**: TailwindCSS purges unused styles
5. **Minification**: Production builds are automatically minified

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## SEO Optimization

- ✅ Meta tags configured
- ✅ Semantic HTML structure
- ✅ Mobile-friendly responsive design
- ✅ Fast load times (Lighthouse optimized)
- ✅ Accessibility (WCAG compliant)

## Lighthouse Scores Target

- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

## Troubleshooting

### Dark Mode Not Working
- Check browser localStorage is enabled
- Ensure `theme` value is set correctly in localStorage
- Verify `<html>` element has `dark` class

### Email Not Sending
- Verify EmailJS credentials are correct
- Check service and template IDs match
- Ensure public key is set
- Test in EmailJS dashboard first

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (`pnpm dev`)
- Verify Tailwind CSS is compiled

## Contributing

Feel free to fork and customize this template for your own portfolio!

## License

MIT License - feel free to use this template for your portfolio

## Contact

For questions or support:
- Email: ayannilofer99@gmail.com
- Phone: +91 7869221438
- LinkedIn: [Ayan Khan](https://www.linkedin.com/in/ayan-khan-8808671a9)

---

**Made with ❤️ using React, Vite & TailwindCSS**

# Alta Norte Web

Premium landing page for Alta Norte - an exclusive country development in the Sierra Madre.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── shared/        # Shared component library
│   ├── Navigation.astro
│   ├── HeroSection.astro
│   ├── AboutSection.astro
│   ├── AmenitiesSection.astro
│   ├── InteractivePlansSection.astro
│   ├── CTASection.astro
│   ├── VirtualTourSection.astro
│   └── Footer.astro
├── layouts/           # Page layouts
│   └── Layout.astro   # Main layout with SEO
├── pages/             # Route pages
│   ├── index.astro    # Spanish homepage
│   └── en/
│       └── index.astro # English homepage
├── i18n/              # Internationalization
│   ├── es.json        # Spanish translations
│   ├── en.json        # English translations
│   └── index.ts       # i18n utilities
└── assets/            # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary**: `#2A3729` (Dark Forest Green)
- **Secondary**: `#265143` (Medium Forest Green)
- **Tertiary**: `#272831` (Dark Charcoal)
- **Accent**: `#0D1518` (Deep Black)
- **Surface**: `#061717` (Almost Black)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Design Principles
- **High Contrast**: White text on dark surfaces, black text on light backgrounds
- **Generous Whitespace**: Luxurious, uncluttered feel
- **Subtle Motion**: Gentle transitions and hover effects
- **Accessibility**: WCAG 2.1 AA compliant

## 🌐 Internationalization

The site supports Spanish (default) and English:

- Spanish: `/` (default)
- English: `/en/`

Translations are managed in JSON files in the `src/i18n/` directory.

## 📱 Features

### ✅ Implemented
- [x] Responsive navigation with mobile menu
- [x] Hero section with mountain parallax
- [x] About section with brand showcase
- [x] Amenities grid with hover effects
- [x] Interactive plans preview (UI only)
- [x] CTA section with price teaser
- [x] Virtual tour preview (UI only)
- [x] Comprehensive footer
- [x] Bilingual support (ES/EN)
- [x] SEO optimization
- [x] Accessibility features
- [x] Smooth scrolling
- [x] Loading animations

### 🚧 Coming Soon (Future Phases)
- [ ] Interactive SVG site map
- [ ] 360° virtual tour integration
- [ ] Lead capture forms
- [ ] CMS integration
- [ ] Blog section
- [ ] Property search functionality

## 🛠️ Technology Stack

- **Framework**: Astro 5.8.1
- **Styling**: Tailwind CSS
- **Interactivity**: React (selective hydration)
- **i18n**: Custom implementation
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel/Netlify

## 🎯 Performance

- **100% Static**: Most components are server-rendered
- **Selective Hydration**: Only interactive components use client-side JS
- **Optimized Images**: Automatic optimization and lazy loading
- **Minimal Bundle**: Tree-shaking and code splitting
- **SEO Optimized**: Meta tags, structured data, semantic HTML

## 📋 Development Guidelines

### Component Usage

```astro
---
// Use shared components
import { Button, Title } from '@/components/shared';
---

<Title as="h2" variant="luxury" size="xl">
  Section Title
</Title>

<Button variant="primary" size="lg">
  Call to Action
</Button>
```

### Adding New Translations

1. Add keys to `src/i18n/es.json` and `src/i18n/en.json`
2. Use in components: `{translations.key.subkey}`

### Creating New Sections

1. Create component in `src/components/`
2. Add to main page layouts
3. Update navigation if needed
4. Add translations

## 🚀 Deployment

The project is ready for deployment on modern hosting platforms:

```bash
# Build for production
npm run build

# The dist/ folder contains the static site
```

### Environment Variables (if needed in future)
```env
# Example for future API integrations
CONTACT_FORM_API=
ANALYTICS_ID=
```

## 📞 Contact & Support

For questions about the Alta Norte development:
- Website: www.altanorte.mx
- Email: contacto@altanorte.mx
- Phone: +52 (xxx) xxx-xxxx

---

Built with ❤️ for Alta Norte - Where luxury meets nature in the Sierra Madre.

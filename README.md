# Beauty Makeup - Oksana Prudyus

Official portfolio website and master course platform for professional makeup artist Oksana Prudyus.

## 🌟 Overview

A luxury, professional website showcasing makeup artistry courses and services with an elegant gold and dark aesthetic. Built with modern web technologies focusing on user experience, accessibility, and responsive design.

## ✨ Features

- **Elegant Design**: Luxury aesthetic with gold accents (#d4af37) on dark backgrounds
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Fade-in effects and smooth scroll navigation
- **Interactive Gallery**: Portfolio section with filtering and modal lightbox
- **Mobile Menu**: Hamburger navigation for mobile devices
- **Form Validation**: Client-side validation for contact/booking form
- **Accessibility**: Semantic HTML5 and ARIA labels for screen readers
- **SEO Optimized**: Meta tags and semantic structure

## 🎨 Design Elements

### Color Palette
- Primary Gold: `#d4af37`
- Secondary Gold: `#f4c430`
- Dark Background: `#0a0a0a`
- Light Background: `#1a1a1a`
- White Text: `#ffffff`

### Typography
- Headings: Playfair Display (serif)
- Body: Montserrat (sans-serif)

## 📂 File Structure

```
/
├── index.html           # Main HTML file
├── css/
│   └── style.css       # All styles and responsive design
├── js/
│   └── script.js       # Interactive functionality
├── images/             # Placeholder for images
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Dev6G/oksana-prudyus-makeup.git
cd oksana-prudyus-makeup
```

2. Open `index.html` in your web browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or use a local development server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## 📱 Sections

1. **Header/Navigation**: Fixed header with logo, navigation menu, and "Book Now" CTA
2. **Hero Section**: Large hero with title, tagline, description, and dual CTAs
3. **About Section**: Professional background and expertise of Oksana Prudyus
4. **Program Section**: 6 course modules with detailed curriculum
5. **Portfolio Gallery**: Filterable portfolio grid with categories (Bridal, Evening, Editorial, Natural)
6. **Pricing Section**: 3 pricing tiers (Essentials, Professional, Master Class)
7. **Booking/Contact**: Contact form with validation and contact details
8. **Footer**: Quick links, social media, and copyright information

## 🛠️ Technologies

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Custom Properties, Animations
- **JavaScript (Vanilla)**: No frameworks or libraries required
- **Google Fonts**: Playfair Display & Montserrat
- **Font Awesome**: Icons (v6.4.0)

## 🎯 Key Features Explained

### Smooth Scroll Navigation
Clicking any navigation link smoothly scrolls to the corresponding section with proper offset for the fixed header.

### Portfolio Filter
Filter portfolio items by category (All, Bridal, Evening, Editorial, Natural) with smooth transitions.

### Gallery Modal
Click any portfolio item to open a fullscreen modal with navigation (previous/next) and keyboard support (Arrow keys, Escape).

### Form Validation
Real-time validation for:
- Required fields
- Email format
- Phone number format
- Success/error messages

### Responsive Design Breakpoints
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 767px

### Accessibility Features
- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management in modal
- Sufficient color contrast ratios

## 🖼️ Adding Images

Replace placeholder images in the `images/` directory:

1. Hero background: Add a high-quality makeup image
2. About photo: Professional photo of Oksana Prudyus
3. Portfolio images: 8+ high-quality makeup work photos

Update the HTML to reference your images:
```html
<!-- Example for About section -->
<img src="images/oksana-profile.jpg" alt="Oksana Prudyus">

<!-- Example for Portfolio items -->
<img src="images/portfolio-1.jpg" alt="Bridal Makeup">
```

## 🔧 Customization

### Changing Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-gold: #d4af37;
    --secondary-gold: #f4c430;
    --dark-bg: #0a0a0a;
    /* ... */
}
```

### Modifying Content
All content is in `index.html`. Update text, links, and structure as needed.

### Adding Functionality
Extend `js/script.js` with additional features or modify existing functions.

## 📈 Performance

- Optimized CSS with minimal selectors
- Efficient JavaScript with event delegation
- Lazy loading ready (add when images are included)
- Minimal external dependencies
- Debounced scroll events for better performance

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is for Oksana Prudyus. All rights reserved.

## 👤 Author

**Oksana Prudyus**
- Professional Makeup Artist & Educator
- Website: [Beauty Makeup](https://dev6g.github.io/oksana-prudyus-makeup/)

## 🤝 Contributing

This is a personal portfolio website. For suggestions or issues, please contact the site administrator.

## 📞 Contact

- Email: info@beautymakeup.com
- Phone: +1 (555) 123-4567
- Instagram: [@oksanaprudyus](https://instagram.com/oksanaprudyus)

---

© 2024 Beauty Makeup by Oksana Prudyus. All rights reserved.

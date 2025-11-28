# Ruckus Racing League - Professional Sim Racing Website

A professional sim racing league website featuring responsive design, racing aesthetics, and interactive elements to engage the sim racing community.

## 🌐 Live Demo
[View Live Site](https://ruckusracing.page.gd)

## 🚀 Features

- **Responsive Design** - Optimized for all devices
- **Professional Racing Aesthetics** - Custom color scheme and typography
- **Interactive Elements** - Dynamic content loading and form validation
- **Performance Optimized** - CDN-hosted assets and lazy loading

## 🛠️ Technical Stack

### Frameworks & Libraries
- **Tailwind CSS** (CLI version) - Utility-first CSS framework with custom configuration
- **Bootstrap JS** - JavaScript components and interactions
- **FontAwesome 6.4.0** - Professional icon library for UI elements
- **Google Fonts** - Orbitron, Inter, Science Gothic

### CDN Configuration
**Provider:** jsDelivr + GitHub Integration

**Configuration:**
- **Static Assets Hosting:** All images, CSS, and JavaScript files served via jsDelivr CDN
- **Repository Integration:** Assets hosted directly from GitHub repository: `umyo-ukz/ruckusracing-website`
- **URL Structure:** `https://cdn.jsdelivr.net/gh/umyo-ukz/ruckusracing-website@main/[file-path]`
- **Cache Configuration:**
  - CSS/JS files: 1-year cache duration
  - Images: 1-month cache duration
- **Global Delivery:** Leverages jsDelivr's worldwide network of 200+ locations

## ♿ Accessibility

### Semantic Structure
- Proper HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Logical heading hierarchy (H1, H2, H3)
- Landmark roles and ARIA labels for screen readers

### Visual Accessibility
- **Color Contrast:** WCAG 2.1 AA compliant color scheme
- **Text Alternatives:** Descriptive alt text for all images
- **Responsive Typography:** Scalable text that maintains readability

### Interactive Accessibility
- Keyboard-navigable interface
- Form validation with accessible error messages
- Skip navigation links for screen reader users
- ARIA live regions for dynamic content updates

## 📊 Performance

**Performance Improvement:**
- **Before CDN Implementation:** Performance Score: 72/100
- **After CDN Implementation:** Performance Score: 75/100

**Key Optimizations:**
- CDN-hosted static assets
- Lazy loading for images
- Optimized image compression
- Minified CSS and JavaScript

## 📁 Project Structure

```
ruckusracing-website/
├── index.html
├── about.html
├── leagues.html
├── drivers.html
├── schedule.html
├── contact.html
├── faq.html
├── css/
│   ├── input.css
│   └── style.css
├── js/
│   └── script.js
├── img/
├── media/
├── sitemap.xml
├── robots.txt
└── README.md
```

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/umyo-ukz/ruckusracing-website.git
   cd ruckusracing-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build CSS with Tailwind**
   ```bash
   npx tailwindcss -i ./css/input.css -o ./css/style.css --watch
   ```

## 🌐 Deployment

### Primary Hosting
- **Platform:** InfinityFree
- **Type:** Shared hosting with subdomain

### CDN Integration
- All static assets served via jsDelivr CDN
- Automatic cache invalidation on updates
- Global content delivery network




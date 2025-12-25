# H&G - Handmade Goods eCommerce Website

A fully responsive eCommerce website template for handmade and artisan products, built with modern design principles and a focus on craftsmanship and quality.

## Project Overview

This is a complete eCommerce frontend template built with Bootstrap 5, custom SCSS, and vanilla JavaScript. The website showcases handmade products including jewelry, pottery, fabric items, and other artisan crafts.

## Features

- Responsive design (mobile-first approach)
- Product catalog with filtering and sorting
- Shopping cart functionality
- Wishlist system
- Product quick view
- Category-based navigation
- Hero carousel/slider
- Product search
- Newsletter subscription
- Blog section
- Contact page

## Technology Stack

- **HTML5** - Semantic markup
- **Bootstrap 5.3+** - Responsive grid system and components
- **SCSS** - Advanced CSS with variables and mixins
- **Vanilla JavaScript (ES6+)** - No framework dependencies
- **LocalStorage** - Client-side data persistence

## Project Structure

```
handmade-goods-ecommerce/
├── index.html         # Main homepage
├── manual.html        # Project documentation page
├── assets/
│   ├── css/           # SCSS and compiled CSS files
│   ├── js/            # JavaScript modules
│   │   ├── components/  # UI components (Auth, Cart, Wishlist, etc.)
│   │   └── utils/       # Helper functions
│   ├── images/        # Image assets
│   │   ├── banners/
│   │   ├── icons/
│   │   ├── logo/
│   │   └── products/
│   └── data/          # JSON data files (products, etc.)
├── pages/             # Feature-organized pages
│   ├── shop/          # Shop pages (index, product detail)
│   ├── cart/          # Cart & checkout
│   ├── account/       # Wishlist & user pages
│   └── content/       # About, Blog, Contact
├── components/        # Reusable HTML components
└── *.md               # Documentation files
```

## Getting Started

### Prerequisites

- Node.js and npm (for SCSS compilation)
- A modern web browser
- Live server (optional, for development)

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

1. Compile SCSS (watch mode):
   ```bash
   npm run sass
   ```

2. Start a local server:
   ```bash
   npm start
   ```
   Or use any other local server solution

3. Open `pages/index.html` in your browser

## Pages

- **Homepage** (`/index.html`) - Hero section, featured products, categories
- **Shop** (`/pages/shop/index.html`) - Product listing with filters
- **Product Detail** (`/pages/shop/product.html`) - Individual product page
- **Cart** (`/pages/cart/index.html`) - Shopping cart
- **Checkout** (`/pages/cart/checkout.html`) - Checkout process
- **Wishlist** (`/pages/account/wishlist.html`) - Saved products
- **About** (`/pages/content/about.html`) - About the store
- **Blog** (`/pages/content/blog.html`) - Blog listing
- **Contact** (`/pages/content/contact.html`) - Contact form

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - Feel free to use this template for personal or commercial projects.

## Credits

- Design: Custom responsive eCommerce template
- Images: Unsplash (free stock photos)
- Icons: Font Awesome 6.5.1
- Framework: Bootstrap 5.3.2

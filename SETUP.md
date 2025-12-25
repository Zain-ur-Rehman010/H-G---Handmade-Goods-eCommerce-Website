# H&G Handmade Goods - Setup & Deployment Guide

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Installation](#installation)
3. [Compiling SCSS](#compiling-scss)
4. [Running the Project](#running-the-project)
5. [Project Structure](#project-structure)
6. [Features Implemented](#features-implemented)
7. [MongoDB Integration (Optional)](#mongodb-integration-optional)
8. [Customization Guide](#customization-guide)
9. [Deployment](#deployment)

---

## 📝 Project Overview

**H&G - Handmade Goods** is a fully responsive eCommerce website template featuring:
- Responsive design (mobile-first)
- Product catalog with filtering & sorting
- Shopping cart (LocalStorage-based)
- Wishlist functionality
- Quick view modal
- Category-based navigation
- Newsletter subscription

**Tech Stack:**
- HTML5
- Bootstrap 5.3+
- SCSS (custom styling)
- Vanilla JavaScript (ES6+)
- LocalStorage for data persistence

---

## 🚀 Installation

### Prerequisites
- Node.js (v14+ recommended) - [Download here](https://nodejs.org/)
- Code editor (VS Code recommended)
- Web browser (Chrome, Firefox, Safari, or Edge)

### Step 1: Navigate to Project Directory
```bash
cd handmade-goods-ecommerce
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- **sass** - For SCSS compilation

---

## 🎨 Compiling SCSS

### Option 1: Watch Mode (Recommended for Development)
This will automatically recompile CSS whenever you make changes to SCSS files:

```bash
npm run sass
```

Keep this terminal window open while developing.

### Option 2: One-Time Compilation
If you just want to compile once:

```bash
npx sass assets/css/styles.scss assets/css/styles.css
```

### Output
Compiled CSS will be saved to:
```
assets/css/styles.css
```

---

## 🌐 Running the Project

### Method 1: Using Live Server (Recommended)

#### If you have VS Code:
1. Install the "Live Server" extension
2. Right-click on `pages/index.html`
3. Select "Open with Live Server"

#### Using npm live-server:
```bash
npm install -g live-server
cd pages
live-server
```

### Method 2: Using Python HTTP Server
```bash
cd pages
python -m http.server 8000
```

Then open: `http://localhost:8000/index.html`

### Method 3: Direct File Access
Simply double-click `pages/index.html` in your file explorer.

**Note:** Some features (like loading JSON) may require a local server.

---

## 📁 Project Structure

```
handmade-goods-ecommerce/
│
├── assets/
│   ├── css/                      # SCSS and CSS files
│   │   ├── _variables.scss       # Color, font, spacing variables
│   │   ├── _mixins.scss          # Reusable SCSS mixins
│   │   ├── _base.scss            # Base styles, resets
│   │   ├── _layout.scss          # Header, footer, layout
│   │   ├── _components.scss      # UI components
│   │   ├── _utilities.scss       # Utility classes
│   │   ├── styles.scss           # Main SCSS file (imports all)
│   │   └── styles.css            # Compiled CSS ✅
│   │
│   ├── js/
│   │   ├── components/
│   │   │   ├── cart.js           # Shopping cart functionality
│   │   │   ├── wishlist.js       # Wishlist functionality
│   │   │   ├── navigation.js     # Mobile menu, sticky header
│   │   │   ├── productGrid.js    # Product display & rendering
│   │   │   ├── filters.js        # Category tabs, search, filters
│   │   │   ├── quickView.js      # Quick view modal
│   │   │   └── newsletter.js     # Newsletter subscription
│   │   │
│   │   ├── utils/
│   │   │   ├── storage.js        # LocalStorage utilities
│   │   │   └── helpers.js        # Helper functions
│   │   │
│   │   └── main.js               # Main initialization file
│   │
│   ├── images/                   # Image assets (placeholder)
│   └── data/
│       └── products.json         # Product data (12 products)
│
├── pages/
│   ├── index.html                # Homepage ✅
│   ├── shop.html                 # Shop page ✅
│   ├── product-detail.html       # Product detail (template ready)
│   ├── cart.html                 # Shopping cart (template ready)
│   └── checkout.html             # Checkout (to be created)
│
├── package.json                  # Dependencies
├── README.md                     # Project documentation
└── SETUP.md                      # This file
```

---

## ✨ Features Implemented

### ✅ Completed Features

1. **Homepage**
   - Hero carousel slider (3 slides)
   - Service features section
   - Category tabs with filtering
   - Product grid (8 featured products)
   - Promotional banners
   - Blog section preview
   - Newsletter subscription

2. **Shop Page**
   - Full product grid
   - Sidebar filters (categories, price range, search)
   - Sorting options (price, name, rating, newest)
   - Responsive layout

3. **Product Components**
   - Product cards with hover effects
   - Quick view modal
   - Add to cart functionality
   - Wishlist toggle
   - Product ratings display
   - Sale badges

4. **Shopping Cart**
   - Offcanvas slide-in cart
   - Add/remove items
   - Quantity controls
   - Real-time total calculation
   - LocalStorage persistence

5. **Wishlist**
   - Add/remove to wishlist
   - LocalStorage persistence
   - Heart icon toggle
   - Badge count

6. **Navigation**
   - Sticky header
   - Mobile hamburger menu
   - Responsive offcanvas menu
   - Active page highlighting

7. **Other Features**
   - Toast notifications
   - Search functionality
   - Newsletter subscription
   - Responsive design (mobile-first)
   - SCSS architecture with variables

### 🔨 Templates Ready (Need Minor Completion)

- **Product Detail Page** - JavaScript ready, HTML template needed
- **Cart Page** - JavaScript ready, HTML template needed
- **Checkout Page** - To be implemented

---

## 🗄️ MongoDB Integration (Optional)

Currently, the project uses **JSON files** and **LocalStorage** for data. If you want to integrate MongoDB:

### Backend Setup Required

1. **Create Backend Server** (Node.js + Express)
   ```bash
   npm install express mongoose cors dotenv
   ```

2. **Create MongoDB Schema** for:
   - Products
   - Users
   - Orders
   - Cart
   - Wishlist

3. **Create API Endpoints**:
   ```
   GET  /api/products        - Get all products
   GET  /api/products/:id    - Get single product
   POST /api/cart            - Add to cart
   POST /api/orders          - Create order
   ```

4. **Update Frontend JavaScript**:
   Replace `fetch('../assets/data/products.json')` with:
   ```javascript
   fetch('http://localhost:3000/api/products')
   ```

### Example Backend Structure
```
backend/
├── server.js
├── models/
│   ├── Product.js
│   ├── User.js
│   └── Order.js
├── routes/
│   ├── products.js
│   └── orders.js
└── .env
```

**Would you like me to create the complete backend with MongoDB integration?**

---

## 🎨 Customization Guide

### Changing Colors

Edit `assets/css/_variables.scss`:

```scss
// Primary Colors
$primary-color: #d4a373;    // Change this for main color
$secondary-color: #2c2c2c;  // Dark color

// Status Colors
$success: #28a745;          // Green
$danger: #dc3545;           // Red
```

After changing, recompile SCSS:
```bash
npm run sass
```

### Changing Fonts

Edit `assets/css/_variables.scss`:

```scss
$font-primary: 'Poppins', sans-serif;
$font-secondary: 'Roboto', sans-serif;
```

Update Google Fonts import in `styles.scss` and HTML files.

### Adding Products

Edit `assets/data/products.json`:

```json
{
  "id": 13,
  "name": "Your Product Name",
  "category": "pottery",
  "price": 50.00,
  "salePrice": 45.00,
  "images": {
    "main": "image-url",
    "hover": "image-url-hover",
    "gallery": ["image1", "image2"]
  },
  "badge": "new",
  "discount": 10,
  "rating": 4.5,
  "reviews": 20,
  "stock": 15,
  "description": "Product description...",
  "shortDescription": "Short desc",
  "tags": ["tag1", "tag2"],
  "sku": "SKU-013",
  "sizes": [],
  "colors": []
}
```

### Changing Logo

Replace `MIOCA` text in header with an image:

```html
<a href="index.html" class="header__logo">
    <img src="../assets/images/logo/logo.png" alt="H&G Handmade Goods">
</a>
```

---

## 🚀 Deployment

### Option 1: Netlify (Recommended - Free)

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Compile SCSS first:
   ```bash
   npm run sass
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

   When prompted:
   - Publish directory: `./`
   - Site name: your-site-name

### Option 2: GitHub Pages

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/handmade-goods-ecommerce.git
   git push -u origin main
   ```

3. Go to repository Settings → Pages
4. Select branch: `main`, folder: `/` (root)
5. Save and wait for deployment

**Note:** Update all paths to be relative (already done in this project).

### Option 3: Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Option 4: Traditional Web Hosting

1. Compile SCSS: `npm run sass`
2. Upload entire project folder via FTP/cPanel
3. Ensure the server serves `pages/index.html` as the entry point

---

## 🧪 Testing Checklist

Before deployment, test:

- [ ] Homepage loads correctly
- [ ] Shop page displays all products
- [ ] Category filtering works
- [ ] Search functionality works
- [ ] Add to cart works
- [ ] Cart offcanvas opens/closes
- [ ] Wishlist toggle works
- [ ] Quick view modal opens
- [ ] Mobile menu works
- [ ] Newsletter subscription works
- [ ] All links work (no 404s)
- [ ] Responsive on mobile/tablet/desktop
- [ ] Cross-browser compatibility

---

## 📞 Support & Next Steps

### Completed:
✅ Project structure
✅ SCSS architecture
✅ Homepage
✅ Shop page
✅ All JavaScript components
✅ Cart functionality
✅ Wishlist functionality
✅ Product filtering/sorting

### Optional Next Steps:
- Create product detail page HTML
- Create cart page HTML
- Create checkout page HTML
- Add backend with MongoDB
- Add user authentication
- Add order processing
- Add admin panel

**Need help with any of these? Just ask!**

---

## 📄 License

MIT License - Free to use for personal and commercial projects.

---

**Enjoy building with H&G Handmade Goods eCommerce! 🎉**

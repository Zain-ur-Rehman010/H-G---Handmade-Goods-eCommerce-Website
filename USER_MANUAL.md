# 📖 H&G Handmade Goods - User Manual

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Website Features](#website-features)
4. [Page Guide](#page-guide)
5. [User Account Management](#user-account-management)
6. [Shopping Guide](#shopping-guide)
7. [Technical Information](#technical-information)
8. [Troubleshooting](#troubleshooting)
9. [Development Guide](#development-guide)

---

## Introduction

Welcome to **H&G Handmade Goods** - a fully responsive eCommerce website template designed for showcasing and selling handmade artisan products including jewelry, pottery, fabric items, and accessories.

### Project Information
- **Version:** 1.0.0
- **Technology:** HTML5, CSS3/SCSS, Bootstrap 5.3+, Vanilla JavaScript
- **Responsive:** Mobile-first design
- **Browser Support:** Chrome, Firefox, Safari, Edge (latest versions)

---

## Getting Started

### Installation & Setup

#### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- A modern web browser
- Code editor (VS Code recommended)

#### Quick Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Compile SCSS (Watch Mode)**
   ```bash
   npm run sass
   ```
   Or for one-time compilation:
   ```bash
   npm run sass:build
   ```

3. **Start Development Server**
   ```bash
   npx http-server -p 3000
   ```
   Or use Live Server extension in VS Code.

4. **Access the Website**
   - Open `http://localhost:3000` in your browser
   - Or open `index.html` directly

#### Project Structure
```
handmade-goods-ecommerce/
├── assets/
│   ├── css/                      # Styles
│   │   ├── _variables.scss       # SCSS variables
│   │   ├── _mixins.scss          # SCSS mixins
│   │   ├── _base.scss            # Base styles
│   │   ├── _components.scss      # Component styles
│   │   ├── _layout.scss          # Layout styles
│   │   ├── _utilities.scss       # Utility classes
│   │   ├── styles.scss           # Main SCSS file
│   │   └── styles.css            # Compiled CSS
│   ├── js/                       # JavaScript
│   │   ├── main.js               # Main entry point
│   │   ├── components/           # Feature modules
│   │   │   ├── auth.js           # Authentication
│   │   │   ├── cart.js           # Shopping cart
│   │   │   ├── wishlist.js       # Wishlist
│   │   │   ├── productGrid.js    # Product display
│   │   │   ├── quickView.js      # Quick view modal
│   │   │   ├── checkout.js       # Checkout process
│   │   │   └── ...
│   │   └── utils/                # Utilities
│   │       ├── storage.js        # LocalStorage
│   │       ├── helpers.js        # Helper functions
│   │       └── dataManager.js    # Data management
│   ├── data/
│   │   ├── products.json         # Product catalog (28 products)
│   │   └── snapshot.json         # Data backup
│   └── images/                   # Image assets
│       ├── banners/
│       ├── icons/
│       ├── logo/
│       └── products/
├── pages/                        # HTML pages
│   ├── index.html                # Homepage
│   ├── shop.html                 # Shop/catalog
│   ├── product-detail.html       # Product details
│   ├── cart.html                 # Shopping cart
│   ├── checkout.html             # Checkout
│   ├── wishlist.html             # Wishlist
│   ├── about.html                # About us
│   ├── contact.html              # Contact
│   └── blog.html                 # Blog
├── components/                   # Reusable components
├── package.json                  # Dependencies
└── README.md                     # Project readme
```

---

## Website Features

### 🏠 Homepage Features
- **Hero Slider** - 3 rotating promotional banners
- **Service Features** - 4 key benefits (Free Shipping, Support, Secure Payment, Returns)
- **Category Tabs** - Filter products by category (All, Jewelry, Pottery, Fabric, Accessories)
- **Featured Products** - 8 handpicked products
- **Promotional Banners** - 3 category highlight banners
- **Blog Preview** - Latest blog posts
- **Newsletter Subscription** - Email capture form

### 🛍️ Shopping Features
- **Product Catalog** - 28 unique handmade products
- **Product Categories:**
  - Jewelry (7 products)
  - Pottery (6 products)
  - Fabric (6 products)
  - Accessories (9 products)
- **Product Badges:**
  - Sale (10% discount)
  - New (latest arrivals)
  - Bestseller (popular items)
- **Advanced Filtering:**
  - By category
  - By price range
  - By search keywords
  - By rating
- **Sorting Options:**
  - Default
  - Price: Low to High
  - Price: High to Low
  - Newest
  - Rating
  - Popularity
- **View Modes:**
  - Grid view (3 columns)
  - List view (detailed)

### 🛒 Cart & Checkout
- Add/remove products
- Quantity adjustment
- Real-time price calculation
- Coupon code support
- Shipping method selection:
  - Free Shipping
  - Standard ($5.00)
  - Express ($15.00)
- Tax calculation (10%)
- Multiple payment methods:
  - Visa, Mastercard, Amex, PayPal
- Order summary
- Secure checkout (SSL encrypted)

### ❤️ Wishlist System
- Save favorite products
- Quick access to saved items
- Add to cart from wishlist
- Remove from wishlist
- Persistent storage (LocalStorage)

### 👤 User Account System
- **Registration** - Create new account
- **Login** - Email and password
- **User Profile** - View account details
- **Session Management:**
  - "Remember Me" option
  - Persistent login (LocalStorage)
  - Session-based login
- **User Menu:**
  - My Profile
  - My Orders
  - Wishlist
  - Settings
  - Logout

### 🔍 Product Features
- **Product Cards:**
  - Main & hover images
  - Product name & category
  - Star ratings (out of 5)
  - Review count
  - Current & original price
  - Discount badge
  - Quick actions (Wishlist, Quick View, Compare)
- **Product Detail Page:**
  - Image gallery with thumbnails
  - Zoom on hover
  - Size selection (if applicable)
  - Color selection (if applicable)
  - Stock status
  - SKU number
  - Add to cart/wishlist
  - Product tabs:
    - Description
    - Additional Information
    - Reviews
  - Related products
  - "You May Also Like" suggestions

### 🔎 Search & Filter
- Global search bar
- Real-time search results
- Category filtering
- Price range slider
- Keyword search
- Multi-criteria filtering

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 576px
  - Tablet: 576px - 768px
  - Desktop: 768px - 992px
  - Large Desktop: > 992px
- Touch-friendly interface
- Mobile navigation menu
- Optimized images

---

## Page Guide

### 1. Homepage (`index.html`)
**Purpose:** Welcome visitors and showcase featured products

**Features:**
- Hero slider with promotional banners
- Service features section
- Category filter tabs
- Featured products grid
- Promotional banners
- Blog preview
- Newsletter signup

**User Actions:**
- Browse featured products
- Filter by category
- Click to view product details
- Subscribe to newsletter
- Navigate to other pages

---

### 2. Shop Page (`shop.html`)
**Purpose:** Browse complete product catalog

**Features:**
- Full product listing (28 products)
- Sidebar filters:
  - Search box
  - Category filter
  - Price range slider
  - Clear filters button
- Top controls:
  - Results count
  - Sort dropdown
  - View toggle (grid/list)
- Pagination
- Responsive layout

**How to Use:**
1. Use sidebar to filter by category or price
2. Search for specific products
3. Sort results using dropdown
4. Switch between grid and list views
5. Click product for details
6. Add to cart or wishlist

---

### 3. Product Detail Page (`product-detail.html`)
**Purpose:** View detailed product information

**Features:**
- Image gallery (main image + thumbnails)
- Product information:
  - Name, price, rating
  - SKU, stock status
  - Category
- Size selector (if applicable)
- Color selector (if applicable)
- Quantity selector
- Add to cart button
- Add to wishlist button
- Product tabs:
  - Description
  - Additional Info (dimensions, materials, care instructions)
  - Reviews (customer ratings and feedback)
- Related products carousel
- Breadcrumb navigation

**How to Use:**
1. View product images (click thumbnails)
2. Select size/color options
3. Choose quantity
4. Click "Add to Cart"
5. Or save to wishlist
6. Read description and reviews
7. Browse related products

---

### 4. Shopping Cart (`cart.html`)
**Purpose:** Review and manage cart items

**Features:**
- Cart table with:
  - Product image & name
  - Price per unit
  - Quantity controls
  - Subtotal
  - Remove button
- Coupon code input
- Continue shopping button
- Cart summary:
  - Subtotal
  - Shipping selection
  - Tax (10%)
  - Total
- Proceed to checkout button
- Payment method icons
- Security badge
- "You May Also Like" suggestions (4-column grid)
- Empty cart message (if no items)

**How to Use:**
1. Review items in cart
2. Adjust quantities with +/- buttons
3. Remove unwanted items
4. Enter coupon code (if available)
5. Select shipping method
6. Review total
7. Click "Proceed to Checkout"

---

### 5. Checkout Page (`checkout.html`)
**Purpose:** Complete purchase

**Features:**
- Billing details form:
  - Name, email, phone
  - Address, city, postal code
  - Country selection
- Shipping options:
  - Same as billing
  - Different address
- Payment method selection:
  - Credit/Debit Card
  - PayPal
  - Bank Transfer
  - Cash on Delivery
- Order summary sidebar
- Apply coupon
- Terms & conditions checkbox
- Secure checkout badge

**How to Use:**
1. Fill in billing information
2. Choose shipping method
3. Select payment method
4. Review order summary
5. Accept terms & conditions
6. Click "Place Order"

---

### 6. Wishlist Page (`wishlist.html`)
**Purpose:** View and manage saved products

**Features:**
- Wishlist table with:
  - Product image & name
  - Price
  - Stock status
  - Add to cart button
  - Remove button
- Empty wishlist message
- Continue shopping link
- Quick add to cart

**How to Use:**
1. View all saved products
2. Click "Add to Cart" to purchase
3. Remove items from wishlist
4. Check stock availability

---

### 7. About Page (`about.html`)
**Purpose:** Learn about the brand

**Features:**
- Hero banner with breadcrumb
- Brand story section
- Mission & vision
- Values highlights
- Team member showcase
- Brand statistics
- Why choose us section
- Call-to-action

---

### 8. Contact Page (`contact.html`)
**Purpose:** Get in touch

**Features:**
- Contact form:
  - Name, email
  - Subject, message
- Contact information:
  - Address
  - Phone
  - Email
  - Business hours
- Google Maps embed (placeholder)
- Social media links
- FAQ section

---

### 9. Blog Page (`blog.html`)
**Purpose:** Read articles and news

**Features:**
- Blog post grid
- Featured posts
- Categories sidebar
- Recent posts widget
- Search functionality
- Pagination
- Post previews with:
  - Featured image
  - Title, date, author
  - Excerpt
  - Read more button

---

## User Account Management

### Registration Process

1. Click the **user icon** in header
2. Click **Register** tab in modal
3. Fill in the form:
   - Full Name
   - Email Address
   - Password (min 6 characters)
   - Confirm Password
4. Check "I agree to terms & conditions"
5. Click **Create Account**
6. Account created & auto-logged in
7. Welcome toast notification appears

### Login Process

1. Click the **user icon** in header
2. Enter credentials:
   - Email Address
   - Password
3. (Optional) Check "Remember Me"
4. Click **Login**
5. User menu becomes available

### User Menu Features

When logged in, clicking user icon shows:
- **My Profile** - View account details
- **My Orders** - Order history (coming soon)
- **Wishlist** - Saved products
- **Settings** - Account settings (coming soon)
- **Logout** - Sign out

### Password Requirements
- Minimum 6 characters
- No special requirements (demo purpose)

### Session Management
- **Remember Me checked:** Login persists across browser sessions (LocalStorage)
- **Remember Me unchecked:** Login expires when browser closes (SessionStorage)

---

## Shopping Guide

### How to Browse Products

1. **Homepage:** View featured products
2. **Shop Page:** Browse all 28 products
3. **Category Filter:** Click category tabs
4. **Search:** Use search bar in header or shop page
5. **Sort:** Use sort dropdown (price, rating, newest)

### How to View Product Details

1. Click on any product card
2. Or click "Quick View" eye icon for modal preview
3. View images, description, specs
4. Read reviews from other customers

### How to Add Products to Cart

**Method 1: From Product Card**
- Click "Add to Cart" button on product card
- Toast notification confirms addition
- Cart count badge updates

**Method 2: From Product Detail Page**
1. Select size/color (if applicable)
2. Choose quantity
3. Click "Add to Cart"
4. Product added to cart

**Method 3: From Quick View**
1. Click eye icon on product
2. View details in modal
3. Select options
4. Click "Add to Cart"

### How to Add to Wishlist

1. Click the **heart icon** on any product
2. Heart fills red when added
3. Wishlist count badge updates
4. Toast notification confirms
5. View all saved items in Wishlist page

### How to Use Cart

1. Click **cart icon** in header
2. Or navigate to Cart page
3. Review items:
   - Check products, quantities, prices
4. Adjust quantities:
   - Use +/- buttons
   - Or type number directly
5. Remove items:
   - Click trash icon
6. Apply coupon (if available):
   - Enter code
   - Click "Apply Coupon"
7. Select shipping method
8. Review total
9. Click "Proceed to Checkout"

### How to Complete Checkout

1. Fill billing details
2. Choose shipping method
3. Select payment method
4. Review order summary
5. Accept terms & conditions
6. Click "Place Order"
7. Confirmation page appears (demo)

### Product Information Guide

**Product Card Shows:**
- Product image (hover for alternate view)
- Product name
- Category
- Star rating (1-5 stars)
- Review count
- Current price
- Original price (if on sale)
- Discount badge (if applicable)

**Product Detail Page Shows:**
- Multiple images
- Full description
- SKU number
- Stock status
- Available sizes/colors
- Dimensions
- Materials
- Care instructions
- Customer reviews

---

## Technical Information

### Data Storage

**LocalStorage Keys:**
- `hg_cart` - Shopping cart items
- `hg_wishlist` - Wishlist items
- `hg_users` - Registered users
- `hg_current_user` - Logged-in user (if "Remember Me")

**SessionStorage Keys:**
- `hg_current_user` - Logged-in user (if no "Remember Me")

### Product Data Structure

Products are stored in `assets/data/products.json`:

```json
{
  "id": 1,
  "name": "Product Name",
  "category": "jewelry|pottery|fabric|accessories",
  "price": 45.00,
  "salePrice": 40.50,
  "images": {
    "main": "url",
    "hover": "url",
    "gallery": ["url1", "url2"]
  },
  "badge": "sale|new|bestseller",
  "discount": 10,
  "rating": 4.5,
  "reviews": 24,
  "stock": 15,
  "description": "Full description",
  "shortDescription": "Brief description",
  "tags": ["tag1", "tag2"],
  "sku": "POT-001",
  "sizes": [],
  "colors": []
}
```

### JavaScript Modules

**Main Modules:**
- `Auth` - User authentication & account management
- `Cart` - Shopping cart functionality
- `Wishlist` - Wishlist management
- `ProductGrid` - Product display & filtering
- `QuickView` - Product quick view modal
- `Checkout` - Checkout process
- `Filters` - Advanced filtering
- `Search` - Search functionality
- `Navigation` - Mobile menu & navigation
- `HeroSlider` - Homepage carousel
- `Newsletter` - Newsletter subscription

**Utility Modules:**
- `Storage` - LocalStorage wrapper
- `Helpers` - Helper functions (price format, stars, etc.)
- `DataManager` - Data fetching & management

### SCSS Variables

Key customizable variables in `_variables.scss`:

**Colors:**
- `$primary-color`: #d4a574 (Gold/Tan)
- `$secondary-color`: #2c3e50 (Dark Blue)
- `$accent-color`: #e8b384 (Light Gold)
- `$success`: #28a745
- `$danger`: #dc3545
- `$warning`: #ffc107

**Spacing:**
- `$spacing-xs`: 0.25rem
- `$spacing-sm`: 0.5rem
- `$spacing-md`: 1rem
- `$spacing-lg`: 2rem
- `$spacing-xl`: 3rem

**Breakpoints:**
- `$breakpoint-sm`: 576px
- `$breakpoint-md`: 768px
- `$breakpoint-lg`: 992px
- `$breakpoint-xl`: 1200px

### Browser Compatibility

**Supported:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Features Used:**
- CSS Grid & Flexbox
- ES6+ JavaScript
- LocalStorage API
- Fetch API
- CSS Variables

---

## Troubleshooting

### Common Issues

#### Images Not Loading

**Problem:** Product images show placeholder or broken icon

**Solution:**
1. Check internet connection (images use Unsplash CDN)
2. Images automatically fall back to placeholder if unavailable
3. For custom images, add to `assets/images/products/`
4. Update `products.json` with new image paths

#### Cart/Wishlist Not Persisting

**Problem:** Items disappear after refresh

**Solution:**
1. Check browser LocalStorage is enabled
2. Clear browser cache and try again
3. Check browser console for errors
4. Ensure JavaScript is enabled

#### SCSS Not Compiling

**Problem:** Style changes not appearing

**Solution:**
1. Ensure sass watch is running: `npm run sass`
2. Check for SCSS syntax errors in terminal
3. Clear browser cache (Ctrl+Shift+Delete)
4. Hard refresh page (Ctrl+F5)

#### Login Not Working

**Problem:** Cannot log in or register

**Solution:**
1. Check email format is valid
2. Ensure password is at least 6 characters
3. Check "Remember Me" if you want persistent login
4. Clear LocalStorage: `localStorage.clear()` in console
5. Try registering a new account

#### Products Not Displaying

**Problem:** Product grid is empty

**Solution:**
1. Check `products.json` exists in `assets/data/`
2. Open browser console for errors
3. Verify JSON syntax is correct
4. Check network tab for failed requests

### Debug Mode

**Enable Console Logging:**

All modules log to console during development. Check:
1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for initialization messages
4. Check for errors (red text)

**Common Console Messages:**
- "Auth module initializing..." - Auth system starting
- "Cart module initialized" - Cart ready
- "Products loaded: X" - Product data loaded
- "Cart loaded with X items" - Cart restored from storage

### Clear All Data

To reset the application:

```javascript
// In browser console:
localStorage.clear();
sessionStorage.clear();
location.reload();
```

Or manually remove keys:
```javascript
localStorage.removeItem('hg_cart');
localStorage.removeItem('hg_wishlist');
localStorage.removeItem('hg_current_user');
localStorage.removeItem('hg_users');
```

---

## Development Guide

### Setup Development Environment

1. **Clone/Download Project**
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Start SCSS Watch:**
   ```bash
   npm run sass
   ```
4. **Start Dev Server:**
   ```bash
   npx http-server -p 3000
   ```
   Or use VS Code Live Server extension

### SCSS Development

**File Structure:**
- `_variables.scss` - Variables (colors, spacing, etc.)
- `_mixins.scss` - Reusable mixins
- `_base.scss` - Base styles (resets, typography)
- `_components.scss` - Component styles (buttons, cards, etc.)
- `_layout.scss` - Layout styles (header, footer, grid)
- `_utilities.scss` - Utility classes
- `styles.scss` - Main file (imports all others)

**Compile Commands:**
```bash
npm run sass          # Watch mode (auto-compile)
npm run sass:build    # One-time compile
```

**Output:**
- Compiles to `assets/css/styles.css`
- Auto-minified for production

### Adding New Products

1. **Open:** `assets/data/products.json`
2. **Add Product Object:**
   ```json
   {
     "id": 29,
     "name": "New Product",
     "category": "jewelry",
     "price": 50.00,
     "salePrice": null,
     "images": {
       "main": "image-url",
       "hover": "image-url",
       "gallery": ["url1", "url2"]
     },
     "badge": "new",
     "discount": 0,
     "rating": 4.5,
     "reviews": 0,
     "stock": 10,
     "description": "Product description",
     "shortDescription": "Brief description",
     "tags": ["handmade"],
     "sku": "CUSTOM-029",
     "sizes": [],
     "colors": []
   }
   ```
3. **Save File**
4. **Refresh Page**

### Customizing Colors

1. **Open:** `assets/css/_variables.scss`
2. **Update Color Variables:**
   ```scss
   $primary-color: #your-color;
   $secondary-color: #your-color;
   ```
3. **Save** (auto-compiles if watch running)
4. **Refresh Browser**

### Adding New Pages

1. **Create HTML File** in `pages/` folder
2. **Copy Header/Footer** from existing page
3. **Add Content** in between
4. **Update Navigation** links in all pages
5. **Add Page-Specific Styles** in `styles.scss`
6. **Test Responsiveness**

### Modifying JavaScript

**Main Entry Point:** `assets/js/main.js`

**Adding New Feature:**
1. Create new file in `assets/js/components/`
2. Define module with methods
3. Import in `main.js`
4. Initialize in DOMContentLoaded event

**Example:**
```javascript
// components/newFeature.js
const NewFeature = {
    init() {
        console.log('New feature initialized');
        // Setup code
    }
};

// main.js
document.addEventListener('DOMContentLoaded', () => {
    NewFeature.init();
});
```

### Testing Checklist

✅ **Functionality:**
- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Product filtering works
- [ ] Add to cart works
- [ ] Add to wishlist works
- [ ] Login/Register works
- [ ] Cart calculations correct
- [ ] Checkout form validates

✅ **Responsive:**
- [ ] Test on mobile (< 576px)
- [ ] Test on tablet (576-768px)
- [ ] Test on desktop (> 768px)
- [ ] Mobile menu works
- [ ] Touch interactions work

✅ **Browser Testing:**
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Deployment

#### Option 1: Static Hosting (Netlify, Vercel, GitHub Pages)

1. **Build Production CSS:**
   ```bash
   npm run sass:build
   ```
2. **Upload Files** to hosting platform
3. **Configure** build settings (if needed)
4. **Deploy**

#### Option 2: Traditional Web Server

1. **Compile CSS**
2. **Upload All Files** via FTP
3. **Ensure Proper Permissions**
4. **Test Live URL**

#### Option 3: Share via Ngrok (Development)

1. **Start Local Server:**
   ```bash
   npx http-server -p 3000
   ```
2. **Start Ngrok:**
   ```bash
   ngrok http 3000
   ```
3. **Share Public URL** (e.g., https://xxx.ngrok-free.app)

### Performance Optimization

**Images:**
- Compress images before upload
- Use appropriate sizes
- Consider lazy loading for galleries

**CSS:**
- Already minified in production
- Remove unused Bootstrap components if needed

**JavaScript:**
- Code is modular and efficient
- Consider minification for production
- Enable browser caching

---

## Frequently Asked Questions (FAQ)

### General Questions

**Q: Is this a real eCommerce store?**
A: No, this is a frontend template. It uses LocalStorage for demo purposes. For a real store, you need to integrate with a backend (payment gateway, database, etc.).

**Q: Can I use this commercially?**
A: Yes, you can customize and use this template for your projects.

**Q: Do I need a database?**
A: Currently, no. Products are in JSON and cart/wishlist use LocalStorage. For production, integrate a backend.

**Q: Are payments real?**
A: No, the checkout is a demo. You need to integrate Stripe, PayPal, or other payment processors.

### Customization Questions

**Q: How do I change colors?**
A: Edit `assets/css/_variables.scss` and recompile SCSS.

**Q: How do I add my logo?**
A: Replace logo in header across all HTML pages, or update `header__logo` text.

**Q: Can I add more products?**
A: Yes, edit `assets/data/products.json` with your product data.

**Q: How do I change fonts?**
A: Update Google Fonts import in `styles.scss` and change `$font-family-base` variable.

### Technical Questions

**Q: Why use LocalStorage instead of database?**
A: This is a frontend-only demo. For production, implement backend API.

**Q: Can I convert this to React/Vue?**
A: Yes, the structure and logic can be adapted to any framework.

**Q: Is it SEO-friendly?**
A: Basic HTML is SEO-friendly. For better SEO, add meta tags, structured data, and consider server-side rendering.

**Q: Mobile app version?**
A: This is a responsive web app. For native mobile, consider React Native or Flutter.

---

## Support & Resources

### Documentation Files
- `README.md` - Project overview
- `SETUP.md` - Setup instructions
- `ARCHITECTURE.md` - Technical architecture
- `PROJECT_SUMMARY.md` - Feature summary
- `QUICKSTART.md` - Quick start guide
- `TESTING_CHECKLIST.md` - Testing guide

### File Locations
- **Products Data:** `assets/data/products.json`
- **Styles:** `assets/css/`
- **Scripts:** `assets/js/`
- **Pages:** `pages/`
- **Images:** `assets/images/`

### Key Technologies
- **Bootstrap 5.3+:** https://getbootstrap.com/
- **Font Awesome 6:** https://fontawesome.com/
- **SASS/SCSS:** https://sass-lang.com/
- **Unsplash (Images):** https://unsplash.com/

### Development Tools
- **Node.js:** https://nodejs.org/
- **npm:** https://www.npmjs.com/
- **VS Code:** https://code.visualstudio.com/
- **Live Server:** VS Code extension
- **Ngrok:** https://ngrok.com/

---

## Quick Reference

### NPM Scripts
```bash
npm install              # Install dependencies
npm run sass             # Watch & compile SCSS
npm run sass:build       # Build CSS once
```

### Common Commands
```bash
# Start local server
npx http-server -p 3000

# Start ngrok tunnel
ngrok http 3000

# Clear LocalStorage (browser console)
localStorage.clear()
```

### Important Paths
```
Homepage:          pages/index.html
Shop:              pages/shop.html
Product Detail:    pages/product-detail.html
Cart:              pages/cart.html
Checkout:          pages/checkout.html
Wishlist:          pages/wishlist.html

Products Data:     assets/data/products.json
Main CSS:          assets/css/styles.css
Main SCSS:         assets/css/styles.scss
Main JS:           assets/js/main.js
```

### LocalStorage Keys
```javascript
hg_cart           // Shopping cart
hg_wishlist       // Wishlist items
hg_users          // Registered users
hg_current_user   // Current user session
```

---

## Version History

### Version 1.0.0 (Current)
- ✅ Complete homepage with hero slider
- ✅ Shop page with filtering & sorting
- ✅ Product detail page with gallery
- ✅ Shopping cart functionality
- ✅ Wishlist system
- ✅ User authentication (login/register)
- ✅ Checkout process
- ✅ About, Contact, Blog pages
- ✅ Responsive design (mobile-first)
- ✅ 28 products across 4 categories
- ✅ LocalStorage persistence
- ✅ Product quick view modal
- ✅ Newsletter subscription
- ✅ Search functionality
- ✅ Mobile navigation menu

---

## Contact & Support

For questions, issues, or feature requests:

1. Check this user manual first
2. Review documentation files
3. Check browser console for errors
4. Test in different browsers
5. Clear cache and try again

---

**Last Updated:** December 25, 2025  
**Version:** 1.0.0  
**Status:** Production Ready ✅

---

*Thank you for using H&G Handmade Goods eCommerce Template!*

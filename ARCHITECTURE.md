# 🏗️ H&G Handmade Goods eCommerce - System Architecture

## 📐 Complete Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        FRONTEND LAYER                            │
│                     (Browser - Client Side)                      │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
        ┌──────────────────────────────────────────┐
        │           HTML5 Pages (Views)             │
        ├──────────────────────────────────────────┤
        │  • index.html (Homepage)                  │
        │  • shop.html (Product Catalog)            │
        │  • product-detail.html (Single Product)   │
        │  • cart.html (Shopping Cart)              │
        └──────────────────────────────────────────┘
                              │
                ┌─────────────┴─────────────┐
                ▼                           ▼
    ┌──────────────────────┐    ┌──────────────────────┐
    │   CSS Layer (SCSS)   │    │  JavaScript Layer    │
    ├──────────────────────┤    ├──────────────────────┤
    │ • _variables.scss    │    │  Component Modules:  │
    │ • _mixins.scss       │    │  ├── cart.js         │
    │ • _base.scss         │    │  ├── wishlist.js     │
    │ • _layout.scss       │    │  ├── navigation.js   │
    │ • _components.scss   │    │  ├── productGrid.js  │
    │ • _utilities.scss    │    │  ├── filters.js      │
    │ • styles.scss        │    │  ├── quickView.js    │
    │   └→ styles.css ✅   │    │  └── newsletter.js   │
    └──────────────────────┘    │                      │
                                │  Utility Modules:    │
                                │  ├── storage.js      │
                                │  └── helpers.js      │
                                │                      │
                                │  Main:               │
                                │  └── main.js         │
                                └──────────────────────┘
                                           │
                                           ▼
                            ┌──────────────────────────┐
                            │   External Libraries     │
                            ├──────────────────────────┤
                            │  • Bootstrap 5.3.2       │
                            │  • Font Awesome 6.5.1    │
                            └──────────────────────────┘
                                           │
                ┌──────────────────────────┴────────────────────────┐
                ▼                                                   ▼
    ┌──────────────────────┐                         ┌──────────────────────┐
    │   Data Layer         │                         │  Browser Storage     │
    ├──────────────────────┤                         ├──────────────────────┤
    │ products.json        │                         │  LocalStorage:       │
    │ ├── 12 Products      │                         │  ├── cart            │
    │ ├── 5 Categories     │                         │  ├── wishlist        │
    │ └── Product Schema   │                         │  └── newsletter      │
    └──────────────────────┘                         └──────────────────────┘
```

---

## 🔄 Data Flow Architecture

### 1. Product Display Flow

```
JSON File (products.json)
    │
    ▼
ProductGrid.loadProducts()
    │
    ▼
Store in Memory (ProductGrid.products)
    │
    ▼
Render to DOM (createProductCard())
    │
    ▼
User Sees Products in Browser
```

### 2. Add to Cart Flow

```
User clicks "Add to Cart"
    │
    ▼
Cart.addItem(productId, quantity, options)
    │
    ▼
Fetch Product Data from Memory
    │
    ▼
Add to Cart.items Array
    │
    ▼
Storage.set('cart', Cart.items)
    │
    ▼
localStorage.setItem('cart', JSON)
    │
    ▼
Cart.updateCartUI()
    │
    ▼
Update Badge Count & Render Cart Items
    │
    ▼
Show Toast Notification
```

### 3. Filtering Flow

```
User Interacts with Filter (Category/Search/Price)
    │
    ▼
Filters.applyShopFilters()
    │
    ▼
Collect All Filter Values
    │
    ▼
Helpers.filterProducts(products, filters)
    │
    ▼
Return Filtered Array
    │
    ▼
ProductGrid.filteredProducts = result
    │
    ▼
ProductGrid.render('shopProductGrid')
    │
    ▼
DOM Updated with Filtered Products
```

---

## 🗂️ File Structure & Responsibilities

### HTML Pages (View Layer)
```
pages/
├── index.html              - Homepage with hero, products, blog
├── shop.html               - Full catalog with filters/sorting
├── product-detail.html     - Single product view
└── cart.html               - Shopping cart & checkout prep
```

### SCSS Architecture (Presentation Layer)
```
assets/css/
├── _variables.scss         - Design tokens (colors, fonts, spacing)
├── _mixins.scss            - Reusable CSS patterns
├── _base.scss              - Reset, typography, buttons, forms
├── _layout.scss            - Header, footer, navigation, breadcrumb
├── _components.scss        - Product cards, modals, cart, etc.
├── _utilities.scss         - Helper classes (flexbox, spacing, etc.)
├── styles.scss             - Main file (imports all partials)
└── styles.css              - Compiled output (44KB)
```

### JavaScript Modules (Business Logic Layer)

#### Component Modules
```
components/
├── cart.js                 - Shopping cart CRUD operations
├── wishlist.js             - Wishlist CRUD operations
├── navigation.js           - Mobile menu, sticky header
├── productGrid.js          - Product rendering & display
├── filters.js              - Category tabs, search, sorting
├── quickView.js            - Quick view modal
└── newsletter.js           - Newsletter subscription
```

#### Utility Modules
```
utils/
├── storage.js              - LocalStorage wrapper (get/set/remove)
└── helpers.js              - Pure functions (formatting, validation, etc.)
```

#### Main Entry Point
```
main.js                     - Initializes all modules, coordinates app
```

### Data Layer
```
assets/data/
└── products.json           - Product catalog data source
```

---

## 🔌 Module Interactions

### Cart Module API
```javascript
Cart.init()                                    // Initialize
Cart.addItem(id, qty, options)                 // Add product
Cart.removeItem(index)                         // Remove product
Cart.updateQuantity(index, newQty)             // Update quantity
Cart.getTotal()                                // Get cart total
Cart.getItemCount()                            // Get item count
Cart.loadCart()                                // Load from localStorage
Cart.saveCart()                                // Save to localStorage
Cart.openCartOffcanvas()                       // Show cart panel
Cart.closeCartOffcanvas()                      // Hide cart panel
```

### Wishlist Module API
```javascript
Wishlist.init()                                // Initialize
Wishlist.addItem(productId)                    // Add to wishlist
Wishlist.removeItem(productId)                 // Remove from wishlist
Wishlist.toggleItem(productId)                 // Toggle wishlist
Wishlist.hasItem(productId)                    // Check if in wishlist
Wishlist.getItemCount()                        // Get count
Wishlist.updateWishlistUI()                    // Update UI
```

### ProductGrid Module API
```javascript
ProductGrid.init(containerId, limit)           // Initialize
ProductGrid.loadProducts()                     // Load JSON data
ProductGrid.createProductCard(product)         // Generate card HTML
ProductGrid.render(containerId)                // Render to DOM
ProductGrid.filterByCategory(category)         // Filter products
ProductGrid.sortProducts(sortBy)               // Sort products
ProductGrid.getProductById(id)                 // Get single product
```

### Helpers Module API
```javascript
Helpers.formatPrice(price)                     // Format to $XX.XX
Helpers.generateStars(rating)                  // Generate star HTML
Helpers.showToast(message, type)               // Show notification
Helpers.sortProducts(products, sortBy)         // Sort array
Helpers.filterProducts(products, filters)      // Filter array
Helpers.isValidEmail(email)                    // Validate email
Helpers.debounce(func, wait)                   // Debounce function
```

### Storage Module API
```javascript
Storage.get(key)                               // Get from localStorage
Storage.set(key, value)                        // Set to localStorage
Storage.remove(key)                            // Remove from localStorage
Storage.clear()                                // Clear all localStorage
Storage.has(key)                               // Check if key exists
```

---

## 🎯 Event-Driven Architecture

### Event Listeners & Handlers

```
┌─────────────────────────────────────────────────────────────┐
│                        User Actions                          │
└─────────────────────────────────────────────────────────────┘
    │                │                │                 │
    │                │                │                 │
    ▼                ▼                ▼                 ▼
┌────────┐     ┌────────┐      ┌────────┐       ┌────────┐
│ Click  │     │  Input │      │ Change │       │ Submit │
│ Button │     │  Text  │      │ Select │       │  Form  │
└────────┘     └────────┘      └────────┘       └────────┘
    │                │                │                 │
    ▼                ▼                ▼                 ▼
┌──────────────────────────────────────────────────────────┐
│                   Event Handlers                          │
├──────────────────────────────────────────────────────────┤
│  • onclick="Cart.addItem()"                               │
│  • onclick="Wishlist.toggleItem()"                        │
│  • oninput (debounced search)                            │
│  • onchange (filter/sort dropdowns)                      │
│  • onsubmit (newsletter form)                            │
└──────────────────────────────────────────────────────────┘
    │
    ▼
┌──────────────────────────────────────────────────────────┐
│                Business Logic Layer                       │
├──────────────────────────────────────────────────────────┤
│  • Validate input                                         │
│  • Process data                                           │
│  • Update application state                               │
│  • Save to localStorage                                   │
└──────────────────────────────────────────────────────────┘
    │
    ▼
┌──────────────────────────────────────────────────────────┐
│                    UI Update Layer                        │
├──────────────────────────────────────────────────────────┤
│  • Re-render components                                   │
│  • Update badge counts                                    │
│  • Show toast notifications                               │
│  • Animate transitions                                    │
└──────────────────────────────────────────────────────────┘
```

---

## 📊 State Management

### Application State
```javascript
// Cart State
Cart.items = [
    {
        id: 1,
        quantity: 2,
        options: { size: 'M', color: 'blue' },
        product: { ...productData }
    }
]

// Wishlist State
Wishlist.items = [1, 5, 7, 12]  // Product IDs

// Product State
ProductGrid.products = [ ...all products ]
ProductGrid.filteredProducts = [ ...filtered subset ]
```

### LocalStorage Schema
```javascript
// localStorage keys
{
    "cart": [
        { id, quantity, options, product }
    ],
    "wishlist": [1, 5, 7],
    "newsletter_subscribers": ["email1@example.com"]
}
```

---

## 🔐 Data Models

### Product Schema
```javascript
{
    id: Number,                    // Unique identifier
    name: String,                  // Product name
    category: String,              // jewelry, pottery, fabric, accessories
    price: Number,                 // Original price
    salePrice: Number | null,      // Sale price (optional)
    images: {
        main: String,              // Main image URL
        hover: String,             // Hover image URL
        gallery: Array<String>     // Additional images
    },
    badge: String,                 // 'new', 'sale', 'bestseller'
    discount: Number,              // Discount percentage
    rating: Number,                // 0-5 stars
    reviews: Number,               // Number of reviews
    stock: Number,                 // Available quantity
    description: String,           // Full description
    shortDescription: String,      // Brief description
    tags: Array<String>,           // Product tags
    sku: String,                   // Stock keeping unit
    sizes: Array<String>,          // Available sizes
    colors: Array<String>          // Available colors
}
```

### Cart Item Schema
```javascript
{
    id: Number,                    // Product ID
    quantity: Number,              // Quantity in cart
    options: {                     // Selected options
        size: String,
        color: String
    },
    product: Object                // Full product data
}
```

---

## 🎨 Design System Architecture

### Color Palette
```scss
// Primary Colors
$primary-color: #d4a373;          // Warm brown (brand color)
$primary-dark: #b8875e;           // Hover states
$primary-light: #e8c4a0;          // Backgrounds

// Secondary Colors
$secondary-color: #2c2c2c;        // Dark charcoal (text)
$secondary-light: #4a4a4a;        // Hover states

// Neutral Palette
$white: #ffffff;
$black: #000000;
$light-gray: #f8f9fa;
$medium-gray: #6c757d;
$dark-gray: #343a40;

// Semantic Colors
$success: #28a745;                // Success messages
$danger: #dc3545;                 // Errors, delete
$warning: #ffc107;                // Warnings, ratings
$info: #17a2b8;                   // Info messages
```

### Typography System
```scss
// Font Families
$font-primary: 'Poppins', sans-serif;      // Headings
$font-secondary: 'Roboto', sans-serif;     // Body text

// Font Sizes (Modular Scale)
$font-size-xs: 12px;              // Small text
$font-size-sm: 14px;              // Secondary text
$font-size-base: 16px;            // Body text
$font-size-lg: 18px;              // Large text
$font-size-xl: 20px;              // Extra large

// Headings
$font-size-h1: 2.5rem;            // 40px
$font-size-h2: 2rem;              // 32px
$font-size-h3: 1.75rem;           // 28px
$font-size-h4: 1.5rem;            // 24px

// Font Weights
$font-weight-light: 300;
$font-weight-regular: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
```

### Spacing System (8px Grid)
```scss
$spacing-xs: 0.5rem;              // 8px
$spacing-sm: 1rem;                // 16px
$spacing-md: 1.5rem;              // 24px
$spacing-lg: 2rem;                // 32px
$spacing-xl: 3rem;                // 48px
$spacing-xxl: 4rem;               // 64px
```

### Responsive Breakpoints
```scss
$breakpoint-xs: 0;                // Mobile portrait
$breakpoint-sm: 576px;            // Mobile landscape
$breakpoint-md: 768px;            // Tablets
$breakpoint-lg: 992px;            // Laptops
$breakpoint-xl: 1200px;           // Desktops
$breakpoint-xxl: 1400px;          // Large desktops
```

---

## 🔄 Component Lifecycle

### Page Load Sequence
```
1. HTML Parsed
2. CSS Loaded (styles.css)
3. External Libraries Loaded (Bootstrap, Font Awesome)
4. DOM Content Loaded Event Fires
    │
    ├─→ Navigation.init()
    ├─→ Cart.init()
    │     └─→ Cart.loadCart() from localStorage
    │     └─→ Cart.updateCartUI()
    │
    ├─→ Wishlist.init()
    │     └─→ Wishlist.loadWishlist() from localStorage
    │     └─→ Wishlist.updateWishlistUI()
    │
    ├─→ Newsletter.init()
    ├─→ QuickView.init()
    ├─→ Filters.init()
    │
    └─→ ProductGrid.init()
          └─→ fetch('products.json')
          └─→ ProductGrid.render()
                └─→ Display products in DOM
```

---

## 🚀 Performance Optimizations

### Current Optimizations
- ✅ LocalStorage for client-side data persistence
- ✅ Debounced search input (300ms delay)
- ✅ Event delegation for dynamic elements
- ✅ CSS compiled from SCSS (44KB)
- ✅ Modular JavaScript (separate files)
- ✅ CDN for external libraries (Bootstrap, Font Awesome)
- ✅ Image optimization (Unsplash CDN)

### Future Optimizations
- ⬜ Lazy loading images
- ⬜ Code splitting (separate bundles)
- ⬜ Minification (CSS/JS)
- ⬜ Gzip compression
- ⬜ Service worker (PWA)
- ⬜ Infinite scroll pagination

---

## 📱 Responsive Strategy

### Mobile-First Approach
```scss
// Base styles (Mobile)
.product-grid {
    display: grid;
    grid-template-columns: 1fr;  // 1 column
}

// Tablet
@media (min-width: 768px) {
    .product-grid {
        grid-template-columns: repeat(2, 1fr);  // 2 columns
    }
}

// Desktop
@media (min-width: 992px) {
    .product-grid {
        grid-template-columns: repeat(4, 1fr);  // 4 columns
    }
}
```

---

## 🔮 Future Backend Architecture (Optional)

```
┌─────────────────────────────────────────────────────────────┐
│                       FRONTEND (Current)                     │
│                   HTML + CSS + JavaScript                    │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ REST API
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    BACKEND (Future - Node.js)                │
├─────────────────────────────────────────────────────────────┤
│  Express Server                                              │
│  ├── GET  /api/products                                      │
│  ├── GET  /api/products/:id                                  │
│  ├── POST /api/cart                                          │
│  ├── POST /api/orders                                        │
│  ├── POST /api/users/register                               │
│  └── POST /api/users/login                                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      DATABASE (MongoDB)                      │
├─────────────────────────────────────────────────────────────┤
│  Collections:                                                │
│  ├── products                                                │
│  ├── users                                                   │
│  ├── orders                                                  │
│  ├── cart                                                    │
│  └── reviews                                                 │
└─────────────────────────────────────────────────────────────┘
```

---

## 📝 Summary

This architecture provides:
- ✅ **Separation of Concerns**: HTML (structure), CSS (presentation), JS (behavior)
- ✅ **Modularity**: Independent, reusable components
- ✅ **Scalability**: Easy to add new features
- ✅ **Maintainability**: Clear file organization
- ✅ **Performance**: Optimized loading and rendering
- ✅ **Responsiveness**: Mobile-first design
- ✅ **User Experience**: Smooth interactions and feedback

**Built for modern web development best practices! 🚀**

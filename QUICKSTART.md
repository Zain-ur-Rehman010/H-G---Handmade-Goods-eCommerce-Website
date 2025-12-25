# 🚀 Quick Start Guide

Get your H&G Handmade Goods eCommerce website running in 3 simple steps!

## Step 1: Install Dependencies (2 minutes)

Open your terminal in the project folder and run:

```bash
cd handmade-goods-ecommerce
npm install
```

## Step 2: Compile CSS (1 minute)

Compile the SCSS files to CSS:

```bash
npm run sass
```

Keep this terminal open - it will auto-compile whenever you make style changes!

## Step 3: Open in Browser

### Option A: Using VS Code Live Server (Easiest)
1. Install "Live Server" extension in VS Code
2. Right-click `pages/index.html`
3. Click "Open with Live Server"

### Option B: Direct File Access
Simply double-click `pages/index.html` to open in your browser.

---

## 🎉 That's It!

Your website should now be running at:
- **Homepage:** `index.html`
- **Shop:** `shop.html`

---

## ✨ What's Working

- ✅ Responsive homepage with hero slider
- ✅ Product catalog with 12 products
- ✅ Category filtering & sorting
- ✅ Shopping cart (slide-in panel)
- ✅ Wishlist functionality
- ✅ Quick view modal
- ✅ Search & filters
- ✅ Mobile menu
- ✅ Newsletter subscription

---

## 🎨 Customize Your Site

### Change Colors
Edit `assets/css/_variables.scss` and change:
```scss
$primary-color: #d4a373;  // Your brand color
```

Then recompile:
```bash
npm run sass
```

### Add Products
Edit `assets/data/products.json` and add your products.

### Change Logo
Replace "MIOCA" text in `pages/index.html` with your logo image.

---

## 📱 Test Responsive Design

Try resizing your browser to see how it looks on:
- Mobile (< 768px)
- Tablet (768px - 991px)
- Desktop (> 992px)

---

## ❓ Need Help?

Check [SETUP.md](SETUP.md) for detailed documentation or [README.md](README.md) for project overview.

**Happy building! 🎊**

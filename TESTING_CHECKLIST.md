# ✅ Testing Checklist

Use this checklist to test all features of your H&G Handmade Goods eCommerce website.

---

## 🏠 Homepage Tests

### Hero Slider
- [ ] Hero slider displays correctly
- [ ] Slides auto-advance
- [ ] Previous/Next buttons work
- [ ] Indicator dots work
- [ ] Slides pause on hover (optional)
- [ ] CTA buttons link correctly

### Service Features
- [ ] All 4 service icons display
- [ ] Icons animate on hover
- [ ] Text is readable
- [ ] Section is responsive

### Category Tabs
- [ ] "All Products" tab shows all products
- [ ] Clicking "Jewelry" filters products
- [ ] Clicking "Pottery" filters products
- [ ] Clicking "Fabric" filters products
- [ ] Clicking "Accessories" filters products
- [ ] Active tab is highlighted

### Product Grid
- [ ] 8 products display on homepage
- [ ] Product images load correctly
- [ ] Hover shows second image
- [ ] Badges show correctly (Sale, New, Bestseller)
- [ ] Prices display correctly
- [ ] Sale prices show with strikethrough
- [ ] Star ratings display
- [ ] "Add to Cart" button works
- [ ] Quick View button opens modal
- [ ] Wishlist heart button toggles

### Promotional Banners
- [ ] 3 banners display
- [ ] Background images load
- [ ] Text is readable
- [ ] CTA buttons work
- [ ] Hover effects work

### Blog Section
- [ ] 3 blog cards display
- [ ] Images load correctly
- [ ] Dates and meta info show
- [ ] "Read More" links work
- [ ] Hover effects work

### Newsletter
- [ ] Newsletter form displays
- [ ] Email input validates
- [ ] Submit shows success message
- [ ] Invalid email shows error

---

## 🛒 Shop Page Tests

### Layout
- [ ] Sidebar shows on desktop (>992px)
- [ ] Sidebar hides on mobile (<992px)
- [ ] Product grid displays correctly
- [ ] Responsive columns work (1/2/3 columns)

### Search Filter
- [ ] Search input is visible
- [ ] Typing filters products in real-time
- [ ] Search is case-insensitive
- [ ] Clearing search shows all products

### Category Filter
- [ ] All category checkboxes display
- [ ] Checking a category filters products
- [ ] Multiple categories work (OR filter)
- [ ] Unchecking shows all products again

### Price Range Filter
- [ ] Price slider displays
- [ ] Min/Max prices show
- [ ] Dragging slider updates products
- [ ] Price values update dynamically

### Sorting
- [ ] Sort dropdown displays all options
- [ ] "Price: Low to High" sorts correctly
- [ ] "Price: High to Low" sorts correctly
- [ ] "Name: A to Z" sorts alphabetically
- [ ] "Name: Z to A" sorts reverse
- [ ] "Top Rated" shows highest rated first
- [ ] "Newest" shows by ID descending

### Product Display
- [ ] All 12 products can be displayed
- [ ] Filtered products show correctly
- [ ] "No products found" shows when empty
- [ ] View toggle buttons work (grid/list)

---

## 📦 Product Detail Page Tests

### URL Parameter
- [ ] Accessing with `?id=1` works
- [ ] Accessing with `?id=5` works
- [ ] Invalid ID redirects to shop
- [ ] Missing ID redirects to shop

### Product Gallery
- [ ] Main image displays
- [ ] Thumbnails display below
- [ ] Clicking thumbnail changes main image
- [ ] Active thumbnail is highlighted

### Product Information
- [ ] Product name displays
- [ ] Price displays correctly
- [ ] Sale price shows with strikethrough
- [ ] Discount badge shows percentage
- [ ] Star rating displays
- [ ] Review count shows
- [ ] Description displays
- [ ] SKU, Category, Tags display

### Product Options
- [ ] Size buttons display (if product has sizes)
- [ ] Color buttons display (if product has colors)
- [ ] Clicking size/color selects it
- [ ] Selected option is highlighted
- [ ] Options persist when adding to cart

### Quantity Selector
- [ ] Quantity starts at 1
- [ ] Plus button increases quantity
- [ ] Minus button decreases quantity
- [ ] Can't go below 1
- [ ] Can't exceed stock amount

### Action Buttons
- [ ] "Add to Cart" adds product
- [ ] Success message shows
- [ ] Cart count increases
- [ ] Wishlist button toggles
- [ ] Wishlist count updates

### Product Tabs
- [ ] Description tab shows by default
- [ ] Clicking "Additional Info" tab works
- [ ] Clicking "Reviews" tab works
- [ ] Tab content changes correctly

### Related Products
- [ ] Related products show (same category)
- [ ] Up to 4 related products display
- [ ] Current product is excluded
- [ ] Related product cards work

---

## 🛍️ Shopping Cart Tests

### Cart Offcanvas (Slide-in Panel)
- [ ] Clicking cart icon opens panel
- [ ] Panel slides in from right
- [ ] Backdrop appears behind panel
- [ ] Close button closes panel
- [ ] Clicking backdrop closes panel
- [ ] ESC key closes panel

### Cart Items
- [ ] Added products appear in cart
- [ ] Product image displays
- [ ] Product name links to detail page
- [ ] Price displays correctly
- [ ] Quantity shows correctly
- [ ] Plus/minus buttons work
- [ ] Remove button works

### Cart Calculations
- [ ] Subtotal calculates correctly
- [ ] Subtotal updates when quantity changes
- [ ] Subtotal updates when item removed
- [ ] Free items show $0.00

### Empty Cart
- [ ] Empty cart shows message
- [ ] Empty cart icon displays
- [ ] "Continue Shopping" link shows
- [ ] Footer hides when empty

### Persistence
- [ ] Cart items persist after page reload
- [ ] Cart survives browser close/reopen
- [ ] Multiple items can be stored

---

## 🛒 Cart Page Tests

### Cart Table
- [ ] All cart items display in table
- [ ] Images show correctly
- [ ] Product names link to detail
- [ ] Prices display
- [ ] Quantities show
- [ ] Subtotals calculate per item
- [ ] Remove buttons work

### Cart Actions
- [ ] "Continue Shopping" returns to shop
- [ ] Coupon code input works
- [ ] "Apply Coupon" validates code
- [ ] Valid coupon shows success
- [ ] Invalid coupon shows error

### Cart Summary
- [ ] Subtotal displays correctly
- [ ] Shipping method dropdown works
- [ ] Free shipping shows $0.00
- [ ] Standard shipping adds $5.00
- [ ] Express shipping adds $15.00
- [ ] Tax calculates (10%)
- [ ] Total sums all amounts
- [ ] "Proceed to Checkout" button shows

### Empty Cart Page
- [ ] Empty state shows when no items
- [ ] Empty cart icon displays
- [ ] Message displays
- [ ] "Start Shopping" button shows

### Suggested Products
- [ ] Suggested products load
- [ ] Up to 4 products show
- [ ] Products are random/shuffled
- [ ] Cards work like normal products

---

## ❤️ Wishlist Tests

### Adding to Wishlist
- [ ] Clicking heart adds to wishlist
- [ ] Heart fills with color
- [ ] Wishlist count increases
- [ ] Success message shows

### Removing from Wishlist
- [ ] Clicking filled heart removes item
- [ ] Heart becomes outline
- [ ] Wishlist count decreases
- [ ] Success message shows

### Wishlist Persistence
- [ ] Wishlist items persist after reload
- [ ] Wishlist survives browser close
- [ ] Multiple items can be stored

### Wishlist State
- [ ] Heart state syncs across pages
- [ ] Quick view shows correct state
- [ ] Product detail shows correct state
- [ ] Shop page shows correct state

---

## 🔍 Quick View Modal Tests

### Opening Modal
- [ ] Clicking eye icon opens modal
- [ ] Modal appears centered
- [ ] Backdrop appears
- [ ] Body scroll is disabled

### Closing Modal
- [ ] Close button works
- [ ] Clicking backdrop closes modal
- [ ] ESC key closes modal
- [ ] Body scroll re-enables

### Modal Content
- [ ] Product image displays
- [ ] Thumbnails show
- [ ] Clicking thumbnail changes image
- [ ] Product info displays
- [ ] Price shows correctly
- [ ] Size/color options work (if available)
- [ ] Quantity selector works
- [ ] "Add to Cart" button works
- [ ] Wishlist button works
- [ ] "View Full Details" link works

---

## 📱 Mobile/Responsive Tests

### Mobile Menu
- [ ] Hamburger icon shows on mobile
- [ ] Clicking hamburger opens menu
- [ ] Menu slides in from left
- [ ] Backdrop appears
- [ ] Close button works
- [ ] Links work
- [ ] Clicking link closes menu

### Breakpoints
- [ ] Mobile (<576px): Single column
- [ ] Tablet (768px-991px): 2 columns
- [ ] Desktop (>992px): 4 columns

### Touch Interactions
- [ ] Buttons are large enough (44px min)
- [ ] Links are tappable
- [ ] Slider swipe works
- [ ] Dropdown menus work

### Viewport
- [ ] Page fits screen width
- [ ] No horizontal scroll
- [ ] Images scale correctly
- [ ] Text is readable

---

## 🎨 Header & Footer Tests

### Sticky Header
- [ ] Header sticks to top on scroll
- [ ] Logo displays
- [ ] Navigation links work
- [ ] Active page is highlighted
- [ ] Search icon shows (functionality pending)
- [ ] Account icon shows (functionality pending)
- [ ] Cart icon shows count
- [ ] Wishlist icon shows count

### Footer
- [ ] All 4 footer columns display
- [ ] Social icons show
- [ ] Quick links work
- [ ] Newsletter form works
- [ ] Payment icons display
- [ ] Copyright text shows

---

## 🔔 Notifications Tests

### Toast Messages
- [ ] Success toasts are green
- [ ] Error toasts are red
- [ ] Toast auto-dismisses after 3 seconds
- [ ] Toast slides in from right
- [ ] Multiple toasts stack properly
- [ ] Toast text is readable

### Messages Tested
- [ ] "Product added to cart"
- [ ] "Added to wishlist"
- [ ] "Removed from wishlist"
- [ ] "Item removed from cart"
- [ ] "Successfully subscribed"
- [ ] "Invalid email"
- [ ] "Product not found"

---

## 🌐 Cross-Browser Tests

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Browsers
- [ ] Chrome Mobile (Android)
- [ ] Safari (iOS)
- [ ] Samsung Internet

### Features to Test
- [ ] Layout renders correctly
- [ ] JavaScript works
- [ ] Animations smooth
- [ ] Forms work
- [ ] LocalStorage works

---

## ⚡ Performance Tests

### Load Time
- [ ] Homepage loads in <3 seconds
- [ ] Shop page loads in <3 seconds
- [ ] Images lazy load (optional)

### Optimization
- [ ] CSS is minified (production)
- [ ] JS is minified (production)
- [ ] Images are optimized
- [ ] No console errors

---

## 🔒 Data Persistence Tests

### LocalStorage
- [ ] Cart data saves
- [ ] Wishlist data saves
- [ ] Newsletter subscriptions save
- [ ] Data survives reload
- [ ] Data survives browser close

### Data Integrity
- [ ] Cart items match products
- [ ] Quantities are accurate
- [ ] Prices calculate correctly
- [ ] No duplicate entries

---

## 📋 Final Checklist

### Before Deployment
- [ ] All images load
- [ ] No broken links (404s)
- [ ] No JavaScript errors in console
- [ ] Forms validate correctly
- [ ] Mobile view works
- [ ] CSS compiled successfully
- [ ] All pages accessible
- [ ] Favicon added (optional)
- [ ] Meta tags set correctly
- [ ] Analytics added (optional)

### Code Quality
- [ ] Code is formatted
- [ ] Comments are clear
- [ ] No unused files
- [ ] README is complete
- [ ] Documentation is accurate

---

## 📊 Test Results

| Feature | Status | Notes |
|---------|--------|-------|
| Homepage | ⬜ | |
| Shop Page | ⬜ | |
| Product Detail | ⬜ | |
| Cart Page | ⬜ | |
| Shopping Cart | ⬜ | |
| Wishlist | ⬜ | |
| Quick View | ⬜ | |
| Mobile Menu | ⬜ | |
| Responsive Design | ⬜ | |
| LocalStorage | ⬜ | |

**Legend:**
- ✅ Passed
- ❌ Failed
- ⬜ Not Tested

---

## 🐛 Bug Report Template

```
Bug: [Brief description]
Page: [Which page]
Steps to Reproduce:
1.
2.
3.

Expected: [What should happen]
Actual: [What actually happened]
Browser: [Chrome/Firefox/Safari/Edge]
Device: [Desktop/Mobile/Tablet]
```

---

**Happy Testing! 🎉**

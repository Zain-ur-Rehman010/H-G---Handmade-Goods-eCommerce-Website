// ========================================
// MAIN JAVASCRIPT
// ========================================

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Mioca eCommerce - Initializing...');

    // Initialize core components
    Navigation.init();
    Cart.init();
    Wishlist.init();
    Newsletter.init();
    QuickView.init();
    Filters.init();
    
    // Initialize Auth if available
    if (typeof Auth !== 'undefined') {
        Auth.init();
    }

    // Initialize Search if available
    if (typeof Search !== 'undefined') {
        Search.init();
    }

    // Initialize product grid on homepage
    const productGrid = document.getElementById('productGrid');
    if (productGrid) {
        ProductGrid.init('productGrid', 8).then(() => {
            console.log('Homepage products loaded:', ProductGrid.products.length);
        });
    }

    // Initialize shop page product grid
    const shopProductGrid = document.getElementById('shopProductGrid');
    if (shopProductGrid) {
        // Load all products for shop page
        ProductGrid.init('shopProductGrid', 100).then(() => {
            // Setup shop filters after products are loaded
            Filters.setupShopFilters();

            // Check for category filter from URL
            const categoryParam = Helpers.getUrlParameter('category');
            if (categoryParam) {
                ProductGrid.filterByCategory(categoryParam, 'shopProductGrid');

                // Update active tab
                const categoryBtn = document.querySelector(`[data-category="${categoryParam}"]`);
                if (categoryBtn) {
                    document.querySelectorAll('.category-tabs__btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    categoryBtn.classList.add('active');
                }
            }
        });
    }

    // Initialize product detail page
    const productDetailPage = document.querySelector('.product-detail-page');
    if (productDetailPage) {
        initProductDetail();
    }

    // Initialize cart page
    const cartPage = document.querySelector('.cart-page');
    if (cartPage) {
        initCartPage();
    }

    console.log('Mioca eCommerce - Initialized successfully!');
});

// ========================================
// PRODUCT DETAIL PAGE
// ========================================

async function initProductDetail() {
    const productId = Helpers.getUrlParameter('id');

    if (!productId) {
        window.location.href = 'shop.html';
        return;
    }

    // Load products first
    await ProductGrid.loadProducts();

    const product = ProductGrid.getProductById(parseInt(productId));

    if (!product) {
        Helpers.showToast('Product not found', 'error');
        setTimeout(() => {
            window.location.href = 'shop.html';
        }, 2000);
        return;
    }

    // Render product details
    renderProductDetail(product);

    // Load related products
    loadRelatedProducts(product);
}

function renderProductDetail(product) {
    const price = product.salePrice || product.price;
    const hasDiscount = product.salePrice && product.salePrice < product.price;

    // Update page title
    document.title = `${product.name} - Mioca`;

    // Render product gallery
    const galleryContainer = document.querySelector('.product-detail__gallery');
    if (galleryContainer) {
        galleryContainer.innerHTML = `
            <div class="main-image">
                <img src="${product.images.main}" alt="${product.name}" id="mainProductImage">
            </div>
            <div class="thumbnail-list">
                ${product.images.gallery.map((img, index) => `
                    <div class="thumbnail ${index === 0 ? 'active' : ''}"
                         onclick="changeProductImage('${img}', this)">
                        <img src="${img}" alt="${product.name}">
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Render product info
    const infoContainer = document.querySelector('.product-detail__info');
    if (infoContainer) {
        infoContainer.innerHTML = `
            <h1>${product.name}</h1>

            <div class="rating">
                <span class="stars">${Helpers.generateStars(product.rating)}</span>
                <span class="reviews">(${product.reviews} reviews)</span>
            </div>

            <div class="price">
                <span class="current">${Helpers.formatPrice(price)}</span>
                ${hasDiscount ? `
                    <span class="original">${Helpers.formatPrice(product.price)}</span>
                    <span class="discount">-${product.discount}%</span>
                ` : ''}
            </div>

            <p class="description">${product.description}</p>

            ${renderProductOptions(product)}

            <div class="quantity-selector">
                <label>Quantity:</label>
                <div class="quantity-input">
                    <button onclick="decreaseProductQuantity()">-</button>
                    <input type="number" id="productQuantity" value="1" min="1" max="${product.stock}" readonly>
                    <button onclick="increaseProductQuantity()">+</button>
                </div>
            </div>

            <div class="action-buttons">
                <button class="btn btn-primary" onclick="addProductToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button class="icon-btn ${Wishlist.hasItem(product.id) ? 'active' : ''}"
                        onclick="toggleProductWishlist(${product.id})"
                        id="productWishlistBtn">
                    <i class="${Wishlist.hasItem(product.id) ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>

            <div class="product-meta">
                <div class="meta-item">
                    <strong>SKU:</strong>
                    <span>${product.sku}</span>
                </div>
                <div class="meta-item">
                    <strong>Category:</strong>
                    <span>${product.category}</span>
                </div>
                <div class="meta-item">
                    <strong>Tags:</strong>
                    <span>${product.tags.join(', ')}</span>
                </div>
                <div class="meta-item">
                    <strong>Availability:</strong>
                    <span style="color: ${product.stock > 0 ? '#28a745' : '#dc3545'}">
                        ${product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                    </span>
                </div>
            </div>
        `;
    }

    // Setup option buttons
    setupProductOptionButtons();
}

function renderProductOptions(product) {
    let html = '<div class="product-options">';

    if (product.sizes && product.sizes.length > 0) {
        html += `
            <div class="option-group">
                <label>Size:</label>
                <div class="size-options">
                    ${product.sizes.map((size, index) => `
                        <button class="size-btn ${index === 0 ? 'active' : ''}" data-size="${size}">
                            ${size}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    if (product.colors && product.colors.length > 0) {
        html += `
            <div class="option-group">
                <label>Color:</label>
                <div class="color-options">
                    ${product.colors.map((color, index) => `
                        <button class="color-btn ${index === 0 ? 'active' : ''}"
                                style="background-color: ${color};"
                                data-color="${color}">
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    html += '</div>';
    return html;
}

function setupProductOptionButtons() {
    setTimeout(() => {
        document.querySelectorAll('.size-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

        document.querySelectorAll('.color-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }, 100);
}

function changeProductImage(imageSrc, thumbnail) {
    const mainImage = document.getElementById('mainProductImage');
    if (mainImage) {
        mainImage.src = imageSrc;
    }

    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
}

function increaseProductQuantity() {
    const input = document.getElementById('productQuantity');
    if (input) {
        const max = parseInt(input.max);
        const current = parseInt(input.value);
        if (current < max) {
            input.value = current + 1;
        }
    }
}

function decreaseProductQuantity() {
    const input = document.getElementById('productQuantity');
    if (input) {
        const min = parseInt(input.min);
        const current = parseInt(input.value);
        if (current > min) {
            input.value = current - 1;
        }
    }
}

function addProductToCart(productId) {
    const quantityInput = document.getElementById('productQuantity');
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;

    const options = {};

    const activeSize = document.querySelector('.size-btn.active');
    if (activeSize) {
        options.size = activeSize.dataset.size;
    }

    const activeColor = document.querySelector('.color-btn.active');
    if (activeColor) {
        options.color = activeColor.dataset.color;
    }

    Cart.addItem(productId, quantity, options);
}

function toggleProductWishlist(productId) {
    Wishlist.toggleItem(productId);

    const btn = document.getElementById('productWishlistBtn');
    if (btn) {
        const isInWishlist = Wishlist.hasItem(productId);
        btn.classList.toggle('active', isInWishlist);

        const icon = btn.querySelector('i');
        if (icon) {
            if (isInWishlist) {
                icon.classList.replace('far', 'fas');
            } else {
                icon.classList.replace('fas', 'far');
            }
        }
    }
}

function loadRelatedProducts(product) {
    const relatedContainer = document.getElementById('relatedProducts');
    if (!relatedContainer) return;

    const related = ProductGrid.products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    relatedContainer.innerHTML = related
        .map(p => ProductGrid.createProductCard(p))
        .join('');
}

// ========================================
// CART PAGE
// ========================================

function initCartPage() {
    renderCartTable();
    updateCartSummary();
}

function renderCartTable() {
    const tbody = document.querySelector('.cart-table tbody');
    if (!tbody) return;

    if (Cart.items.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-5">
                    <i class="fas fa-shopping-cart fa-3x mb-3" style="color: #ccc;"></i>
                    <p>Your cart is empty</p>
                    <a href="shop.html" class="btn btn-primary mt-3">Continue Shopping</a>
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = Cart.items.map((item, index) => {
        const price = item.product.salePrice || item.product.price;
        const subtotal = price * item.quantity;

        return `
            <tr>
                <td>
                    <button class="remove-btn" onclick="removeCartItem(${index})">
                        <i class="fas fa-times"></i>
                    </button>
                </td>
                <td>
                    <div class="product-thumbnail">
                        <img src="${item.product.images.main}" alt="${item.product.name}">
                    </div>
                </td>
                <td>
                    <a href="product-detail.html?id=${item.product.id}" class="product-name">
                        ${item.product.name}
                    </a>
                </td>
                <td>${Helpers.formatPrice(price)}</td>
                <td>
                    <div class="quantity-input">
                        <button onclick="updateCartItemQuantity(${index}, ${item.quantity - 1})">-</button>
                        <input type="number" value="${item.quantity}" min="1" readonly>
                        <button onclick="updateCartItemQuantity(${index}, ${item.quantity + 1})">+</button>
                    </div>
                </td>
                <td><strong>${Helpers.formatPrice(subtotal)}</strong></td>
            </tr>
        `;
    }).join('');
}

function updateCartSummary() {
    const subtotalEl = document.getElementById('cartSubtotalAmount');
    const totalEl = document.getElementById('cartTotalAmount');

    const subtotal = Cart.getTotal();
    const shipping = 0; // Free shipping
    const total = subtotal + shipping;

    if (subtotalEl) subtotalEl.textContent = Helpers.formatPrice(subtotal);
    if (totalEl) totalEl.textContent = Helpers.formatPrice(total);
}

function removeCartItem(index) {
    Cart.removeItem(index);
    renderCartTable();
    updateCartSummary();
}

function updateCartItemQuantity(index, quantity) {
    Cart.updateQuantity(index, quantity);
    renderCartTable();
    updateCartSummary();
}

// Make functions globally available
if (typeof window !== 'undefined') {
    window.changeProductImage = changeProductImage;
    window.increaseProductQuantity = increaseProductQuantity;
    window.decreaseProductQuantity = decreaseProductQuantity;
    window.addProductToCart = addProductToCart;
    window.toggleProductWishlist = toggleProductWishlist;
    window.removeCartItem = removeCartItem;
    window.updateCartItemQuantity = updateCartItemQuantity;
}

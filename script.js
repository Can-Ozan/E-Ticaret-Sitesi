// Product Data
const products = [
    {
        id: 1,
        name: 'Premium Kablosuz Kulaklık',
        price: 899,
        originalPrice: 1299,
        image: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
            'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'electronics',
        description: 'Yüksek kaliteli ses deneyimi sunan premium kablosuz kulaklık. Aktif gürültü engelleme teknolojisi ile mükemmel ses kalitesi.',
        features: [
            'Aktif gürültü engelleme (ANC)',
            '30 saat pil ömrü',
            'Hızlı şarj desteği',
            'Premium ses kalitesi',
            'Ergonomik tasarım'
        ],
        rating: 4.8,
        reviews: 342,
        inStock: true,
        badge: 'İndirim'
    },
    {
        id: 2,
        name: 'Akıllı Saat Pro',
        price: 1599,
        image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
            'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/1616164/pexels-photo-1616164.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'electronics',
        description: 'Gelişmiş sağlık takibi ve fitness özellikleri ile donatılmış akıllı saat. Su geçirmez tasarım ve uzun pil ömrü.',
        features: [
            'Kalp ritmi monitörü',
            'GPS takibi',
            'Su geçirmez (50m)',
            '7 gün pil ömrü',
            'Çoklu spor modu'
        ],
        rating: 4.6,
        reviews: 128,
        inStock: true,
        badge: 'Yeni'
    },
    {
        id: 3,
        name: 'Premium Deri Ceket',
        price: 2499,
        originalPrice: 3200,
        image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
            'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'fashion',
        description: 'Hakiki deri malzemeden üretilmiş premium erkek ceket. Modern kesim ve klasik tasarım bir arada.',
        features: [
            'Hakiki deri malzeme',
            'Modern slim fit kesim',
            'İç cep detayları',
            'Profesyonel temizleme',
            'Premium aksesuar'
        ],
        rating: 4.9,
        reviews: 89,
        inStock: true,
        badge: 'İndirim'
    },
    {
        id: 4,
        name: 'Modern Ofis Sandalyesi',
        price: 1899,
        image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
            'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'home',
        description: 'Ergonomik tasarım ve üstün konforu ile uzun çalışma saatleri için ideal ofis sandalyesi.',
        features: [
            'Ergonomik lomber destek',
            'Ayarlanabilir yükseklik',
            'Nefes alan kumaş',
            '360° dönebilir',
            '5 yıl garanti'
        ],
        rating: 4.7,
        reviews: 156,
        inStock: true
    },
    {
        id: 5,
        name: 'Yoga Matı Premium',
        price: 299,
        image: 'https://images.pexels.com/photos/3984354/pexels-photo-3984354.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
            'https://images.pexels.com/photos/3984354/pexels-photo-3984354.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'sports',
        description: 'Anti-slip özellikli, çevre dostu malzemeden üretilmiş premium yoga matı. Taşıma çantası dahil.',
        features: [
            'Anti-slip yüzey',
            'Çevre dostu malzeme',
            'Taşıma çantası',
            '6mm kalınlık',
            'Kolay temizlenebilir'
        ],
        rating: 4.5,
        reviews: 234,
        inStock: true,
        badge: 'Çok Satan'
    },
    {
        id: 6,
        name: 'Kişisel Gelişim Kitabı',
        price: 89,
        image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
            'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'books',
        description: 'Hayatınızı değiştirecek pratik öneriler ve stratejiler içeren kapsamlı kişisel gelişim rehberi.',
        features: [
            '350 sayfa içerik',
            'Pratik egzersizler',
            'Gerçek hikayeler',
            'Uzman önerileri',
            'Dijital bonus içerik'
        ],
        rating: 4.8,
        reviews: 412,
        inStock: true
    },
    {
        id: 7,
        name: 'Doğal Cilt Bakım Seti',
        price: 459,
        originalPrice: 650,
        image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
            'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'beauty',
        description: '100% doğal malzemelerden üretilmiş cilt bakım seti. Tüm cilt tipleri için uygun.',
        features: [
            '100% doğal malzeme',
            'Tüm cilt tipleri',
            'Parfüm ve paraben içermez',
            '3 ürün bir arada',
            'Dermatolog onaylı'
        ],
        rating: 4.9,
        reviews: 267,
        inStock: true,
        badge: 'İndirim'
    },
    {
        id: 8,
        name: 'Gaming Mekanik Klavye',
        price: 1299,
        image: 'https://images.pexels.com/photos/2148216/pexels-photo-2148216.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
            'https://images.pexels.com/photos/2148216/pexels-photo-2148216.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'electronics',
        description: 'RGB ışıklandırma ve mekanik switchler ile donatılmış profesyonel gaming klavye.',
        features: [
            'Mekanik blue switch',
            'RGB ışıklandırma',
            'Anti-ghosting',
            'Programlanabilir tuşlar',
            'USB-C bağlantı'
        ],
        rating: 4.7,
        reviews: 189,
        inStock: true,
        badge: 'Gaming'
    }
];

const categories = [
    { id: 'all', name: 'Tüm Ürünler', icon: 'fas fa-th-large', productCount: products.length },
    { id: 'electronics', name: 'Elektronik', icon: 'fas fa-mobile-alt', productCount: products.filter(p => p.category === 'electronics').length },
    { id: 'fashion', name: 'Moda & Giyim', icon: 'fas fa-tshirt', productCount: products.filter(p => p.category === 'fashion').length },
    { id: 'home', name: 'Ev & Yaşam', icon: 'fas fa-home', productCount: products.filter(p => p.category === 'home').length },
    { id: 'sports', name: 'Spor & Outdoor', icon: 'fas fa-dumbbell', productCount: products.filter(p => p.category === 'sports').length },
    { id: 'books', name: 'Kitap & Medya', icon: 'fas fa-book', productCount: products.filter(p => p.category === 'books').length },
    { id: 'beauty', name: 'Güzellik & Bakım', icon: 'fas fa-sparkles', productCount: products.filter(p => p.category === 'beauty').length }
];

// Global State
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let currentCategory = 'all';
let currentSort = 'featured';
let searchQuery = '';

// DOM Elements
const categoryList = document.getElementById('categoryList');
const productsGrid = document.getElementById('productsGrid');
const productCount = document.getElementById('productCount');
const cartCount = document.getElementById('cartCount');
const cartOverlay = document.getElementById('cartOverlay');
const cartSidebar = document.getElementById('cartSidebar');
const cartContent = document.getElementById('cartContent');
const cartFooter = document.getElementById('cartFooter');
const productModal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    // Load language system
    if (typeof languageManager !== 'undefined') {
        languageManager.updatePageContent();
    }
    
    checkAuthStatus();
    renderCategories();
    renderProducts();
    updateCartUI();
    updateWishlistUI();
    
    // Event Listeners
    searchInput.addEventListener('input', handleSearch);
    sortSelect.addEventListener('change', handleSort);
});

// Check Authentication Status
function checkAuthStatus() {
    const userBtn = document.querySelector('.action-btn');
    const userBtnText = userBtn?.querySelector('span');
    
    if (currentUser && userBtnText) {
        userBtnText.textContent = currentUser.firstName;
        userBtn.onclick = () => showUserMenu();
    }
}

// Show User Menu
function showUserMenu() {
    const menu = document.createElement('div');
    menu.className = 'user-dropdown';
    menu.innerHTML = `
        <div class="dropdown-content">
            <a href="profile.html"><i class="fas fa-user"></i> Profilim</a>
            <a href="orders.html"><i class="fas fa-box"></i> Siparişlerim</a>
            <a href="wishlist.html"><i class="fas fa-heart"></i> Favorilerim</a>
            <a href="reviews.html"><i class="fas fa-star"></i> Yorumlarım</a>
            <div class="dropdown-divider"></div>
            <a href="#" onclick="logout()"><i class="fas fa-sign-out-alt"></i> Çıkış Yap</a>
        </div>
    `;
    
    // Position and show menu
    document.body.appendChild(menu);
    
    // Remove menu when clicking outside
    setTimeout(() => {
        document.addEventListener('click', function removeMenu(e) {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener('click', removeMenu);
            }
        });
    }, 100);
}

// Logout
function logout() {
    if (confirm('Çıkış yapmak istediğinizden emin misiniz?')) {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('rememberUser');
        currentUser = null;
        showNotification('Başarıyla çıkış yaptınız', 'info');
        setTimeout(() => {
            location.reload();
        }, 1500);
    }
}

// Render Categories
function renderCategories() {
    categoryList.innerHTML = categories.map(category => `
        <button class="category-item ${currentCategory === category.id ? 'active' : ''}" 
                onclick="selectCategory('${category.id}')">
            <div class="category-info">
                <i class="${category.icon}"></i>
                <span>${category.name}</span>
            </div>
            <span class="category-count">${category.productCount}</span>
        </button>
    `).join('');
}

// Select Category
function selectCategory(categoryId) {
    currentCategory = categoryId;
    renderCategories();
    renderProducts();
}

// Handle Search
function handleSearch(e) {
    searchQuery = e.target.value.toLowerCase();
    renderProducts();
}

// Handle Sort
function handleSort(e) {
    currentSort = e.target.value;
    renderProducts();
}

// Filter and Sort Products
function getFilteredProducts() {
    let filtered = products;
    
    // Filter by category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(product => product.category === currentCategory);
    }
    
    // Filter by search
    if (searchQuery) {
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchQuery) ||
            product.description.toLowerCase().includes(searchQuery)
        );
    }
    
    // Sort products
    switch (currentSort) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name, 'tr'));
            break;
        default:
            // Keep original order
            break;
    }
    
    return filtered;
}

// Render Products
function renderProducts() {
    const filtered = getFilteredProducts();
    productCount.textContent = `${filtered.length} ürün bulundu`;
    
    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #6b7280;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <h3 style="margin-bottom: 0.5rem;">Ürün bulunamadı</h3>
                <p>Arama kriterlerinizi değiştirerek tekrar deneyin.</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = filtered.map(product => createProductCard(product)).join('');
}

// Create Product Card
function createProductCard(product) {
    const discountPercentage = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;
    
    const stars = Array.from({length: 5}, (_, i) => 
        `<i class="fas fa-star star ${i < Math.floor(product.rating) ? '' : 'empty'}"></i>`
    ).join('');
    
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                
                ${product.badge ? `<div class="product-badge badge-${product.badge.toLowerCase().replace(' ', '')}">${product.badge}</div>` : ''}
                
                ${discountPercentage > 0 ? `<div class="discount-percentage">%${discountPercentage}</div>` : ''}
                
                <div class="product-actions">
                    <button class="action-icon" onclick="openProductModal(${product.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-icon ${isInWishlist(product.id) ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                
                <div class="product-rating">
                    <div class="stars">${stars}</div>
                    <span class="rating-text">(${product.reviews} değerlendirme)</span>
                </div>
                
                <div class="product-price">
                    <span class="current-price">${product.price.toLocaleString('tr-TR')} ₺</span>
                    ${product.originalPrice ? `<span class="original-price">${product.originalPrice.toLocaleString('tr-TR')} ₺</span>` : ''}
                </div>
                
                <button class="add-to-cart" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                    <i class="fas fa-shopping-cart"></i>
                    <span>${product.inStock ? 'Sepete Ekle' : 'Stokta Yok'}</span>
                </button>
            </div>
        </div>
    `;
}

// Check if product is in wishlist
function isInWishlist(productId) {
    return wishlist.some(item => item.id === productId);
}

// Toggle Wishlist
function toggleWishlist(productId) {
    if (!currentUser) {
        showNotification('Favorilere eklemek için giriş yapmalısınız', 'error');
        setTimeout(() => {
            window.location.href = 'auth.html';
        }, 2000);
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingIndex = wishlist.findIndex(item => item.id === productId);
    
    if (existingIndex !== -1) {
        // Remove from wishlist
        wishlist.splice(existingIndex, 1);
        showNotification('Ürün favorilerden kaldırıldı', 'info');
    } else {
        // Add to wishlist
        const wishlistItem = {
            ...product,
            addedAt: new Date().toISOString(),
            priceHistory: [{
                price: product.price,
                date: new Date().toISOString()
            }]
        };
        wishlist.push(wishlistItem);
        showNotification('Ürün favorilere eklendi!', 'success');
    }
    
    saveWishlist();
    updateWishlistUI();
    renderProducts(); // Re-render to update heart icons
}

// Save Wishlist
function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    // Also save to user data if logged in
    if (currentUser) {
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        
        if (userIndex !== -1) {
            users[userIndex].wishlist = wishlist;
            localStorage.setItem('users', JSON.stringify(users));
        }
    }
}

// Update Wishlist UI
function updateWishlistUI() {
    // Update wishlist count if there's a wishlist indicator
    const wishlistCount = document.getElementById('wishlistCount');
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
        wishlistCount.style.display = wishlist.length > 0 ? 'flex' : 'none';
    }
}

// Add to Cart
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    
    saveCart();
    updateCartUI();
    
    // Show success message
    showNotification('Ürün sepete eklendi!', 'success');
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Update Quantity
function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        updateCartUI();
    }
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update Cart UI
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    
    // Update cart content
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <h3>Sepetiniz boş</h3>
                <p>Alışverişe başlamak için ürün ekleyin</p>
            </div>
        `;
        cartFooter.innerHTML = '';
    } else {
        cartContent.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">${item.price.toLocaleString('tr-TR')} ₺</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');
        
        cartFooter.innerHTML = `
            <div class="cart-total">
                <span>Toplam:</span>
                <span>${totalPrice.toLocaleString('tr-TR')} ₺</span>
            </div>
            <button class="checkout-btn" onclick="checkout()">
                Ödemeye Geç
            </button>
        `;
    }
}

// Toggle Cart
function toggleCart() {
    const isActive = cartOverlay.classList.contains('active');
    
    if (isActive) {
        cartOverlay.classList.remove('active');
        cartSidebar.classList.remove('active');
    } else {
        cartOverlay.classList.add('active');
        cartSidebar.classList.add('active');
    }
}

// Open Product Modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const stars = Array.from({length: 5}, (_, i) => 
        `<i class="fas fa-star star ${i < Math.floor(product.rating) ? '' : 'empty'}"></i>`
    ).join('');
    
    modalBody.innerHTML = `
        <div class="modal-product">
            <div class="modal-images">
                <img src="${product.images[0]}" alt="${product.name}" class="main-image" id="mainImage">
                ${product.images.length > 1 ? `
                    <div class="thumbnail-images">
                        ${product.images.map((img, index) => `
                            <img src="${img}" alt="${product.name}" class="thumbnail ${index === 0 ? 'active' : ''}" 
                                 onclick="changeMainImage('${img}', this)">
                        `).join('')}
                    </div>
                ` : ''}
            </div>
            
            <div class="modal-product-info">
                ${product.badge ? `<div class="product-badge badge-${product.badge.toLowerCase().replace(' ', '')}">${product.badge}</div>` : ''}
                
                <h2 class="modal-product-title">${product.name}</h2>
                
                <div class="product-rating">
                    <div class="stars">${stars}</div>
                    <span class="rating-text">${product.rating} (${product.reviews} değerlendirme)</span>
                </div>
                
                <div class="product-price">
                    <span class="current-price">${product.price.toLocaleString('tr-TR')} ₺</span>
                    ${product.originalPrice ? `<span class="original-price">${product.originalPrice.toLocaleString('tr-TR')} ₺</span>` : ''}
                </div>
                
                <p class="modal-product-description">${product.description}</p>
                
                <div class="product-features">
                    <h4>Öne Çıkan Özellikler:</h4>
                    <ul class="features-list">
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="modal-quantity">
                    <span>Adet:</span>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="changeModalQuantity(-1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity" id="modalQuantity">1</span>
                        <button class="quantity-btn" onclick="changeModalQuantity(1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                
                <button class="modal-add-to-cart" onclick="addToCartFromModal(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                    <i class="fas fa-shopping-cart"></i>
                    <span>${product.inStock ? 'Sepete Ekle' : 'Stokta Yok'}</span>
                </button>
                
                <button class="modal-add-to-wishlist ${isInWishlist(product.id) ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
                    <i class="fas fa-heart"></i>
                    <span>${isInWishlist(product.id) ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}</span>
                </button>
                
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 1rem;">
                    <div style="width: 12px; height: 12px; border-radius: 50%; background: ${product.inStock ? '#10b981' : '#ef4444'};"></div>
                    <span style="color: ${product.inStock ? '#10b981' : '#ef4444'}; font-weight: 600;">
                        ${product.inStock ? 'Stokta Mevcut' : 'Stokta Yok'}
                    </span>
                </div>
                
                <div class="modal-actions-secondary">
                    <button class="action-btn-secondary" onclick="shareProduct(${product.id})">
                        <i class="fas fa-share-alt"></i>
                        Paylaş
                    </button>
                    <button class="action-btn-secondary" onclick="viewReviews(${product.id})">
                        <i class="fas fa-star"></i>
                        Yorumları Gör
                    </button>
                </div>
            </div>
        </div>
    `;
    
    productModal.classList.add('active');
}

// Close Product Modal
function closeProductModal() {
    productModal.classList.remove('active');
}

// Change Main Image
function changeMainImage(imageSrc, thumbnail) {
    document.getElementById('mainImage').src = imageSrc;
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

// Change Modal Quantity
function changeModalQuantity(change) {
    const quantityElement = document.getElementById('modalQuantity');
    let currentQuantity = parseInt(quantityElement.textContent);
    let newQuantity = Math.max(1, currentQuantity + change);
    quantityElement.textContent = newQuantity;
}

// Add to Cart from Modal
function addToCartFromModal(productId) {
    const quantity = parseInt(document.getElementById('modalQuantity').textContent);
    addToCart(productId, quantity);
    closeProductModal();
}

// Share Product
function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (navigator.share) {
        navigator.share({
            title: product.name,
            text: `${product.name} - ${product.price.toLocaleString('tr-TR')} ₺`,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        const shareText = `${product.name} - ${product.price.toLocaleString('tr-TR')} ₺ - ${window.location.href}`;
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('Ürün bilgisi kopyalandı!', 'success');
        });
    }
}

// View Reviews
function viewReviews(productId) {
    window.location.href = `reviews.html?product=${productId}`;
}

// Checkout
function checkout() {
    if (cart.length === 0) return;
    
    // Save cart to localStorage and redirect to payment page
    localStorage.setItem('cart', JSON.stringify(cart));
    showNotification('Ödeme sayfasına yönlendiriliyorsunuz...', 'info');
    setTimeout(() => {
        window.location.href = 'payment.html';
    }, 1000);
}

// Show Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-weight: 600;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    if (e.target === productModal) {
        closeProductModal();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (productModal.classList.contains('active')) {
            closeProductModal();
        }
        if (cartSidebar.classList.contains('active')) {
            toggleCart();
        }
    }
});
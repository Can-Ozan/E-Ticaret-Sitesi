// Global Variables
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let currentView = 'grid';
let currentSort = 'newest';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    checkAuthStatus();
    setupEventListeners();
    loadWishlist();
    loadRecommendations();
});

// Check Authentication Status
function checkAuthStatus() {
    const userBtn = document.getElementById('userBtn');
    const userBtnText = document.getElementById('userBtnText');
    
    if (currentUser) {
        userBtnText.textContent = currentUser.firstName;
        userBtn.onclick = () => showUserMenu();
    } else {
        userBtnText.textContent = 'Giriş Yap';
        userBtn.onclick = () => window.location.href = 'auth.html';
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    
    // Sort functionality
    document.getElementById('sortSelect').addEventListener('change', handleSort);
    
    // View toggle
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentView = this.dataset.view;
            updateView();
        });
    });
}

// Load Wishlist
function loadWishlist() {
    // Get user-specific wishlist
    if (currentUser) {
        const userData = JSON.parse(localStorage.getItem('users') || '[]').find(u => u.id === currentUser.id);
        if (userData && userData.wishlist) {
            wishlist = userData.wishlist;
        }
    }
    
    renderWishlist();
    updateWishlistCount();
}

// Render Wishlist
function renderWishlist() {
    const wishlistGrid = document.getElementById('wishlistGrid');
    const emptyWishlist = document.getElementById('emptyWishlist');
    
    if (wishlist.length === 0) {
        wishlistGrid.style.display = 'none';
        emptyWishlist.style.display = 'block';
        return;
    }
    
    wishlistGrid.style.display = 'grid';
    emptyWishlist.style.display = 'none';
    
    const sortedWishlist = getSortedWishlist();
    
    wishlistGrid.innerHTML = sortedWishlist.map(item => createWishlistItem(item)).join('');
    updateView();
}

// Create Wishlist Item
function createWishlistItem(item) {
    const addedDate = new Date(item.addedAt).toLocaleDateString('tr-TR');
    const stars = Array.from({length: 5}, (_, i) => 
        `<i class="fas fa-star star ${i < Math.floor(item.rating) ? '' : 'empty'}"></i>`
    ).join('');
    
    const priceChange = item.priceHistory && item.priceHistory.length > 1 ? 
        calculatePriceChange(item) : null;
    
    return `
        <div class="wishlist-item" data-id="${item.id}">
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
                ${item.badge ? `<div class="item-badge">${item.badge}</div>` : ''}
                <button class="remove-wishlist" onclick="removeFromWishlist(${item.id})">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="item-info">
                <div class="item-details">
                    <h3 class="item-title">${item.name}</h3>
                    
                    <div class="item-rating">
                        <div class="stars">${stars}</div>
                        <span class="rating-text">${item.rating} (${item.reviews} değerlendirme)</span>
                    </div>
                    
                    <div class="item-price">
                        <span class="current-price">${item.price.toLocaleString('tr-TR')} ₺</span>
                        ${item.originalPrice ? `<span class="original-price">${item.originalPrice.toLocaleString('tr-TR')} ₺</span>` : ''}
                        ${priceChange ? `<span class="price-change ${priceChange.type}">${priceChange.text}</span>` : ''}
                    </div>
                    
                    <div class="item-added-date">
                        <i class="fas fa-calendar-alt"></i>
                        ${addedDate} tarihinde eklendi
                    </div>
                </div>
                
                <div class="item-actions">
                    <button class="action-btn-small add-to-cart-btn" onclick="addToCartFromWishlist(${item.id})" ${!item.inStock ? 'disabled' : ''}>
                        <i class="fas fa-shopping-cart"></i>
                        ${item.inStock ? 'Sepete Ekle' : 'Stokta Yok'}
                    </button>
                    <button class="action-btn-small share-btn-small" onclick="shareProduct(${item.id})">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Calculate Price Change
function calculatePriceChange(item) {
    const history = item.priceHistory;
    const currentPrice = history[history.length - 1].price;
    const previousPrice = history[history.length - 2].price;
    
    if (currentPrice < previousPrice) {
        const decrease = previousPrice - currentPrice;
        return {
            type: 'decreased',
            text: `-${decrease.toLocaleString('tr-TR')} ₺`
        };
    } else if (currentPrice > previousPrice) {
        const increase = currentPrice - previousPrice;
        return {
            type: 'increased',
            text: `+${increase.toLocaleString('tr-TR')} ₺`
        };
    }
    
    return null;
}

// Get Sorted Wishlist
function getSortedWishlist() {
    let sorted = [...wishlist];
    
    switch (currentSort) {
        case 'newest':
            sorted.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
            break;
        case 'oldest':
            sorted.sort((a, b) => new Date(a.addedAt) - new Date(b.addedAt));
            break;
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sorted.sort((a, b) => a.name.localeCompare(b.name, 'tr'));
            break;
    }
    
    return sorted;
}

// Handle Search
function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    const items = document.querySelectorAll('.wishlist-item');
    
    items.forEach(item => {
        const title = item.querySelector('.item-title').textContent.toLowerCase();
        if (title.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
    updateVisibleCount();
}

// Handle Sort
function handleSort(e) {
    currentSort = e.target.value;
    renderWishlist();
}

// Update View
function updateView() {
    const wishlistGrid = document.getElementById('wishlistGrid');
    const items = document.querySelectorAll('.wishlist-item');
    
    if (currentView === 'list') {
        wishlistGrid.classList.add('list-view');
        items.forEach(item => item.classList.add('list-view'));
    } else {
        wishlistGrid.classList.remove('list-view');
        items.forEach(item => item.classList.remove('list-view'));
    }
}

// Update Wishlist Count
function updateWishlistCount() {
    document.getElementById('wishlistCount').textContent = `${wishlist.length} ürün`;
}

// Update Visible Count
function updateVisibleCount() {
    const visibleItems = document.querySelectorAll('.wishlist-item[style*="block"], .wishlist-item:not([style*="none"])');
    document.getElementById('wishlistCount').textContent = `${visibleItems.length} ürün`;
}

// Add to Wishlist (called from main page)
function addToWishlist(productId) {
    if (!currentUser) {
        showNotification('Favorilere eklemek için giriş yapmalısınız', 'error');
        setTimeout(() => {
            window.location.href = 'auth.html';
        }, 2000);
        return;
    }
    
    // Get product from main products array (assuming it's available)
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Check if already in wishlist
    if (wishlist.find(item => item.id === productId)) {
        showNotification('Bu ürün zaten favorilerinizde', 'info');
        return;
    }
    
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
    saveWishlist();
    
    showNotification('Ürün favorilere eklendi!', 'success');
}

// Remove from Wishlist
function removeFromWishlist(productId) {
    if (confirm('Bu ürünü favorilerden kaldırmak istediğinizden emin misiniz?')) {
        wishlist = wishlist.filter(item => item.id !== productId);
        saveWishlist();
        renderWishlist();
        updateWishlistCount();
        showNotification('Ürün favorilerden kaldırıldı', 'info');
    }
}

// Clear All Wishlist
function clearAllWishlist() {
    if (wishlist.length === 0) {
        showNotification('Favori listeniz zaten boş', 'info');
        return;
    }
    
    if (confirm('Tüm favorileri temizlemek istediğinizden emin misiniz? Bu işlem geri alınamaz.')) {
        wishlist = [];
        saveWishlist();
        renderWishlist();
        updateWishlistCount();
        showNotification('Tüm favoriler temizlendi', 'info');
    }
}

// Add to Cart from Wishlist
function addToCartFromWishlist(productId) {
    const product = wishlist.find(item => item.id === productId);
    if (!product || !product.inStock) return;
    
    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart UI if function exists
    if (typeof updateCartUI === 'function') {
        updateCartUI();
    }
    
    showNotification('Ürün sepete eklendi!', 'success');
}

// Share Product
function shareProduct(productId) {
    const product = wishlist.find(item => item.id === productId);
    if (!product) return;
    
    document.getElementById('shareModal').classList.add('active');
    
    // Setup share buttons
    setupShareButtons(product);
}

// Setup Share Buttons
function setupShareButtons(product) {
    const shareButtons = document.querySelectorAll('.share-btn');
    const productUrl = `${window.location.origin}/index.html?product=${product.id}`;
    const shareText = `${product.name} - ${product.price.toLocaleString('tr-TR')} ₺`;
    
    shareButtons.forEach(btn => {
        btn.onclick = null; // Clear previous handlers
        
        if (btn.classList.contains('whatsapp')) {
            btn.onclick = () => {
                window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + productUrl)}`);
                closeShareModal();
            };
        } else if (btn.classList.contains('facebook')) {
            btn.onclick = () => {
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`);
                closeShareModal();
            };
        } else if (btn.classList.contains('twitter')) {
            btn.onclick = () => {
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(productUrl)}`);
                closeShareModal();
            };
        } else if (btn.classList.contains('copy')) {
            btn.onclick = () => {
                navigator.clipboard.writeText(productUrl).then(() => {
                    showNotification('Link kopyalandı!', 'success');
                    closeShareModal();
                });
            };
        }
    });
}

// Close Share Modal
function closeShareModal() {
    document.getElementById('shareModal').classList.remove('active');
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

// Load Recommendations
function loadRecommendations() {
    // Simulate recommendations based on wishlist
    if (wishlist.length === 0) {
        document.getElementById('recommendations').style.display = 'none';
        return;
    }
    
    // Get categories from wishlist
    const categories = [...new Set(wishlist.map(item => item.category))];
    
    // Filter products from main products array (assuming it's available)
    if (typeof products !== 'undefined') {
        const recommendations = products
            .filter(p => categories.includes(p.category) && !wishlist.find(w => w.id === p.id))
            .slice(0, 6);
        
        const recommendationsGrid = document.getElementById('recommendationsGrid');
        recommendationsGrid.innerHTML = recommendations.map(product => createRecommendationItem(product)).join('');
    }
}

// Create Recommendation Item
function createRecommendationItem(product) {
    const stars = Array.from({length: 5}, (_, i) => 
        `<i class="fas fa-star star ${i < Math.floor(product.rating) ? '' : 'empty'}"></i>`
    ).join('');
    
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<div class="product-badge badge-${product.badge.toLowerCase().replace(' ', '')}">${product.badge}</div>` : ''}
                <div class="product-actions">
                    <button class="action-icon" onclick="addToWishlist(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                
                <div class="product-rating">
                    <div class="stars">${stars}</div>
                    <span class="rating-text">(${product.reviews})</span>
                </div>
                
                <div class="product-price">
                    <span class="current-price">${product.price.toLocaleString('tr-TR')} ₺</span>
                    ${product.originalPrice ? `<span class="original-price">${product.originalPrice.toLocaleString('tr-TR')} ₺</span>` : ''}
                </div>
                
                <button class="add-to-cart" onclick="addToCartFromWishlist(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                    <i class="fas fa-shopping-cart"></i>
                    <span>${product.inStock ? 'Sepete Ekle' : 'Stokta Yok'}</span>
                </button>
            </div>
        </div>
    `;
}

// Navigation Functions
function goHome() {
    window.location.href = 'index.html';
}

// Show User Menu
function showUserMenu() {
    // This would show a dropdown menu with user options
    const menu = `
        <div class="user-menu">
            <a href="profile.html">Profilim</a>
            <a href="orders.html">Siparişlerim</a>
            <a href="wishlist.html">Favorilerim</a>
            <a href="#" onclick="logout()">Çıkış Yap</a>
        </div>
    `;
    // Implementation would depend on your UI framework
}

// Logout
function logout() {
    if (confirm('Çıkış yapmak istediğinizden emin misiniz?')) {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('rememberUser');
        showNotification('Başarıyla çıkış yaptınız', 'info');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }
}

// Show notification
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
        max-width: 300px;
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
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const activeModals = document.querySelectorAll('.modal-overlay.active');
        activeModals.forEach(modal => {
            modal.classList.remove('active');
        });
    }
});
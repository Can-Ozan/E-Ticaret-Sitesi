// Global Variables
let currentProduct = null;
let reviews = [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let currentSort = 'newest';
let currentFilter = 'all';
let currentRating = 0;
let featureRatings = {};
let reviewImages = [];
let currentImageIndex = 0;

// Sample reviews data
const sampleReviews = [
    {
        id: 1,
        userId: 'user_1',
        userName: 'Ahmet Yılmaz',
        userAvatar: 'AY',
        verified: true,
        rating: 5,
        title: 'Mükemmel ses kalitesi!',
        text: 'Bu kulaklığı 3 aydır kullanıyorum ve gerçekten çok memnunum. Ses kalitesi harika, bass\'ı çok güzel. Uzun süre kullanımda rahatsızlık vermiyor. Kesinlikle tavsiye ederim.',
        date: '2024-01-15',
        helpful: 24,
        notHelpful: 2,
        features: {
            sound: 5,
            battery: 4,
            comfort: 5
        },
        recommend: true,
        images: []
    },
    {
        id: 2,
        userId: 'user_2',
        userName: 'Zeynep Kaya',
        userAvatar: 'ZK',
        verified: true,
        rating: 4,
        title: 'Güzel ürün ama pil ömrü kısa',
        text: 'Genel olarak memnunum. Ses kalitesi gerçekten iyi, tasarım da hoş. Ancak pil ömrü reklamda söylenenden daha kısa. Yaklaşık 20 saat kullanabiliyorum.',
        date: '2024-01-10',
        helpful: 18,
        notHelpful: 1,
        features: {
            sound: 4,
            battery: 3,
            comfort: 4
        },
        recommend: true,
        images: []
    },
    {
        id: 3,
        userId: 'user_3',
        userName: 'Mehmet Demir',
        userAvatar: 'MD',
        verified: false,
        rating: 5,
        title: 'Fiyat performans açısından harika',
        text: 'Bu fiyata bu kalite gerçekten süper. Özellikle müzik dinlerken bass performansı çok iyi. Gürültü engelleme özelliği de işe yarıyor.',
        date: '2024-01-08',
        helpful: 15,
        notHelpful: 0,
        features: {
            sound: 5,
            battery: 4,
            comfort: 4
        },
        recommend: true,
        images: []
    },
    {
        id: 4,
        userId: 'user_4',
        userName: 'Ayşe Özkan',
        userAvatar: 'AÖ',
        verified: true,
        rating: 3,
        title: 'Ortalama bir ürün',
        text: 'Beklentilerimi tam olarak karşılamadı. Ses kalitesi fena değil ama çok da etkileyici değil. Konfor açısından uzun süre kullanımda biraz rahatsız ediyor.',
        date: '2024-01-05',
        helpful: 8,
        notHelpful: 5,
        features: {
            sound: 3,
            battery: 4,
            comfort: 2
        },
        recommend: false,
        images: []
    },
    {
        id: 5,
        userId: 'user_5',
        userName: 'Can Arslan',
        userAvatar: 'CA',
        verified: true,
        rating: 5,
        title: 'Gaming için mükemmel!',
        text: 'Oyun oynarken ses kalitesi harika. Düşman seslerini net duyabiliyorum. Mikrofon kalitesi de çok iyi, arkadaşlarım sesimi net duyuyor.',
        date: '2024-01-03',
        helpful: 22,
        notHelpful: 1,
        features: {
            sound: 5,
            battery: 5,
            comfort: 5
        },
        recommend: true,
        images: []
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProduct();
    loadReviews();
    setupEventListeners();
    checkAuthStatus();
});

// Load Product
function loadProduct() {
    // Get product ID from URL or use default
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product') || 1;
    
    // Get product from main products array (assuming it's available)
    if (typeof products !== 'undefined') {
        currentProduct = products.find(p => p.id == productId) || products[0];
    } else {
        // Fallback product data
        currentProduct = {
            id: 1,
            name: 'Premium Kablosuz Kulaklık',
            price: 899,
            originalPrice: 1299,
            image: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800',
            rating: 4.8,
            reviews: 342
        };
    }
    
    renderProductHeader();
}

// Render Product Header
function renderProductHeader() {
    const productHeader = document.getElementById('productHeader');
    
    productHeader.innerHTML = `
        <img src="${currentProduct.image}" alt="${currentProduct.name}" class="product-image">
        <div class="product-info">
            <h1>${currentProduct.name}</h1>
            <div class="price">
                ${currentProduct.price.toLocaleString('tr-TR')} ₺
                ${currentProduct.originalPrice ? `<span style="text-decoration: line-through; color: #6b7280; margin-left: 0.5rem;">${currentProduct.originalPrice.toLocaleString('tr-TR')} ₺</span>` : ''}
            </div>
            <div class="rating">
                <div class="stars">
                    ${Array.from({length: 5}, (_, i) => 
                        `<i class="fas fa-star ${i < Math.floor(currentProduct.rating) ? '' : 'empty'}"></i>`
                    ).join('')}
                </div>
                <span>${currentProduct.rating} (${currentProduct.reviews} değerlendirme)</span>
            </div>
        </div>
    `;
}

// Load Reviews
function loadReviews() {
    // Load reviews from localStorage or use sample data
    const savedReviews = JSON.parse(localStorage.getItem(`reviews_${currentProduct.id}`) || '[]');
    reviews = savedReviews.length > 0 ? savedReviews : sampleReviews;
    
    renderReviews();
    updateReviewsStats();
}

// Setup Event Listeners
function setupEventListeners() {
    // Sort functionality
    document.getElementById('reviewSort').addEventListener('change', handleSort);
    
    // Filter functionality
    document.querySelectorAll('.star-filter').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.star-filter').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.stars;
            renderReviews();
        });
    });
    
    // Rating input
    setupRatingInput();
    
    // Feature ratings
    setupFeatureRatings();
    
    // Character count
    document.getElementById('reviewText').addEventListener('input', updateCharCount);
    
    // Form submission
    document.getElementById('reviewForm').addEventListener('submit', handleReviewSubmission);
    
    // Load more
    document.getElementById('loadMoreBtn').addEventListener('click', loadMoreReviews);
}

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

// Setup Rating Input
function setupRatingInput() {
    const ratingStars = document.querySelectorAll('#ratingInput .star');
    const ratingText = document.getElementById('ratingText');
    
    const ratingTexts = {
        1: 'Çok Kötü',
        2: 'Kötü',
        3: 'Orta',
        4: 'İyi',
        5: 'Mükemmel'
    };
    
    ratingStars.forEach(star => {
        star.addEventListener('mouseover', function() {
            const rating = parseInt(this.dataset.rating);
            updateStarDisplay(ratingStars, rating);
            ratingText.textContent = ratingTexts[rating];
        });
        
        star.addEventListener('click', function() {
            currentRating = parseInt(this.dataset.rating);
            updateStarDisplay(ratingStars, currentRating);
            ratingText.textContent = ratingTexts[currentRating];
        });
    });
    
    document.getElementById('ratingInput').addEventListener('mouseleave', function() {
        updateStarDisplay(ratingStars, currentRating);
        ratingText.textContent = currentRating > 0 ? ratingTexts[currentRating] : 'Puan verin';
    });
}

// Setup Feature Ratings
function setupFeatureRatings() {
    document.querySelectorAll('.feature-stars').forEach(container => {
        const feature = container.dataset.feature;
        const stars = container.querySelectorAll('.star');
        
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = parseInt(this.dataset.rating);
                featureRatings[feature] = rating;
                updateStarDisplay(stars, rating);
            });
        });
    });
}

// Update Star Display
function updateStarDisplay(stars, rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Handle Sort
function handleSort(e) {
    currentSort = e.target.value;
    renderReviews();
}

// Render Reviews
function renderReviews() {
    const reviewsList = document.getElementById('reviewsList');
    const filteredReviews = getFilteredReviews();
    const sortedReviews = getSortedReviews(filteredReviews);
    
    reviewsList.innerHTML = sortedReviews.map(review => createReviewItem(review)).join('');
    
    // Setup helpful buttons
    setupHelpfulButtons();
}

// Get Filtered Reviews
function getFilteredReviews() {
    if (currentFilter === 'all') {
        return reviews;
    }
    
    return reviews.filter(review => review.rating === parseInt(currentFilter));
}

// Get Sorted Reviews
function getSortedReviews(reviewsToSort) {
    const sorted = [...reviewsToSort];
    
    switch (currentSort) {
        case 'newest':
            sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'oldest':
            sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'highest':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'lowest':
            sorted.sort((a, b) => a.rating - b.rating);
            break;
        case 'helpful':
            sorted.sort((a, b) => b.helpful - a.helpful);
            break;
    }
    
    return sorted;
}

// Create Review Item
function createReviewItem(review) {
    const reviewDate = new Date(review.date).toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const stars = Array.from({length: 5}, (_, i) => 
        `<i class="fas fa-star ${i < review.rating ? '' : 'empty'}"></i>`
    ).join('');
    
    const featureScores = review.features ? Object.entries(review.features).map(([feature, score]) => {
        const featureNames = {
            sound: 'Ses Kalitesi',
            battery: 'Pil Ömrü',
            comfort: 'Konfor'
        };
        
        const featureStars = Array.from({length: 5}, (_, i) => 
            `<i class="fas fa-star ${i < score ? '' : 'empty'}"></i>`
        ).join('');
        
        return `
            <div class="feature-score">
                <span>${featureNames[feature]}:</span>
                <div class="stars">${featureStars}</div>
            </div>
        `;
    }).join('') : '';
    
    return `
        <div class="review-item" data-id="${review.id}">
            <div class="review-header">
                <div class="reviewer-info">
                    <div class="reviewer-avatar">${review.userAvatar}</div>
                    <div class="reviewer-details">
                        <h4>${review.userName}</h4>
                        ${review.verified ? '<div class="verified"><i class="fas fa-check-circle"></i> Doğrulanmış Alıcı</div>' : ''}
                    </div>
                </div>
                <div class="review-meta">
                    <div>${reviewDate}</div>
                </div>
            </div>
            
            <div class="review-rating">
                <div class="stars">${stars}</div>
            </div>
            
            <div class="review-title">${review.title}</div>
            <div class="review-text">${review.text}</div>
            
            ${review.images && review.images.length > 0 ? `
                <div class="review-images">
                    ${review.images.map((img, index) => `
                        <img src="${img}" alt="Review image" class="review-image" onclick="openImageModal(${review.id}, ${index})">
                    `).join('')}
                </div>
            ` : ''}
            
            ${featureScores ? `<div class="review-features">${featureScores}</div>` : ''}
            
            ${review.recommend ? `
                <div class="review-recommendation">
                    <i class="fas fa-thumbs-up"></i>
                    Bu ürünü tavsiye ediyor
                </div>
            ` : ''}
            
            <div class="review-actions">
                <div class="helpful-actions">
                    <button class="helpful-btn" data-type="helpful" data-review="${review.id}">
                        <i class="fas fa-thumbs-up"></i>
                        Faydalı (${review.helpful})
                    </button>
                    <button class="helpful-btn" data-type="not-helpful" data-review="${review.id}">
                        <i class="fas fa-thumbs-down"></i>
                        Faydalı Değil (${review.notHelpful})
                    </button>
                </div>
                <button class="report-btn" onclick="reportReview(${review.id})">
                    <i class="fas fa-flag"></i>
                    Şikayet Et
                </button>
            </div>
        </div>
    `;
}

// Setup Helpful Buttons
function setupHelpfulButtons() {
    document.querySelectorAll('.helpful-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const reviewId = parseInt(this.dataset.review);
            const type = this.dataset.type;
            
            if (this.classList.contains('active')) {
                return; // Already voted
            }
            
            // Find review and update count
            const review = reviews.find(r => r.id === reviewId);
            if (review) {
                if (type === 'helpful') {
                    review.helpful++;
                } else {
                    review.notHelpful++;
                }
                
                // Mark as voted
                this.classList.add('active');
                
                // Update display
                this.innerHTML = `
                    <i class="fas fa-thumbs-${type === 'helpful' ? 'up' : 'down'}"></i>
                    ${type === 'helpful' ? 'Faydalı' : 'Faydalı Değil'} (${type === 'helpful' ? review.helpful : review.notHelpful})
                `;
                
                // Save to localStorage
                saveReviews();
                
                showNotification('Oyunuz kaydedildi', 'success');
            }
        });
    });
}

// Update Reviews Stats
function updateReviewsStats() {
    const totalReviews = reviews.length;
    const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;
    
    document.getElementById('overallRating').textContent = averageRating.toFixed(1);
    document.getElementById('ratingCount').textContent = `${totalReviews} değerlendirme`;
    
    // Update stars
    const overallStars = document.getElementById('overallStars');
    overallStars.innerHTML = Array.from({length: 5}, (_, i) => 
        `<i class="fas fa-star ${i < Math.floor(averageRating) ? '' : 'empty'}"></i>`
    ).join('');
    
    // Update rating breakdown
    for (let i = 1; i <= 5; i++) {
        const count = reviews.filter(r => r.rating === i).length;
        const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
        
        const ratingBar = document.querySelector(`[data-stars="${i}"]`);
        if (ratingBar) {
            ratingBar.querySelector('.bar-fill').style.width = `${percentage}%`;
            ratingBar.querySelector('.bar-count').textContent = count;
        }
    }
}

// Update Character Count
function updateCharCount() {
    const text = document.getElementById('reviewText').value;
    const charCount = document.getElementById('charCount');
    charCount.textContent = text.length;
    
    if (text.length > 500) {
        charCount.style.color = '#ef4444';
    } else {
        charCount.style.color = '#6b7280';
    }
}

// Open Write Review Modal
function openWriteReviewModal() {
    if (!currentUser) {
        showNotification('Yorum yazmak için giriş yapmalısınız', 'error');
        setTimeout(() => {
            window.location.href = 'auth.html';
        }, 2000);
        return;
    }
    
    document.getElementById('writeReviewModal').classList.add('active');
}

// Close Write Review Modal
function closeWriteReviewModal() {
    document.getElementById('writeReviewModal').classList.remove('active');
    resetReviewForm();
}

// Reset Review Form
function resetReviewForm() {
    document.getElementById('reviewForm').reset();
    currentRating = 0;
    featureRatings = {};
    
    // Reset star displays
    document.querySelectorAll('.rating-input .star, .feature-stars .star').forEach(star => {
        star.classList.remove('active');
    });
    
    document.getElementById('ratingText').textContent = 'Puan verin';
    document.getElementById('charCount').textContent = '0';
}

// Handle Review Submission
function handleReviewSubmission(e) {
    e.preventDefault();
    
    if (currentRating === 0) {
        showNotification('Lütfen bir puan verin', 'error');
        return;
    }
    
    const formData = new FormData(e.target);
    const newReview = {
        id: Date.now(),
        userId: currentUser.id,
        userName: `${currentUser.firstName} ${currentUser.lastName}`,
        userAvatar: `${currentUser.firstName[0]}${currentUser.lastName[0]}`,
        verified: true,
        rating: currentRating,
        title: formData.get('title'),
        text: formData.get('text'),
        date: new Date().toISOString().split('T')[0],
        helpful: 0,
        notHelpful: 0,
        features: featureRatings,
        recommend: document.getElementById('recommendProduct').checked,
        images: []
    };
    
    reviews.unshift(newReview);
    saveReviews();
    renderReviews();
    updateReviewsStats();
    closeWriteReviewModal();
    
    showNotification('Yorumunuz başarıyla gönderildi!', 'success');
}

// Save Reviews
function saveReviews() {
    localStorage.setItem(`reviews_${currentProduct.id}`, JSON.stringify(reviews));
}

// Load More Reviews
function loadMoreReviews() {
    // Simulate loading more reviews
    showNotification('Tüm yorumlar yüklendi', 'info');
    document.getElementById('loadMoreBtn').style.display = 'none';
}

// Report Review
function reportReview(reviewId) {
    if (confirm('Bu yorumu şikayet etmek istediğinizden emin misiniz?')) {
        showNotification('Şikayetiniz alındı, inceleme yapılacak', 'info');
    }
}

// Open Image Modal
function openImageModal(reviewId, imageIndex) {
    const review = reviews.find(r => r.id === reviewId);
    if (!review || !review.images || review.images.length === 0) return;
    
    reviewImages = review.images;
    currentImageIndex = imageIndex;
    
    document.getElementById('modalImage').src = reviewImages[currentImageIndex];
    document.getElementById('imageModal').classList.add('active');
}

// Close Image Modal
function closeImageModal() {
    document.getElementById('imageModal').classList.remove('active');
}

// Previous Image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + reviewImages.length) % reviewImages.length;
    document.getElementById('modalImage').src = reviewImages[currentImageIndex];
}

// Next Image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % reviewImages.length;
    document.getElementById('modalImage').src = reviewImages[currentImageIndex];
}

// Navigation Functions
function goHome() {
    window.location.href = 'index.html';
}

// Show User Menu
function showUserMenu() {
    // Implementation would depend on your UI framework
    console.log('Show user menu');
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
    
    if (document.getElementById('imageModal').classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    }
});
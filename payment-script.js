// Global Variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentPaymentMethod = 'card';
let currentDeliveryOption = 'standard';
let orderNumber = generateOrderNumber();

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupEventListeners();
    loadOrderSummary();
    updateOrderNumber();
    updateDeliveryInfo();
});

// Initialize page
function initializePage() {
    // Check if cart is empty
    if (cart.length === 0) {
        showNotification('Sepetiniz boş! Ana sayfaya yönlendiriliyorsunuz.', 'error');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
        return;
    }
    
    // Set default payment method
    selectPaymentMethod('card');
}

// Setup event listeners
function setupEventListeners() {
    // Payment method selection
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', function() {
            const methodType = this.dataset.method;
            selectPaymentMethod(methodType);
        });
    });
    
    // Form validation
    setupFormValidation();
    
    // Card number formatting
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', formatCardNumber);
    }
    
    // Expiry date formatting
    const expiryInput = document.getElementById('expiryDate');
    if (expiryInput) {
        expiryInput.addEventListener('input', formatExpiryDate);
    }
    
    // CVV validation
    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '').substring(0, 3);
        });
    }
    
    // Phone formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', formatPhone);
    }
    
    // Cash payment service fee
    document.querySelectorAll('input[name="cashMethod"]').forEach(radio => {
        radio.addEventListener('change', updateServiceFee);
    });
    
    // Delivery option change
    document.querySelectorAll('input[name="deliveryOption"]').forEach(radio => {
        radio.addEventListener('change', function() {
            currentDeliveryOption = this.value;
            updateDeliveryInfo();
            updateTotal();
        });
    });
}

// Select payment method
function selectPaymentMethod(method) {
    currentPaymentMethod = method;
    
    // Update active payment method
    document.querySelectorAll('.payment-method').forEach(pm => {
        pm.classList.remove('active');
    });
    document.querySelector(`[data-method="${method}"]`).classList.add('active');
    
    // Show/hide payment forms
    document.querySelectorAll('.payment-form').forEach(form => {
        form.classList.remove('active');
    });
    document.getElementById(`${method}Form`).classList.add('active');
    
    // Update service fee for cash payment
    updateServiceFee();
}

// Update service fee
function updateServiceFee() {
    const serviceFeeRow = document.getElementById('serviceFeeRow');
    const serviceFeeAmount = document.getElementById('serviceFee');
    
    if (currentPaymentMethod === 'cash') {
        serviceFeeRow.style.display = 'flex';
        serviceFeeAmount.textContent = '15 ₺';
    } else {
        serviceFeeRow.style.display = 'none';
        serviceFeeAmount.textContent = '0 ₺';
    }
    
    updateTotal();
}

// Update delivery info
function updateDeliveryInfo() {
    const deliveryOptions = {
        'standard': {
            price: 0,
            label: 'Standart Teslimat',
            time: '3-5 iş günü',
            company: 'Aras Kargo'
        },
        'express': {
            price: 19.90,
            label: 'Hızlı Teslimat',
            time: '1-2 iş günü',
            company: 'MNG Kargo'
        },
        'same-day': {
            price: 39.90,
            label: 'Aynı Gün Teslimat',
            time: 'Aynı gün',
            company: 'Getir'
        }
    };
    
    const option = deliveryOptions[currentDeliveryOption];
    const shippingLabel = document.getElementById('shippingLabel');
    const estimatedDelivery = document.getElementById('estimatedDelivery');
    const cargoCompany = document.getElementById('cargoCompany');
    
    if (shippingLabel) shippingLabel.textContent = `${option.label}:`;
    if (estimatedDelivery) estimatedDelivery.textContent = option.time;
    if (cargoCompany) cargoCompany.textContent = option.company;
}

// Load order summary
function loadOrderSummary() {
    const orderItemsContainer = document.getElementById('orderItems');
    
    orderItemsContainer.innerHTML = cart.map(item => `
        <div class="order-item">
            <img src="${item.image}" alt="${item.name}" class="item-image">
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-details">
                    <span>Adet: ${item.quantity}</span>
                    <span class="item-price">${(item.price * item.quantity).toLocaleString('tr-TR')} ₺</span>
                </div>
            </div>
        </div>
    `).join('');
    
    updateTotal();
}

// Update total calculations
function updateTotal() {
    const itemsTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const taxRate = 0.20; // 20% KDV
    const subtotal = itemsTotal / (1 + taxRate); // KDV hariç tutar
    const taxAmount = itemsTotal - subtotal; // KDV tutarı
    
    // Delivery cost calculation
    const deliveryPrices = {
        'standard': subtotal >= 250 ? 0 : 29.90,
        'express': 19.90,
        'same-day': 39.90
    };
    
    const shippingCost = deliveryPrices[currentDeliveryOption] || 0;
    const serviceFee = currentPaymentMethod === 'cash' ? 15 : 0;
    const discount = getDiscountAmount();
    const originalPrice = cart.reduce((sum, item) => sum + ((item.originalPrice || item.price) * item.quantity), 0);
    const totalSavings = (originalPrice - itemsTotal) + discount;
    const total = itemsTotal + shippingCost + serviceFee - discount;
    
    document.getElementById('subtotal').textContent = `${subtotal.toLocaleString('tr-TR')} ₺`;
    document.getElementById('taxAmount').textContent = `${taxAmount.toLocaleString('tr-TR')} ₺`;
    document.getElementById('shippingAmount').textContent = shippingCost === 0 ? 'Ücretsiz' : `${shippingCost.toLocaleString('tr-TR')} ₺`;
    document.getElementById('total').textContent = `${total.toLocaleString('tr-TR')} ₺`;
    
    // Show/hide discount row
    const discountRow = document.getElementById('discountRow');
    if (discount > 0) {
        discountRow.style.display = 'flex';
        document.getElementById('discount').textContent = `-${discount.toLocaleString('tr-TR')} ₺`;
    } else {
        discountRow.style.display = 'none';
    }
    
    // Show/hide savings row
    const savingsRow = document.getElementById('savingsRow');
    if (totalSavings > 0) {
        savingsRow.style.display = 'flex';
        document.getElementById('totalSavings').textContent = `-${totalSavings.toLocaleString('tr-TR')} ₺`;
    } else {
        savingsRow.style.display = 'none';
    }
}

// Generate order number
function generateOrderNumber() {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `ES${timestamp}${random}`;
}

// Update order number in transfer form
function updateOrderNumber() {
    const orderNumberElement = document.getElementById('orderNumber');
    if (orderNumberElement) {
        orderNumberElement.textContent = orderNumber;
    }
}

// Format card number
function formatCardNumber(e) {
    let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
    let formattedValue = value.replace(/(.{4})/g, '$1 ').trim();
    
    if (formattedValue.length > 19) {
        formattedValue = formattedValue.substring(0, 19);
    }
    
    e.target.value = formattedValue;
}

// Format expiry date
function formatExpiryDate(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    
    e.target.value = value;
}

// Format phone number
function formatPhone(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 0) {
        if (value.startsWith('0')) {
            value = value.substring(1);
        }
        
        if (value.length <= 10) {
            value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        }
    }
    
    e.target.value = value;
}

// Setup form validation
function setupFormValidation() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
        });
    });
    
    // Real-time validation
    const inputs = document.querySelectorAll('input[required], select[required], textarea[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

// Validate individual field
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remove existing error
    clearFieldError(e);
    
    if (!value) {
        showFieldError(field, 'Bu alan zorunludur');
        return false;
    }
    
    // Specific validations
    switch (field.type) {
        case 'email':
            if (!isValidEmail(value)) {
                showFieldError(field, 'Geçerli bir e-posta adresi girin');
                return false;
            }
            break;
        case 'tel':
            if (value.length < 10) {
                showFieldError(field, 'Geçerli bir telefon numarası girin');
                return false;
            }
            break;
    }
    
    // Card specific validations
    if (field.id === 'cardNumber' && currentPaymentMethod === 'card') {
        if (value.replace(/\s/g, '').length < 16) {
            showFieldError(field, 'Kart numarası 16 haneli olmalıdır');
            return false;
        }
    }
    
    if (field.id === 'cvv' && currentPaymentMethod === 'card') {
        if (value.length < 3) {
            showFieldError(field, 'CVV 3 haneli olmalıdır');
            return false;
        }
    }
    
    if (field.id === 'expiryDate' && currentPaymentMethod === 'card') {
        if (!isValidExpiryDate(value)) {
            showFieldError(field, 'Geçerli bir son kullanma tarihi girin');
            return false;
        }
    }
    
    return true;
}

// Show field error
function showFieldError(field, message) {
    const formGroup = field.closest('.form-group');
    formGroup.classList.add('error');
    formGroup.classList.remove('success');
    
    // Remove existing error message
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i>${message}`;
    formGroup.appendChild(errorDiv);
}

// Clear field error
function clearFieldError(e) {
    const field = e.target;
    const formGroup = field.closest('.form-group');
    formGroup.classList.remove('error');
    
    const errorMessage = formGroup.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
    
    // Add success state if field has value and is valid
    if (field.value.trim() && validateField(e)) {
        formGroup.classList.add('success');
    } else {
        formGroup.classList.remove('success');
    }
}

// Validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate expiry date
function isValidExpiryDate(date) {
    if (!/^\d{2}\/\d{2}$/.test(date)) return false;
    
    const [month, year] = date.split('/').map(num => parseInt(num));
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    
    if (month < 1 || month > 12) return false;
    if (year < currentYear || (year === currentYear && month < currentMonth)) return false;
    
    return true;
}

// Apply coupon
function applyCoupon() {
    const couponCode = document.getElementById('couponCode').value.trim().toUpperCase();
    const couponInput = document.getElementById('couponCode');
    
    if (!couponCode) {
        showNotification('Lütfen bir indirim kodu girin', 'error');
        return;
    }
    
    // Simulate coupon validation
    const validCoupons = {
        'WELCOME10': { discount: 10, type: 'percentage', description: 'Hoş geldin indirimi' },
        'SAVE50': { discount: 50, type: 'fixed', description: '50₺ indirim' },
        'FREESHIP': { discount: 0, type: 'shipping', description: 'Ücretsiz kargo' }
    };
    
    if (validCoupons[couponCode]) {
        const coupon = validCoupons[couponCode];
        localStorage.setItem('appliedCoupon', JSON.stringify(coupon));
        showNotification(`${coupon.description} uygulandı!`, 'success');
        couponInput.disabled = true;
        updateTotal();
    } else {
        showNotification('Geçersiz indirim kodu', 'error');
    }
}

// Get discount amount
function getDiscountAmount() {
    const appliedCoupon = JSON.parse(localStorage.getItem('appliedCoupon') || 'null');
    if (!appliedCoupon) return 0;
    
    const itemsTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    switch (appliedCoupon.type) {
        case 'percentage':
            return (itemsTotal * appliedCoupon.discount) / 100;
        case 'fixed':
            return Math.min(appliedCoupon.discount, itemsTotal);
        case 'shipping':
            const deliveryPrices = {
                'standard': itemsTotal >= 250 ? 0 : 29.90,
                'express': 19.90,
                'same-day': 39.90
            };
            return deliveryPrices[currentDeliveryOption] || 0;
        default:
            return 0;
    }
}

// Enhanced error handling for payment processing
function simulatePaymentError() {
    const errorTypes = [
        {
            title: 'Yetersiz Bakiye',
            message: 'Kartınızda yeterli bakiye bulunmamaktadır.',
            solutions: [
                'Farklı bir kart deneyin',
                'Banka hesabınıza para yatırın',
                'Havale/EFT ile ödeme yapın',
                'Kapıda ödeme seçeneğini kullanın'
            ]
        },
        {
            title: 'Geçersiz Kart Bilgileri',
            message: 'Girdiğiniz kart bilgileri hatalı veya eksik.',
            solutions: [
                'Kart numarasını kontrol edin',
                'Son kullanma tarihini doğrulayın',
                'CVV kodunu tekrar girin',
                'Kart sahibi adını kontrol edin'
            ]
        },
        {
            title: 'Kart Bloke',
            message: 'Kartınız güvenlik nedeniyle bloke edilmiş.',
            solutions: [
                'Bankanızı arayın (444 xxxx)',
                'İnternet bankacılığından kontrol edin',
                'Farklı bir kart kullanın',
                'Şube ziyareti yapın'
            ]
        },
        {
            title: 'İşlem Limiti Aşıldı',
            message: 'Günlük işlem limitinizi aştınız.',
            solutions: [
                'Yarın tekrar deneyin',
                'Bankanızdan limit artırımı talep edin',
                'Havale/EFT ile ödeme yapın',
                'Farklı bir kart kullanın'
            ]
        }
    ];
    
    return errorTypes[Math.floor(Math.random() * errorTypes.length)];
}

// Show error modal
function showErrorModal(errorData) {
    document.getElementById('errorTitle').textContent = errorData.title;
    document.getElementById('errorMessage').textContent = errorData.message;
    
    const solutionsContainer = document.getElementById('errorSolutions');
    solutionsContainer.innerHTML = `
        <h4>Çözüm Önerileri:</h4>
        <ul>
            ${errorData.solutions.map(solution => `<li>${solution}</li>`).join('')}
        </ul>
    `;
    
    document.getElementById('errorModal').classList.add('active');
}

// Close error modal
function closeErrorModal() {
    document.getElementById('errorModal').classList.remove('active');
}

// Contact support
function contactSupport() {
    const phone = '+90 212 123 45 67';
    const email = 'destek@eliteshop.com';
    
    if (confirm(`Destek ekibimizle iletişime geçmek ister misiniz?\n\nTelefon: ${phone}\nE-posta: ${email}`)) {
        window.open(`tel:${phone}`);
    }
}

// Toggle order details
function toggleOrderDetails() {
    const details = document.getElementById('orderDetails');
    const button = document.querySelector('.order-details-toggle button');
    
    if (details.style.display === 'none') {
        details.style.display = 'block';
        button.classList.add('active');
        button.querySelector('span').textContent = 'Sipariş Detaylarını Gizle';
    } else {
        details.style.display = 'none';
        button.classList.remove('active');
        button.querySelector('span').textContent = 'Sipariş Detaylarını Göster';
    }
}

// Complete order
function completeOrder() {
    if (!validateAllFields()) {
        showNotification('Lütfen tüm zorunlu alanları doldurun', 'error');
        return;
    }
    
    if (!document.getElementById('termsAgreement').checked) {
        showNotification('Kullanım koşullarını kabul etmelisiniz', 'error');
        return;
    }
    
    // Simulate payment processing with potential errors
    if (currentPaymentMethod === 'card' && Math.random() < 0.3) { // 30% chance of error for demo
        const errorData = simulatePaymentError();
        showErrorModal(errorData);
        return;
    }
    
    // Show loading state
    const completeBtn = document.querySelector('.complete-order-btn');
    const originalText = completeBtn.innerHTML;
    completeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> İşleniyor...';
    completeBtn.disabled = true;
    
    // Simulate order processing
    setTimeout(() => {
        // Save order data
        const orderData = {
            orderNumber: orderNumber,
            items: cart,
            total: calculateFinalTotal(),
            paymentMethod: currentPaymentMethod,
            deliveryOption: currentDeliveryOption,
            customerInfo: getCustomerInfo(),
            timestamp: new Date().toISOString()
        };
        
        // Save to localStorage (in real app, send to server)
        let orders = JSON.parse(localStorage.getItem('orders') || '[]');
        orders.push(orderData);
        localStorage.setItem('orders', JSON.stringify(orders));
        
        // Clear cart and coupon
        localStorage.removeItem('cart');
        localStorage.removeItem('appliedCoupon');
        
        // Show success modal
        showSuccessModal();
        
        // Reset button
        completeBtn.innerHTML = originalText;
        completeBtn.disabled = false;
        
    }, 2000);
}

// Validate all fields
function validateAllFields() {
    let isValid = true;
    
    // Validate delivery form
    const deliveryInputs = document.querySelectorAll('#deliveryForm input[required], #deliveryForm select[required], #deliveryForm textarea[required]');
    deliveryInputs.forEach(input => {
        if (!validateField({ target: input })) {
            isValid = false;
        }
    });
    
    // Validate payment form based on selected method
    if (currentPaymentMethod === 'card') {
        const cardInputs = document.querySelectorAll('#cardForm input[required]');
        cardInputs.forEach(input => {
            if (!validateField({ target: input })) {
                isValid = false;
            }
        });
    }
    
    return isValid;
}

// Get customer info
function getCustomerInfo() {
    return {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value,
        district: document.getElementById('district').value,
        postalCode: document.getElementById('postalCode').value,
        address: document.getElementById('address').value
    };
}

// Calculate final total
function calculateFinalTotal() {
    const itemsTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryPrices = {
        'standard': itemsTotal >= 250 ? 0 : 29.90,
        'express': 19.90,
        'same-day': 39.90
    };
    const shipping = deliveryPrices[currentDeliveryOption] || 0;
    const serviceFee = currentPaymentMethod === 'cash' ? 15 : 0;
    const discount = getDiscountAmount();
    return itemsTotal + shipping + serviceFee - discount;
}

// Show success modal
function showSuccessModal() {
    const deliveryTimes = {
        'standard': '3-5 iş günü',
        'express': '1-2 iş günü',
        'same-day': 'Aynı gün'
    };
    
    document.getElementById('finalOrderNumber').textContent = orderNumber;
    document.getElementById('successDeliveryTime').textContent = deliveryTimes[currentDeliveryOption];
    document.getElementById('successTotal').textContent = `${calculateFinalTotal().toLocaleString('tr-TR')} ₺`;
    document.getElementById('successModal').classList.add('active');
}

// Go back to previous page
function goBack() {
    // Go back to main page
    window.location.href = 'index.html';
}

// Go to home page
function goToHome() {
    window.location.href = 'index.html';
}

// Track order
function trackOrder() {
    alert(`Sipariş takip özelliği yakında aktif olacak.\nSipariş No: ${orderNumber}`);
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
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay') && !e.target.closest('.modal-content')) {
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

// Enhanced form validation with real-time feedback
document.addEventListener('input', function(e) {
    const field = e.target;
    
    // Real-time validation for specific fields
    if (field.id === 'cardNumber') {
        const value = field.value.replace(/\s/g, '');
        if (value.length >= 16) {
            if (isValidCardNumber(value)) {
                showFieldSuccess(field, 'Geçerli kart numarası');
            } else {
                showFieldError(field, 'Geçersiz kart numarası');
            }
        }
    }
    
    if (field.id === 'email') {
        if (field.value && isValidEmail(field.value)) {
            showFieldSuccess(field, 'Geçerli e-posta adresi');
        }
    }
    
    if (field.id === 'phone') {
        const value = field.value.replace(/\D/g, '');
        if (value.length >= 10) {
            showFieldSuccess(field, 'Geçerli telefon numarası');
        }
    }
});

// Show field success
function showFieldSuccess(field, message) {
    const formGroup = field.closest('.form-group');
    formGroup.classList.add('success');
    formGroup.classList.remove('error');
    
    // Remove existing messages
    const existingMessage = formGroup.querySelector('.error-message, .success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Add success message
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `<i class="fas fa-check-circle"></i>${message}`;
    formGroup.appendChild(successDiv);
}

// Validate card number using Luhn algorithm
function isValidCardNumber(cardNumber) {
    const digits = cardNumber.replace(/\D/g, '').split('').map(Number);
    let sum = 0;
    let isEven = false;
    
    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i];
        
        if (isEven) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        
        sum += digit;
        isEven = !isEven;
    }
    
    return sum % 10 === 0;
}
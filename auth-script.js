// Global Variables
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let users = JSON.parse(localStorage.getItem('users')) || [];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    checkAuthStatus();
});

// Setup Event Listeners
function setupEventListeners() {
    // Form submissions
    document.getElementById('loginFormElement').addEventListener('submit', handleLogin);
    document.getElementById('registerFormElement').addEventListener('submit', handleRegister);
    
    // Password strength checker
    document.getElementById('registerPassword').addEventListener('input', checkPasswordStrength);
    
    // Confirm password validation
    document.getElementById('confirmPassword').addEventListener('input', validatePasswordMatch);
    
    // Real-time validation
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

// Switch between login and register forms
function switchToRegister() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
}

function switchToLogin() {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
}

// Toggle password visibility
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    const icon = button.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Handle Login
function handleLogin(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Find user
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Login successful
        currentUser = user;
        currentUser.lastLogin = new Date().toISOString();
        
        // Save to localStorage
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        if (rememberMe) {
            localStorage.setItem('rememberUser', JSON.stringify({email, password}));
        }
        
        showNotification('Giriş başarılı! Ana sayfaya yönlendiriliyorsunuz...', 'success');
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
        
    } else {
        showFieldError(document.getElementById('loginEmail'), 'E-posta veya şifre hatalı');
        showFieldError(document.getElementById('loginPassword'), 'E-posta veya şifre hatalı');
    }
}

// Handle Register
function handleRegister(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const userData = {
        id: generateUserId(),
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        password: formData.get('password'),
        birthDate: formData.get('birthDate'),
        gender: formData.get('gender'),
        marketingAgreement: document.getElementById('marketingAgreement').checked,
        createdAt: new Date().toISOString(),
        lastLogin: null,
        orders: [],
        wishlist: [],
        addresses: [],
        preferences: {
            language: 'tr',
            currency: 'TRY',
            notifications: true
        }
    };
    
    // Check if user already exists
    if (users.find(u => u.email === userData.email)) {
        showFieldError(document.getElementById('registerEmail'), 'Bu e-posta adresi zaten kayıtlı');
        return;
    }
    
    // Validate form
    if (!validateRegisterForm()) {
        return;
    }
    
    // Add user
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto login
    currentUser = userData;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    showNotification('Kayıt başarılı! Ana sayfaya yönlendiriliyorsunuz...', 'success');
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

// Validate Register Form
function validateRegisterForm() {
    let isValid = true;
    
    // Password match validation
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        showFieldError(document.getElementById('confirmPassword'), 'Şifreler eşleşmiyor');
        isValid = false;
    }
    
    // Terms agreement
    if (!document.getElementById('termsAgreement').checked) {
        showNotification('Kullanım koşullarını kabul etmelisiniz', 'error');
        isValid = false;
    }
    
    if (!document.getElementById('privacyAgreement').checked) {
        showNotification('Gizlilik politikasını kabul etmelisiniz', 'error');
        isValid = false;
    }
    
    return isValid;
}

// Check Password Strength
function checkPasswordStrength(e) {
    const password = e.target.value;
    const strengthIndicator = document.getElementById('passwordStrength');
    
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength++;
    
    // Uppercase check
    if (/[A-Z]/.test(password)) strength++;
    
    // Lowercase check
    if (/[a-z]/.test(password)) strength++;
    
    // Number check
    if (/\d/.test(password)) strength++;
    
    // Special character check
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
    
    // Update strength indicator
    strengthIndicator.className = 'password-strength';
    
    if (strength <= 2) {
        strengthIndicator.classList.add('weak');
    } else if (strength <= 4) {
        strengthIndicator.classList.add('medium');
    } else {
        strengthIndicator.classList.add('strong');
    }
}

// Validate Password Match
function validatePasswordMatch(e) {
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = e.target.value;
    
    if (confirmPassword && password !== confirmPassword) {
        showFieldError(e.target, 'Şifreler eşleşmiyor');
    } else if (confirmPassword && password === confirmPassword) {
        showFieldSuccess(e.target, 'Şifreler eşleşiyor');
    }
}

// Field Validation
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    clearFieldError(e);
    
    if (field.required && !value) {
        showFieldError(field, 'Bu alan zorunludur');
        return false;
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        if (!isValidEmail(value)) {
            showFieldError(field, 'Geçerli bir e-posta adresi girin');
            return false;
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
        if (value.length < 10) {
            showFieldError(field, 'Geçerli bir telefon numarası girin');
            return false;
        }
    }
    
    // Password validation
    if (field.type === 'password' && field.id === 'registerPassword' && value) {
        if (value.length < 6) {
            showFieldError(field, 'Şifre en az 6 karakter olmalıdır');
            return false;
        }
    }
    
    if (value) {
        showFieldSuccess(field, 'Geçerli');
    }
    
    return true;
}

// Show field error
function showFieldError(field, message) {
    const formGroup = field.closest('.form-group');
    formGroup.classList.add('error');
    formGroup.classList.remove('success');
    
    // Remove existing messages
    const existingMessage = formGroup.querySelector('.error-message, .success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i>${message}`;
    formGroup.appendChild(errorDiv);
}

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

// Clear field error
function clearFieldError(e) {
    const field = e.target;
    const formGroup = field.closest('.form-group');
    formGroup.classList.remove('error', 'success');
    
    const message = formGroup.querySelector('.error-message, .success-message');
    if (message) {
        message.remove();
    }
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function generateUserId() {
    return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function checkAuthStatus() {
    // Check if user is remembered
    const rememberedUser = JSON.parse(localStorage.getItem('rememberUser') || 'null');
    if (rememberedUser) {
        document.getElementById('loginEmail').value = rememberedUser.email;
        document.getElementById('loginPassword').value = rememberedUser.password;
        document.getElementById('rememberMe').checked = true;
    }
}

// Navigation
function goHome() {
    window.location.href = 'index.html';
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
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
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

// Social Login (Demo)
document.addEventListener('click', function(e) {
    if (e.target.closest('.social-btn')) {
        const provider = e.target.closest('.social-btn').classList.contains('google') ? 'Google' : 'Facebook';
        showNotification(`${provider} ile giriş özelliği yakında aktif olacak`, 'info');
    }
});
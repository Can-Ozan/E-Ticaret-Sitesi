// Multi-language Support System
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('selectedLanguage') || 'tr';
        this.translations = {};
        this.loadTranslations();
    }

    // Load all translations
    loadTranslations() {
        this.translations = {
            tr: {
                // Header
                'header.search.placeholder': 'Ürün, kategori veya marka ara...',
                'header.account': 'Hesabım',
                'header.favorites': 'Favoriler',
                'header.cart': 'Sepet',
                'header.login': 'Giriş Yap',
                
                // Navigation
                'nav.home': 'Ana Sayfa',
                'nav.categories': 'Kategoriler',
                'nav.deals': 'Fırsatlar',
                'nav.contact': 'İletişim',
                
                // Hero Section
                'hero.title': 'Premium <span class="highlight">Alışveriş</span> Deneyimi',
                'hero.subtitle': 'En kaliteli ürünler, en uygun fiyatlar ve hızlı teslimat ile mükemmel alışveriş deneyimi yaşayın.',
                'hero.cta.shop': 'Alışverişe Başla',
                'hero.cta.categories': 'Kategorileri İncele',
                
                // Features
                'feature.shipping.title': 'Ücretsiz Kargo',
                'feature.shipping.desc': '250₺ üzeri siparişlerde',
                'feature.security.title': 'Güvenli Ödeme',
                'feature.security.desc': '256-bit SSL koruması',
                'feature.quality.title': 'Premium Kalite',
                'feature.quality.desc': 'Seçkin ürün koleksiyonu',
                
                // Categories
                'category.all': 'Tüm Ürünler',
                'category.electronics': 'Elektronik',
                'category.fashion': 'Moda & Giyim',
                'category.home': 'Ev & Yaşam',
                'category.sports': 'Spor & Outdoor',
                'category.books': 'Kitap & Medya',
                'category.beauty': 'Güzellik & Bakım',
                
                // Products
                'product.add.cart': 'Sepete Ekle',
                'product.out.stock': 'Stokta Yok',
                'product.reviews': 'değerlendirme',
                'product.found': 'ürün bulundu',
                'product.no.found': 'Ürün bulunamadı',
                'product.search.again': 'Arama kriterlerinizi değiştirerek tekrar deneyin.',
                
                // Sort Options
                'sort.featured': 'Öne Çıkanlar',
                'sort.price.low': 'Fiyat: Düşükten Yükseğe',
                'sort.price.high': 'Fiyat: Yüksekten Düşüğe',
                'sort.rating': 'En Yüksek Puan',
                'sort.name': 'İsim: A-Z',
                
                // Cart
                'cart.title': 'Sepetim',
                'cart.empty': 'Sepetiniz boş',
                'cart.empty.desc': 'Alışverişe başlamak için ürün ekleyin',
                'cart.total': 'Toplam:',
                'cart.checkout': 'Ödemeye Geç',
                'cart.added': 'Ürün sepete eklendi!',
                
                // Auth
                'auth.login': 'Giriş Yap',
                'auth.register': 'Kayıt Ol',
                'auth.email': 'E-posta',
                'auth.password': 'Şifre',
                'auth.remember': 'Beni hatırla',
                'auth.forgot': 'Şifremi unuttum',
                'auth.firstname': 'Ad',
                'auth.lastname': 'Soyad',
                'auth.phone': 'Telefon',
                'auth.birthdate': 'Doğum Tarihi',
                'auth.gender': 'Cinsiyet',
                'auth.terms': 'Kullanım Koşulları',
                'auth.privacy': 'Gizlilik Politikası',
                'auth.marketing': 'Kampanya ve fırsatlardan haberdar olmak istiyorum',
                
                // Payment
                'payment.title': 'Ödeme',
                'payment.delivery.info': 'Teslimat Bilgileri',
                'payment.payment.info': 'Ödeme Bilgileri',
                'payment.order.summary': 'Sipariş Özeti',
                'payment.complete': 'Siparişi Tamamla',
                'payment.success': 'Siparişiniz Alındı!',
                
                // Wishlist
                'wishlist.title': 'Favorilerim',
                'wishlist.empty': 'Favori listeniz boş',
                'wishlist.added': 'Ürün favorilere eklendi!',
                'wishlist.removed': 'Ürün favorilerden kaldırıldı',
                
                // Reviews
                'reviews.title': 'Ürün Yorumları',
                'reviews.write': 'Yorum Yaz',
                'reviews.helpful': 'Faydalı',
                'reviews.not.helpful': 'Faydalı Değil',
                'reviews.recommend': 'Bu ürünü tavsiye ediyor',
                
                // Footer
                'footer.about': 'Hakkımızda',
                'footer.contact': 'İletişim',
                'footer.shipping': 'Kargo & Teslimat',
                'footer.returns': 'İade & Değişim',
                'footer.privacy': 'Gizlilik Politikası',
                'footer.rights': 'Tüm hakları saklıdır.',
                
                // Notifications
                'notification.login.required': 'Bu işlem için giriş yapmalısınız',
                'notification.login.success': 'Giriş başarılı!',
                'notification.register.success': 'Kayıt başarılı!',
                'notification.logout.success': 'Başarıyla çıkış yaptınız',
                'notification.error': 'Bir hata oluştu',
                'notification.success': 'İşlem başarılı',
                
                // Common
                'common.loading': 'Yükleniyor...',
                'common.save': 'Kaydet',
                'common.cancel': 'İptal',
                'common.delete': 'Sil',
                'common.edit': 'Düzenle',
                'common.close': 'Kapat',
                'common.yes': 'Evet',
                'common.no': 'Hayır',
                'common.search': 'Ara',
                'common.filter': 'Filtrele',
                'common.clear': 'Temizle'
            },
            
            en: {
                // Header
                'header.search.placeholder': 'Search products, categories or brands...',
                'header.account': 'My Account',
                'header.favorites': 'Favorites',
                'header.cart': 'Cart',
                'header.login': 'Login',
                
                // Navigation
                'nav.home': 'Home',
                'nav.categories': 'Categories',
                'nav.deals': 'Deals',
                'nav.contact': 'Contact',
                
                // Hero Section
                'hero.title': 'Premium <span class="highlight">Shopping</span> Experience',
                'hero.subtitle': 'Experience perfect shopping with the highest quality products, best prices and fast delivery.',
                'hero.cta.shop': 'Start Shopping',
                'hero.cta.categories': 'Browse Categories',
                
                // Features
                'feature.shipping.title': 'Free Shipping',
                'feature.shipping.desc': 'On orders over $25',
                'feature.security.title': 'Secure Payment',
                'feature.security.desc': '256-bit SSL protection',
                'feature.quality.title': 'Premium Quality',
                'feature.quality.desc': 'Curated product collection',
                
                // Categories
                'category.all': 'All Products',
                'category.electronics': 'Electronics',
                'category.fashion': 'Fashion & Clothing',
                'category.home': 'Home & Living',
                'category.sports': 'Sports & Outdoor',
                'category.books': 'Books & Media',
                'category.beauty': 'Beauty & Care',
                
                // Products
                'product.add.cart': 'Add to Cart',
                'product.out.stock': 'Out of Stock',
                'product.reviews': 'reviews',
                'product.found': 'products found',
                'product.no.found': 'No products found',
                'product.search.again': 'Try changing your search criteria.',
                
                // Sort Options
                'sort.featured': 'Featured',
                'sort.price.low': 'Price: Low to High',
                'sort.price.high': 'Price: High to Low',
                'sort.rating': 'Highest Rated',
                'sort.name': 'Name: A-Z',
                
                // Cart
                'cart.title': 'My Cart',
                'cart.empty': 'Your cart is empty',
                'cart.empty.desc': 'Add products to start shopping',
                'cart.total': 'Total:',
                'cart.checkout': 'Checkout',
                'cart.added': 'Product added to cart!',
                
                // Auth
                'auth.login': 'Login',
                'auth.register': 'Register',
                'auth.email': 'Email',
                'auth.password': 'Password',
                'auth.remember': 'Remember me',
                'auth.forgot': 'Forgot password',
                'auth.firstname': 'First Name',
                'auth.lastname': 'Last Name',
                'auth.phone': 'Phone',
                'auth.birthdate': 'Birth Date',
                'auth.gender': 'Gender',
                'auth.terms': 'Terms of Service',
                'auth.privacy': 'Privacy Policy',
                'auth.marketing': 'I want to be informed about campaigns and opportunities',
                
                // Payment
                'payment.title': 'Payment',
                'payment.delivery.info': 'Delivery Information',
                'payment.payment.info': 'Payment Information',
                'payment.order.summary': 'Order Summary',
                'payment.complete': 'Complete Order',
                'payment.success': 'Order Received!',
                
                // Wishlist
                'wishlist.title': 'My Favorites',
                'wishlist.empty': 'Your wishlist is empty',
                'wishlist.added': 'Product added to favorites!',
                'wishlist.removed': 'Product removed from favorites',
                
                // Reviews
                'reviews.title': 'Product Reviews',
                'reviews.write': 'Write Review',
                'reviews.helpful': 'Helpful',
                'reviews.not.helpful': 'Not Helpful',
                'reviews.recommend': 'Recommends this product',
                
                // Footer
                'footer.about': 'About Us',
                'footer.contact': 'Contact',
                'footer.shipping': 'Shipping & Delivery',
                'footer.returns': 'Returns & Exchange',
                'footer.privacy': 'Privacy Policy',
                'footer.rights': 'All rights reserved.',
                
                // Notifications
                'notification.login.required': 'You must login for this action',
                'notification.login.success': 'Login successful!',
                'notification.register.success': 'Registration successful!',
                'notification.logout.success': 'Successfully logged out',
                'notification.error': 'An error occurred',
                'notification.success': 'Operation successful',
                
                // Common
                'common.loading': 'Loading...',
                'common.save': 'Save',
                'common.cancel': 'Cancel',
                'common.delete': 'Delete',
                'common.edit': 'Edit',
                'common.close': 'Close',
                'common.yes': 'Yes',
                'common.no': 'No',
                'common.search': 'Search',
                'common.filter': 'Filter',
                'common.clear': 'Clear'
            },
            
            de: {
                // Header
                'header.search.placeholder': 'Produkte, Kategorien oder Marken suchen...',
                'header.account': 'Mein Konto',
                'header.favorites': 'Favoriten',
                'header.cart': 'Warenkorb',
                'header.login': 'Anmelden',
                
                // Navigation
                'nav.home': 'Startseite',
                'nav.categories': 'Kategorien',
                'nav.deals': 'Angebote',
                'nav.contact': 'Kontakt',
                
                // Hero Section
                'hero.title': 'Premium <span class="highlight">Shopping</span> Erlebnis',
                'hero.subtitle': 'Erleben Sie perfektes Einkaufen mit höchster Qualität, besten Preisen und schneller Lieferung.',
                'hero.cta.shop': 'Einkaufen beginnen',
                'hero.cta.categories': 'Kategorien durchsuchen',
                
                // Features
                'feature.shipping.title': 'Kostenloser Versand',
                'feature.shipping.desc': 'Bei Bestellungen über 25€',
                'feature.security.title': 'Sichere Zahlung',
                'feature.security.desc': '256-bit SSL Schutz',
                'feature.quality.title': 'Premium Qualität',
                'feature.quality.desc': 'Kuratierte Produktkollektion',
                
                // Categories
                'category.all': 'Alle Produkte',
                'category.electronics': 'Elektronik',
                'category.fashion': 'Mode & Kleidung',
                'category.home': 'Haus & Wohnen',
                'category.sports': 'Sport & Outdoor',
                'category.books': 'Bücher & Medien',
                'category.beauty': 'Schönheit & Pflege',
                
                // Products
                'product.add.cart': 'In den Warenkorb',
                'product.out.stock': 'Nicht vorrätig',
                'product.reviews': 'Bewertungen',
                'product.found': 'Produkte gefunden',
                'product.no.found': 'Keine Produkte gefunden',
                'product.search.again': 'Versuchen Sie andere Suchkriterien.',
                
                // Sort Options
                'sort.featured': 'Empfohlen',
                'sort.price.low': 'Preis: Niedrig zu Hoch',
                'sort.price.high': 'Preis: Hoch zu Niedrig',
                'sort.rating': 'Bestbewertet',
                'sort.name': 'Name: A-Z',
                
                // Cart
                'cart.title': 'Mein Warenkorb',
                'cart.empty': 'Ihr Warenkorb ist leer',
                'cart.empty.desc': 'Fügen Sie Produkte hinzu, um zu beginnen',
                'cart.total': 'Gesamt:',
                'cart.checkout': 'Zur Kasse',
                'cart.added': 'Produkt zum Warenkorb hinzugefügt!',
                
                // Common
                'common.loading': 'Laden...',
                'common.save': 'Speichern',
                'common.cancel': 'Abbrechen',
                'common.delete': 'Löschen',
                'common.edit': 'Bearbeiten',
                'common.close': 'Schließen',
                'common.yes': 'Ja',
                'common.no': 'Nein',
                'common.search': 'Suchen',
                'common.filter': 'Filtern',
                'common.clear': 'Löschen'
            },
            
            fr: {
                // Header
                'header.search.placeholder': 'Rechercher des produits, catégories ou marques...',
                'header.account': 'Mon Compte',
                'header.favorites': 'Favoris',
                'header.cart': 'Panier',
                'header.login': 'Se connecter',
                
                // Navigation
                'nav.home': 'Accueil',
                'nav.categories': 'Catégories',
                'nav.deals': 'Offres',
                'nav.contact': 'Contact',
                
                // Hero Section
                'hero.title': 'Expérience <span class="highlight">Shopping</span> Premium',
                'hero.subtitle': 'Vivez un shopping parfait avec des produits de qualité supérieure, les meilleurs prix et une livraison rapide.',
                'hero.cta.shop': 'Commencer les achats',
                'hero.cta.categories': 'Parcourir les catégories',
                
                // Features
                'feature.shipping.title': 'Livraison gratuite',
                'feature.shipping.desc': 'Sur les commandes de plus de 25€',
                'feature.security.title': 'Paiement sécurisé',
                'feature.security.desc': 'Protection SSL 256-bit',
                'feature.quality.title': 'Qualité Premium',
                'feature.quality.desc': 'Collection de produits sélectionnés',
                
                // Categories
                'category.all': 'Tous les produits',
                'category.electronics': 'Électronique',
                'category.fashion': 'Mode & Vêtements',
                'category.home': 'Maison & Vie',
                'category.sports': 'Sport & Plein air',
                'category.books': 'Livres & Médias',
                'category.beauty': 'Beauté & Soins',
                
                // Products
                'product.add.cart': 'Ajouter au panier',
                'product.out.stock': 'Rupture de stock',
                'product.reviews': 'avis',
                'product.found': 'produits trouvés',
                'product.no.found': 'Aucun produit trouvé',
                'product.search.again': 'Essayez de modifier vos critères de recherche.',
                
                // Sort Options
                'sort.featured': 'En vedette',
                'sort.price.low': 'Prix: Bas à Élevé',
                'sort.price.high': 'Prix: Élevé à Bas',
                'sort.rating': 'Mieux noté',
                'sort.name': 'Nom: A-Z',
                
                // Cart
                'cart.title': 'Mon Panier',
                'cart.empty': 'Votre panier est vide',
                'cart.empty.desc': 'Ajoutez des produits pour commencer',
                'cart.total': 'Total:',
                'cart.checkout': 'Commander',
                'cart.added': 'Produit ajouté au panier!',
                
                // Common
                'common.loading': 'Chargement...',
                'common.save': 'Enregistrer',
                'common.cancel': 'Annuler',
                'common.delete': 'Supprimer',
                'common.edit': 'Modifier',
                'common.close': 'Fermer',
                'common.yes': 'Oui',
                'common.no': 'Non',
                'common.search': 'Rechercher',
                'common.filter': 'Filtrer',
                'common.clear': 'Effacer'
            }
        };
    }

    // Get translation
    t(key, params = {}) {
        const translation = this.translations[this.currentLanguage]?.[key] || key;
        
        // Replace parameters
        return translation.replace(/\{\{(\w+)\}\}/g, (match, param) => {
            return params[param] || match;
        });
    }

    // Change language
    changeLanguage(language) {
        if (this.translations[language]) {
            this.currentLanguage = language;
            localStorage.setItem('selectedLanguage', language);
            this.updatePageContent();
            this.dispatchLanguageChange();
        }
    }

    // Update all page content
    updatePageContent() {
        // Update elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        });

        // Update specific elements
        this.updateSpecificElements();
    }

    // Update specific elements that need special handling
    updateSpecificElements() {
        // Update search placeholder
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.placeholder = this.t('header.search.placeholder');
        }

        // Update cart count text
        const cartBtn = document.querySelector('.cart-btn span');
        if (cartBtn && !cartBtn.classList.contains('cart-count')) {
            cartBtn.textContent = this.t('header.cart');
        }

        // Update product count
        const productCount = document.getElementById('productCount');
        if (productCount) {
            const count = productCount.textContent.match(/\d+/)?.[0] || '0';
            productCount.textContent = `${count} ${this.t('product.found')}`;
        }

        // Update category counts
        document.querySelectorAll('.category-item').forEach(item => {
            const nameSpan = item.querySelector('.category-info span');
            const categoryId = item.getAttribute('onclick')?.match(/'(\w+)'/)?.[1];
            
            if (nameSpan && categoryId) {
                const categoryKey = `category.${categoryId}`;
                nameSpan.textContent = this.t(categoryKey);
            }
        });
    }

    // Dispatch language change event
    dispatchLanguageChange() {
        window.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: this.currentLanguage }
        }));
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Get available languages
    getAvailableLanguages() {
        return [
            { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
            { code: 'en', name: 'English', flag: '🇺🇸' },
            { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
            { code: 'fr', name: 'Français', flag: '🇫🇷' }
        ];
    }

    // Format currency based on language
    formatCurrency(amount) {
        const formatters = {
            tr: new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }),
            en: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
            de: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }),
            fr: new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' })
        };

        const formatter = formatters[this.currentLanguage] || formatters.tr;
        return formatter.format(amount);
    }

    // Format date based on language
    formatDate(date) {
        const formatters = {
            tr: new Intl.DateTimeFormat('tr-TR'),
            en: new Intl.DateTimeFormat('en-US'),
            de: new Intl.DateTimeFormat('de-DE'),
            fr: new Intl.DateTimeFormat('fr-FR')
        };

        const formatter = formatters[this.currentLanguage] || formatters.tr;
        return formatter.format(new Date(date));
    }
}

// Initialize language manager
const languageManager = new LanguageManager();

// Export for global use
window.languageManager = languageManager;
window.t = (key, params) => languageManager.t(key, params);

// Auto-update content when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    languageManager.updatePageContent();
});

// Listen for language changes
window.addEventListener('languageChanged', function(e) {
    console.log('Language changed to:', e.detail.language);
    
    // Update any dynamic content that might need refreshing
    if (typeof renderProducts === 'function') {
        renderProducts();
    }
    
    if (typeof updateCartUI === 'function') {
        updateCartUI();
    }
});
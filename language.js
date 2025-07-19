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
                'category.automotive': 'Otomotiv',
                'category.toys': 'Oyuncak & Hobi',
                
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
                'payment.cards.accepted': 'Kabul Edilen Kartlar:',
                
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
                'category.automotive': 'Automotive',
                'category.toys': 'Toys & Hobbies',
                
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
                'payment.cards.accepted': 'Accepted Cards:',
                
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
                'category.automotive': 'Automobil',
                'category.toys': 'Spielzeug & Hobbys',
                
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
                
                // Auth
                'auth.login': 'Anmelden',
                'auth.register': 'Registrieren',
                'auth.email': 'E-Mail',
                'auth.password': 'Passwort',
                'auth.remember': 'Angemeldet bleiben',
                'auth.forgot': 'Passwort vergessen',
                'auth.firstname': 'Vorname',
                'auth.lastname': 'Nachname',
                'auth.phone': 'Telefon',
                'auth.birthdate': 'Geburtsdatum',
                'auth.gender': 'Geschlecht',
                'auth.terms': 'Nutzungsbedingungen',
                'auth.privacy': 'Datenschutzrichtlinie',
                'auth.marketing': 'Ich möchte über Kampagnen und Angebote informiert werden',
                
                // Payment
                'payment.title': 'Zahlung',
                'payment.delivery.info': 'Lieferinformationen',
                'payment.payment.info': 'Zahlungsinformationen',
                'payment.order.summary': 'Bestellübersicht',
                'payment.complete': 'Bestellung abschließen',
                'payment.success': 'Bestellung erhalten!',
                'payment.cards.accepted': 'Akzeptierte Karten:',
                
                // Wishlist
                'wishlist.title': 'Meine Favoriten',
                'wishlist.empty': 'Ihre Wunschliste ist leer',
                'wishlist.added': 'Produkt zu Favoriten hinzugefügt!',
                'wishlist.removed': 'Produkt aus Favoriten entfernt',
                
                // Reviews
                'reviews.title': 'Produktbewertungen',
                'reviews.write': 'Bewertung schreiben',
                'reviews.helpful': 'Hilfreich',
                'reviews.not.helpful': 'Nicht hilfreich',
                'reviews.recommend': 'Empfiehlt dieses Produkt',
                
                // Footer
                'footer.about': 'Über uns',
                'footer.contact': 'Kontakt',
                'footer.shipping': 'Versand & Lieferung',
                'footer.returns': 'Rücksendungen & Umtausch',
                'footer.privacy': 'Datenschutzrichtlinie',
                'footer.rights': 'Alle Rechte vorbehalten.',
                
                // Notifications
                'notification.login.required': 'Sie müssen sich für diese Aktion anmelden',
                'notification.login.success': 'Anmeldung erfolgreich!',
                'notification.register.success': 'Registrierung erfolgreich!',
                'notification.logout.success': 'Erfolgreich abgemeldet',
                'notification.error': 'Ein Fehler ist aufgetreten',
                'notification.success': 'Vorgang erfolgreich',
                
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
                'category.automotive': 'Automobile',
                'category.toys': 'Jouets & Loisirs',
                
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
                
                // Auth
                'auth.login': 'Se connecter',
                'auth.register': 'S\'inscrire',
                'auth.email': 'E-mail',
                'auth.password': 'Mot de passe',
                'auth.remember': 'Se souvenir de moi',
                'auth.forgot': 'Mot de passe oublié',
                'auth.firstname': 'Prénom',
                'auth.lastname': 'Nom',
                'auth.phone': 'Téléphone',
                'auth.birthdate': 'Date de naissance',
                'auth.gender': 'Genre',
                'auth.terms': 'Conditions d\'utilisation',
                'auth.privacy': 'Politique de confidentialité',
                'auth.marketing': 'Je veux être informé des campagnes et opportunités',
                
                // Payment
                'payment.title': 'Paiement',
                'payment.delivery.info': 'Informations de livraison',
                'payment.payment.info': 'Informations de paiement',
                'payment.order.summary': 'Résumé de commande',
                'payment.complete': 'Finaliser la commande',
                'payment.success': 'Commande reçue!',
                'payment.cards.accepted': 'Cartes acceptées:',
                
                // Wishlist
                'wishlist.title': 'Mes Favoris',
                'wishlist.empty': 'Votre liste de souhaits est vide',
                'wishlist.added': 'Produit ajouté aux favoris!',
                'wishlist.removed': 'Produit retiré des favoris',
                
                // Reviews
                'reviews.title': 'Avis sur le produit',
                'reviews.write': 'Écrire un avis',
                'reviews.helpful': 'Utile',
                'reviews.not.helpful': 'Pas utile',
                'reviews.recommend': 'Recommande ce produit',
                
                // Footer
                'footer.about': 'À propos',
                'footer.contact': 'Contact',
                'footer.shipping': 'Expédition & Livraison',
                'footer.returns': 'Retours & Échange',
                'footer.privacy': 'Politique de confidentialité',
                'footer.rights': 'Tous droits réservés.',
                
                // Notifications
                'notification.login.required': 'Vous devez vous connecter pour cette action',
                'notification.login.success': 'Connexion réussie!',
                'notification.register.success': 'Inscription réussie!',
                'notification.logout.success': 'Déconnexion réussie',
                'notification.error': 'Une erreur s\'est produite',
                'notification.success': 'Opération réussie',
                
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
            },

            es: {
                // Header
                'header.search.placeholder': 'Buscar productos, categorías o marcas...',
                'header.account': 'Mi Cuenta',
                'header.favorites': 'Favoritos',
                'header.cart': 'Carrito',
                'header.login': 'Iniciar Sesión',
                
                // Navigation
                'nav.home': 'Inicio',
                'nav.categories': 'Categorías',
                'nav.deals': 'Ofertas',
                'nav.contact': 'Contacto',
                
                // Hero Section
                'hero.title': 'Experiencia de <span class="highlight">Compras</span> Premium',
                'hero.subtitle': 'Vive una experiencia de compra perfecta con productos de la más alta calidad, mejores precios y entrega rápida.',
                'hero.cta.shop': 'Comenzar a Comprar',
                'hero.cta.categories': 'Explorar Categorías',
                
                // Features
                'feature.shipping.title': 'Envío Gratis',
                'feature.shipping.desc': 'En pedidos superiores a 25€',
                'feature.security.title': 'Pago Seguro',
                'feature.security.desc': 'Protección SSL de 256 bits',
                'feature.quality.title': 'Calidad Premium',
                'feature.quality.desc': 'Colección de productos seleccionados',
                
                // Categories
                'category.all': 'Todos los Productos',
                'category.electronics': 'Electrónicos',
                'category.fashion': 'Moda y Ropa',
                'category.home': 'Hogar y Vida',
                'category.sports': 'Deportes y Aire Libre',
                'category.books': 'Libros y Medios',
                'category.beauty': 'Belleza y Cuidado',
                'category.automotive': 'Automotriz',
                'category.toys': 'Juguetes y Pasatiempos',
                
                // Products
                'product.add.cart': 'Añadir al Carrito',
                'product.out.stock': 'Agotado',
                'product.reviews': 'reseñas',
                'product.found': 'productos encontrados',
                'product.no.found': 'No se encontraron productos',
                'product.search.again': 'Intenta cambiar tus criterios de búsqueda.',
                
                // Sort Options
                'sort.featured': 'Destacados',
                'sort.price.low': 'Precio: Bajo a Alto',
                'sort.price.high': 'Precio: Alto a Bajo',
                'sort.rating': 'Mejor Valorado',
                'sort.name': 'Nombre: A-Z',
                
                // Cart
                'cart.title': 'Mi Carrito',
                'cart.empty': 'Tu carrito está vacío',
                'cart.empty.desc': 'Añade productos para comenzar a comprar',
                'cart.total': 'Total:',
                'cart.checkout': 'Finalizar Compra',
                'cart.added': '¡Producto añadido al carrito!',
                
                // Common
                'common.loading': 'Cargando...',
                'common.save': 'Guardar',
                'common.cancel': 'Cancelar',
                'common.delete': 'Eliminar',
                'common.edit': 'Editar',
                'common.close': 'Cerrar',
                'common.yes': 'Sí',
                'common.no': 'No',
                'common.search': 'Buscar',
                'common.filter': 'Filtrar',
                'common.clear': 'Limpiar'
            },

            it: {
                // Header
                'header.search.placeholder': 'Cerca prodotti, categorie o marchi...',
                'header.account': 'Il Mio Account',
                'header.favorites': 'Preferiti',
                'header.cart': 'Carrello',
                'header.login': 'Accedi',
                
                // Navigation
                'nav.home': 'Home',
                'nav.categories': 'Categorie',
                'nav.deals': 'Offerte',
                'nav.contact': 'Contatto',
                
                // Hero Section
                'hero.title': 'Esperienza di <span class="highlight">Shopping</span> Premium',
                'hero.subtitle': 'Vivi un\'esperienza di shopping perfetta con prodotti di altissima qualità, prezzi migliori e consegna veloce.',
                'hero.cta.shop': 'Inizia a Comprare',
                'hero.cta.categories': 'Esplora Categorie',
                
                // Features
                'feature.shipping.title': 'Spedizione Gratuita',
                'feature.shipping.desc': 'Su ordini superiori a 25€',
                'feature.security.title': 'Pagamento Sicuro',
                'feature.security.desc': 'Protezione SSL a 256 bit',
                'feature.quality.title': 'Qualità Premium',
                'feature.quality.desc': 'Collezione di prodotti selezionati',
                
                // Categories
                'category.all': 'Tutti i Prodotti',
                'category.electronics': 'Elettronica',
                'category.fashion': 'Moda e Abbigliamento',
                'category.home': 'Casa e Vita',
                'category.sports': 'Sport e Outdoor',
                'category.books': 'Libri e Media',
                'category.beauty': 'Bellezza e Cura',
                'category.automotive': 'Automotive',
                'category.toys': 'Giocattoli e Hobby',
                
                // Products
                'product.add.cart': 'Aggiungi al Carrello',
                'product.out.stock': 'Esaurito',
                'product.reviews': 'recensioni',
                'product.found': 'prodotti trovati',
                'product.no.found': 'Nessun prodotto trovato',
                'product.search.again': 'Prova a cambiare i tuoi criteri di ricerca.',
                
                // Common
                'common.loading': 'Caricamento...',
                'common.save': 'Salva',
                'common.cancel': 'Annulla',
                'common.delete': 'Elimina',
                'common.edit': 'Modifica',
                'common.close': 'Chiudi',
                'common.yes': 'Sì',
                'common.no': 'No',
                'common.search': 'Cerca',
                'common.filter': 'Filtra',
                'common.clear': 'Pulisci'
            },

            ru: {
                // Header
                'header.search.placeholder': 'Поиск товаров, категорий или брендов...',
                'header.account': 'Мой Аккаунт',
                'header.favorites': 'Избранное',
                'header.cart': 'Корзина',
                'header.login': 'Войти',
                
                // Navigation
                'nav.home': 'Главная',
                'nav.categories': 'Категории',
                'nav.deals': 'Предложения',
                'nav.contact': 'Контакты',
                
                // Hero Section
                'hero.title': 'Премиум <span class="highlight">Покупки</span> Опыт',
                'hero.subtitle': 'Испытайте идеальный шоппинг с продуктами высочайшего качества, лучшими ценами и быстрой доставкой.',
                'hero.cta.shop': 'Начать Покупки',
                'hero.cta.categories': 'Просмотреть Категории',
                
                // Features
                'feature.shipping.title': 'Бесплатная Доставка',
                'feature.shipping.desc': 'При заказах свыше 25€',
                'feature.security.title': 'Безопасная Оплата',
                'feature.security.desc': '256-битная SSL защита',
                'feature.quality.title': 'Премиум Качество',
                'feature.quality.desc': 'Отобранная коллекция товаров',
                
                // Categories
                'category.all': 'Все Товары',
                'category.electronics': 'Электроника',
                'category.fashion': 'Мода и Одежда',
                'category.home': 'Дом и Жизнь',
                'category.sports': 'Спорт и Отдых',
                'category.books': 'Книги и Медиа',
                'category.beauty': 'Красота и Уход',
                'category.automotive': 'Автомобили',
                'category.toys': 'Игрушки и Хобби',
                
                // Products
                'product.add.cart': 'Добавить в Корзину',
                'product.out.stock': 'Нет в Наличии',
                'product.reviews': 'отзывов',
                'product.found': 'товаров найдено',
                'product.no.found': 'Товары не найдены',
                'product.search.again': 'Попробуйте изменить критерии поиска.',
                
                // Common
                'common.loading': 'Загрузка...',
                'common.save': 'Сохранить',
                'common.cancel': 'Отмена',
                'common.delete': 'Удалить',
                'common.edit': 'Редактировать',
                'common.close': 'Закрыть',
                'common.yes': 'Да',
                'common.no': 'Нет',
                'common.search': 'Поиск',
                'common.filter': 'Фильтр',
                'common.clear': 'Очистить'
            },

            ar: {
                // Header
                'header.search.placeholder': 'البحث عن المنتجات والفئات والعلامات التجارية...',
                'header.account': 'حسابي',
                'header.favorites': 'المفضلة',
                'header.cart': 'السلة',
                'header.login': 'تسجيل الدخول',
                
                // Navigation
                'nav.home': 'الرئيسية',
                'nav.categories': 'الفئات',
                'nav.deals': 'العروض',
                'nav.contact': 'اتصل بنا',
                
                // Hero Section
                'hero.title': 'تجربة <span class="highlight">تسوق</span> مميزة',
                'hero.subtitle': 'استمتع بتجربة تسوق مثالية مع منتجات عالية الجودة وأفضل الأسعار والتوصيل السريع.',
                'hero.cta.shop': 'ابدأ التسوق',
                'hero.cta.categories': 'تصفح الفئات',
                
                // Features
                'feature.shipping.title': 'شحن مجاني',
                'feature.shipping.desc': 'على الطلبات فوق 25€',
                'feature.security.title': 'دفع آمن',
                'feature.security.desc': 'حماية SSL 256-bit',
                'feature.quality.title': 'جودة مميزة',
                'feature.quality.desc': 'مجموعة منتجات منتقاة',
                
                // Categories
                'category.all': 'جميع المنتجات',
                'category.electronics': 'الإلكترونيات',
                'category.fashion': 'الأزياء والملابس',
                'category.home': 'المنزل والحياة',
                'category.sports': 'الرياضة والهواء الطلق',
                'category.books': 'الكتب والوسائط',
                'category.beauty': 'الجمال والعناية',
                'category.automotive': 'السيارات',
                'category.toys': 'الألعاب والهوايات',
                
                // Products
                'product.add.cart': 'أضف إلى السلة',
                'product.out.stock': 'نفد من المخزون',
                'product.reviews': 'مراجعة',
                'product.found': 'منتج موجود',
                'product.no.found': 'لم يتم العثور على منتجات',
                'product.search.again': 'جرب تغيير معايير البحث.',
                
                // Common
                'common.loading': 'جاري التحميل...',
                'common.save': 'حفظ',
                'common.cancel': 'إلغاء',
                'common.delete': 'حذف',
                'common.edit': 'تعديل',
                'common.close': 'إغلاق',
                'common.yes': 'نعم',
                'common.no': 'لا',
                'common.search': 'بحث',
                'common.filter': 'تصفية',
                'common.clear': 'مسح'
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
            
            if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'search')) {
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

        // Update hero section
        const heroTitle = document.querySelector('.hero-text h1');
        if (heroTitle) {
            heroTitle.innerHTML = this.t('hero.title');
        }

        const heroSubtitle = document.querySelector('.hero-text p');
        if (heroSubtitle) {
            heroSubtitle.textContent = this.t('hero.subtitle');
        }

        // Update buttons
        const shopBtn = document.querySelector('.btn-primary');
        if (shopBtn) {
            shopBtn.textContent = this.t('hero.cta.shop');
        }

        const categoriesBtn = document.querySelector('.btn-secondary');
        if (categoriesBtn) {
            categoriesBtn.textContent = this.t('hero.cta.categories');
        }

        // Update features
        const features = document.querySelectorAll('.feature');
        features.forEach((feature, index) => {
            const featureKeys = ['shipping', 'security', 'quality'];
            if (featureKeys[index]) {
                const title = feature.querySelector('h3');
                const desc = feature.querySelector('p');
                if (title) title.textContent = this.t(`feature.${featureKeys[index]}.title`);
                if (desc) desc.textContent = this.t(`feature.${featureKeys[index]}.desc`);
            }
        });

        // Update footer
        const footerSections = document.querySelectorAll('.footer-section');
        footerSections.forEach(section => {
            const links = section.querySelectorAll('a');
            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href === '#' && link.textContent) {
                    // Map common footer links
                    const linkMap = {
                        'Hakkımızda': 'footer.about',
                        'İletişim': 'footer.contact',
                        'Kargo & Teslimat': 'footer.shipping',
                        'İade & Değişim': 'footer.returns',
                        'Gizlilik Politikası': 'footer.privacy'
                    };
                    
                    const key = linkMap[link.textContent];
                    if (key) {
                        link.textContent = this.t(key);
                    }
                }
            });
        });

        // Update sort options
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            const options = sortSelect.querySelectorAll('option');
            const sortKeys = ['featured', 'price-low', 'price-high', 'rating', 'name'];
            options.forEach((option, index) => {
                if (sortKeys[index]) {
                    option.textContent = this.t(`sort.${sortKeys[index].replace('-', '.')}`);
                }
            });
        }
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
            { code: 'fr', name: 'Français', flag: '🇫🇷' },
            { code: 'es', name: 'Español', flag: '🇪🇸' },
            { code: 'it', name: 'Italiano', flag: '🇮🇹' },
            { code: 'ru', name: 'Русский', flag: '🇷🇺' },
            { code: 'ar', name: 'العربية', flag: '🇸🇦' }
        ];
    }

    // Format currency based on language
    formatCurrency(amount) {
        const formatters = {
            tr: new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }),
            en: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
            de: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }),
            fr: new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }),
            es: new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }),
            it: new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }),
            ru: new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }),
            ar: new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR' })
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
            fr: new Intl.DateTimeFormat('fr-FR'),
            es: new Intl.DateTimeFormat('es-ES'),
            it: new Intl.DateTimeFormat('it-IT'),
            ru: new Intl.DateTimeFormat('ru-RU'),
            ar: new Intl.DateTimeFormat('ar-SA')
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
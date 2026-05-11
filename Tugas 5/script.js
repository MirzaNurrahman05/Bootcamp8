// Product Data
const products = [
    {
        id: 1,
        name: "Saturn PRO Gaming Mousepad - XL - XSOFT - Black",
        category: "Gaming",
        price: 70,
        originalPrice: 100,
        rating: 5,
        reviews: 88,
        image: "Assets/img/Saturn.webp",
        discount: 30,
        isFlashSale: true,
        isBestSeller: false
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard",
        category: "Gaming",
        price: 960,
        originalPrice: 1160,
        rating: 4,
        reviews: 75,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=300",
        discount: 35,
        isFlashSale: true,
        isBestSeller: false
    },
    {
        id: 3,
        name: "IPS LCD Gaming Monitor",
        category: "Computers",
        price: 370,
        originalPrice: 400,
        rating: 5,
        reviews: 99,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=300",
        discount: 30,
        isFlashSale: true,
        isBestSeller: false
    },
    {
        id: 4,
        name: "S-Series Comfort Chair",
        category: "Gaming",
        price: 375,
        originalPrice: 400,
        rating: 4.5,
        reviews: 99,
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=300",
        discount: 25,
        isFlashSale: true,
        isBestSeller: false
    },
    {
        id: 5,
        name: "The North Face Jacket",
        category: "Fashion",
        price: 260,
        originalPrice: 360,
        rating: 5,
        reviews: 65,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=300",
        discount: null,
        isFlashSale: false,
        isBestSeller: true
    },
    {
        id: 6,
        name: "Gucci Duffle Bag",
        category: "Fashion",
        price: 960,
        originalPrice: 1160,
        rating: 4.5,
        reviews: 65,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=300",
        discount: null,
        isFlashSale: false,
        isBestSeller: true
    },
    {
        id: 7,
        name: "RGB Liquid CPU Cooler",
        category: "Computers",
        price: 160,
        originalPrice: 170,
        rating: 4.5,
        reviews: 65,
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=300",
        discount: null,
        isFlashSale: false,
        isBestSeller: true
    },
    {
        id: 8,
        name: "Small Bookshelf",
        category: "Home",
        price: 360,
        originalPrice: null,
        rating: 5,
        reviews: 65,
        image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=300",
        discount: null,
        isFlashSale: false,
        isBestSeller: true
    },
    {
        id: 9,
        name: "Canon EOS DSLR Camera",
        category: "Camera",
        price: 360,
        originalPrice: null,
        rating: 4,
        reviews: 95,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=300",
        discount: null,
        isFlashSale: false,
        isBestSeller: false
    },
    {
        id: 10,
        name: "ASUS FHD Gaming Laptop",
        category: "Computers",
        price: 700,
        originalPrice: null,
        rating: 5,
        reviews: 325,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=300",
        discount: null,
        isFlashSale: false,
        isBestSeller: false
    },
    {
        id: 11,
        name: "Beats Studio Pro Headphones",
        category: "HeadPhones",
        price: 250,
        originalPrice: 300,
        rating: 4.5,
        reviews: 120,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300",
        discount: null,
        isFlashSale: false,
        isBestSeller: false
    },
    {
        id: 12,
        name: "iPhone 14 Pro Max",
        category: "Phones",
        price: 1099,
        originalPrice: null,
        rating: 5,
        reviews: 540,
        image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&q=80&w=300",
        discount: null,
        isFlashSale: false,
        isBestSeller: false
    },
    {
        id: 13,
        name: "Sony Alpha a7 III",
        category: "Camera",
        price: 1999,
        originalPrice: 2200,
        rating: 5,
        reviews: 210,
        image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&q=80&w=300",
        discount: null,
        isFlashSale: false,
        isBestSeller: false
    },
    {
        id: 14,
        name: "Apple Watch Ultra",
        category: "SmartWatch",
        price: 799,
        originalPrice: null,
        rating: 4.8,
        reviews: 180,
        image: "https://images.unsplash.com/photo-1434493907317-a46b5bc78344?auto=format&fit=crop&q=80&w=300",
        discount: null,
        isFlashSale: false,
        isBestSeller: false
    },
    {
        id: 15,
        name: "Logitech G Pro Wireless",
        category: "Gaming",
        price: 120,
        originalPrice: 150,
        rating: 4.9,
        reviews: 450,
        image: "https://images.unsplash.com/photo-1527698266440-12104e498b76?auto=format&fit=crop&q=80&w=300",
        discount: null,
        isFlashSale: false,
        isBestSeller: false
    }
];

const categories = [
    { name: "Phones", icon: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none"><path d="M18.6667 9.33331H37.3333C38.622 9.33331 39.6667 10.378 39.6667 11.6666V44.3333C39.6667 45.622 38.622 46.6666 37.3333 46.6666H18.6667C17.378 46.6666 16.3333 45.622 16.3333 44.3333V11.6666C16.3333 10.378 17.378 9.33331 18.6667 9.33331Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 39.6667H28.0233" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
    { name: "Computers", icon: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none"><path d="M9.33333 11.6667H46.6667C47.9553 11.6667 49 12.7114 49 14V37.3333C49 38.622 47.9553 39.6667 46.6667 39.6667H9.33333C8.04467 39.6667 7 38.622 7 37.3333V14C7 12.7114 8.04467 11.6667 9.33333 11.6667Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.3333 46.6667H39.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
    { name: "SmartWatch", icon: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none"><path d="M42 16.3333H14C12.7113 16.3333 11.6667 17.378 11.6667 18.6667V37.3333C11.6667 38.622 12.7113 39.6667 14 39.6667H42C43.2887 39.6667 44.3333 38.622 44.3333 37.3333V18.6667C44.3333 17.378 43.2887 16.3333 42 16.3333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.6667 16.3333V7H37.3333V16.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M37.3333 39.6667V49H18.6667V39.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
    { name: "Camera", icon: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none"><path d="M51.3333 44.3333H4.66667C3.378 44.3333 2.33333 43.2887 2.33333 42V14C2.33333 12.7113 3.378 11.6667 4.66667 11.6667H14L18.6667 4.66669H37.3333L42 11.6667H51.3333C52.622 11.6667 53.6667 12.7113 53.6667 14V42C53.6667 43.2887 52.622 44.3333 51.3333 44.3333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 35C31.866 35 35 31.866 35 28C35 24.134 31.866 21 28 21C24.134 21 21 24.134 21 28C21 31.866 24.134 35 28 35Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
    { name: "HeadPhones", icon: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none"><path d="M49 28V39.6667C49 43.5327 45.866 46.6667 42 46.6667H39.6667V28H49ZM49 28V23.3333C49 11.7353 39.6 2.33334 28 2.33334C16.4 2.33334 7 11.7353 7 23.3333V28M7 28H16.3333V46.6667H14C10.134 46.6667 7 43.5327 7 39.6667V28Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
    { name: "Gaming", icon: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none"><path d="M14 16.3333H42C45.866 16.3333 49 19.4673 49 23.3333V39.6667C49 43.5327 45.866 46.6667 42 46.6667H14C10.134 46.6667 7 43.5327 7 39.6667V23.3333C7 19.4673 10.134 16.3333 14 16.3333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 31.5H23.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.6667 26.8333V36.1667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M35 31.5H35.0233" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M39.6667 26.8333H39.69" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
    { name: "Home", icon: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none"><path d="M7 21L28 4.66666L49 21V46.6667C49 47.9553 47.9553 49 46.6667 49H9.33333C8.04467 49 7 47.9553 7 46.6667V21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 49V28H35V49" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
    { name: "Fashion", icon: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none"><path d="M14 11.6667C14 7.79998 17.1333 4.66666 21 4.66666H35C38.8667 4.66666 42 7.79998 42 11.6667V44.3333H14V11.6667Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 18.6667H42" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 4.66666V44.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M35 4.66666V44.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` }
];

// State
let currentSearch = "";
let selectedCategory = null;
let currentSlide = 0;
let showAllExplore = false;

// Render Products
function renderProducts() {
    const flashSaleContainer = document.getElementById('flash-sale-container');
    const bestSellingContainer = document.getElementById('bestSellingContainer');
    const exploreContainer = document.getElementById('exploreContainer');

    if (!flashSaleContainer || !bestSellingContainer || !exploreContainer) return;

    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase());
        const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    // Clear containers
    flashSaleContainer.innerHTML = '';
    bestSellingContainer.innerHTML = '';
    exploreContainer.innerHTML = '';

    products.filter(p => p.isFlashSale).forEach(p => {
        flashSaleContainer.innerHTML += createProductCard(p);
    });

    products.filter(p => p.isBestSeller).forEach(p => {
        bestSellingContainer.innerHTML += createProductCard(p);
    });

    // In Explore section, we show a limited number unless showAllExplore is true
    const exploreList = showAllExplore ? filtered : filtered.slice(0, 8);
    exploreList.forEach(p => {
        exploreContainer.innerHTML += createProductCard(p);
    });
}

function createProductCard(product) {
    const stars = Array(5).fill(0).map((_, i) => `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="${i < Math.floor(product.rating) ? '#FFAD33' : '#BFBFBF'}">
            <path d="M10 1L13 7L19 8L15 13L16 19L10 16L4 19L5 13L1 8L7 7L10 1Z"/>
        </svg>
    `).join('');

    return `
        <div class="min-w-[270px] bg-secondary-white group rounded-sm overflow-hidden relative transition-all hover:shadow-lg">
            <div class="h-[250px] flex items-center justify-center p-8 relative">
                ${product.discount ? `<span class="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-3 py-1 rounded-sm">-${product.discount}%</span>` : ''}
                <div class="absolute top-3 right-3 flex flex-col gap-2">
                    <button class="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#DB4444] hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    </button>
                    <button class="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#DB4444] hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    </button>
                </div>
                <img src="${product.image}" alt="${product.name}" class="max-h-full object-contain group-hover:scale-110 transition-transform duration-500">
                <button class="absolute bottom-0 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity font-medium">Add To Cart</button>
            </div>
            <div class="bg-white p-4">
                <h3 class="font-medium text-base mb-2 truncate">${product.name}</h3>
                <div class="flex items-center gap-3 mb-2">
                    <span class="text-[#DB4444] font-medium">$${product.price}</span>
                    ${product.originalPrice ? `<span class="text-gray-500 line-through">$${product.originalPrice}</span>` : ''}
                </div>
                <div class="flex items-center gap-2">
                    <div class="flex">${stars}</div>
                    <span class="text-gray-500 text-sm font-semibold">(${product.reviews})</span>
                </div>
            </div>
        </div>
    `;
}

// Render Categories
function renderCategories() {
    const categoryGrid = document.getElementById('categoryGrid');
    if (!categoryGrid) return;
    categoryGrid.innerHTML = '';
    categories.forEach(cat => {
        categoryGrid.innerHTML += `
            <div onclick="selectCategory('${cat.name}', this)" class="border border-gray-200 rounded-sm p-6 flex flex-col items-center gap-4 cursor-pointer hover:bg-[#DB4444] hover:text-white transition-all group category-item">
                <div class="group-hover:stroke-white transition-colors">${cat.icon}</div>
                <span class="font-medium">${cat.name}</span>
            </div>
        `;
    });
}

function selectCategory(name, el) {
    const allItems = document.querySelectorAll('.category-item, .sidebar-item');
    if (selectedCategory === name) {
        selectedCategory = null;
        el.classList.remove('active-category');
    } else {
        selectedCategory = name;
        allItems.forEach(i => i.classList.remove('active-category'));
        el.classList.add('active-category');
    }
    renderProducts();
}

// Slider Logic
function goToSlide(n) {
    const track = document.getElementById('slider-track');
    const dots = document.querySelectorAll('#hero-slider .dot-btn');
    if (!track) return;
    currentSlide = n;
    track.style.transform = `translateX(-${n * 100}%)`;
    dots.forEach((dot, i) => {
        if (i === n) {
            dot.classList.add('bg-[#DB4444]', 'w-4');
            dot.classList.remove('bg-gray-500');
        } else {
            dot.classList.remove('bg-[#DB4444]', 'w-4');
            dot.classList.add('bg-gray-500');
        }
    });
}

// Auto slide
setInterval(() => {
    currentSlide = (currentSlide + 1) % 2;
    goToSlide(currentSlide);
}, 5000);

// Countdown Logic
function startCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    function update() {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) return;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.innerText = d.toString().padStart(2, '0');
        if (hoursEl) hoursEl.innerText = h.toString().padStart(2, '0');
        if (minutesEl) minutesEl.innerText = m.toString().padStart(2, '0');
        if (secondsEl) secondsEl.innerText = s.toString().padStart(2, '0');
    }

    setInterval(update, 1000);
    update();
}

// Search Logic
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            renderProducts();
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            currentSearch = searchInput.value;
            renderProducts();
        });
    }
}

// Mobile Menu
function setupMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
        });
    }
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    }
}

// Flash Scroll
function scrollFlash(dir) {
    const container = document.getElementById('flash-sale-container');
    if (container) container.scrollLeft += dir * 300;
}

// View All Button
function setupViewAll() {
    const viewAllBtn = document.getElementById('viewAllExploreBtn');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            showAllExplore = !showAllExplore;
            viewAllBtn.innerText = showAllExplore ? "Show Less" : "View All Products";
            renderProducts();
        });
    }
}

// Initialize
window.onload = () => {
    renderCategories();
    renderProducts();
    startCountdown();
    setupViewAll();
    setupSearch();
    setupMobileMenu();
};

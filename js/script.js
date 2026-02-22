// Product Data
const products = [
    {
        id: 1,
        name: "Classic White Elite",
        price: 4500,
        category: "Sneakers",
        sizes: [39, 40, 41, 42, 43, 44],
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop",
        description: "Elegant white sneakers made from premium synthetic leather. Perfect for casual outings and semi-formal events."
    },
    {
        id: 2,
        name: "Midnight Onyx Runner",
        price: 5200,
        category: "Sneakers",
        sizes: [40, 41, 42, 43, 44],
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
        description: "Breathable mesh upper with specialized comfort insoles. Designed for everyday endurance and style."
    },
    {
        id: 3,
        name: "Royal Tan Oxfords",
        price: 6800,
        category: "Men",
        sizes: [38, 39, 40, 41, 42, 43, 44],
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop",
        description: "Handcrafted genuine leather formal shoes. Experience timeless elegance with every step."
    },
    {
        id: 4,
        name: "Urban Stealth Loafers",
        price: 3800,
        category: "Men",
        sizes: [39, 40, 41, 42, 43],
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000&auto=format&fit=crop",
        description: "Lightweight and versatile grey loafers. Slip into comfort for your daily urban adventures."
    },
    {
        id: 5,
        name: "Pastel Grace Flats",
        price: 2900,
        category: "Women",
        sizes: [36, 37, 38, 39, 40],
        image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=1000&auto=format&fit=crop",
        description: "Soft pastel pink flats for a graceful look. Cushioning technology makes them perfect for long workdays."
    },
    {
        id: 6,
        name: "Cobalt Pulse Trainers",
        price: 4900,
        category: "Sneakers",
        sizes: [40, 41, 42, 43, 44, 45],
        image: "https://images.unsplash.com/photo-1595950653106-6c9361668d29?q=80&w=1000&auto=format&fit=crop",
        description: "Dynamic blue trainers with superior grip. Optimized for fitness activities and street style."
    },
    {
        id: 7,
        name: "Suede Nomad Boots",
        price: 7500,
        category: "Men",
        sizes: [40, 41, 42, 43, 44],
        image: "https://images.unsplash.com/photo-1520639889410-d6a1c9d400e2?q=80&w=1000&auto=format&fit=crop",
        description: "Premium suede boots in a classic tan shade. A must-have for the modern gentleman's wardrobe."
    },
    {
        id: 8,
        name: "Gilded Rose Heels",
        price: 5500,
        category: "Women",
        sizes: [35, 36, 37, 38, 39, 40],
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop",
        description: "Dazzling rose gold heels for special occasions. Combine luxury with surprisingly comfortable design."
    }
];

// Configuration
const WHATSAPP_NUMBER = "923000000000";

// Load Products
function loadProducts(category = "All") {
    const grid = document.getElementById('product-grid');
    const activeCatLabel = document.getElementById('active-category');
    grid.innerHTML = "";
    activeCatLabel.innerText = category === "All" ? "All Products" : (category + "'s Collection");

    const filtered = category === "All" ? products : products.filter(p => p.category === category);

    filtered.forEach((product, index) => {
        const card = `
            <div class="col-sm-6 col-lg-3">
                <div class="luxury-product-card h-100">
                    <div class="product-img-container" onclick="openQuickView(${product.id})">
                        <img src="${product.image}" alt="${product.name}" class="product-img-luxury">
                        <span class="view-label">Quick View</span>
                    </div>
                    <div class="card-body pt-4 px-1 text-center">
                        <p class="text-gold small fw-bold text-uppercase mb-1 ls-wide">${product.category}</p>
                        <h5 class="fw-bold mb-3">${product.name}</h5>
                        <div class="d-flex justify-content-center align-items-center gap-3 mb-4">
                            <span class="fw-bold fs-4">Rs. ${product.price.toLocaleString()}</span>
                            <div class="text-gold small opacity-75">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                        </div>
                        <div class="mb-4">
                            <select class="form-select bg-dark text-white border-secondary rounded-pill px-3" id="size-select-${product.id}">
                                ${product.sizes.map(size => `<option value="${size}">Size ${size}</option>`).join('')}
                            </select>
                        </div>
                        <button onclick="orderNow(${product.id})" class="btn btn-gold w-100 rounded-pill py-3">
                            <i class="bi bi-whatsapp me-2"></i> Order Now
                        </button>
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}

// Order Now (WhatsApp)
function orderNow(productId) {
    const product = products.find(p => p.id === productId);
    const sizeSelect = document.getElementById(`size-select-${productId}`);
    const selectedSize = sizeSelect.value;

    const message = `I want to order from thriftsoull:\n\n*Product:* ${product.name}\n*Category:* ${product.category}\n*Size:* ${selectedSize}\n*Price:* Rs. ${product.price.toLocaleString()}\n\nPlease confirm availability.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Quick View
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    const content = document.getElementById('quick-view-content');

    content.innerHTML = `
        <div class="col-lg-6">
            <div class="p-4 p-lg-5 h-100 d-flex align-items-center bg-black">
                <img src="${product.image}" alt="${product.name}" class="img-fluid rounded-4 shadow-lg w-100">
            </div>
        </div>
        <div class="col-lg-6 p-4 p-lg-5 d-flex flex-column justify-content-center">
            <h6 class="text-gold text-uppercase fw-bold ls-wide mb-3">${product.category}</h6>
            <h1 class="display-4 fw-800 mb-3">${product.name}</h1>
            <h2 class="display-6 fw-bold text-white mb-4">Rs. ${product.price.toLocaleString()}</h2>
            <p class="text-light-50 fs-5 mb-5">${product.description}</p>
            
            <div class="mb-5">
                <label class="form-label fw-bold text-gold opacity-75 mb-3">SELECT YOUR SIZE</label>
                <div class="d-flex flex-wrap gap-3">
                    ${product.sizes.map(size => `
                        <input type="radio" class="btn-check" name="modal-size" id="size-${size}" value="${size}" ${size === product.sizes[0] ? 'checked' : ''}>
                        <label class="btn btn-outline-gold px-4 py-2 rounded-3" for="size-${size}">${size}</label>
                    `).join('')}
                </div>
            </div>
            
            <button onclick="orderFromModal(${product.id})" class="btn btn-gold btn-lg w-100 rounded-pill py-4">
                <i class="bi bi-whatsapp me-2"></i> Confirm Order on WhatsApp
            </button>
            <div class="mt-5 d-flex gap-4 text-light-50 small justify-content-center">
                <span><i class="bi bi-truck me-2 text-gold"></i> Fast Shipping</span>
                <span><i class="bi bi-arrow-repeat me-2 text-gold"></i> 7-Day Returns</span>
                <span><i class="bi bi-shield-check me-2 text-gold"></i> Premium Quality</span>
            </div>
        </div>
    `;

    const modal = new bootstrap.Modal(document.getElementById('quickViewModal'));
    modal.show();
}

// Order from Modal
function orderFromModal(productId) {
    const product = products.find(p => p.id === productId);
    const selectedSize = document.querySelector('input[name="modal-size"]:checked').value;

    const message = `I want to order from thriftsoull:\n\n*Product:* ${product.name}\n*Category:* ${product.category}\n*Size:* ${selectedSize}\n*Price:* Rs. ${product.price.toLocaleString()}\n\nPlease confirm availability.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Filter Products
function filterProducts(category) {
    loadProducts(category);
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 50) {
        nav.style.padding = '0.5rem 0';
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        nav.style.padding = '1rem 0';
        nav.style.background = 'rgba(10, 10, 10, 0.8)';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});

// State
let data = null;
let currentLang = 'en';

// Load data
async function loadData() {
    try {
        const response = await fetch('data.json');
        data = await response.json();
        init();
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// Initialize
function init() {
    renderGallery();
    renderAbout();
    renderContact();
    setupEventListeners();
}

// Render Gallery
function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = '';
    
    data.artworks.forEach(artwork => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer';
        card.innerHTML = `
            <div class="relative aspect-square bg-gray-100">
                <img src="${artwork.image}" alt="${artwork.title}" class="w-full h-full object-cover">
                <span class="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${artwork.available ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}">
                    ${artwork.available ? 'Available' : 'Sold'}
                </span>
            </div>
            <div class="p-5">
                <h3 class="text-xl font-bold mb-2">${artwork.title}</h3>
                <p class="text-sm text-gray-600 mb-1">${currentLang === 'en' ? artwork.technique : artwork.techniqueFr}</p>
                <p class="text-sm text-gray-500 mb-3">${artwork.format} • ${artwork.year}</p>
                <p class="text-2xl font-bold">€${artwork.price}</p>
            </div>
        `;
        card.onclick = () => openModal(artwork);
        grid.appendChild(card);
    });
}

// Open Modal
function openModal(artwork) {
    const modal = document.getElementById('artworkModal');
    const content = document.getElementById('modalContent');
    
    content.innerHTML = `
        <button onclick="closeModal()" class="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100">×</button>
        <img src="${artwork.image}" alt="${artwork.title}" class="w-full aspect-square object-cover">
        <div class="p-8">
            <h2 class="text-4xl font-bold mb-2">${artwork.title}</h2>
            <p class="text-lg text-gray-600 mb-6">${artwork.year}</p>
            ${artwork.description_en ? `<div class="mb-6">
                <h3 class="text-xl font-semibold mb-3">Inspiration</h3>
                <p class="text-gray-700">${currentLang === 'en' ? artwork.description_en : artwork.description_fr}</p>
            </div>` : ''}
            <div class="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg mb-6">
                <div>
                    <p class="text-sm text-gray-500">Technique</p>
                    <p class="font-medium">${currentLang === 'en' ? artwork.technique : artwork.techniqueFr}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Dimensions</p>
                    <p class="font-medium">${artwork.format}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Series</p>
                    <p class="font-medium capitalize">${artwork.series.replace('-', ' ')}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Price</p>
                    <p class="text-2xl font-bold">€${artwork.price}</p>
                </div>
            </div>
            <a href="#contact" onclick="closeModal()" class="block w-full text-center px-6 py-4 ${artwork.available ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-300 text-gray-500 cursor-not-allowed'} rounded-full font-medium uppercase">
                ${artwork.available ? 'Inquiry' : 'Sold'}
            </a>
        </div>
    `;
    
    modal.classList.add('active');
}

// Close Modal
function closeModal() {
    document.getElementById('artworkModal').classList.remove('active');
}

// Render About
function renderAbout() {
    document.getElementById('aboutBio').textContent = data.artist[`bio_${currentLang}`];
    document.getElementById('aboutProcess').textContent = data.artist[`process_${currentLang}`];
}

// Render Contact
function renderContact() {
    const info = document.getElementById('contactInfo');
    info.innerHTML = `
        <div class="bg-white rounded-2xl shadow-lg p-8">
            <h3 class="text-2xl font-bold mb-6">Contact Details</h3>
            <div class="space-y-4">
                <div class="flex items-start">
                    <div class="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">📧</div>
                    <div>
                        <p class="text-sm text-gray-500">Email</p>
                        <a href="mailto:${data.contact.email}" class="text-gray-900 hover:text-pink-600">${data.contact.email}</a>
                    </div>
                </div>
                <div class="flex items-start">
                    <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">📱</div>
                    <div>
                        <p class="text-sm text-gray-500">Phone</p>
                        <a href="tel:${data.contact.phone}" class="text-gray-900 hover:text-blue-600">${data.contact.phone}</a>
                    </div>
                </div>
                <div class="flex items-start">
                    <div class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">📍</div>
                    <div>
                        <p class="text-sm text-gray-500">Location</p>
                        <p class="text-gray-900">${data.contact.location}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl shadow-lg p-8">
            <h3 class="text-2xl font-bold mb-6">Follow</h3>
            <div class="flex space-x-4">
                <a href="${data.contact.instagram}" target="_blank" class="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition shadow-md">📷</a>
                <a href="${data.contact.facebook}" target="_blank" class="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition shadow-md">f</a>
                <a href="${data.contact.twitter}" target="_blank" class="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition shadow-md">🐦</a>
            </div>
        </div>
    `;
}

// Event Listeners
function setupEventListeners() {
    // Language toggle
    document.getElementById('langToggle').addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'fr' : 'en';
        document.getElementById('langToggle').textContent = currentLang.toUpperCase();
        renderGallery();
        renderAbout();
    });
    
    // Contact form
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! (This is a demo)');
        e.target.reset();
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Close modal on background click
    document.getElementById('artworkModal').addEventListener('click', (e) => {
        if (e.target.id === 'artworkModal') closeModal();
    });
}

// Start
loadData();

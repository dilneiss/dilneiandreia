// Global variables
let currentPhotoIndex = 1;
const totalPhotos = 6; // Updated for scattered gallery


// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize photo gallery
    showPhoto(currentPhotoIndex);
    
    // Add smooth scrolling to scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            document.querySelector('.gallery-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Add auto-play to photo gallery (optional)
    // Uncomment the next line if you want auto-play
    // setInterval(nextPhoto, 5000);
});

// Photo Gallery Functions
function nextPhoto() {
    currentPhotoIndex++;
    if (currentPhotoIndex > totalPhotos) {
        currentPhotoIndex = 1;
    }
    showPhoto(currentPhotoIndex);
}

function previousPhoto() {
    currentPhotoIndex--;
    if (currentPhotoIndex < 1) {
        currentPhotoIndex = totalPhotos;
    }
    showPhoto(currentPhotoIndex);
}

function currentPhoto(n) {
    currentPhotoIndex = n;
    showPhoto(currentPhotoIndex);
}

function showPhoto(n) {
    const photos = document.querySelectorAll('.gallery-photo');
    const indicators = document.querySelectorAll('.indicator');
    
    if (n > totalPhotos) {
        currentPhotoIndex = 1;
    }
    if (n < 1) {
        currentPhotoIndex = totalPhotos;
    }
    
    // Hide all photos
    photos.forEach(photo => {
        photo.classList.remove('active');
    });
    
    // Remove active class from all indicators
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Show current photo and activate indicator
    if (photos[currentPhotoIndex - 1]) {
        photos[currentPhotoIndex - 1].classList.add('active');
    }
    if (indicators[currentPhotoIndex - 1]) {
        indicators[currentPhotoIndex - 1].classList.add('active');
    }
}


function showConfirmationMessage(guestName) {
    const confirmationHTML = `
        <div id="confirmationModal" class="modal" style="display: block;">
            <div class="modal-content">
                <span class="close" onclick="closeConfirmationModal()">&times;</span>
                <h3>Obrigado, ${guestName}! 💕</h3>
                <p>Sua confirmação foi enviada via WhatsApp!</p>
                <p>Estamos ansiosos para celebrar este momento especial com você!</p>
                <div style="margin-top: 1rem;">
                    <i class="fas fa-heart" style="color: #d4a574; font-size: 2rem;"></i>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', confirmationHTML);
    
    // Auto-close after 3 seconds
    setTimeout(closeConfirmationModal, 3000);
}

function closeConfirmationModal() {
    const modal = document.getElementById('confirmationModal');
    if (modal) {
        modal.remove();
    }
}

// Gifts Modal Functions
function showGiftsMessage() {
    const modal = document.getElementById('giftModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeGiftsModal() {
    const modal = document.getElementById('giftModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const giftModal = document.getElementById('giftModal');
    const confirmationModal = document.getElementById('confirmationModal');
    
    if (event.target === giftModal) {
        giftModal.style.display = 'none';
    }
    
    if (event.target === confirmationModal) {
        closeConfirmationModal();
    }
}

// Keyboard navigation for photo gallery
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        previousPhoto();
    } else if (event.key === 'ArrowRight') {
        nextPhoto();
    } else if (event.key === 'Escape') {
        closeGiftsModal();
        closeConfirmationModal();
    }
});

// Touch/Swipe support for mobile
let startX = 0;
let endX = 0;

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
    endX = event.changedTouches[0].clientX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = startX - endX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swipe left - next photo
            nextPhoto();
        } else {
            // Swipe right - previous photo
            previousPhoto();
        }
    }
}

// Add touch events to photo slider
document.addEventListener('DOMContentLoaded', function() {
    const photoSlider = document.querySelector('.photo-slider');
    if (photoSlider) {
        photoSlider.addEventListener('touchstart', handleTouchStart, { passive: true });
        photoSlider.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
});

// Smooth scroll for internal links
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Loading animation for images
function handleImageLoad() {
    const images = document.querySelectorAll('.gallery-photo');
    let loadedImages = 0;
    
    images.forEach(img => {
        if (img.complete) {
            loadedImages++;
        } else {
            img.addEventListener('load', () => {
                loadedImages++;
                if (loadedImages === images.length) {
                    // All images loaded
                    document.body.classList.add('images-loaded');
                }
            });
            
            img.addEventListener('error', () => {
                console.warn('Failed to load image:', img.src);
                loadedImages++;
                if (loadedImages === images.length) {
                    document.body.classList.add('images-loaded');
                }
            });
        }
    });
    
    if (loadedImages === images.length) {
        document.body.classList.add('images-loaded');
    }
}

// Initialize image loading
document.addEventListener('DOMContentLoaded', handleImageLoad);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll(
        '.invitation-card, .rsvp-card, .link-card, .section-title'
    );
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});

// Form validation
function validateForm() {
    // Check which input field is being used
    const nameInput = document.getElementById('guestName') || document.getElementById('guestNameModal');
    const name = nameInput.value.trim();
    
    // Remove previous error styling
    nameInput.classList.remove('error');
    
    if (name.length < 2) {
        nameInput.classList.add('error');
        nameInput.focus();
        return false;
    }
    
    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(name)) {
        nameInput.classList.add('error');
        nameInput.focus();
        alert('Por favor, digite apenas seu nome (sem números ou símbolos especiais).');
        return false;
    }
    
    return true;
}

// Enhanced RSVP function with validation
function confirmPresence(event) {
    event.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    const guestName = (document.getElementById('guestName') || document.getElementById('guestNameModal')).value.trim();
    
    // Create WhatsApp message (without emojis to fix display issues)
    const message = `Ola! Eu gostaria de confirmar minha presenca no casamento.
Nome: ${guestName}
Muito obrigado(a) pelo convite! Estou ansioso(a) para celebrar este momento especial com voces!`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Replace with the couple's WhatsApp number
    const whatsappNumber = '554896338116'; // Replace with actual number
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Show confirmation message
    setTimeout(() => {
        showConfirmationMessage(guestName);
    }, 500);
    
    // Clear form
    const inputField = document.getElementById('guestName') || document.getElementById('guestNameModal');
    if (inputField) {
        inputField.value = '';
    }
    
    // Close RSVP modal if open
    closeRSVPModal();
}

// Add error styling for form validation
const style = document.createElement('style');
style.textContent = `
    .form-group input.error {
        border-color: #e74c3c !important;
        box-shadow: 0 0 0 2px rgba(231, 76, 60, 0.2);
    }
    
    .animate-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    
    .images-loaded .gallery-photo {
        transition: opacity 0.5s ease-in-out;
    }
`;
document.head.appendChild(style);

// New Action Button Functions for Coral Theme Design
function showLocation() {
    // Create a modal or directly show location options
    const locationModal = `
        <div id="locationModal" class="modal" style="display: block;">
            <div class="modal-content">
                <span class="close" onclick="closeLocationModal()">&times;</span>
                <h3>📍 Localizações</h3>
                <div style="margin: 20px 0;">
                    <div style="margin-bottom: 15px;">
                        <strong>⛪ Cerimônia:</strong><br>
                        Igreja Sagrada Família - Tubarão<br>
                        <a href="https://www.google.com/maps/search/igreja+sagrada+familia+tubarao/@-28.4800139,-48.9948408,14z?entry=s&sa=X&ved=1t%3A199789" 
                           target="_blank" style="color: var(--coral-primary); text-decoration: none;">
                            🗺️ Ver no Google Maps
                        </a>
                    </div>
                    <div>
                        <strong>🥂 Recepção:</strong><br>
                        NO BOSQUE Casa de Eventos<br>
                        <a href="https://www.google.com/maps/place/NO+BOSQUE+casa+de+eventos/@-28.4819422,-48.9904883,17z/data=!3m1!4b1!4m6!3m5!1s0x952143c65431dff1:0xc8a159331fabf23b!8m2!3d-28.481947!4d-48.9856174!16s%2Fg%2F11sh1tp23m?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D" 
                           target="_blank" style="color: var(--coral-primary); text-decoration: none;">
                            🗺️ Ver no Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', locationModal);
    
    // Auto-close after 10 seconds
    setTimeout(closeLocationModal, 10000);
}

function closeLocationModal() {
    const modal = document.getElementById('locationModal');
    if (modal) {
        modal.remove();
    }
}

function showGifts() {
    // Redirect to existing gifts modal functionality
    showGiftsMessage();
}

// RSVP Modal Functions
function showRSVPPage() {
    const modal = document.getElementById('rsvpModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeRSVPModal() {
    const modal = document.getElementById('rsvpModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Ceremony Modal Functions
function showCeremonyModal() {
    const modal = document.getElementById('ceremonyModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeCeremonyModal() {
    const modal = document.getElementById('ceremonyModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Reception Modal Functions
function showReceptionModal() {
    const modal = document.getElementById('receptionModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeReceptionModal() {
    const modal = document.getElementById('receptionModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Update existing modal click handler to include new modals
const originalWindowClick = window.onclick;
window.onclick = function(event) {
    const giftModal = document.getElementById('giftModal');
    const confirmationModal = document.getElementById('confirmationModal');
    const locationModal = document.getElementById('locationModal');
    const rsvpModal = document.getElementById('rsvpModal');
    const ceremonyModal = document.getElementById('ceremonyModal');
    const receptionModal = document.getElementById('receptionModal');
    
    if (event.target === giftModal && giftModal) {
        giftModal.style.display = 'none';
    }
    
    if (event.target === confirmationModal && confirmationModal) {
        closeConfirmationModal();
    }
    
    if (event.target === locationModal && locationModal) {
        closeLocationModal();
    }
    
    if (event.target === rsvpModal && rsvpModal) {
        closeRSVPModal();
    }
    
    if (event.target === ceremonyModal && ceremonyModal) {
        closeCeremonyModal();
    }
    
    if (event.target === receptionModal && receptionModal) {
        closeReceptionModal();
    }
}

// Update keyboard navigation to include new modals
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        previousPhoto();
    } else if (event.key === 'ArrowRight') {
        nextPhoto();
    } else if (event.key === 'Escape') {
        closeGiftsModal();
        closeConfirmationModal();
        closeLocationModal();
        closeRSVPModal();
        closeCeremonyModal();
        closeReceptionModal();
    }
});
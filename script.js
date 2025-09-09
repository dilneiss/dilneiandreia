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

// Gift List Data - 20 Creative Options with Images
const giftList = [
    { id: 1, name: "Corte de Cabelo VIP para o Noivo", description: "Um ano inteiro de visual renovado para o marido ficar sempre elegante!", price: 800, image: "presentes/gift-01.png", category: "grooming" },
    { id: 2, name: "Ajuda com 14 Meses de Aluguel", description: "Uma super contribuição para ajudar com as contas da casa nova!", price: 2000, image: "presentes/gift-02.jpg", category: "home" },
    { id: 3, name: "Socorro Financeiro da Noiva", description: "Ajuda emergencial com a fatura do cartão para a futura esposa!", price: 500, image: "presentes/gift-03.png", category: "financial" },
    { id: 4, name: "Contribuição para Lua de Mel", description: "Ajude os noivos a realizarem a viagem dos sonhos!", price: 1200, image: "presentes/gift-04.png", category: "honeymoon" },
    { id: 5, name: "Pacote Amizade Eterna", description: "Seja oficialmente nosso amigo para sempre com direitos e privilégios especiais!", price: 300, image: "presentes/gift-05.jpg", category: "friendship" },
    { id: 6, name: "Kit Anti-Stress Casamento", description: "Calmante especial para sobreviver ao dia do casamento sem surtir!", price: 150, image: "presentes/gift-06.webp", category: "wellness" },
    { id: 7, name: "Benção Divina Especial", description: "Quando Deus toca sua alma e você resolve presentear os noivos!", price: 400, image: "presentes/gift-07.jpg", category: "spiritual" },
    { id: 8, name: "Garrafa de Vinho Premium", description: "Vinho especial para o casal celebrar os momentos especiais!", price: 250, image: "presentes/gift-08.jpg", category: "drink" },
    { id: 9, name: "Jantar Romântico VIP", description: "Uma noite especial em restaurante requintado para o casal!", price: 600, image: "presentes/gift-09.jpg", category: "experience" },
    { id: 10, name: "Netflix Premium Anual", description: "Um ano inteiro de entretenimento para as noites de casal!", price: 180, image: "presentes/gift-10.jpg", category: "entertainment" },
    { id: 11, name: "Proteção Anti-Buquê", description: "Para a noiva não jogar o buquê na sua namorada e estragar tudo!", price: 350, image: "presentes/gift-11.png", category: "fun" },
    { id: 12, name: "Manta da Razão Eterna", description: "Para o noivo estar sempre coberto de razão nas discussões!", price: 200, image: "presentes/gift-12.jpg", category: "relationship" },
    { id: 13, name: "Passeio de Barco Romântico", description: "Passe especial para passeio de barco durante a lua de mel!", price: 800, image: "presentes/gift-13.jpg", category: "experience" },
    { id: 14, name: "Prioridade VIP no Buquê", description: "Seja a primeira da fila para pegar o buquê da noiva!", price: 150, image: "presentes/gift-14.png", category: "fun" },
    { id: 15, name: "Lingerie Lua de Mel", description: "Roupa íntima especial para a noiva arrasar na lua de mel!", price: 300, image: "presentes/gift-15.jpg", category: "intimate" },
    { id: 16, name: "Status Parente Preferido", description: "Grande oportunidade de se tornar nosso parente favorito oficial!", price: 500, image: "presentes/gift-16.jpg", category: "family" },
    { id: 17, name: "Passe Fura-Fila Buffet", description: "Seja sempre a primeira pessoa na fila do buffet em qualquer festa!", price: 250, image: "presentes/gift-17.jpg", category: "food" },
    { id: 18, name: "Presente Simbólico", description: "Só para não dizer que não deu nada - mas com muito carinho!", price: 150, image: "presentes/gift-18.png", category: "symbolic" },
    { id: 19, name: "Sushi Especial para Dois", description: "Experiência gastronômica japonesa premium para o casal!", price: 400, image: "presentes/gift-19.jpg", category: "food" },
    { id: 20, name: "Vale Comida Coreana", description: "Para o noivo levar a noiva para conhecer a culinária coreana!", price: 300, image: "presentes/gift-20.jpg", category: "food" }
];

let selectedGift = null;

// Gifts Modal Functions
function showGiftsMessage() {
    const modal = document.getElementById('giftModal');
    if (modal) {
        populateGiftGrid();
        modal.style.display = 'block';
    }
}

function populateGiftGrid() {
    const giftGrid = document.getElementById('giftGrid');
    if (!giftGrid) return;
    
    giftGrid.innerHTML = '';
    
    giftList.forEach(gift => {
        const giftCard = document.createElement('div');
        giftCard.className = 'gift-card';
        giftCard.onclick = () => selectGift(gift);
        
        giftCard.innerHTML = `
            <div class="gift-image">
                <img src="${gift.image}" alt="${gift.name}" class="gift-img">
            </div>
            <h4 class="gift-name">${gift.name}</h4>
            <p class="gift-description">${gift.description}</p>
            <div class="gift-price">R$ ${gift.price.toLocaleString('pt-BR')},00</div>
            <button class="select-gift-btn">
                <i class="fas fa-gift"></i>
                Presentear
            </button>
        `;
        
        giftGrid.appendChild(giftCard);
    });
}

function selectGift(gift) {
    selectedGift = gift;
    showGiftPaymentModal();
}

function showGiftPaymentModal() {
    if (!selectedGift) return;
    
    // Update selected gift info
    const selectedGiftInfo = document.getElementById('selectedGiftInfo');
    selectedGiftInfo.innerHTML = `
        <div class="selected-gift-card">
            <div class="selected-gift-image">
                <img src="${selectedGift.image}" alt="${selectedGift.name}" class="selected-gift-img">
            </div>
            <div class="selected-gift-details">
                <h4>${selectedGift.name}</h4>
                <p>${selectedGift.description}</p>
                <div class="selected-gift-price">R$ ${selectedGift.price.toLocaleString('pt-BR')},00</div>
            </div>
        </div>
    `;
    
    // Update gift amount
    document.getElementById('giftAmount').textContent = `R$ ${selectedGift.price.toLocaleString('pt-BR')},00`;
    
    // Generate QR Code
    generatePixQRCode(selectedGift.price);
    
    // Show payment modal
    closeGiftsModal();
    const paymentModal = document.getElementById('giftPaymentModal');
    if (paymentModal) {
        paymentModal.style.display = 'block';
    }
}

function generatePixQRCode(amount) {
    const qrContainer = document.getElementById('qrCodeContainer');
    if (!qrContainer) return;
    
    // Clear previous QR code
    qrContainer.innerHTML = '';
    
    // PIX payload data
    const pixKey = '06453765900'; // CPF
    const merchantName = 'DILNEI SOETHE SPANCERSKI';
    const merchantCity = 'BRACODONORTE';
    const amount_formatted = amount.toFixed(2);
    
    // Create proper PIX QR Code payload according to EMV standard
    // Format: 00020126580014br.gov.bcb.pix0136{pixKey}52040000530398654{amount}5802BR59{nameLength}{merchantName}60{cityLength}{merchantCity}62070503***6304{CRC}
    const pixPayload = generatePixPayload(pixKey, merchantName, merchantCity, amount_formatted);
    
    // Update the copy/paste field with complete PIX payload
    const pixKeyField = document.getElementById('pixKeyField');
    if (pixKeyField) {
        pixKeyField.value = pixPayload;
    }
    
    // Create canvas element for QR code
    const canvas = document.createElement('canvas');
    canvas.style.maxWidth = '100%';
    canvas.style.height = 'auto';
    
    // Generate QR code using QRCode.js library
    if (typeof QRCode !== 'undefined') {
        QRCode.toCanvas(canvas, pixPayload, {
            width: 256,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            }
        }, function (error) {
            if (error) {
                console.error('QR Code generation error:', error);
                // Fallback to manual instructions if QR generation fails
                showPixInstructions(qrContainer, pixKey, amount_formatted);
            } else {
                // Success - add canvas to container with instructions
                const qrCodeDiv = document.createElement('div');
                qrCodeDiv.className = 'qr-code-display';
                qrCodeDiv.style.textAlign = 'center';
                
                qrCodeDiv.appendChild(canvas);
                
                const instructions = document.createElement('p');
                instructions.style.marginTop = '10px';
                instructions.style.fontSize = '12px';
                instructions.style.color = '#666';
                instructions.innerHTML = `
                    Escaneie o QR Code ou use a chave PIX: <strong>${pixKey}</strong><br>
                    Valor: <strong>R$ ${amount_formatted.replace('.', ',')}</strong>
                `;
                qrCodeDiv.appendChild(instructions);
                
                qrContainer.appendChild(qrCodeDiv);
            }
        });
    } else {
        // QRCode library not loaded, show manual instructions
        showPixInstructions(qrContainer, pixKey, amount_formatted);
    }
}

function generatePixPayload(pixKey, merchantName, merchantCity, amount) {
    function tlv(id, value) {
        const len = value.length.toString().padStart(2, '0');
        return `${id}${len}${value}`;
    }
    function sanitize(s, max) {
        return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .toUpperCase().slice(0, max);
    }

    const name = sanitize(merchantName, 25);
    const city = sanitize(merchantCity, 15);
    const amt  = (amount && Number(amount) > 0) ? Number(amount).toFixed(2) : null;

    const merchantAccountInfo = tlv('26',
        tlv('00', 'br.gov.bcb.pix') +
        tlv('01', pixKey)
    );

    let payload =
        tlv('00', '01') +             // Payload Format Indicator
        tlv('01', '11') +             // Static QR
        merchantAccountInfo +
        tlv('52', '0000') +           // MCC
        tlv('53', '986') +            // BRL
        (amt ? tlv('54', amt) : '') +
        tlv('58', 'BR') +
        tlv('59', name) +
        tlv('60', city) +
        tlv('62', tlv('05', '***'));  // txid

    const toCRC = payload + '6304';
    const crc = calculateCRC16(toCRC).toString(16).toUpperCase().padStart(4, '0');
    return toCRC + crc;
}

function calculateCRC16(data) {
    let crc = 0xFFFF;
    for (let i = 0; i < data.length; i++) {
        crc ^= data.charCodeAt(i) << 8;
        for (let j = 0; j < 8; j++) {
            if (crc & 0x8000) {
                crc = (crc << 1) ^ 0x1021;
            } else {
                crc <<= 1;
            }
        }
    }
    return crc & 0xFFFF;
}

function showPixInstructions(container, pixKey, amount) {
    const fallbackDiv = document.createElement('div');
    fallbackDiv.className = 'qr-code-display';
    fallbackDiv.innerHTML = `
        <div class="qr-placeholder">
            <i class="fas fa-qrcode" style="font-size: 120px; color: #8b4f7f;"></i>
            <p style="margin-top: 10px; font-size: 12px; color: #666;">
                Use a chave PIX: <strong>${pixKey}</strong><br>
                Valor: <strong>R$ ${amount.replace('.', ',')}</strong>
            </p>
        </div>
    `;
    container.appendChild(fallbackDiv);
}

function sendPaymentProof() {
    if (!selectedGift) return;
    
    const message = `🎁 *Comprovante de Presente de Casamento*
    
Olá! Acabei de realizar o pagamento do presente:
📦 *${selectedGift.name}*
💰 Valor: R$ ${selectedGift.price.toLocaleString('pt-BR')},00
🏦 PIX: 064.537.659-00

Estou enviando o comprovante de pagamento.

Muito feliz por poder contribuir com o casamento de vocês! ❤️`;
    
    const whatsappUrl = `https://wa.me/5548996338116?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Show confirmation
    closeGiftPaymentModal();
    showPaymentConfirmation();
}

function showPaymentConfirmation() {
    const confirmationHTML = `
        <div id="paymentConfirmationModal" class="modal" style="display: block;">
            <div class="modal-content">
                <span class="close" onclick="closePaymentConfirmation()">&times;</span>
                <div style="text-align: center;">
                    <i class="fas fa-check-circle" style="font-size: 3rem; color: #25d366; margin-bottom: 1rem;"></i>
                    <h3>Obrigado pelo Presente! 🎁</h3>
                    <p>Você foi redirecionado para o WhatsApp para enviar o comprovante.</p>
                    <p>Sua generosidade significa muito para nós! ❤️</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', confirmationHTML);
    
    // Auto-close after 4 seconds
    setTimeout(closePaymentConfirmation, 4000);
}

function closePaymentConfirmation() {
    const modal = document.getElementById('paymentConfirmationModal');
    if (modal) {
        modal.remove();
    }
}

function closeGiftsModal() {
    const modal = document.getElementById('giftModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function closeGiftPaymentModal() {
    const modal = document.getElementById('giftPaymentModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function backToGiftList() {
    // Close payment modal and show gift list modal
    closeGiftPaymentModal();
    showGiftsMessage();
}

function copyPixKey() {
    const pixKeyField = document.getElementById('pixKeyField');
    if (pixKeyField) {
        pixKeyField.select();
        pixKeyField.setSelectionRange(0, 99999); // For mobile devices
        
        try {
            document.execCommand('copy');
            
            // Show feedback
            const copyBtn = document.querySelector('.copy-btn');
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            copyBtn.style.background = '#25d366';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
                copyBtn.style.background = '';
            }, 1500);
            
        } catch (err) {
            console.error('Failed to copy PIX key:', err);
        }
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
    const giftPaymentModal = document.getElementById('giftPaymentModal');
    const confirmationModal = document.getElementById('confirmationModal');
    const paymentConfirmationModal = document.getElementById('paymentConfirmationModal');
    const locationModal = document.getElementById('locationModal');
    const rsvpModal = document.getElementById('rsvpModal');
    const ceremonyModal = document.getElementById('ceremonyModal');
    const receptionModal = document.getElementById('receptionModal');
    
    if (event.target === giftModal && giftModal) {
        closeGiftsModal();
    }
    
    if (event.target === giftPaymentModal && giftPaymentModal) {
        closeGiftPaymentModal();
    }
    
    if (event.target === confirmationModal && confirmationModal) {
        closeConfirmationModal();
    }
    
    if (event.target === paymentConfirmationModal && paymentConfirmationModal) {
        closePaymentConfirmation();
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
        closeGiftPaymentModal();
        closeConfirmationModal();
        closePaymentConfirmation();
        closeLocationModal();
        closeRSVPModal();
        closeCeremonyModal();
        closeReceptionModal();
    }
});

// Add to Calendar Function
function addToCalendar() {
    // Wedding event details
    const eventDetails = {
        title: 'Casamento A & D',
        startDate: '20251129T153000', // 29/11/2025 15:30 in ISO format (YYYYMMDDTHHMMSS)
        endDate: '20251129T210000',   // Estimated end time 21:00
        location: 'Igreja Sagrada Família, Vila Moema, Tubarão - SC',
        description: 'Celebre conosco este momento único e especial em nossas vidas! Cerimônia religiosa seguida de recepção no NO BOSQUE Casa de Eventos.'
    };
    
    // Create calendar options modal
    const calendarModal = `
        <div id="calendarModal" class="modal" style="display: block;">
            <div class="modal-content">
                <span class="close" onclick="closeCalendarModal()">&times;</span>
                <h3><i class="fas fa-calendar-plus"></i> Adicionar à Agenda</h3>
                <p>Escolha seu serviço de calendário preferido:</p>
                <div style="display: flex; flex-direction: column; gap: 15px; margin: 20px 0;">
                    <a href="${generateGoogleCalendarUrl(eventDetails)}" 
                       target="_blank" 
                       onclick="closeCalendarModal()"
                       style="display: flex; align-items: center; gap: 10px; padding: 12px 16px; background: #4285f4; color: white; text-decoration: none; border-radius: 8px; transition: all 0.3s ease;">
                        <i class="fab fa-google"></i>
                        Google Calendar
                    </a>
                    <a href="${generateOutlookUrl(eventDetails)}" 
                       target="_blank" 
                       onclick="closeCalendarModal()"
                       style="display: flex; align-items: center; gap: 10px; padding: 12px 16px; background: #0078d4; color: white; text-decoration: none; border-radius: 8px; transition: all 0.3s ease;">
                        <i class="fab fa-microsoft"></i>
                        Outlook / Hotmail
                    </a>
                    <a href="${generateICSFile(eventDetails)}" 
                       download="casamento-a-d.ics"
                       onclick="closeCalendarModal()"
                       style="display: flex; align-items: center; gap: 10px; padding: 12px 16px; background: #8b4f7f; color: white; text-decoration: none; border-radius: 8px; transition: all 0.3s ease;">
                        <i class="fas fa-download"></i>
                        Baixar arquivo .ICS
                    </a>
                </div>
                <p style="font-size: 0.9rem; color: #666; text-align: center; margin-top: 15px;">
                    <i class="fas fa-info-circle"></i>
                    O arquivo .ICS funciona com Apple Calendar, Thunderbird e outros aplicativos de calendário.
                </p>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', calendarModal);
}

// Generate Google Calendar URL
function generateGoogleCalendarUrl(event) {
    const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    const params = new URLSearchParams({
        text: event.title,
        dates: `${event.startDate}/${event.endDate}`,
        location: event.location,
        details: event.description
    });
    return `${baseUrl}&${params.toString()}`;
}

// Generate Outlook URL
function generateOutlookUrl(event) {
    const baseUrl = 'https://outlook.live.com/calendar/0/deeplink/compose';
    const params = new URLSearchParams({
        subject: event.title,
        startdt: event.startDate,
        enddt: event.endDate,
        location: event.location,
        body: event.description
    });
    return `${baseUrl}?${params.toString()}`;
}

// Generate ICS file content
function generateICSFile(event) {
    const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Wedding//Wedding Invitation//PT',
        'BEGIN:VEVENT',
        `UID:${Date.now()}@casamento-a-d.com`,
        `DTSTART:${event.startDate}`,
        `DTEND:${event.endDate}`,
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${event.description}`,
        `LOCATION:${event.location}`,
        'STATUS:CONFIRMED',
        'BEGIN:VALARM',
        'TRIGGER:-P1D',
        'ACTION:DISPLAY',
        'DESCRIPTION:Lembrete: Casamento A & D amanhã!',
        'END:VALARM',
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\r\n');
    
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    return URL.createObjectURL(blob);
}

// Close calendar modal
function closeCalendarModal() {
    const modal = document.getElementById('calendarModal');
    if (modal) {
        modal.remove();
    }
}

// Update window click handler to include calendar modal
const originalWindowClickHandler = window.onclick;
window.onclick = function(event) {
    // Call original handler first
    if (originalWindowClickHandler) {
        originalWindowClickHandler(event);
    }
    
    const calendarModal = document.getElementById('calendarModal');
    if (event.target === calendarModal && calendarModal) {
        closeCalendarModal();
    }
};

// Background Music Control
let musicPlaying = false;

// Detect if device is iOS
function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

// Detect if device is mobile
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Initialize music state on page load
document.addEventListener('DOMContentLoaded', function() {
    const musicVideo = document.getElementById('background-music');
    const musicBtn = document.getElementById('music-control-btn');
    
    if (musicVideo && musicBtn) {
        // For mobile devices, especially iOS, autoplay is often blocked
        // So we need to wait for user interaction
        if (isMobile()) {
            // On mobile, start with play button showing
            const icon = musicBtn.querySelector('i');
            icon.className = 'fas fa-play';
            musicBtn.title = 'Reproduzir música de fundo';
            musicBtn.style.background = 'rgba(139, 79, 127, 0.6)';
            musicPlaying = false;
        } else {
            // Desktop behavior - check if video is playing automatically and unmute it
            setTimeout(() => {
                if (!musicVideo.paused) {
                    // Automatically unmute the video so users can hear the music
                    musicVideo.muted = false;
                    musicPlaying = true;
                    const icon = musicBtn.querySelector('i');
                    icon.className = 'fas fa-pause';
                    musicBtn.title = 'Pausar música de fundo';
                    musicBtn.style.background = 'rgba(139, 79, 127, 0.9)';
                }
            }, 500);
        }
        
        // Add event listeners to handle playback state changes
        musicVideo.addEventListener('play', function() {
            if (!musicVideo.muted) {
                musicPlaying = true;
                const icon = musicBtn.querySelector('i');
                icon.className = 'fas fa-pause';
                musicBtn.title = 'Pausar música de fundo';
                musicBtn.style.background = 'rgba(139, 79, 127, 0.9)';
            }
        });
        
        musicVideo.addEventListener('pause', function() {
            musicPlaying = false;
            const icon = musicBtn.querySelector('i');
            icon.className = 'fas fa-play';
            musicBtn.title = 'Reproduzir música de fundo';
            musicBtn.style.background = 'rgba(139, 79, 127, 0.6)';
        });
    }
});

function toggleMusic() {
    const musicVideo = document.getElementById('background-music');
    const musicBtn = document.getElementById('music-control-btn');

    if (!musicVideo || !musicBtn) return;

    const icon = musicBtn.querySelector('i');

    if (!musicPlaying) {
        // Start playing music (unmuted)
        musicVideo.muted = false;
        
        // For mobile devices, especially iOS, we need to ensure proper handling
        if (isMobile()) {
            // Force load the video first if needed
            if (musicVideo.readyState < 2) {
                musicVideo.load();
            }
        }
        
        musicVideo.play().then(() => {
            musicPlaying = true;
            icon.className = 'fas fa-pause';
            musicBtn.title = 'Pausar música de fundo';
            musicBtn.style.background = 'rgba(139, 79, 127, 0.9)';
        }).catch(e => {
            console.log('Unable to play video:', e);
            // If autoplay fails, show a message to the user (mobile-friendly)
            if (isMobile()) {
                // Try to play with user gesture
                setTimeout(() => {
                    musicVideo.play().catch(err => {
                        console.log('Playback failed even with user gesture:', err);
                    });
                }, 100);
            }
        });
    } else {
        // Pause music
        musicVideo.pause();
        musicPlaying = false;
        icon.className = 'fas fa-play';
        musicBtn.title = 'Reproduzir música de fundo';
        musicBtn.style.background = 'rgba(139, 79, 127, 0.6)';
    }
}
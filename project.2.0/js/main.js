// Shoe data
const shoes = [
    {
        id: 1,
        name: "Nike Air Max 270",
        image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
        thumbnail: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        id: 2,
        name: "Nike React Infinity",
        image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800",
        thumbnail: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        id: 3,
        name: "Nike Zoom Pegasus",
        image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=800",
        thumbnail: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
];

// State management
let currentPage = 'home';
let selectedShoe = 0;
let isMenuOpen = false;

// DOM elements
const pages = document.querySelectorAll('.page');
const navButtons = document.querySelectorAll('.nav-btn, .nav-mobile-btn, .footer-link[data-page], .cta-btn');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.nav-mobile');
const thumbnails = document.querySelectorAll('.thumbnail');
const mainShoeImage = document.getElementById('main-shoe-image');
const selectedShoeName = document.getElementById('selected-shoe-name');

// Initialize the application
function init() {
    setupEventListeners();
    updateShoeDisplay();
    showPage('home');
}

// Setup event listeners
function setupEventListeners() {
    // Navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const page = e.target.getAttribute('data-page');
            if (page) {
                navigateTo(page);
            }
        });
    });

    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Shoe thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            selectShoe(index);
        });
    });

    // Form submissions
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignupForm);
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && !mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && isMenuOpen) {
            closeMobileMenu();
        }
    });
}

// Navigation functions
function navigateTo(page) {
    currentPage = page;
    showPage(page);
    updateActiveNavButton(page);
    closeMobileMenu();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showPage(page) {
    pages.forEach(pageElement => {
        pageElement.classList.remove('active');
    });
    
    const targetPage = document.getElementById(`${page}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

function updateActiveNavButton(page) {
    // Update desktop nav
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-page') === page) {
            btn.classList.add('active');
        }
    });
}

// Mobile menu functions
function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        openMobileMenu();
    } else {
        closeMobileMenu();
    }
}

function openMobileMenu() {
    mobileNav.classList.add('active');
    mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
    isMenuOpen = true;
}

function closeMobileMenu() {
    mobileNav.classList.remove('active');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    isMenuOpen = false;
}

// Shoe gallery functions
function selectShoe(index) {
    selectedShoe = index;
    updateShoeDisplay();
    updateThumbnailActive();
}

function updateShoeDisplay() {
    const shoe = shoes[selectedShoe];
    if (mainShoeImage && selectedShoeName) {
        mainShoeImage.src = shoe.image;
        mainShoeImage.alt = shoe.name;
        selectedShoeName.textContent = shoe.name;
    }
}

function updateThumbnailActive() {
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.classList.remove('active');
        if (index === selectedShoe) {
            thumbnail.classList.add('active');
        }
    });
}

// Form handling
function handleContactForm(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    
    // Reset form
    e.target.reset();
}

function handleSignupForm(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (data.password !== data['confirm-password']) {
        alert('Passwords do not match!');
        return;
    }
    
    if (!data.terms) {
        alert('Please agree to the Terms of Service and Privacy Policy.');
        return;
    }
    
    // Simulate account creation
    alert('Welcome to SOLORUSH! Your account has been created successfully.');
    
    // Reset form
    e.target.reset();
}

// Smooth scrolling for anchor links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Animation on scroll (simple implementation)
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.product-card, .review-card, .feature, .value');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
function initScrollAnimations() {
    const elements = document.querySelectorAll('.product-card, .review-card, .feature, .value');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations(); // Check initial state
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    initScrollAnimations();
});

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden
        console.log('Page hidden');
    } else {
        // Page is visible
        console.log('Page visible');
    }
});

// Export functions for potential external use
window.SoloRush = {
    navigateTo,
    selectShoe,
    toggleMobileMenu
};
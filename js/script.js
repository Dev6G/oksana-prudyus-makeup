// ========================================
// Wait for DOM to be fully loaded
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initPortfolioFilter();
    initGalleryModal();
    initFormValidation();
    initScrollHeader();
    initActiveNavLinks();
});

// ========================================
// Mobile Menu Toggle
// ========================================

function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (nav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// ========================================
// Smooth Scroll Navigation
// ========================================

function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#' || href === '') return;
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// Scroll Animations (Fade In)
// ========================================

function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// ========================================
// Portfolio Filter
// ========================================

function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.classList.remove('hidden');
                    // Trigger animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                        item.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });
}

// ========================================
// Gallery Modal/Lightbox
// ========================================

function initGalleryModal() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modal = document.getElementById('gallery-modal');
    const modalClose = document.getElementById('modal-close');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const modalPrev = document.getElementById('modal-prev');
    const modalNext = document.getElementById('modal-next');
    
    if (!modal) return;
    
    let currentIndex = 0;
    let visibleItems = Array.from(portfolioItems).filter(item => !item.classList.contains('hidden'));
    
    // Open modal when clicking on portfolio item
    portfolioItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            visibleItems = Array.from(portfolioItems).filter(item => !item.classList.contains('hidden'));
            currentIndex = visibleItems.indexOf(this);
            
            openModal(this);
        });
    });
    
    function openModal(item) {
        const overlay = item.querySelector('.portfolio-overlay');
        const title = overlay ? overlay.querySelector('h4').textContent : 'Portfolio Image';
        const description = overlay ? overlay.querySelector('p').textContent : '';
        
        modal.classList.add('active');
        modalCaption.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function showPrevImage() {
        if (visibleItems.length === 0) return;
        
        currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
        const item = visibleItems[currentIndex];
        
        const overlay = item.querySelector('.portfolio-overlay');
        const title = overlay ? overlay.querySelector('h4').textContent : 'Portfolio Image';
        const description = overlay ? overlay.querySelector('p').textContent : '';
        
        modalCaption.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
    }
    
    function showNextImage() {
        if (visibleItems.length === 0) return;
        
        currentIndex = (currentIndex + 1) % visibleItems.length;
        const item = visibleItems[currentIndex];
        
        const overlay = item.querySelector('.portfolio-overlay');
        const title = overlay ? overlay.querySelector('h4').textContent : 'Portfolio Image';
        const description = overlay ? overlay.querySelector('p').textContent : '';
        
        modalCaption.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
    }
    
    // Close modal events
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Navigation events
    if (modalPrev) {
        modalPrev.addEventListener('click', showPrevImage);
    }
    
    if (modalNext) {
        modalNext.addEventListener('click', showNextImage);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    });
}

// ========================================
// Form Validation
// ========================================

function initFormValidation() {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const course = document.getElementById('course').value;
        const message = document.getElementById('message').value.trim();
        
        // Reset form message
        formMessage.className = 'form-message';
        formMessage.textContent = '';
        
        // Validate fields
        if (!name || !email || !phone || !course || !message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Validate email format
        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Validate phone format (basic validation)
        if (!isValidPhone(phone)) {
            showFormMessage('Please enter a valid phone number.', 'error');
            return;
        }
        
        // If all validations pass, show success message
        showFormMessage('Thank you for your interest! We will contact you within 24 hours.', 'success');
        
        // Reset form
        form.reset();
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', { name, email, phone, course, message });
    });
    
    function showFormMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Auto-hide success message after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                formMessage.className = 'form-message';
                formMessage.textContent = '';
            }, 5000);
        }
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidPhone(phone) {
        // Basic phone validation - allows various formats
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
    }
}

// ========================================
// Scroll Header Effect
// ========================================

function initScrollHeader() {
    const header = document.getElementById('header');
    
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// ========================================
// Active Navigation Links on Scroll
// ========================================

function initActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (sections.length === 0) return;
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.pageYOffset + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ========================================
// Performance Optimization: Debounce Function
// ========================================

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

// Apply debounce to scroll events for better performance
window.addEventListener('scroll', debounce(function() {
    // Scroll-related updates can be added here if needed
}, 10));

// ========================================
// Accessibility: Focus Management
// ========================================

// Trap focus within modal when open
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('gallery-modal');
    if (!modal || !modal.classList.contains('active')) return;
    
    if (e.key === 'Tab') {
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    }
});

// ========================================
// Console Welcome Message
// ========================================

console.log('%c✨ Beauty Makeup by Oksana Prudyus ✨', 
    'color: #d4af37; font-size: 20px; font-weight: bold; font-family: "Playfair Display", serif;');
console.log('%cWebsite designed with elegance and passion for makeup artistry.', 
    'color: #999; font-size: 12px;');

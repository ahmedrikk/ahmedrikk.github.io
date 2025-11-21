// ============================================
// AHMED BIN ATHAR - PORTFOLIO JS
// Interactive Features & Animations
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // Dark Mode Toggle
    // ============================================
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // ============================================
    // Mobile Navigation
    // ============================================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // ============================================
    // Smooth Scrolling
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // Header Hide on Scroll
    // ============================================
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.transform = 'translateY(0)';
            return;
        }
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ============================================
    // Intersection Observer for Fade-In Animations
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in
    document.querySelectorAll('.work-item, .film-card, .writing-item, .community-card, .skill-category').forEach(el => {
        observer.observe(el);
    });
    
    // ============================================
    // Loading Screen
    // ============================================
    const loadingScreen = document.getElementById('loading-screen');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (loadingScreen) {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.visibility = 'hidden';
            }
        }, 1500);
    });
    
    // ============================================
    // Dynamic Year in Footer
    // ============================================
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // ============================================
    // Typing Animation for Terminal Prompt
    // ============================================
    const typingText = document.querySelector('.typing-text');
    
    if (typingText) {
        const text = 'loading portfolio...';
        let index = 0;
        
        function type() {
            if (index < text.length) {
                typingText.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }
        
        // Start typing after a brief delay
        setTimeout(() => {
            typingText.textContent = '';
            type();
        }, 300);
    }
    
    // ============================================
    // YouTube Video Lazy Loading
    // ============================================
    const videoWrappers = document.querySelectorAll('.video-wrapper iframe');
    
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                if (iframe.dataset.src) {
                    iframe.src = iframe.dataset.src;
                }
                videoObserver.unobserve(iframe);
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    videoWrappers.forEach(video => {
        videoObserver.observe(video);
    });
    
    // ============================================
    // Active Navigation Highlighting
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            
            if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.style.color = 'var(--accent-cyan)';
            } else if (navLink) {
                navLink.style.color = 'var(--text-secondary)';
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // ============================================
    // Email Protection (Decode CloudFlare Protected Email)
    // ============================================
    function decodeEmail() {
        const emailElements = document.querySelectorAll('a[data-cfemail]');
        emailElements.forEach(element => {
            const encoded = element.getAttribute('data-cfemail');
            if (encoded) {
                let decoded = '';
                const key = parseInt(encoded.substr(0, 2), 16);
                for (let i = 2; i < encoded.length; i += 2) {
                    decoded += String.fromCharCode(parseInt(encoded.substr(i, 2), 16) ^ key);
                }
                element.setAttribute('href', 'mailto:' + decoded);
                element.textContent = decoded;
            }
        });
    }
    
    decodeEmail();
    
    // ============================================
    // Parallax Effect on Hero Background Text
    // ============================================
    const heroBgText = document.querySelector('.hero-bg-text');
    
    if (heroBgText) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroBgText.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.5}px))`;
        });
    }
    
    // ============================================
    // Terminal Prompt Animation on Scroll
    // ============================================
    const sectionTitles = document.querySelectorAll('.section-title');
    
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInLeft 0.6s ease forwards';
                titleObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    sectionTitles.forEach(title => {
        titleObserver.observe(title);
    });
    
    // ============================================
    // Card Tilt Effect on Hover (Optional)
    // ============================================
    const cards = document.querySelectorAll('.work-item, .film-card, .community-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // ============================================
    // Console Easter Egg
    // ============================================
    console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #59e3e3;');
    console.log('%cLooks like you\'re curious about how things work under the hood.', 'font-size: 14px; color: #b3b9c5;');
    console.log('%cI appreciate that. This site was built with: HTML5, CSS3, Vanilla JS, and way too much coffee.', 'font-size: 14px; color: #b3b9c5;');
    console.log('%cWant to collaborate? Email: ahmedrikk@gmail.com', 'font-size: 14px; font-weight: bold; color: #5de4c7;');
    console.log('%c- Ahmed', 'font-size: 14px; font-style: italic; color: #ffd57f;');
    
    // ============================================
    // Performance Optimization: Debounce Scroll Events
    // ============================================
    function debounce(func, wait = 10, immediate = true) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    
    // Apply debounce to scroll-heavy functions
    window.addEventListener('scroll', debounce(() => {
        highlightNavigation();
    }, 10));
    
    // ============================================
    // Accessibility: Keyboard Navigation Enhancement
    // ============================================
    document.addEventListener('keydown', (e) => {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
    
    // Focus trap for mobile menu when open
    const focusableElements = navLinks.querySelectorAll('a, button');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    navLinks.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            } else if (!e.shiftKey && document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    });
    
    // ============================================
    // Print Optimization
    // ============================================
    window.addEventListener('beforeprint', () => {
        // Expand all collapsed sections before printing
        document.querySelectorAll('details').forEach(detail => {
            detail.setAttribute('open', '');
        });
    });
});

// ============================================
// Additional CSS Animation Keyframes
// ============================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }
`;
document.head.appendChild(style);

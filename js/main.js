/* ========================================
   ZAIA Healthcare - JavaScript Principal
   ======================================== */

// ====== MOBILE MENU TOGGLE ======
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        nav.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (nav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link, .nav .btn');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ====== SMOOTH SCROLL FOR ANCHOR LINKS ======
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Ignore if href is just "#"
        if (href === '#' || href === '#contact') {
            e.preventDefault();
            return;
        }

        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            e.preventDefault();
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ====== SCROLL ANIMATIONS ======
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Elements to animate on scroll
const animateElements = document.querySelectorAll('.approach-title, .approach-text, .services-title, .service-card, .cta-title');

animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Add CSS for animation
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ====== HEADER SCROLL EFFECT ======
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow on scroll
    if (currentScroll > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ====== SERVICE CARDS HOVER EFFECT ======
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// ====== LOADING ANIMATION ======
window.addEventListener('load', () => {
    // Fade in hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateX(30px)';
        heroContent.style.transition = 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s';

        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateX(0)';
        }, 100);
    }
});

// ====== CONTACT BUTTON CLICK (Placeholder) ======
const contactButtons = document.querySelectorAll('a[href="#contact"]');

contactButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        // Scroll to footer
        const footer = document.querySelector('.footer');
        if (footer) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const footerPosition = footer.offsetTop - headerHeight;

            window.scrollTo({
                top: footerPosition,
                behavior: 'smooth'
            });
        }

        // Could open a modal or redirect to contact page
        console.log('Contact button clicked - Add your contact form logic here');
    });
});

// ====== CONSOLE MESSAGE ======
console.log('%c ZAIA Healthcare & Medical Engineering', 'font-size: 16px; color: #0A5E6B; font-weight: bold;');
console.log('%c Website developed with precision and care', 'font-size: 12px; color: #2BBCC4;');

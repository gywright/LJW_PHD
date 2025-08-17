// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = 'white';
        navbar.style.backdropFilter = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.hero-text, .about-text, .circular-image').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
});

// Image overlay click handler
document.querySelector('.image-overlay').addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

// CTA button click handlers
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.textContent === 'GET STARTED') {
            // Simulate form or contact action
            alert('Thank you for your interest! Please call (555) 123-4567 to schedule your consultation.');
        } else if (button.textContent === 'Learn More') {
            // Scroll to about section or show more info
            document.querySelector('#about').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header notice click handler
document.querySelector('.header-link').addEventListener('click', () => {
    alert('Sign up functionality would be implemented here!');
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease-in';
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Set initial body opacity for loading effect
    document.body.style.opacity = '0';
    
    // Add any additional initialization here
    console.log('Dr. Naomi Edelson website loaded successfully!');
});

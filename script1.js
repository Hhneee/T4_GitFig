// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animation for sections
const sections = document.querySelectorAll('.section');
const options = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const hero = document.querySelector('#hero');
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Initialize particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffd700' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
        size: { value: 3, random: true, anim: { enable: false } },
        line_linked: { enable: false },
        move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out' }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 100, duration: 0.4 } }
    },
    retina_detect: true
});
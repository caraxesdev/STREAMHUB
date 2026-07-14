document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.add('scrolled');
            // Wait, for Netflix style we might want it to be fully transparent at top.
            // Let's actually remove it when at the top.
            navbar.classList.remove('scrolled');
        }
    });

    // Handle initial scroll state
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }

    // Hero Slider Logic
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;

        // Ensure first slide is active initially if not set in HTML
        if (!document.querySelector('.slide.active')) {
            slides[0].classList.add('active');
        }

        const nextSlide = () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        };

        // Change slide every 5 seconds
        setInterval(nextSlide, 3000);
    }
});

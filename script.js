document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 150) { // Change 50 to adjust when the effect should start
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
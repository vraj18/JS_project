document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 150) { // Change 50 to adjust when the effect should start
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



    // Function to animate the number increase
    function animateNumber(element, start, end, duration) {
        let range = end - start;
        let current = start;
        let increment = range / (duration / 10); // Faster increment
        let stepTime = 10; // Faster step time
        let timer = setInterval(function() {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = Math.round(current);
        }, stepTime);
    }

    // Intersection Observer to trigger animation
    document.addEventListener('DOMContentLoaded', function() {
        const entriesNumber = document.getElementById('entries-number');
        const entriesNumber2 = document.getElementById('entries-number2');
        const entriesNumber3 = document.getElementById('entries-number3');
        const entriesNumber4 = document.getElementById('entries-number4');
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumber(entriesNumber, 1, 15000, 1500); // 1.5 seconds for animation
                    animateNumber(entriesNumber2, 1, 300, 1500); // 1.5 seconds for animation
                    animateNumber(entriesNumber3, 1, 200000, 1500); // 1.5 seconds for animation
                    animateNumber(entriesNumber4, 1, 26, 1500); // 1.5 seconds for animation
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        }, { threshold: 0.1 });

        observer.observe(entriesNumber);
    });




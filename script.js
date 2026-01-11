document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling für interne Links
    document.querySelectorAll('.nav-links a, .btn-primary').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) { // Nur für interne Anker-Links
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Berücksichtigt die Höhe der sticky Navbar
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - navbarHeight - 20; // 20px zusätzlicher Puffer

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Navbar-Hintergrund beim Scrollen anpassen (schon vorher da, leicht angepasst)
    const navbar = document.querySelector('.navbar');
    const heroSection = document.getElementById('home');
    const heroHeight = heroSection ? heroSection.offsetHeight : 0; // Höhe der Hero-Sektion

    window.addEventListener('scroll', () => {
        if (window.scrollY > (heroHeight / 2)) { // Navbar wird dunkler, wenn man die Hälfte der Hero-Sektion durch ist
            navbar.style.backgroundColor = 'rgba(0,0,0,0.95)';
            navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.6)';
        } else {
            navbar.style.backgroundColor = 'var(--dark-bg)';
            navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.4)';
        }
    });

    // Aktiven Nav-Link hervorheben
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbar.offsetHeight - 30; // Anpassung für Navbar und Puffer
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});

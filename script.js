// Intersection Observer: Module werden sichtbar, wenn man scrollt
const observerOptions = {
    threshold: 0.1 // Löst aus, wenn 10% des Elements sichtbar sind
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Alle Elemente mit der Klasse .fade-in beobachten
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

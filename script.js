document.addEventListener('DOMContentLoaded', () => {
    // Código para o slideshow 3D

    // Animação de entrada para o formulário de contato
    const contactForm = document.querySelector('.contact-form');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactForm.classList.add('visible');
            }
        });
    });

    observer.observe(contactForm);
});
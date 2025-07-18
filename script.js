document.addEventListener('DOMContentLoaded', function() {
    // Efecto de aparición para los proyectos
    const projectItems = document.querySelectorAll('.project-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    projectItems.forEach(item => {
        observer.observe(item);
    });

    // Smooth scrolling para los enlaces del menú
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ✅ Modal de política de tratamiento de datos
    const abrirModal = document.getElementById('abrir-politica');
    const cerrarModal = document.getElementById('cerrar-modal');
    const modal = document.getElementById('modal-politica');

    if (abrirModal && cerrarModal && modal) {
        abrirModal.addEventListener('click', function (e) {
            e.preventDefault();
            modal.style.display = 'block';
        });

        cerrarModal.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

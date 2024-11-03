
    // Inicialização do Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});

// Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    // Adicionar click event em todas as imagens do portfolio
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('.portfolio-image');
            const title = this.querySelector('h4').textContent;
            const category = this.querySelector('p').textContent;
            
            // Pausar o autoplay quando abrir o lightbox
            swiper.autoplay.stop();
            
            // Configurar e mostrar o lightbox
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxCaption.textContent = `${title} - ${category}`;
            lightbox.classList.add('active');
            
            // Adicionar classe de destaque ao slide atual
            this.closest('.swiper-slide').classList.add('highlighted');
        });
    });
    
    // Fechar lightbox quando clicar no X
    lightboxClose.addEventListener('click', closeLightbox);
    
    // Fechar lightbox quando clicar fora da imagem
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Fechar lightbox quando pressionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        // Remover destaque de todos os slides
        document.querySelectorAll('.swiper-slide').forEach(slide => {
            slide.classList.remove('highlighted');
        });
        // Retomar o autoplay quando fechar o lightbox
        swiper.autoplay.start();
    }
});

// Adicionar estilos CSS para o slide destacado MENU SANDUICHE
const style = document.createElement('style');
style.textContent = `
    .swiper-slide.highlighted {
        transform: scale(1.05);
        box-shadow: 0 0 20px rgba(255,255,255,0.3);
        z-index: 2;
    }
`;
document.head.appendChild(style);

    
    document.addEventListener('DOMContentLoaded', function() {
        const hamburgerBtn = document.querySelector('.hamburger-button');
        const menuOverlay = document.querySelector('.menu-overlay');
        const sidebar = document.querySelector('.sidebar');
        
        function toggleMenu() {
            hamburgerBtn.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            sidebar.classList.toggle('active');
            
            // Toggle aria-expanded
            const isExpanded = hamburgerBtn.classList.contains('active');
            hamburgerBtn.setAttribute('aria-expanded', isExpanded);
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = isExpanded ? 'hidden' : '';
        }
        
        // Toggle menu on button click
        hamburgerBtn.addEventListener('click', toggleMenu);
        
        // Close menu when clicking overlay
        menuOverlay.addEventListener('click', toggleMenu);
        
        // Handle escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && sidebar.classList.contains('active')) {
                toggleMenu();
            }
        });
        
        // Prevent touch events from bleeding through the overlay
        menuOverlay.addEventListener('touchmove', function(e) {
            e.preventDefault();
        }, { passive: false });
        
        // Handle swipe to close
        let touchStartX = 0;
        let touchEndX = 0;
        
        sidebar.addEventListener('touchstart', function(e) {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });
        
        sidebar.addEventListener('touchmove', function(e) {
            touchEndX = e.touches[0].clientX;
        }, { passive: true });
        
        sidebar.addEventListener('touchend', function() {
            const swipeThreshold = 100;
            const swipeDistance = touchStartX - touchEndX;
            
            if (swipeDistance > swipeThreshold) {
                toggleMenu();
            }
        }, { passive: true });
    });



    document.addEventListener('DOMContentLoaded', function() {
        // ... (código anterior do menu permanece o mesmo) ...

        // Elementos do Logout
        const logoutBtn = document.getElementById('logout-btn');
        const logoutModal = document.getElementById('logout-modal');
        const confirmLogoutBtn = document.getElementById('confirm-logout');
        const cancelLogoutBtn = document.getElementById('cancel-logout');

        // Função para mostrar o modal
        function showLogoutModal() {
            logoutModal.classList.add('active');
        }

        // Função para esconder o modal
        function hideLogoutModal() {
            logoutModal.classList.remove('active');
        }

        // Função para realizar o logout
        function performLogout() {
            // Aqui você pode adicionar lógica adicional de logout como:
            // - Limpar localStorage/sessionStorage
            // - Fazer uma requisição para o backend para invalidar a sessão
            // - Limpar cookies
            
            localStorage.clear(); // Limpa o localStorage
            sessionStorage.clear(); // Limpa o sessionStorage
            
            // Redireciona para a página de login
            window.location.href = 'login.html';
        }

        // Event Listeners
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showLogoutModal();
        });

        confirmLogoutBtn.addEventListener('click', performLogout);
        
        cancelLogoutBtn.addEventListener('click', hideLogoutModal);

        // Fechar modal ao clicar fora
        logoutModal.addEventListener('click', function(e) {
            if (e.target === logoutModal) {
                hideLogoutModal();
            }
        });

        // Fechar modal com tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && logoutModal.classList.contains('active')) {
                hideLogoutModal();
            }
        });
    });




    
   

    // Inicialização do Swiper
    const swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    
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




    
   
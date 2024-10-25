
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

    // Toggle Sidebar
    // document.getElementById('sidebarToggle').addEventListener('click', function() {
    //     document.getElementById('sidebar').classList.toggle('active');
    // });


    document.addEventListener('DOMContentLoaded', function() {
        // Elementos
        const hamburgerButton = document.getElementById('sidebarToggle');
        const sidebar = document.getElementById('sidebar');
        const menuOverlay = document.getElementById('menuOverlay');
        const menuItems = document.querySelectorAll('.menu-item');
        const content = document.getElementById('content');
        
        // Estado do menu
        let isFullScreen = false;
        
        // Função para verificar tela cheia
        function checkFullScreen() {
            isFullScreen = document.fullscreenElement || 
                          document.webkitFullscreenElement || 
                          document.mozFullScreenElement || 
                          document.msFullscreenElement;
                          
            if (isFullScreen && sidebar.classList.contains('active')) {
                toggleMenu();
            }
        }
        
        // Função para toggle do menu
        function toggleMenu() {
            if (isFullScreen) return; // Não abre se estiver em tela cheia
            
            hamburgerButton.classList.toggle('active');
            sidebar.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            content.classList.toggle('sidebar-active');
            
            // Adiciona classe para animação do conteúdo
            if (window.innerWidth >= 1024) {
                content.style.transform = sidebar.classList.contains('active') 
                    ? 'translateX(0)' 
                    : 'translateX(-300px)';
            }
            
            // Previne scroll quando menu está aberto no mobile
            if (window.innerWidth < 1024) {
                document.body.style.overflow = sidebar.classList.contains('active') 
                    ? 'hidden' 
                    : '';
            }
        }
        
        // Event Listeners
        hamburgerButton.addEventListener('click', toggleMenu);
        menuOverlay.addEventListener('click', toggleMenu);
        
        // Monitora mudanças de tela cheia
        document.addEventListener('fullscreenchange', checkFullScreen);
        document.addEventListener('webkitfullscreenchange', checkFullScreen);
        document.addEventListener('mozfullscreenchange', checkFullScreen);
        document.addEventListener('MSFullscreenChange', checkFullScreen);
        
        // Fecha menu ao clicar em um item
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth < 1024 || isFullScreen) {
                    toggleMenu();
                }
            });
            
            // Adiciona efeito de ripple ao clicar
            item.addEventListener('click', function(e) {
                let ripple = document.createElement('div');
                ripple.className = 'ripple';
                this.appendChild(ripple);
                
                let rect = this.getBoundingClientRect();
                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;
                
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
        
        // Atualiza item ativo do menu com animação suave
        function updateActiveMenuItem() {
            const scrollPosition = window.pageYOffset;
            
            document.querySelectorAll('section').forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionBottom = sectionTop + section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    menuItems.forEach(item => {
                        const link = item.querySelector('a');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            item.classList.add('active');
                            // Animação suave do ícone
                            const icon = link.querySelector('i');
                            icon.style.transform = 'scale(1.2)';
                            setTimeout(() => {
                                icon.style.transform = 'scale(1)';
                            }, 200);
                        } else {
                            item.classList.remove('active');
                        }
                    });
                }
            });
        }
        
        // Smooth scroll com efeito de easing
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Event listeners
        window.addEventListener('scroll', updateActiveMenuItem);
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (window.innerWidth >= 1024) {
                    content.style.transform = '';
                }
            }, 250);
        });
        
        // Inicialização
        updateActiveMenuItem();
    });
    

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

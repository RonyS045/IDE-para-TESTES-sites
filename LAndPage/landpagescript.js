
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

    
// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do Menu
    const hamburgerButton = document.querySelector('.hamburger-button');
    const menuOverlay = document.querySelector('.menu-overlay');
    const sidebar = document.querySelector('.sidebar');
    const logoutBtn = document.getElementById('logout-btn');

    // Criar Modal de Confirmação
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Confirmar Saída</h3>
            <p>Tem certeza que deseja sair?</p>
            <div class="modal-buttons">
                <button class="modal-btn confirm-btn">Confirmar</button>
                <button class="modal-btn cancel-btn">Cancelar</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Toggle menu
    function toggleMenu() {
        hamburgerButton.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        sidebar.classList.toggle('active');
    }

    // Função de logout
    function logout() {
        // Aqui você pode adicionar a lógica de logout do seu sistema
        // Por exemplo, limpar localStorage, sessionStorage, cookies, etc.
        localStorage.clear();
        sessionStorage.clear();
        
        // Redirecionar para a página de login
        window.location.href = 'login.html';
    }

    // Event Listeners
    hamburgerButton.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);

    // Logout com confirmação
    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.add('active');
    });

    // Botões do Modal
    const confirmBtn = modal.querySelector('.confirm-btn');
    const cancelBtn = modal.querySelector('.cancel-btn');

    confirmBtn.addEventListener('click', function() {
        logout();
    });

    cancelBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    // Fechar modal clicando fora
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Adicionar marca de item ativo no menu
    document.querySelectorAll('.menu-item a').forEach(link => {
        if (link.href === window.location.href) {
            link.parentElement.classList.add('active');
        }
    });
});

   
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

// Selecionar elementos do DOM
const video = document.getElementById('meuVideo');
const videoURL = document.getElementById('videoURL');
const loadVideoBtn = document.getElementById('loadVideoBtn');
const videoFile = document.getElementById('videoFile');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const replayBtn = document.getElementById('replayBtn');

// Função para carregar vídeo de URL
loadVideoBtn.addEventListener('click', () => {
    const url = videoURL.value;
    
    // Verifica se o campo URL não está vazio
    if (url) {
        video.src = url;
        video.load();  // Carrega o novo vídeo
        video.play();  // Inicia a reprodução automaticamente
    } else {
        alert("Por favor, insira uma URL válida.");
    }
});

// Função para carregar vídeo local
videoFile.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const fileURL = URL.createObjectURL(file);
    
    // Carrega o vídeo local no player
    video.src = fileURL;
    video.load();  // Carrega o vídeo local
    video.play();  // Inicia a reprodução automaticamente
});

// Função para iniciar o vídeo
playBtn.addEventListener('click', () => {
    video.play();
});

// Função para pausar o vídeo
pauseBtn.addEventListener('click', () => {
    video.pause();
});

// Função para reiniciar o vídeo
replayBtn.addEventListener('click', () => {
    video.currentTime = 0;
    video.play();
});

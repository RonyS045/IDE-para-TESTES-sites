document.addEventListener('DOMContentLoaded', () => {
    // Código para o slideshow 3D


    // FORMULARIO

    class ContactForm {
        constructor() {
            this.form = document.getElementById('contactForm');
            this.submitBtn = this.form.querySelector('.submit-btn');
            this.formStatus = document.querySelector('.form-status');
            this.inputs = this.form.querySelectorAll('input, textarea');
            this.isSubmitting = false;
    
            this.initializeForm();
        }
    
        initializeForm() {
            // Adiciona listeners para validação em tempo real
            this.inputs.forEach(input => {
                input.addEventListener('input', () => this.validateInput(input));
                input.addEventListener('blur', () => this.validateInput(input));
            });
    
            // Listener para submit do formulário
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
            // Validação inicial para habilitar/desabilitar botão
            this.validateForm();
        }
    
        validateInput(input) {
            const errorElement = input.closest('.input-wrapper').querySelector('.error-message');
            let isValid = true;
            let errorMessage = '';
    
            // Remove espaços extras
            input.value = input.value.trim();
    
            // Validações específicas por tipo de campo
            switch(input.name) {
                case 'name':
                    if (input.value.length < 2) {
                        isValid = false;
                        errorMessage = 'O nome deve ter pelo menos 2 caracteres';
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{2,}$/.test(input.value)) {
                        isValid = false;
                        errorMessage = 'O nome deve conter apenas letras';
                    }
                    break;
    
                case 'email':
                    if (!validator.isEmail(input.value)) {
                        isValid = false;
                        errorMessage = 'Por favor, insira um email válido';
                    }
                    break;
    
                case 'message':
                    if (input.value.length < 10) {
                        isValid = false;
                        errorMessage = 'A mensagem deve ter pelo menos 10 caracteres';
                    } else if (input.value.length > 1000) {
                        isValid = false;
                        errorMessage = 'A mensagem deve ter no máximo 1000 caracteres';
                    }
                    break;
            }
    
            // Atualiza o estado de validação do campo
            input.setAttribute('aria-invalid', !isValid);
            errorElement.textContent = errorMessage;
    
            // Atualiza estado do botão submit
            this.validateForm();
    
            return isValid;
        }
    
        validateForm() {
            const isValid = Array.from(this.inputs).every(input => this.validateInput(input));
            this.submitBtn.disabled = !isValid;
            return isValid;
        }
    
        showStatus(type, message) {
            this.formStatus.className = `form-status ${type}`;
            this.formStatus.textContent = message;
            this.formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    
        clearStatus() {
            this.formStatus.className = 'form-status';
            this.formStatus.textContent = '';
        }
    
        async handleSubmit(e) {
            e.preventDefault();
    
            if (this.isSubmitting || !this.validateForm()) {
                return;
            }
    
            this.isSubmitting = true;
            this.submitBtn.classList.add('loading');
            this.clearStatus();
    
            const formData = new FormData(this.form);
    
            try {
                const response = await fetch('submit_form.php', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                });
    
                const data = await response.json();
    
                if (!response.ok) {
                    throw new Error(data.error || 'Ocorreu um erro ao enviar a mensagem');
                }
    
                // Sucesso
                this.showStatus('success', 'Mensagem enviada com sucesso! Entraremos em contato em breve.');
                this.form.reset();
                this.inputs.forEach(input => this.validateInput(input));
    
            } catch (error) {
                this.showStatus('error', error.message || 'Ocorreu um erro ao enviar a mensagem. Tente novamente.');
                console.error('Error:', error);
            } finally {
                this.submitBtn.classList.remove('loading');
                this.isSubmitting = false;
            }
        }
    }
    
    // Inicializa o formulário quando o DOM estiver pronto
    document.addEventListener('DOMContentLoaded', () => {
        new ContactForm();
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



let toggler = document.getElementById("switch");

toggler.addEventListener("click", () => {
  //   if (toggler.checked === true) {
  //     document.body.style.backgroundColor = "black";
  //   } else {
  //     document.body.style.backgroundColor = "white";
  //   }

  toggler.checked === true
    ? (document.body.style.backgroundColor = "black")
    : (document.body.style.backgroundColor = "white");
});



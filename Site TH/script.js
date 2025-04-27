const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');
const galleryImages = document.querySelectorAll('.gallery-img');

galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = 'flex';
        modalImg.src = this.src;
    });
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

const translations = {
    'pt-br': {
        'development': 'Obs: Twilight Haven está em fase de desenvolvimento. Estamos trabalhando para trazer uma experiência única de narrativa e conexão humana. Fique ligado para atualizações!',
        'about-title': '"Bem-vindo, sente-se e relaxe."',
        'about-p1': 'Em Twilight Haven, você joga como o único proprietário e barman de um pequeno bar que abre apenas à noite, localizado em uma rua tranquila de uma metrópole conhecida como a “Capital do Mundo”, Luminance. Ao longo de suas noites, você receberá uma variedade de clientes de diferentes raças e etnias, cada um trazendo consigo suas próprias histórias, desafios e desejos. Como protagonista, você terá a oportunidade de ouvir, aconselhar e interagir com essas pessoas, enquanto prepara bebidas que refletem suas personalidades e emoções.',
        'about-p2': 'À medida que as noites passam, suas escolhas nas interações moldarão suas relações e o ambiente do bar. O que você diz — ou não diz — pode aproximar as pessoas ou afastá-las, e até mudar suas vidas de maneiras inesperadas. Twilight Haven é um jogo sobre conexões humanas, escolhas significativas e o poder de uma conversa sincera em meio à correria da vida moderna.',
        'features-title': 'Características do jogo:',
        'features-p1': '• Clientes únicos de diferentes origens, incluindo humanos, elfos e outras criaturas místicas, todos com histórias para compartilhar.<br>• Escolhas significativas que afetam as relações e o ambiente do bar.<br>• Preparação de bebidas que refletem as emoções dos clientes.<br>• Uma trilha sonora relaxante para acompanhar as noites.<br>• Um ambiente acolhedor para relaxar e ouvir, com visuais inspirados em pixel art.',
        'buy-title': 'Demo Disponível',
        'buy-text': 'Baixar Twilight Haven',
        'buy-btn': 'Baixe Agora',
        'gallery-title': 'Screenshots',
        'footer-text': '© 2025 ZaroVerse. Todos os direitos reservados.'
    },
    'en': {
        'development': 'Note: Twilight Haven is currently in development. We are working to bring a unique narrative and human connection experience. Stay tuned for updates!',
        'about-title': '"Welcome, sit back and relax."',
        'about-p1': 'In Twilight Haven, you play as the sole owner and bartender of a small bar that opens only at night, located on a quiet street in a metropolis known as the "Capital of the World," Luminance. Throughout your nights, you will receive a variety of customers from different races and ethnicities, each bringing their own stories, challenges, and desires. As the protagonist, you will have the opportunity to listen, advise, and interact with these people while preparing drinks that reflect their personalities and emotions.',
        'about-p2': 'As the nights go by, your choices in interactions will shape your relationships and the bar’s atmosphere. What you say — or don’t say — can bring people closer or push them away, and even change their lives in unexpected ways. Twilight Haven is a game about human connections, meaningful choices, and the power of a heartfelt conversation amidst the hustle of modern life.',
        'features-title': 'Game features:',
        'features-p1': '• Unique customers from diverse backgrounds, including humans, elves, and other mystical creatures, all with stories to share.<br>• Meaningful choices that affect relationships and the bar’s atmosphere.<br>• Crafting drinks that reflect customers’ emotions.<br>• A relaxing soundtrackto accompany the nights.<br>• A cozy environment to relax and listen, with visuals inspired by pixel art.',
        'buy-title': 'Demo Available',
        'buy-text': 'Download Twilight Haven', 
        'buy-btn': 'Download Now',
        'gallery-title': 'Screenshots',
        'footer-text': '© 2025 ZaroVerse. All rights reserved.'
    }
};

function animateOnScroll() {
    const elements = document.querySelectorAll('.section h2, .column p, .buy-item p, footer p, .buy-item, .gallery-img');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            element.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

function changeLanguage(lang) {
    document.body.setAttribute('data-lang', lang);
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        element.innerHTML = translations[lang][key]; 
    });
}

document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        changeLanguage(lang);
    });
});
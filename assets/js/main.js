const entrarMenu = document.querySelector('#entrar-menu');
const sairMenu = document.querySelector('#sair-menu');
const menuMobile = document.querySelector('.itens-menu-mobile');
const body = document.body;

entrarMenu.addEventListener('click', () => {
    menuMobile.classList.add('show-menu');
    body.classList.add('no-scroll');
    disableScroll();
});

sairMenu.addEventListener('click', () => {
    menuMobile.classList.remove('show-menu');
    body.classList.remove('no-scroll');
    enableScroll();
});

function disableScroll() {
    body.style.overflow = 'hidden';
}

function enableScroll() {
    body.style.overflow = 'auto';
}
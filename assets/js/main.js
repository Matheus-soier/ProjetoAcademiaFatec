const entrarMenu = document.querySelector('#entrar-menu');
const sairMenu = document.querySelector('#sair-menu');
const menuMobile = document.querySelector('.itens-menu-mobile');

entrarMenu.addEventListener('click', () => {
    menuMobile.classList.add('show-menu');
});

sairMenu.addEventListener('click', () => {
    menuMobile.classList.remove('show-menu');
});


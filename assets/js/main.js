const entrarMenu = document.querySelector('#entrar-menu');
const sairMenu = document.querySelector('#sair-menu');
const menuMobile = document.querySelector('.itens-menu-mobile');

entrarMenu.addEventListener('click', () => {
    if(menuMobile.style.display === 'none' || menuMobile.style.display === '') {
        menuMobile.style.display = 'flex';
    }
})

sairMenu.addEventListener('click', () => {
    if(menuMobile.style.display === 'flex') {
        menuMobile.style.display = 'none';
    }
})
const botao = document.querySelector('div#menuresp');
const menu = document.querySelector('div#menu');
const links = document.querySelectorAll('a.link')

function acionaMenu() {
    menu.classList.toggle('hidemenu');
    links.forEach((i) => {
        i.addEventListener('click', acionaMenu);
    });
}
botao.addEventListener('click', acionaMenu);





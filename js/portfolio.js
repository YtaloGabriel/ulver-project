const slide = document.querySelector('#portfolio');
const imagens = document.querySelectorAll('div.slideimg');
const titulos = document.querySelectorAll('h3.pit_tit');
const subtits = document.querySelectorAll('p.pit_sub');
const prev = document.querySelector('span#prev');
const next = document.querySelector('span#next');
let tempo = 5000;
let contador = 0;

function slideActive() {
    imagens[0].classList.add('active');
    titulos[0].classList.add('active');
    subtits[0].classList.add('active');
}
window.addEventListener('load', slideActive);
let timer = setInterval(passar, tempo);

function voltar() { 
    clearInterval(timer);
    imagens.forEach((img) => {
        img.classList.remove('active')
    });
    titulos.forEach((tit) => {
        tit.classList.remove('active')
    });
    subtits.forEach((sub) => {
        sub.classList.remove('active')
    });
    contador--;
    if (contador < 0) {
        contador = imagens.length -1
    };
    imagens[contador].classList.add('active');
    titulos[contador].classList.add('active');
    subtits[contador].classList.add('active');
    timer = setInterval(passar, tempo);
}

function passar() {
    clearInterval(timer);
    imagens.forEach((img) => {
        img.classList.remove('active')
    });
    titulos.forEach((tit) => {
        tit.classList.remove('active')
    });
    subtits.forEach((sub) => {
        sub.classList.remove('active')
    });
    contador++;
    if (contador > imagens.length - 1) {
        contador = 0
    };
    imagens[contador].classList.add('active');
    titulos[contador].classList.add('active');
    subtits[contador].classList.add('active');
    timer = setInterval(passar, tempo);
}

prev.addEventListener('click', voltar);
next.addEventListener('click', passar);
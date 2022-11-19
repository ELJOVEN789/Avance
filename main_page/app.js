//IDIOMA PAGINA PRINCIPAL
var check = document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="../en/ingles.html";
    }else{
        location.href="../main_page/index.html";
    }
}
//MODO OSCURO
const oscuro = document.querySelector('#change');

oscuro.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    oscuro.classList.toggle('active');
});
//ANIMACION TITULOS
const watch = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('look');
        }else {
            entry.target.classList.remove('look');
        }
    });
});

const title = document.querySelectorAll('.section');
title.forEach((el) => watch.observe(el));
//ANIMACION CUADROS DE TEXTO
const observa = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('ver');
        }else {
            entry.target.classList.remove('ver');
        }
    });
});

const contenido = document.querySelectorAll('.see');
contenido.forEach((el) => observa.observe(el));
//ANIMACION AGRADECIMIENTOS
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});

const elements = document.querySelectorAll('.thanks');
elements.forEach((el) => observer.observe(el));
//AUDIO INSTRUMENTOS
function piano(){
    var instrumento1 = new Audio("../Utils/audio/piano.wav");
    instrumento1.play();
}

function violin(){
    var instrumento2 = new Audio("../Utils/audio/violin.wav");
    instrumento2.play();
}

function trompeta(){
    var instrumento3 = new Audio("../Utils/audio/trompeta.mp3");
    instrumento3.play();
}

function bateria(){
    var instrumento4 = new Audio("../Utils/audio/bateria.mp3");
    instrumento4.play();
}

function flauta(){
    var instrumento5 = new Audio("../Utils/audio/flauta.wav");
    instrumento5.play();
}

function presentacion(){
    var intro = new Audio("../Utils/audio/presentacion.mp3");
    intro.play();
}
//PRESENTACION MIA DE LA PAGINA
function presentation(){
    var intro1 = new Audio("../Utils/audio/presentation.mp3");
    intro1.play();
}
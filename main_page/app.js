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

const title = document.querySelectorAll('.section__animation');
title.forEach((el) => watch.observe(el));

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
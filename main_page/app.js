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

//AUDIO EASTER-EGG1

function celebration(){
    var cheer = new Audio("../Utils/audio/celebracion.wav");
    cheer.play();
}

//AUDIO EASTER-EGG2

function treasure(){
    var gold = new Audio("../Utils/audio/cofre.wav");
    gold.play();
}

//AUDIO EASTER-EGG3

function money(){
    var cash = new Audio("../Utils/audio/dinero.wav");
    cash.play();
}

//AUDIO EASTER-EGG4

function child(){
    var kid = new Audio("../Utils/audio/nina.wav");
    kid.play();
}



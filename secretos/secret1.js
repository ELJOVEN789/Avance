//IDIOMA EASTER-EGG1

var check1 = document.querySelector(".check1");
check1.addEventListener('click',idioma1);

function idioma1(){
    let id=check1.checked;
    if(id==true){
        location.href="../en/easter-egg1English.html";
    }else{
        location.href="../main_page/easter-egg1.html";
    }
}

//AUDIO EASTER-EGG1

function celebration(){
    var cheer = new Audio("../Utils/audio/celebracion.wav");
    cheer.play();
}
//IDIOMA SECRETO DIO

var bizarre = document.querySelector(".jojo");
bizarre.addEventListener('click',adventure);

function adventure(){
    let id=bizarre.checked;
    if(id==true){
        location.href="troleoEnglish.html";
    }else{
        location.href="troleo.html";
    }
}

//AUDIO TROLEO

function dio(){
    var jojo = new Audio("../Utils/audio/KONO DIO DA.mp3");
    jojo.play();
}
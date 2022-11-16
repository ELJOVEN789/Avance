//IDIOMA EASTER-EGG4

var check4 = document.querySelector(".check4");
check4.addEventListener('click',idioma4);

function idioma4(){
    let id=check4.checked;
    if(id==true){
        location.href="../en/easter-egg4English.html";
    }else{
        location.href="../main_page/easter-egg4.html";
    }
}

//AUDIO EASTER-EGG4

function child(){
    var kid = new Audio("../Utils/audio/nina.wav");
    kid.play();
}
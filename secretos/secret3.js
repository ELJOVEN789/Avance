//IDIOMA EASTER-EGG3

var check3 = document.querySelector(".check3");
check3.addEventListener('click',idioma3);

function idioma3(){
    let id=check3.checked;
    if(id==true){
        location.href="../en/easter-egg3English.html";
    }else{
        location.href="../main_page/easter-egg3.html";
    }
}

//AUDIO EASTER-EGG3

function money(){
    var cash = new Audio("../Utils/audio/dinero.wav");
    cash.play();
}
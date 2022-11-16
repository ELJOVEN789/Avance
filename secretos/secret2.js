//IDIOMA EASTER-EGG2

var check2 = document.querySelector(".check2");
check2.addEventListener('click',idioma2);

function idioma2(){
    let id=check2.checked;
    if(id==true){
        location.href="../en/easter-egg2English.html";
    }else{
        location.href="../main_page/easter-egg2.html";
    }
}

//AUDIO EASTER-EGG2

function treasure(){
    var gold = new Audio("../Utils/audio/cofre.wav");
    gold.play();
}
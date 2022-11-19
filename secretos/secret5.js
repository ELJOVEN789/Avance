//IDIOMA EASTER-EGG5

var check5 = document.querySelector(".check5");
check5.addEventListener('click',idioma5);

function idioma5(){
    let id=check5.checked;
    if(id==true){
        location.href="../en/easter-egg5English.html";
    }else{
        location.href="../main_page/easter-egg5.html";
    }
}
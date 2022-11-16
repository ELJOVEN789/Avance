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
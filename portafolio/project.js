var marca = document.querySelector(".marca");
marca.addEventListener('click',proyecto);

function proyecto(){
    let id=marca.checked;
    if(id==true){
        location.href="projects.html";
    }else{
        location.href="portafolio.html";
    }
}
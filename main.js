let linkGenerate = document.querySelector('.header-right > a');

let linkClear = document.querySelector('.close');

let hamburgerMenu = document.querySelector('.hamburger-menu');

/*Event listener*/
    /*Apertura*/
linkGenerate.addEventListener('click' , function(){
    let hamMenu = hamburgerMenu.value;

    hamburgerMenu.style.display = "block";
    
})
    /*Chiusura*/
linkClear.addEventListener('click' , function() {
    hamburgerMenu.style.display = "none";
})
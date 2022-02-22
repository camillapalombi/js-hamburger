let linkGenerate = document.querySelector('.header-right > a');

let linkClear = document.querySelector('.close');

let hamburgerMenu = document.querySelector('.hamburger-menu');

/*Event listener*/

linkGenerate.addEventListener('click' , function(){
    let hamMenu = hamburgerMenu.value;

    hamburgerMenu.style.display = "block";
    
})
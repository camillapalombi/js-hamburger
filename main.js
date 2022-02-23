let linkGenerate = document.querySelector('.header-right > a');

let linkClear = document.querySelector('.close');

let hamburgerMenu = document.querySelector('.hamburger-menu');


/*Event listener*/
    /*Apertura*/
linkGenerate.addEventListener('click' , function(){
    
    //hamburgerMenu.style.display = 'block';

    hamburgerMenu.classList.add('active');
    
})

    /*Chiusura*/
linkClear.addEventListener('click' , function() {
   
    //hamburgerMenu.style.display = 'none';

    hamburgerMenu.classList.remove('active');

})
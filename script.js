window.onscroll = function (e) {  
    var menu = document.querySelector(".barra-nav");
    menu.classList.toggle("cambiar-fondo", window.scrollY>0);
  } 


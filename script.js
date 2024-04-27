// CODIGO CREADO PARA EL CAMBIO DE COLOR DE FONDO DEL MENÚ DE NAVEGACIÓN
window.onscroll = function (e) {  
    var menu = document.querySelector(".barra-nav");
    menu.classList.toggle("cambiar-fondo", window.scrollY>0);
} 


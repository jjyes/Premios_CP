
//BOTON TOP (ARRIBA)
var mybutton = document.getElementById("btnarriba");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnarriba.style.display = "block";
  } else {
    btnarriba.style.display = "none";
  }
}
function arribaFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//FUNCION DEL SUB MENU DE SEDES DEL FESTIVAL
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
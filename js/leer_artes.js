function leer() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("mas");
  var btnText = document.getElementById("btn_leer");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Leer mas"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Leer menos"; 
    moreText.style.display = "inline";
  }
}
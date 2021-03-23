function tabtaller(evt, cityName) {
  
    var i, tabcontent, tablinks;
   
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("Seleccionado").click();
 
 /*NUMERO #2*/

 function tabtaller2(evento, actividad) {
  
    var i, tabcontent2, tablinks2;
   
    tabcontent2 = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent2.length; i++) {
      tabcontent2[i].style.display = "none";
    }

    tablinks2 = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks2.length; i++) {
      tablinks2[i].className = tablinks2[i].className.replace(" active", "");
    }
    document.getElementById(actividad).style.display = "block";
    evento.currentTarget.className += " active";
  }
  
  document.getElementById("Seleccionado2").click();


  /*NUMERO #3*/
 function tabtaller3(evento3, actividad3) {
  
    var i, tabcontent3, tablinks3;
   
    tabcontent3 = document.getElementsByClassName("tabcontent3");
    for (i = 0; i < tabcontent3.length; i++) {
      tabcontent3[i].style.display = "none";
    }

    tablinks3 = document.getElementsByClassName("tablinks3");
    for (i = 0; i < tablinks3.length; i++) {
      tablinks3[i].className = tablinks3[i].className.replace(" active", "");
    }
    document.getElementById(actividad3).style.display = "block";
    evento3.currentTarget.className += " active";
  }
  
  document.getElementById("Seleccionado3").click();

  /*NUMERO #4*/
 function tabtaller4(evento4, actividad4) {
  
    var i, tabcontent4, tablinks4;
   
    tabcontent4 = document.getElementsByClassName("tabcontent4");
    for (i = 0; i < tabcontent4.length; i++) {
      tabcontent4[i].style.display = "none";
    }

    tablinks4 = document.getElementsByClassName("tablinks4");
    for (i = 0; i < tablinks4.length; i++) {
      tablinks4[i].className = tablinks4[i].className.replace(" active", "");
    }
    document.getElementById(actividad4).style.display = "block";
    evento4.currentTarget.className += " active";
  }
  
  document.getElementById("Seleccionado4").click();


var slideIndex = 0;

showSlide();

 var timer = setInterval(showSlide, 2000);

var slideContainer = document.getElementById('slideshow-container');
var slideControl = document.getElementById('slide-control');

slideContainer.onmouseover = function() {
    clearInterval(timer);
}

slideControl.onmouseover = function() {
    clearInterval(timer);
}

slideContainer.onmouseleave = function() {
     timer = setInterval(showSlide, 2000);
}

slideControl.onmouseleave = function() {
     timer = setInterval(showSlide, 2000);
}

function showSlide() {
    var i;
    var slides = document.getElementsByClassName('slide-item');
    var dots = document.getElementsByClassName('dot');
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function chooseSlide(n) {
    slideIndex = n;
    showSlide();
    clearInterval(timer);
}



/**/
$(document).ready(function(){
    $('.carousel') .owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items: 1,
                nav:false
            },
             600:{
                items:2,
                nav:false

            },
             1000:{
                items:3,
                nav:false
            }
        }
    
    });
});
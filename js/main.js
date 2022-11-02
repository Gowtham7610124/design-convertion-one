$(function() {
  $("li").click(function() {
     // remove classes from all
     $("li").removeClass("active");
     // add class to the one we clicked
     $(this).addClass("active");
  });
});
$(function() {
  $("li1").click(function() {
     // remove classes from all
     $("li1").removeClass("active");
     // add class to the one we clicked
     $(this).addClass("active");
  });
});


// scroll to the page
$("#li1").click(function() {
  $('html, body').animate({
      scrollTop:        $(".nav_sec2").offset().top-66
  }, 1000);
return false;
});

$("#li2").click(function() {
  $('html, body').animate({
      scrollTop:        $(".whatWeDo").offset().top-66
  }, 1000);
return false;
});

$("#li3").click(function() {
  $('html, body').animate({
      scrollTop:        $(".testimonials").offset().top-66
  }, 1000);
return false;
});

$("#li4").click(function() {
  $('html, body').animate({
      scrollTop:        $(".aboutCompany").offset().top-66
  }, 1000);
return false;
});
// slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  
}

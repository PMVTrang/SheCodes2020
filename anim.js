var slideIndex = 1;
      showSlides(slideIndex);
      
      // Next/previous controls
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slide-photo");
        if (n > slides.length) {slideIndex = 1}
        if (n <= 0) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 2000); //milliseconds
      }
var slideIndex = 0;
var slideIndex1 = 0;
showSlides();
showSlides2();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Increment slideIndex and reset if it exceeds the number of slides
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Display the current slide
  slides[slideIndex - 1].style.display = "block";
  
  // Change slide every 3 seconds (3000 milliseconds)
  setTimeout(showSlides, 3000);
  
}

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Increment slideIndex and reset if it exceeds the number of slides
  slideIndex1++;
  if (slideIndex1 > slides.length) {
    slideIndex1 = 1;
  }
  
  // Display the current slide
  slides[slideIndex1 - 1].style.display = "block";
  
  // Change slide every 3 seconds (3000 milliseconds)
  setTimeout(showSlides2, 3000);
  
}





function showTable(tableId) {
  var image = document.getElementById("myImage");
  var tables = document.getElementsByTagName("table");

  if (image.style.display !== "none") {
    image.style.display = "none";
  }
  
  for (var i = 0; i < tables.length; i++) {
    if (tables[i].id === tableId) {
      tables[i].style.display = "table";
    } else {
      tables[i].style.display = "none";
    }
  }
}
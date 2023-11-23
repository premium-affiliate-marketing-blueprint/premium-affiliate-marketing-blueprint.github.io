let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the next slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}

// Start the slideshow
showSlides();

function buttonMessage () {
  alert("Contact your coach to give you access to this training");
}

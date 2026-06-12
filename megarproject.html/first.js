

let slideIndex = 1;

// Function to control the slides and dots visibility
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Handle wrap-around logic (looping back to the start or end)
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length; 
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the 'active' class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and mark the current dot as active
    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}

// Next/previous controls (called by HTML buttons using onclick="plusSlides(1)" or onclick="plusSlides(-1)")
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Dot/Thumbnail controls (called by HTML dots using onclick="currentSlide(1)", etc.)
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Automatically initialize the slideshow once the page structure is ready
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});





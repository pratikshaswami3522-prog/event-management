
/**
 * =========================================================
 * Project JavaScript: first.js
 * Contains logic for Slideshow, Form Submission, and Navigation.
 * =========================================================
 */

// Global variable for the slideshow index
let slideIndex = 1;

/**
 * 1. Image Slideshow Functionality
 * Handles the display logic for the .slideshow-container.
 */

// Function to control the slides and dots visibility
function showSlides(n) {
    let i;
    // Get all slides and dots elements
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Handle wrap-around logic (looping back to the start or end)
    if (n > slides.length) {
        slideIndex = 1; // Go back to the first slide
    }
    if (n < 1) {
        slideIndex = slides.length; // Go to the last slide
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


/**
 * =========================================================
 * 2. Event Listeners (Runs once the entire page is loaded)
 * =========================================================
 */
document.addEventListener('DOMContentLoaded', () => {
    // A. Initialize the slideshow
    showSlides(slideIndex);

    // B. Attach event listeners to the dots (already set up in HTML but good practice to ensure they work)
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].onclick = () => currentSlide(i + 1);
    }

    // C. Form Submission Functionality
    const contactForm = document.querySelector('.contact form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop the default form submission (page refresh)

            // 1. Collect form data
            const name = contactForm.querySelector('input[placeholder="name"]').value;
            const email = contactForm.querySelector('input[placeholder="email"]').value;
            const number = contactForm.querySelector('input[placeholder="number"]').value;
            const subject = contactForm.querySelector('input[placeholder="subject"]').value;
            const message = contactForm.querySelector('textarea[placeholder="your message"]').value;

            // 2. Simple Validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields to send your message.');
                return;
            }

            // 3. Simulated Success Message (Real data saving requires a backend)
            console.log('--- Contact Form Data Captured (Simulated) ---');
            console.log(`Name: ${name}`);
            // ... (rest of data logging)
            
            alert('धन्यवाद! Your message has been received! We will contact you soon.');
            
            // 4. Clear the form
            contactForm.reset();
        });
    }

    // D. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's the generic '#' which doesn't point to a section (like some generic buttons)
            if (href === "#") {
                e.preventDefault();
                return;
            }
            
            e.preventDefault();

            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});





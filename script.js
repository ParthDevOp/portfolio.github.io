var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var pan = document.getElementById("pannel");
var hamburgerIcon = document.querySelector(".fa-bars");
var closeIcon = document.querySelector(".fa-xmark");

// Function to open and close the mobile menu
function openmenu() {
  pan.style.right = "0"; // Show the menu
  hamburgerIcon.style.display = "none";
  closeIcon.style.display = "block";
}

function closemenu() {
  pan.style.right = "-200px"; // Hide the menu
  hamburgerIcon.style.display = "block";
  closeIcon.style.display = "none";
  pan.style.animationDelay = "1.5s";
}

// Function to switch between tabs (Skills, Experience, Education)
function opentab(tabname) {
  // Remove "active-link" class from all tab links
  for (var tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  // Remove "active-tab" class from all tab contents
  for (var tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  // Add "active-link" class to the clicked tab link
  event.currentTarget.classList.add("active-link");

  // Add "active-tab" class to the corresponding tab content
  document.getElementById(tabname).classList.add("active-tab");
}

// contact input

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwj5bC7sizkvSamNDiGGx09z1Ff1Yydco1zPaoPLWciEX-PJbgvwI7DOEsjNrcwFHU9LA/exec";
const form = document.forms["submit-to-google-sheet"];
const popupMsg = document.getElementById("popup-msg");
const popupText = document.getElementById("popup-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Display the popup message
      popupText.textContent =
        "Thank you! Your message has been received. I will get back to you shortly.";
      popupMsg.classList.add("show");

      // Hide the popup after 5 seconds
      setTimeout(() => {
        popupMsg.classList.add("fade-out");
        setTimeout(() => {
          popupMsg.classList.remove("show", "fade-out");
        }, 300); // Additional delay to complete fade-out
      }, 5000);

      // Reset the form
      form.reset();
    })
    .catch((error) => {
      // Display an error message
      popupText.textContent =
        "Oops! Something went wrong. Please try again later.";
      popupMsg.classList.add("show");

      setTimeout(() => {
        popupMsg.classList.add("fade-out");
        setTimeout(() => {
          popupMsg.classList.remove("show", "fade-out");
        }, 300);
      }, 5000);
    });
});





window.addEventListener('load', function() {
  // Wait for 3 seconds before starting the fade-out
  setTimeout(function() {
    var preloader = document.getElementById('preloader');
    
    // Add fade-out class to start the fade-out effect
    preloader.style.transition = 'opacity 1s ease-out'; // Smooth transition for 1 second
    preloader.style.opacity = '0'; // Fade out

    // After 1 second, hide the preloader completely by setting display to none
    setTimeout(function() {
      preloader.style.display = 'none';
    }, 1000); // Matches the duration of the fade-out (1 second)
  }, 1000); // Preloader lasts for 3 seconds before starting to fade out
});

// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Form submission (just demo)
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your message has been sent!");
});

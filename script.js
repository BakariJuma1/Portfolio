document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navMenu");

  hamburger.addEventListener("click", function () {
    // Toggle active class on hamburger
    this.classList.toggle("change");
    // Toggle active class on nav menu
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking on a nav link
  document.querySelectorAll(".navMenu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("change");
      navMenu.classList.remove("active");
    });
  });
});

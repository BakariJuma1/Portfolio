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

const container = document.querySelector(".typeWriter");

const careers = [
  "Web Developer",
  "Freelancer",
  "Designer",
  "Content Creator",
  "Graphic Designer",
];
let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  container.innerHTML = `
    <h1>${careers[careerIndex].slice(0, characterIndex)}</h1>
`;
  characterIndex++;
  setTimeout(updateText, 500);

  if (characterIndex === careers[careerIndex].length + 1) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  // setTimeout(updateText, 1000);
}

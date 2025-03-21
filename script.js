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
  "Software Engineer",
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

// clicking hire me takes you to contact me

const hireMe = document.getElementById("hire");
console.log(hireMe); //testing
hireMe.addEventListener("click", headToContact);

function headToContact() {
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
}

// event on the form submit

const form = document.querySelector("#formContainer");

form.addEventListener("submit", sendMail);
console.log("been clicked");
function sendMail() {
  event.preventDefault();
  let info = {
    name: document.getElementById("name").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_vpruhmn", "template_teums1k", info).then(
    function (response) {
      alert("Email sent successfully!");
      form.reset(); // Clear the form fields
    },
    function (error) {
      alert("Failed to send email. Please try again later.");
    }
  );
}

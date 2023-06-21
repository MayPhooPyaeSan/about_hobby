const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const navLink = document.querySelectorAll(".nav-link");
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
}

const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", () => {
  const nameInput = document.getElementById("nameInput");
  const username = nameInput.value.trim();

  if (username === "") {
    alert("Please enter your name.");
    return;
  }

  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value.trim();

  if (email === "") {
    alert("Please enter your email.");
    return;
  }

  alert(`Welcome, ${username}! We'll be in touch as soon as possible.`);
  alert("Thank you!");

  // Reset the input fields after submission
  nameInput.value = "";
  emailInput.value = "";
});

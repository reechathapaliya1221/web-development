const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  status.textContent = "Message sent successfully! (Demo)";
  status.style.color = "green";
  form.reset();
});

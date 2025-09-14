const professions = ["Web Developer", "Software Engineer", "AI Enthusiast", "Frontend Developer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 80;
const delayBetween = 1000; // wait before deleting

function type() {
  const typingElement = document.getElementById("typing");

  if (!isDeleting && j <= professions[i].length) {
    currentText = professions[i].substring(0, j);
    typingElement.textContent = currentText;
    j++;
    setTimeout(type, typingSpeed);
  } else if (isDeleting && j >= 0) {
    currentText = professions[i].substring(0, j);
    typingElement.textContent = currentText;
    j--;
    setTimeout(type, deletingSpeed);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % professions.length;
    setTimeout(type, delayBetween);
  }
}

type();


//dark and light mode toggle
const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

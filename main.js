// Typing Effect
const text = ["Robotics Engineer", "AI Developer", "Web Developer"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function type() {
  currentText = text[i];
  document.querySelector(".typing").textContent =
    currentText.substring(0, j);

  if (!isDeleting && j < currentText.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Scroll Animation
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Particles
tsParticles.load("particles", {
  particles: {
    number: { value: 50 },
    color: { value: "#1D9E75" },
    links: {
      enable: true,
      color: "#378ADD"
    },
    move: { enable: true, speed: 1 }
  }
});
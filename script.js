document.addEventListener("DOMContentLoaded", () => {
  // 1. Reveal the content by removing .hidden
  const container = document.getElementById("content-container");
  container.classList.remove("hidden");
  container.style.visibility = "visible";
  container.style.opacity = "1";

  // 2. Typing effect logic
  const typingEl = document.getElementById("typing-text");
  const phrases = [
    "14 years old",
    "JavaScript Wizard",
    "Frontend Prodigy",
    "Building God-Level UIs",
    "Dreaming in Code"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    const currentPhrase = phrases[phraseIndex];
    const currentText = currentPhrase.substring(0, charIndex);
    typingEl.textContent = currentText;

    if (!isDeleting && charIndex < currentPhrase.length) {
      charIndex++;
      setTimeout(typeLoop, 100); // Typing speed
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeLoop, 30); // Deleting speed
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeLoop, 500); // Pause before deleting
      } else {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeLoop, 200); // Pause before typing next
      }
    }
  }

  // Start typing loop
  setTimeout(typeLoop, 900);
});

const button = document.getElementById("welcomeBtn");
const message = document.getElementById("welcomeMessage");

button.addEventListener("click", function () {
  message.textContent = "Hello mate ! Welcome to my personal website and Thanks for visiting!";
});

const typingText = document.getElementById("typing-text");

const words = [
  "Welcome 🤗 Stay a while, Explore a Little, Dream big👌"
];

let wordIndex = 0;

function showNextWord() {
  // Fade out and move left
  typingText.style.transition = "opacity 1.5s ease, transform 1.5s ease";
  typingText.style.opacity = "0";
  typingText.style.transform = "translateX(-35px)";

  setTimeout(() => {
    // Change the word
    wordIndex = (wordIndex + 1) % words.length;
    typingText.textContent = words[wordIndex];

    // Place the new word on the right
    typingText.style.transition = "none";
    typingText.style.transform = "translateX(35px)";

    // Start fading in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        typingText.style.transition =
          "opacity 1.5s ease, transform 1.5s ease";
        typingText.style.opacity = "1";
        typingText.style.transform = "translateX(0)";
      });
    });
  }, 1500);
}

// Start with the first word
typingText.textContent = words[0];
typingText.style.opacity = "1";
typingText.style.transform = "translateX(0)";

// Change words every 4 seconds
setInterval(showNextWord, 4000);
document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-progress");

  skillBars.forEach((bar) => {
    bar.style.setProperty("--level", bar.dataset.level);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");

        // Stop observing after the animation starts
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.4
  });

  skillBars.forEach((bar) => {
    observer.observe(bar);
  });
});
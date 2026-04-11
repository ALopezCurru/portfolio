"use strict";

//Animaciones Hero
window.addEventListener("load", () => {
  const elements = document.querySelectorAll(".hidden");
  elements.forEach((el) => {
    el.classList.add("show");
  });
});

// Animaciones About Me
export const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showAboutMe");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

export const elements = document.querySelectorAll(
  ".hidden-left, .hidden-right",
);
elements.forEach((el) => observer.observe(el));

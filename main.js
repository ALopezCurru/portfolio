"use strict";
import { techStack } from "./stack.js";
import { DOM } from "./domElements.js";

//Animaciones Hero
window.addEventListener("load", () => {
  const elements = document.querySelectorAll(".hidden");
  elements.forEach((el) => {
    el.classList.add("show");
  });
});

// Mostrar stack en about me section
function showStackTech(array) {
  const values = Object.values(array);
  let stack = "";
  DOM.contenedorStack.innerHTML = "";
  console.log(values);
  for (let { img, id } of values) {
    console.log(`${id}: ${img}`);
    stack = `
    <img src="${img}" alt="imagenStack" class="imagenStack" id="img-${id}"/>
    `;
    DOM.contenedorStack.insertAdjacentHTML("afterbegin", stack);
  }
}
showStackTech(techStack);
// Animaciones About Me
const observer = new IntersectionObserver(
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

const elements = document.querySelectorAll(".hidden-left, .hidden-right");
elements.forEach((el) => observer.observe(el));

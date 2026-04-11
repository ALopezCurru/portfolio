"use strict";
import { techStack } from "./stack.js";
import { DOM } from "./domElements.js";

window.addEventListener("load", () => {
  const elements = document.querySelectorAll(".hidden");
  elements.forEach((el) => {
    el.classList.add("show");
  });
});

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

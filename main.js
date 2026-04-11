"use strict";
import { techStack } from "./modules/stack.js";
import { DOM } from "./utils/domElements.js";
import { observer, elements } from "./modules/animations.js";

// Mostrar stack en about me section
function showStackTech(array) {
  const values = Object.values(array);
  let stack = "";
  DOM.contenedorStack.innerHTML = "";
  for (let { img, id } of values) {
    stack = `
    <img src="${img}" alt="imagenStack" class="imagenStack" id="img-${id}"/>
    `;
    DOM.contenedorStack.insertAdjacentHTML("afterbegin", stack);
  }
}
showStackTech(techStack);

"use strict";
import { techStack } from "./modules/stack.js";
import { DOM } from "./utils/domElements.js";
import { observer, elements } from "./modules/animations.js";
import { projects } from "./modules/projects.js"

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

//Mostrar proyectos

function showProjects(array){
  const values = Object.values(array);
  let projects = "";
  DOM.contenedorProjects.innerHTML = "";
  for(let {id, nombre, link, img, gitLink} of values){
    projects = `
     <div class="tarjetaProyecto">
            <img src="${img}" alt=""  />
            <div class="informacionProyecto">
              <p><a href="${link}" target="_blank">CLICK HERE TO VISIT THE PAGE</a></p>
              <p class="codeLink"><a href="${gitLink}" target="_blank">CODE HERE</a></p>
              <h3>${nombre}</h3>
            </div>
          </div>
    `;
    DOM.contenedorProjects.insertAdjacentHTML("afterbegin", projects)
  }
}
showProjects(projects);
"use strict";
import { techStack } from "./modules/stack.js";
import { DOM } from "./utils/domElements.js";
import { observer, elements } from "./modules/animations.js";
import { projects } from "./modules/projects.js"
import { experience } from "./modules/experience.js";

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

//Show experience
function showExperience(array){
  const values = Object.values(array);
  let experience = "";
  DOM.contenedorExperience.innerHTML="";
  for(let {id, title, startTime, endTime, description} of values){
   if(Number(id) % 2 == 0){
     experience = `
    
     <div class="experienceCard">
            <div class="experienceHead">
              <h1>${title}</h1>
              <h2 class="experienceDates">
                <span class="experienceDateFrom">${startTime}</span> - <span class="experienceDateTo">${endTime}</span>
              </h2>
            </div>
            <div class="experienceDescription">
              <p>${description}</p>
            </div>
          </div>

    `;
   }else{
     experience = `
    
     <div class="experienceCard ">
            <div class="experienceHead">
              <h1>${title}</h1>
              <h2 class="experienceDates">
                <span class="experienceDateFrom">${startTime}</span> - <span class="experienceDateTo">${endTime}</span>
              </h2>
            </div>
            <div class="experienceDescription">
              <p>${description}</p>
            </div>
          </div>

    `;
   
   }
     DOM.contenedorExperience.insertAdjacentHTML("afterbegin", experience)
  }
}

showExperience(experience);
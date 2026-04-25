"use strict";
import { techStack } from "./modules/stack.js";
import { DOM } from "./utils/domElements.js";
import { observer, elements } from "./modules/animations.js";
import { projects } from "./modules/projects.js"
import { experience } from "./modules/experience.js";
import { certificates } from "./modules/certificates.js";

// Mostrar stack 
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

//Funcion para inspeccionar elementos despues de generarlos
function inspeccionar(){
  const elements = document.querySelectorAll(".hidden-left, .hidden-right");
  elements.forEach((el) => observer.observe(el));
}

//Show experience
function showExperience(array){
  const values = Object.values(array);
  let experience = "";
  DOM.contenedorExperience.innerHTML="";
  for(let {id, title, startTime, endTime, description, animation} of values){
     experience = `
    
     <div class="experienceCard ${animation}">
            <div class="experienceHead ">
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
   
     DOM.contenedorExperience.insertAdjacentHTML("afterbegin", experience)
  }
  inspeccionar();
}

showExperience(experience);
  

// Mostrar certificados

function showCertificates(array){
  const values = Object.values(array);
  let certificates = "";
  DOM.certificateContainer.innerHTML = "";
  for(let {id, title, issued, link, img} of values){
    certificates = `
    <a href="${link}" target="_blank"><img src="${img}" alt="${title}" class="hidden-right"></a>    
    `;
    DOM.certificateContainer.insertAdjacentHTML('afterbegin', certificates);
  }
  inspeccionar();
}
showCertificates(certificates)

//We iterate over the queryselectorAll to be able to access al the items insite of It
//We will make sure it shows the contact Me modal 

DOM.btnContactMe.forEach(el => el.addEventListener('click',function(){
  // Here we will add the function of the form
  DOM.mainContainer.classList.add('hidden');
  DOM.modalContactForm.classList.remove('hidden');
  DOM.modalContactForm.classList.add('center');
}));

//With this button we will close the contact form moddal
DOM.btnCloseContactForm.addEventListener('click',function(){
  console.log('cht'); 
  DOM.modalContactForm.classList.remove('center');
   DOM.modalContactForm.classList.add('hidden');
   DOM.mainContainer.classList.remove('hidden');
  //  Recorremos todos los inputs y text area para limpiarlos cuando se cierre el modal
   const input = document.querySelectorAll('input');
   input.forEach(input => input.value ="");
   const txtArea = document.querySelectorAll('textarea');
   txtArea.forEach(txtArea => txtArea.value="");
});
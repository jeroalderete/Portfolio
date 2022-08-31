/* Hamburger Nav Links variables  */

const menuH = document.getElementById('menuH');
const navBarH = document.getElementById("navbarH");
const aboutmeH = document.getElementById("aboutmeH");
const projectsH = document.getElementById("projectsH");
const skillsH = document.getElementById("skillsH");
const contactH = document.getElementById("contactH");
const subtitleAnimation = document.getElementById("subtitle-animation");


menuH.addEventListener('click', ()=> {
  navBarH.classList.toggle("change");
})

aboutmeH.addEventListener('click', () => {
  navBarH.classList.toggle("change");
})

projectsH.addEventListener('click', () => {
  navBarH.classList.toggle("change");
})

skillsH.addEventListener('click', () => {
  navBarH.classList.toggle("change");
})

contactH.addEventListener('click', () => {
  navBarH.classList.toggle("change");
})



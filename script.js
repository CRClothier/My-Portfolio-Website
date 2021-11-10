const projects = [
  {
    name: 'Project One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featured_image: './img/project1.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    source: 'https://github.com/CRClothier',
  },
  {
    name: 'Project Two',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featured_image: './img/project2.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    source: 'https://github.com/CRClothier',
  },
  {
    name: 'Project Three',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featured_image: './img/project3.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    source: 'https://github.com/CRClothier',
  },
  {
    name: 'Project Four',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featured_image: './img/project4.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    source: 'https://github.com/CRClothier',
  },
  {
    name: 'Project Five',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featured_image: './img/project5.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    source: 'https://github.com/CRClothier',
  },
  {
    name: 'Project Six',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featured_image: './img/project6.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    source: 'https://github.com/CRClothier',
  },
];

let n = projects.length;
const main = document.querySelector('#project-title');
const formWarning = document.querySelector('small');

function createCard(project) {
  const card = document.createElement('div');
  card.className = `project item${n}`;
  n -= 1;
  const projectimg = document.createElement('img');
  projectimg.className = 'project-image';
  projectimg.srcset = project.featured_image;
  card.appendChild(projectimg);
  const projectsection = document.createElement('section');
  projectsection.className = 'project-description';
  card.appendChild(projectsection);
  const projecttitle = document.createElement('h3');
  projecttitle.textContent = project.name;
  projectsection.appendChild(projecttitle);
  const projectlist = document.createElement('ul');
  projectlist.className = 'skills-list';
  projectsection.appendChild(projectlist);
  project.technologies.forEach((value) => {
    const techitem = document.createElement('li');
    techitem.className = 'skill';
    techitem.textContent = value;
    projectlist.appendChild(techitem);
  });
  const projectbtn = document.createElement('button');
  projectbtn.type = 'button';
  projectbtn.className = 'project-button';
  projectbtn.textContent = 'See this project →';
  projectbtn.setAttribute('onclick', `showPopup(projects[${projects.indexOf(project)}])`);
  projectsection.appendChild(projectbtn);

  main.insertAdjacentElement('afterend', card);
}

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('#mobile_menu');
const crossButton = document.querySelectorAll('.closer');
const modalWindow = document.querySelector('.modal-container');
const modalcross = document.querySelector('.modal-closer');
const body = document.querySelector('body');

function showMenu() {
  mobileMenu.classList.replace('hidden', 'show_menu');
  body.className = 'no-scroll';
}

function hideMenu() {
  mobileMenu.classList.replace('show_menu', 'hidden');
  body.classList.remove('no-scroll');
}

function showPopup(project) { // eslint-disable-line no-unused-vars
  modalWindow.classList.replace('hidden', 'show_popup');
  const title = document.querySelector('.modal-title');
  const image = document.querySelector('.modal-img');
  const description = document.querySelector('.modal-description');
  const techlist = document.querySelector('.modal-tech');
  const livelink = document.querySelector('#modal-live');
  const sourcelink = document.querySelector('#modal-source');

  title.textContent = project.name;
  image.srcset = project.featured_image;
  description.textContent = project.description;
  livelink.setAttribute('href', project.link);
  sourcelink.setAttribute('href', project.source);

  project.technologies.forEach((value) => {
    const techitem = document.createElement('li');
    techitem.className = 'skill';
    techitem.textContent = value;
    techlist.appendChild(techitem);
  });
  body.className = 'no-scroll';
}

function hidePopup() {
  modalWindow.classList.replace('show_popup', 'hidden');
  const techlist = document.querySelector('.modal-tech');
  while (techlist.firstChild) {
    techlist.removeChild(techlist.firstChild);
  }
  body.classList.remove('no-scroll');
}

function validateForm() {
  const email = document.forms['contact-form']["user-email"].value;
  if (email.toLowerCase()===email){
     return true;
  }
  else {
    formWarning.textContent = 'Email must be in lower case';
    return false;
  }
}

hamburger.addEventListener('click', showMenu);
crossButton.forEach((item) => item.addEventListener('click', hideMenu));
modalcross.addEventListener('click', hidePopup);
projects.reverse().forEach((project) => createCard(project));
const projects= [
  {
    name : 'project1',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featured_image : './img/project1.png',
    technologies : ['HTML','CSS','JavaScript'],
    link : '#',
    source : 'https://github.com/CRClothier'
  },
  {
    name : 'project2',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featured_image : './img/project2.png',
    technologies : ['HTML','CSS','JavaScript'],
    link : '#',
    source : 'https://github.com/CRClothier'
  },
  {
    name : 'project3',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featured_image : './img/project3.png',
    technologies : ['HTML','CSS','JavaScript'],
    link : '#',
    source : 'https://github.com/CRClothier'
  },
  {
    name : 'project4',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featured_image : './img/project4.png',
    technologies : ['HTML','CSS','JavaScript'],
    link : '#',
    source : 'https://github.com/CRClothier'
  },
  {
    name : 'project5',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featured_image : './img/project5.png',
    technologies : ['HTML','CSS','JavaScript'],
    link : '#',
    source : 'https://github.com/CRClothier'
  },
  {
    name : 'project6',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featured_image : './img/project6.png',
    technologies : ['HTML','CSS','JavaScript'],
    link : '#',
    source : 'https://github.com/CRClothier'
  }
]

let n=6;
const main = document.querySelector('#project-title');

 function createCard (project) {
  let card = document.createElement('div');
  card.className = 'project item'+n;
  n--;
  let projectimg = document.createElement('img');
  projectimg.className = 'project-image';
  projectimg.srcset = project.featured_image;
  card.appendChild(projectimg);
  let projectsection = document.createElement('section');
  projectsection.className = 'project-description';
  card.appendChild(projectsection);
  let projecttitle = document.createElement('h3');
  projecttitle.textContent = project.name;
  projectsection.appendChild(projecttitle);
  let projectlist = document.createElement('ul');
  projectlist.className = 'skills-list';
  projectsection.appendChild(projectlist);
  project.technologies.forEach((value, index) => {
    let techitem = document.createElement('li');
    techitem.className = 'skill';
    techitem.textContent = value;
    projectlist.appendChild(techitem);
  });
  let projectbtn = document.createElement('button')
  projectbtn.type = 'button';
  projectbtn.className = 'project-button';
  projectbtn.textContent = 'See this project →';
  projectbtn.setAttribute('onclick','showPopup(projects['+projects.indexOf(project)+'])');
  projectsection.appendChild(projectbtn);

  main.insertAdjacentElement('afterend',card);
 }

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('#mobile_menu');
const crossButton = document.querySelectorAll('.closer');
const modalWindow = document.querySelector('.modal-container');
const modalcross = document.querySelector('.modal-closer');

function showMenu() {
  mobileMenu.classList.replace('hidden', 'show_menu');
}
function hideMenu() {
  mobileMenu.classList.replace('show_menu', 'hidden');
}

function showPopup(project) {
  modalWindow.classList.replace('hidden', 'show_popup');
  let title = document.querySelector('.modal-title');
  let image = document.querySelector('.modal-img');
  let description = document.querySelector('.modal-description');
  let techlist = document.querySelector('.modal-tech');
  let livelink = document.querySelector('#modal-live');
  let sourcelink = document.querySelector('#modal-source');

  title.textContent = project.name;
  image.srcset = project.featured_image;
  description.textContent = project.description;
  livelink.setAttribute('href', project.link);
  sourcelink.setAttribute('href', project.source);

  project.technologies.forEach((value, index) => {
    let techitem = document.createElement('li');
    techitem.className = 'skill';
    techitem.textContent = value;
    techlist.appendChild(techitem);
  });

}

function hidePopup() {
  modalWindow.classList.replace('show_popup', 'hidden');
  let techlist = document.querySelector('.modal-tech');
  while (techlist.firstChild) {
      techlist.removeChild(techlist.firstChild);
  }
}


hamburger.addEventListener('click', showMenu);
crossButton.forEach((item) => item.addEventListener('click', hideMenu));
modalcross.addEventListener('click', hidePopup);
projects.reverse().forEach((project) => createCard(project));
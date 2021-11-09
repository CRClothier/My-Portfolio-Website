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

const main = document.querySelector('#portfolio');

 function createCard (project) {
  let card = document.createElement('article');
  card.className = 'project';
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
  projectsection.appendChild(projectbtn)

  main.insertAdjacentElement('beforeend',card);
 }


// create a new heading and add it to the div
// let h2 = document.createElement('h2');
// h2.textContent = 'Add h2 element to the div';
// div.appendChild(h2);

// // add div to the document
// document.body.appendChild(div);


const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('#mobile_menu');
const crossButton = document.querySelectorAll('.closer');

function showMenu() {
  mobileMenu.classList.replace('hidden', 'show_menu');
}
function hideMenu() {
  mobileMenu.classList.replace('show_menu', 'hidden');
}

hamburger.addEventListener('click', showMenu);
crossButton.forEach((item) => item.addEventListener('click', hideMenu));
projects.forEach((project) => createCard(project));
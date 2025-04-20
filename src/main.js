import './style/style.scss';

import header from "./components/header.js";
import introDiv from './components/index.intro.js';
import profileImg from './components/profile-picture.js';
import codeImg from './components/script-picture.js';
import headlines from './components/headlines.js';
import button from './components/button.js';
import competences from './components/competences-icons.js';
import projectsPresentation from './components/dev-projects.js';

import footer from './components/footer.js';

document.querySelector("#app").append(header());

let mainElm = document.createElement("main");
document.querySelector("#app").append(mainElm);

mainElm.append(headlines());

mainElm.append(introDiv());

mainElm.append(profileImg());

mainElm.append(codeImg());

mainElm.append(button("Projects"));

mainElm.append(competences());

mainElm.append(projectsPresentation());


document.querySelector("#app").append(footer());
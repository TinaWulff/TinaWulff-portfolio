
import "./dev-projects.scss";

import newsifyImg from '../assets/project-imgs/newsify.png';
import movieImg from '../assets/project-imgs/front-project.png';
import pokeImg from '../assets/project-imgs/poke-dex-frame.png';
//import karmenImg from '../assets/project-imgs/karmen.png';
//import avisImg from '../assets/project-imgs/avis.png';

const imgArray = [newsifyImg, movieImg, pokeImg];
const projectLinks = ["newsify-tina.netlify.app", "movie-site-tina.netlify.app", "tinas-pokedex-site.netlify.app"];
const projectTexts = [
    {
        projectname: "Newsify",
        description: "News app, to show you the latest and most popular news from The New York Times website, you can save the links you want for later in the Archive-page.",
        technologies: "Javascript, Vite, SCSS, HTML5, REST API",
        links: {
            github: "https://github.com/rts-cmk-wu13/projekt-newsify-TinaWulff",
            webpage: "newsify-tina.netlify.app",
        },
    },
    {
        projectname: "MyMovie",
        description: "Movie App, to check out the latest and most popular movies right now and bookmark your favorites, to check them out later. Read about the movies and watch movie-trailers.",
        technologies: "Javascript, Vite, SCSS, HTML5 REST API",
        links: {
            github: "https://github.com/rts-cmk-wu13/mymovie-TinaWulff",
            webpage: "movie-site-tina.netlify.app",
        },
    },
    {
        projectname: "Poke-dex",
        description: "Poke-dex app, to check out all the pokemons and read about them.",
        technologies: "Javascript, Vite, SCSS, HTML5, REST API",
        links: {
            github: "https://github.com/rts-cmk-wu13/pokedex-TinaWulff",
            webpage: "tinas-pokedex-site.netlify.app",
        },
    },
]

export default function projectsPresentation() {
    const webProjectsElm = document.createElement("section");
    webProjectsElm.className = "web-projects-section";
    webProjectsElm.id = "web-development";

    let currentImgIndex = 0;

    function renderProject(index) {
        const project = projectTexts[index];

        webProjectsElm.innerHTML = `
        <div class="project-container">
            <h2>Web-development</h2>

            <div class="text-content__intro">
                <p>This is an overview of my latest <strong>web-development projects</strong>, which I will update along the way as I advance with my education.</p>
                <p>Since this is school-projects for practical exercises there might be elements that is without functionality.</p>
            </div>

            <div class="text-content__projekts">
                <h3>${project.projectname}</h3>
                <p>${project.description}</p>
                <h4>Technologies:</h4>
                <p>${project.technologies}</p>
                <h4>Links:</h4>
                <a href="${project.links.github}" target="_blank">GitHub</a><br>
                <a href="https://${project.links.webpage}" target="_blank">Project webpage (made mobile-first)</a>
            </div>

            <article class="gallery">
                <i class="fa-solid fa-chevron-left gallery-nav gallery-prev"></i>
                <div class="img-container">
                    <img class="gallery-img" src="${imgArray[index]}" alt="project image">
                    <a href="https://${projectLinks[index]}" class="img-link" target="_blank">Click to visit project-page</a>
                </div>
                <i class="fa-solid fa-chevron-right gallery-nav gallery-next"></i>
            </article>
        </div>
        `;

        // Nu findes HTML'en – så vi kan tilføje event listeners
        const leftBtn = webProjectsElm.querySelector(".gallery-prev");
        const rightBtn = webProjectsElm.querySelector(".gallery-next");

        leftBtn.addEventListener("click", () => {
            currentImgIndex = (currentImgIndex - 1 + imgArray.length) % imgArray.length;
            renderProject(currentImgIndex);
        });

        rightBtn.addEventListener("click", () => {
            currentImgIndex = (currentImgIndex + 1) % imgArray.length;
            renderProject(currentImgIndex);
        });
    }

    renderProject(currentImgIndex);
    return webProjectsElm;
}







//overskrift: projectnavn,description: textdescript, tecnologies: js, scss etc, links til gitHub & netlify. 
/*
export default function projectsPresentation() {
    let webProjectsElm = document.createElement("section")
    webProjectsElm.className = "web-projects-section";
    webProjectsElm.id = "web-development";

    let currentImgIndex = 0;

    webProjectsElm.innerHTML = `
        <h2>Web-development</h2>

        <div class="text-content__intro">
        <p>This is an overview of my latest <strong>web-development projects</strong>, which i will update along the way as i advance with my education.</p>
        <p>Since this is school-projects for practical exercises there might be elements that is without functionality.</p>
        </div>
        <div class="project-container"></div>
        `;

    const container = webProjectsElm.querySelector(".project-container");

    function renderProject(index) {
        const project = projectTexts[index];

        container.innerHTML = `
        <div class="text-content__projekts">
        <h3>${project.projectname}</h3>
        <p>${project.description}</p>
        <h4>Technologies:</h4>
        <p>${project.technologies}</p>
        <h4>Links:</h4>
        <a href="${project.links.github}" target="_blank">GitHub</a>
        <a href="${project.links.webpage}" target="_blank">Project webpage (made mobile-first)</a>
        </div>

        <article class="gallery">
        <i class="fa-solid fa-chevron-left gallery-nav gallery-prev"></i>
        <div class="img-container">
          <img class="gallery-img" src="${imgArray[index]}" alt="project image">
          <a href="https://${projectLinks[index]}" class="img-link" target="_blank">Click to visit project-page</a>
        </div>
        <i class="fa-solid fa-chevron-right gallery-nav gallery-next"></i>
        </article>
        `;

        // Bind events igen (fordi knapperne er re-rendered)
        const leftBtn = container.querySelector('.gallery-prev');
        const rightBtn = container.querySelector('.gallery-next');

        leftBtn.addEventListener('click', () => {
            currentImgIndex = (currentImgIndex - 1 + imgArray.length) % imgArray.length;
            renderProject(currentImgIndex);
        });

        rightBtn.addEventListener('click', () => {
            currentImgIndex = (currentImgIndex + 1) % imgArray.length;
            renderProject(currentImgIndex);
        });
    }

    renderProject(currentImgIndex);

    return webProjectsElm
}
*/
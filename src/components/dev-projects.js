
import "./dev-projects.scss";

import movieImg from '../assets/my-movie-imgs/front-project.png';
import pokeImg from '../assets/my-movie-imgs/poke-dex-frame.png';

//import sliderFrame from 

const imgArray = [movieImg, pokeImg];

export default function projectsPresentation() {
    let webProjectsElm = document.createElement("section")
    webProjectsElm.className="web-projects-section"

    webProjectsElm.innerHTML = `
        <h2>Web-development</h2>

        <div>
        <h3>Projects</h3>
        <p>Here you find the overview of my latest projects, which i will update along the way as i advance with my education.</p>
        <p>Since this is school-projects for practical exercises there will be elements that is without functionality.</p>
        <ul>Links:
            <li>GitHub</li>
            <li>My-Movie</li>
            <li>Poké-dex</li>
        </ul>
        </div>

        <article>
        <i class="fa-solid fa-chevron-right"></i>
        <img src=${imgArray[0]} alt="project img">
        <i class="fa-solid fa-chevron-left"></i>
        </article>
    `
    return webProjectsElm
}
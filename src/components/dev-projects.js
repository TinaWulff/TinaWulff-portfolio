
import "./dev-projects.scss";

import movieImg from '../assets/my-movie-imgs/front-project.png';
import pokeImg from '../assets/my-movie-imgs/poke-dex-frame.png';
import karmenImg from '../assets/my-movie-imgs/karmen.png'
import avisImg from '../assets/my-movie-imgs/avis.png'

const imgArray = [movieImg, pokeImg, karmenImg, avisImg];

export default function projectsPresentation() {
    let webProjectsElm = document.createElement("section")
    webProjectsElm.className = "web-projects-section"

    let currentImgIndex = 0;

    webProjectsElm.innerHTML = `
        <h2>Web-development</h2>

        <div class="text-content">
        <h3>Projects</h3>
        <p>Here you find the overview of my latest projects, which i will update along the way as i advance with my education.</p>
        <p>Since this is school-projects for practical exercises there will be elements that is without functionality.</p>
        <ul>Links:
            <li>GitHub</li>
            <li>My-Movie</li>
            <li>Poké-dex</li>
        </ul>
        </div>

        <article class="gallery">
        <i class="fa-solid fa-chevron-left"></i>
        <div class=img-container><img class="gallery-img" src=${imgArray[currentImgIndex]} alt="project img"></div>
        <i class="fa-solid fa-chevron-right"></i>

        <div class="backgroundImgs">
            <div class="backgroundFilter"></div>
            <img src="${imgArray[currentImgIndex+1]}" alt="project next">
            <img src="${imgArray[currentImgIndex+2]}" alt="project next">
        </div>

        </article>

       
    `;


    const imgElm = webProjectsElm.querySelector('.gallery-img');
    const leftBtn = webProjectsElm.querySelector('.fa-chevron-left');
    const rightBtn = webProjectsElm.querySelector('.fa-chevron-right');

    // Funktion til at opdatere billedet
    const updateImage = () => {
        imgElm.src = imgArray[currentImgIndex];
    };

    // Klik til venstre
    leftBtn.addEventListener('click', () => {
        currentImgIndex = (currentImgIndex - 1 + imgArray.length) % imgArray.length;
        updateImage();
    });

    // Klik til højre
    rightBtn.addEventListener('click', () => {
        currentImgIndex = (currentImgIndex + 1) % imgArray.length;
        updateImage();
    });


    return webProjectsElm
}


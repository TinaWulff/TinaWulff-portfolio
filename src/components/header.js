import "../components/header.scss"
import logoWhite from "../assets/logo-white.png"
import CV from '../assets/TinaWulff-CV.pdf';

export default function header() {
    let headerElm = document.createElement("header")
    headerElm.className="header"

    headerElm.innerHTML = `
        <img class="logo" src=${logoWhite} alt="Tina Wulff Web logo">
        <h2>Web-development & UI / UX</h2>

        <ul class="header-icons">
            <li><a href="mailto:tina@tinawulff.dk"><i class="fa-solid fa-square-envelope"></i></a></li>
            <li><a href="https://www.instagram.com/wulfftina/"><i class="fa-brands fa-square-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/tina-wulff-29804396/"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://github.com/TinaWulff"><i class="fa-brands fa-square-github"></i></a></li>
        </ul>

    

        <div class="menu">
        <ul class="menu-items">
            <a href="#web-development"><li class="web">Web-development</li></a>
            <li class="ux">UX / UI</li>
            <a href="http://tinawulff.dk/" target="_blank"><li class="art">Fine Art</li></a>
            <a href="${CV}" target="_blank" rel="noopener" download="TinaWulff-CV.pdf"><li class="cv">CV (Download PDF)</li></a>
            <a href="#footer"><li class="me">Contact</li></a>
        </ul>
        <!-- <div class="underline"></div> -->
        </div>

    `

    return headerElm
}
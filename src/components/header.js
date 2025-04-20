import "../components/header.scss"
import logoWhite from "../assets/logo-white.png"

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
        </ul>

    

        <div class="menu">
        <ul class="menu-items">
            <li class="web">Web-development</li>
            <li class="ux">UX / UI</li>
            <li class="art">Fine Art</li>
            <li class="cv">Curriculum</li>
            <li class="me">About Me</li>
        </ul>
        <!-- <div class="underline"></div> -->
        </div>

    `

    return headerElm
}
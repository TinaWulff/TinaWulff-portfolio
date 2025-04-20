
import './competences-icons.scss'

export default function competences() {
    let competencesElm = document.createElement("div")
    competencesElm.className="competences-icons"

    competencesElm.innerHTML = `
    
    <i class="fa-brands fa-html5"></i>
    <i class="fa-brands fa-css3-alt"></i>
    <i class="fa-brands fa-square-js"></i>
   
    <i class="fa-brands fa-sass"></i>
    <i class="fa-brands fa-figma"></i>
    <i class="fa-brands fa-react"></i>
   
    `

    return competencesElm
}
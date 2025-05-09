
import "./index-intro.scss";



export default function introDiv() {
    let introDivElm = document.createElement("div")
    introDivElm.className = "intro-div"

    introDivElm.innerHTML = `
    <p>I study front-end web development at Roskilde Technical Institute,
        where I will complete my final exam in the spring of 2026.</p>
        
    <p>I have a background in fine art from The Royal Danish Academy of Arts
        (graduated in 2020), along with additional education in UX/UI and graphic design.</p>

    <p>This portfolio showcases my skills and ongoing projects,
        which will continuously be expanding as i evolve my knowlegde.</p>

    <p class="read-cv blue">..Read more about my experience in my CV</p>
    <a href="/path/to/file.pdf" download="TinaWulff-CV.pdf">download CV as PDF here </a><i class="fa-solid fa-angle-right"></i>
    `

    return introDivElm
}

/*
<p class="read-more">...Read more <a href="#">about me </a><i class="fa-solid fa-angle-right"></i></p>
*/
import "./headline.scss";
import "../style/_colors.scss";


export default function headlines() {
    let headlinesElm = document.createElement("headlines")
    headlinesElm.className="headlines"

    headlinesElm.innerHTML = `
        <h2><span class="purple">Welcome</span> to my <span class="pink">portfolio!</span></h2>
        <h1>I am <span class="name">Tina Wulff</span> - the next new,<br>
            but <span class="orange">“not so typical”</span><br>
            <span class="pink">web-developer..</span></h1>
    `

    return headlinesElm
}
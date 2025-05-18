import "./headline.scss";
import "../style/_colors.scss";


export default function headlines() {
    let headlinesElm = document.createElement("headlines")
    headlinesElm.className="headlines"

    headlinesElm.innerHTML = `
        
        <h1>I am <span class="name">Tina Wulff</h1>
        <h2> < the next new
            <span class="purple"></span> <span class="green">// and artistic</span>
            <span class="blue">web-developer ></span></h2>
    `

    return headlinesElm
}

//<h2><span class="purple">Welcome</span> to my <span class="pink">portfolio!</span></h2>
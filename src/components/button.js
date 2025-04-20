
import './button.scss'

export default function button(buttonLink) {
    let buttonElm = document.createElement("button")
    buttonElm.className="link-button"

    buttonElm.innerHTML = `
        ${buttonLink}
    `

    return buttonElm
}
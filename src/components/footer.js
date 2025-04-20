import './footer.scss';
import pixelProfile from '../assets/pixel-profile2.png';

export default function footer() {
    let footerElm = document.createElement("footer")
    footerElm.className="footer"

    footerElm.innerHTML = `
        <div class="contact-info">
            <p>Tina Wulff</p>
            <p>Copenhagen 2300</p>
            <p>tina@tinawulff.dk</p>
        </div>
        <div>
            <img class="profile-pixel" src="${pixelProfile}" alt="profile picture in pixelart">
        </div>
    `
    return footerElm
}
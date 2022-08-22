import {audio}  from "./handleCurrentStation.js";

let musicStationClicker = document.querySelector("#play-icon");

const pauseEl = `<svg id="play-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="180" height="180"><path fill="#f2f2f2" d="M8 5a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2zm8 0a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2z" class="color000 svgShape"></path></svg>`;
const playEl = `<svg
id="play-icon"
width="183"
height="170"
viewBox="0 0 183 170"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M132.684 92.3876L60.0932 131.188C53.9327 134.478 46.0269 130.495 46.0269 123.863V46.262C46.0269 39.641 53.9213 35.6475 60.0932 38.9474L132.684 77.748C134.085 78.485 135.25 79.5503 136.06 80.8358C136.87 82.1213 137.297 83.5813 137.297 85.0678C137.297 86.5543 136.87 88.0144 136.06 89.2999C135.25 90.5854 134.085 91.6506 132.684 92.3876Z"
  fill="#F2F2F2"
/>
</svg>`;

musicStationClicker.style.display = "inline";

export default musicStationClicker.addEventListener("click", () => {
      if (musicStationClicker.style.display == "inline") {
    musicStationClicker.innerHTML = pauseEl;
    musicStationClicker.style.display = "inline-block"
    audio.play()
  } else if (musicStationClicker.style.display == "inline-block"){
    musicStationClicker.innerHTML = playEl;
    musicStationClicker.style.display = "inline"
    audio.pause();
  }
});

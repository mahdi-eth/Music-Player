import { audio } from "./handleCurrentStation.js";

const progressBarRanger = document.getElementById("progressBarRanger");
const progressBar = document.querySelector(".music-progress-bar");

progressBar.style.width = 0;
progressBarRanger.value = 0;

setInterval( () => {
    progressBarRanger.max = audio.duration;
},1000)

export default progressBarRanger.addEventListener("change", (event) => {
    audio.currentTime = event.target.value;
    progressBarWidth();
})

export function progressBarWidth(){
    const progressBarWidth = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressBarWidth}%`;
}
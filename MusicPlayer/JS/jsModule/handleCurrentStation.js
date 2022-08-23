import musics from "../../DataBase/musics.js";
import { containMusicCards } from "./handleCreateCards.js";
import { musicStationClicker } from "./currentStationClick.js";
import { playPauser } from "./currentStationClick.js";
import { playPauserIfElse } from "./currentStationClick.js";
import { pauseEl } from "./currentStationClick.js";
import {timer} from "./handleTiming.js";
// import progressBarRanger from "./handleProgressBar.js";


const musicStationCover = document.querySelector(".current-music-cover");
const musicStationSinger = document.querySelector(".current-music-singer");
const musicStationTitle = document.querySelector(".current-music-title");
export const audio = document.querySelector("#audio");

export default [...containMusicCards.children].forEach((card) => {
  card.addEventListener("click", () => {
    const filtredStation = musics().filter(
      (item) => item.id === Number(card.dataset.id)
    )[0];
    musicStationCover.style.background = `url(${filtredStation.cover})`;
    musicStationSinger.innerHTML = filtredStation.artist;
    musicStationTitle.innerHTML = filtredStation.name;
    audio.src = filtredStation.audio;
    audio.play();
    timer()
    musicStationClicker.innerHTML = pauseEl;
    musicStationClicker.style.display = "inline";
    playPauser(playPauserIfElse(playPauser()));
  });
});


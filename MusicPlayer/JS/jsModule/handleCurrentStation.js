import musics from "../../DataBase/musics.js";
import { containMusicCards } from "./handleCreateCards.js";
import { musicStationClicker } from "./currentStationClick.js";
import { playPauser } from "./currentStationClick.js";
import { playPauserIfElse } from "./currentStationClick.js";
import { pauseEl } from "./currentStationClick.js";
import { timer } from "./handleTiming.js";
import { nextBtn } from "./nextPrevBtns.js";
import { prevBtn } from "./nextPrevBtns.js";

const shuffle = document.getElementById("shuffle");
const repeat = document.getElementById("repeat");
const volume = document.getElementById("volume");
const musicStationCover = document.querySelector(".current-music-cover");
const musicStationSinger = document.querySelector(".current-music-singer");
const musicStationTitle = document.querySelector(".current-music-title");
export const audio = document.querySelector("#audio");

export default [...containMusicCards.children].forEach((card) => {
  card.addEventListener("click", () => {
    function rendering() {
      musicStationCover.style.background = `url(${filtredStation.cover})`;
      musicStationSinger.innerHTML = filtredStation.artist;
      musicStationTitle.innerHTML = filtredStation.name;
      audio.src = filtredStation.audio;
      audio.play();
      timer();
      musicStationClicker.innerHTML = pauseEl;
      musicStationClicker.style.display = "inline";
      playPauser(playPauserIfElse(playPauser()));
    }
    function renderingStation(e) {
      filtredStation = e;
      rendering();
    }

    function nexter() {
      if (indexOfCurrentMusic !== musics().length - 1) {
        indexOfCurrentMusic++;
        renderingStation(musics()[indexOfCurrentMusic]);
      } else if (indexOfCurrentMusic == musics().length - 1) {
        indexOfCurrentMusic = 0;
        renderingStation(musics()[indexOfCurrentMusic]);
      }
    }
    let repeatState = false;

    let filtredStation = musics().filter(
      (item) => item.id === Number(card.dataset.id)
    )[0];

    shuffle.addEventListener("click", () => {
      const shuffledMusic = Math.floor(Math.random() * musics().length);
      renderingStation(musics()[shuffledMusic]);
    });

    repeat.addEventListener("click", (e) => {
      repeatState = !repeatState;
      console.log(repeatState);
    });

    let indexOfCurrentMusic = musics().findIndex(
      (item) => item.id === Number(card.dataset.id)
    );

    rendering();

    setInterval(() => {
      if (repeatState == true) {
        if (audio.currentTime == audio.duration) {
          setTimeout(() => {
            audio.currentTime = 0;
            audio.play();
          }, 2000);
        }
      } else {
        if (audio.currentTime == audio.duration) {
          setTimeout(() => {
            if (audio.currentTime == audio.duration) {
              nexter();
            }
          }, 4000);
        }
      }
    }, 1);

    nextBtn.addEventListener("click", (event) => {
      nexter();
    });

    prevBtn.addEventListener("click", (event) => {
      if (indexOfCurrentMusic !== 0) {
        indexOfCurrentMusic--;
        renderingStation(musics()[indexOfCurrentMusic]);
      } else if (indexOfCurrentMusic == 0) {
        indexOfCurrentMusic = 6;
        renderingStation(musics()[indexOfCurrentMusic]);
      }
    });
  });
});

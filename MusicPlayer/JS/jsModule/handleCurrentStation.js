import musics from "../../DataBase/musics.js";
import { containMusicCards } from "./handleCreateCards.js";
import { musicStationClicker } from "./currentStationClick.js";
import { playPauser } from "./currentStationClick.js";
import { playPauserIfElse } from "./currentStationClick.js";
import { pauseEl } from "./currentStationClick.js";
import { timer } from "./handleTiming.js";
import { nextBtn } from "./nextPrevBtns.js";
import { prevBtn } from "./nextPrevBtns.js";

const musicStationCover = document.querySelector(".current-music-cover");
const musicStationSinger = document.querySelector(".current-music-singer");
const musicStationTitle = document.querySelector(".current-music-title");
export const audio = document.querySelector("#audio");

export default [...containMusicCards.children].forEach((card) => {
  card.addEventListener("click", () => {
    let filtredStation = musics().filter(
      (item) => item.id === Number(card.dataset.id)
    )[0];

    let indexOfCurrentMusic = musics().findIndex(
      (item) => item.id === Number(card.dataset.id)
    );

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

    rendering();

    function rendering2(e) {
      filtredStation = musics()[indexOfCurrentMusic];
      rendering();
    }

    function nexter(){
      if (indexOfCurrentMusic !== musics().length - 1) {
        indexOfCurrentMusic++;
        rendering2(musics()[indexOfCurrentMusic]);
      } else if (indexOfCurrentMusic == musics().length - 1) {
        indexOfCurrentMusic = 0;
        rendering2(musics()[indexOfCurrentMusic]);
      }
    }

    setInterval(() => {
      if (audio.currentTime == audio.duration) {
        nexter();
      }
    },500);

    nextBtn.addEventListener("click", (event) => {
      nexter();
    });

    prevBtn.addEventListener("click", (event) => {
      if (indexOfCurrentMusic !== 0) {
        indexOfCurrentMusic--;
        rendering2(musics()[indexOfCurrentMusic]);
      } else if (indexOfCurrentMusic == 0) {
        indexOfCurrentMusic = 6;
        rendering2(musics()[indexOfCurrentMusic]);
      }
    });
  });
});

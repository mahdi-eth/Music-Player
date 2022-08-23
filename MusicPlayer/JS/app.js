import musics from "./jsModule/handleCreateCards.js";
import containMusicCardsClicked  from "./jsModule/handleCurrentStation.js";
import { playPauser }  from "./jsModule/currentStationClick.js";
import {timer} from "./jsModule/handleTiming.js";
import progressBarRanger from "./jsModule/handleProgressBar.js";
import { progressBarWidth } from "./jsModule/handleProgressBar.js";
import { nextBtn } from "./jsModule/nextPrevBtns.js";

timer();
setInterval( () => {
    progressBarWidth();
},500)






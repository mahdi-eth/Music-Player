import musics from "../../DataBase/musics.js";
import {containMusicCards} from "./handleCreateCards.js";

export default [...containMusicCards.children].forEach((card) => {
  card.addEventListener("click", () => {
    const filtredStation = musics().filter((item) => item.id === Number(card.dataset.id))[0];
    console.log(filtredStation);
  });
});

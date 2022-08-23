import { audio } from "./handleCurrentStation.js";

const currentTime = document.querySelector(".current-time");
const fullTime = document.querySelector(".full-time");

export function timer() {
  setInterval(() => {
    const fullTimeMin = `0${Math.floor(audio.duration / 60)}`.slice(-2);
    const fullTimesSec = `0${Math.floor(audio.duration % 60)}`.slice(-2);
    fullTime.innerHTML = `${fullTimeMin}:${fullTimesSec}`;
    const currentTimeMin = `0${Math.floor(audio.currentTime / 60)}`.slice(-2);
    const currentTimeSec = `0${Math.floor(audio.currentTime % 60)}`.slice(-2);
    currentTime.innerHTML = `${currentTimeMin}:${currentTimeSec}`;
  }, 1);
}

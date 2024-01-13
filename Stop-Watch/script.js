const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");
const play = document.querySelector("#play");

let second = 0;
let minutes = 0;
let hours = 0;
let intervalId = null;

function formatTime(value) {
  return value < 10 ? "0" + value : value;
}

function stopWatch() {
  second++;
  if (second / 60 === 1) {
    second = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  let formattedHours = formatTime(hours);
  let formattedMinutes = formatTime(minutes);
  let formattedSeconds = formatTime(second);

  let displayTimer = (document.querySelector(".timer").innerText =
    formattedHours + ":" + formattedMinutes + ":" + formattedSeconds);
}
startStopBtn.addEventListener("click", () => {
  if (intervalId === null) {
    intervalId = window.setInterval(stopWatch, 1000);
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
  } else {
    clearInterval(intervalId);
    intervalId = null;
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
  }
});
resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  second = 0;
  minutes = 0;
  hours = 0;

  document.querySelector(".timer").innerText =
  formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(second);
  play.classList.remove("fa-pause");
  play.classList.add("fa-play");
});

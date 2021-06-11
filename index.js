const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyRef = document.querySelector("body");
const startButtonRef = document.querySelector("[data-action='start']");
const stopButtonRef = document.querySelector("[data-action='stop']");

startButtonRef.addEventListener("click", onStartButtonClick);
stopButtonRef.addEventListener("click", onStopButtonClick);

let changesBodyColorAtIntervals = null;

function onStartButtonClick() {
  changesBodyColorAtInterval = setInterval(() => {
    bodyRef.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);

  startButtonRef.setAttribute("disabled", "disabled");
}

function onStopButtonClick() {
  clearInterval(changesBodyColorAtInterval);
  startButtonRef.removeAttribute("disabled");
}

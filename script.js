/* variables */

const countDisplay$ = document.getElementsByClassName('count')[0];
const playButton$ = document.getElementsByClassName('play-btn')[0];

let count = 0;
let isRunning = false;
let timerHandler = null;
let stepLength = 1000;

/* run it! */

initialize();

/* functions */

function initialize() {
  playButton$.addEventListener('click', playOrPauseCount);
  renderCount();
}

function playOrPauseCount() {
  if (isRunning) {
    pause();
  } else {
    play();
  }
  isRunning = !isRunning;
}

function renderCount() {
  countDisplay$.textContent = count;
}

function incrementCount() {
  count += 1;
}

function updateCounter() {
  incrementCount();
  renderCount()
}

function play() {
  timerHandler = window.setInterval(
    updateCounter,
    stepLength
  )
}

function pause() {
  window.clearInterval(timerHandler);
}
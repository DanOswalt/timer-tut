class Timer {
  /* variables */ 
  /* on an object, they may be referred to as 'properties' */

  countDisplay$ = document.getElementsByClassName('count')[0];
  playButton$ = document.getElementsByClassName('play-btn')[0];

  count = 0;
  isRunning = false;
  timerHandler = null;
  stepLength = 1000;

  /* run it! */
  /* this constructor function is a 'hook' that always gets called when an object is created) */

  constructor() {
    this.initialize();
  }

  /* functions */
  /* on an object, they may be referred to as 'methods' */
  /* these are largely equivalent to variables! instead of holding values like numbers and strings, they store code snippets */

  initialize() {
    this.playButton$.addEventListener('click', () => {
      this.playOrPauseCount()
    });
    this.renderCount();
  }

  play() {
    this.timerHandler = window.setInterval(() => {
        this.updateCounter()
      },
      this.stepLength
    )
  }

  pause() {
    window.clearInterval(this.timerHandler);
  }

  renderCount() {
    this.countDisplay$.textContent = this.count;
  }

  playOrPauseCount() {
    if (this.isRunning) {
      this.pause();
    } else {
      this.play();
    }
    this.isRunning = !this.isRunning;
  }

  incrementCount() {
    this.count += 1;
  }

  updateCounter() {
    this.incrementCount();
    this.renderCount()
  }
}
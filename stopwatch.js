
  let minutes = 0;
  let seconds = 0;
  let tens = '00';
  let appendMinutes = document.querySelector('#minutes');
  let appendTens = document.querySelector('#tens');
  let appendSeconds= document.querySelector('#seconds');

  let Interval;

  const startTimer = () => {
    tens++;
    if (tens <= 9) {
      appendTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if(tens > 99) {
      seconds++
      appendSeconds.innerHTML = '0' + seconds;
      tens = 0;
      appendTens.innerHTML = '0' + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if(seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = '0' + minutes;
      seconds = 0;
      appendSeconds.innerHTML = '0' + 0;
    }
  }  

document.querySelector('.js-start-button').addEventListener('click', () => {
  startWatch();
})

document.querySelector('.js-stop-button').addEventListener('click', () => {
  stopWatch();
})

document.querySelector('.js-reset-button').addEventListener('click', () => {
  resetWatch();
})

function startWatch() {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
}

function stopWatch() {
  clearInterval(Interval);
}

function resetWatch() {
  clearInterval(Interval);
  seconds = '00';
  minutes = '00';
  tens = '00';
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
  appendMinutes.innerHTML = minutes;
}
var interval;

var minsDisp = document.getElementById("minsDisp");
var secondsDisp = document.getElementById("secondsDisp");

function renderTimer() {
  minsDisp.innerHTML = minutes;
  secondsDisp.innerHTML = seconds;
}

function Countdown10(countdown) {
  clearInterval(interval);
  var time = countdown * 60;
  interval = setInterval(function () {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    console.log(minutes, seconds);
    time--;
    renderTimer();
    if (time < 0) {
      clearInterval(interval); 
    }
  }, 1000);
}

function Countdown5(countdown) {
  clearInterval(interval);
  var time = countdown * 60;
  interval = setInterval(function () {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    console.log(minutes, seconds);
    // if (seconds < 10) {
    //   "0" + seconds;
    // } else {
    //   seconds;
    // }
    time--;
    renderTimer();
    if (time < 0) {
        clearInterval(interval); 
      }
  }, 1000);
}

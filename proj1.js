let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;

function updateDisplay() {
  const display = document.getElementById("display");
  const formattedTime = 
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");
  display.textContent = formattedTime;
}

function startStopwatch() {
  if (interval) return; // Prevent multiple intervals
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(interval);
  interval = null;
}

function resetStopwatch() {
  stopStopwatch();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

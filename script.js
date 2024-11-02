let timer;
let isPaused = true;
let minutes;
let seconds = 0;
let isWorkSession = true;

const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const workDurationInput = document.getElementById("work-duration");
const breakDurationInput = document.getElementById("break-duration");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

const setupInterface = document.getElementById("setup-interface");
const countdownInterface = document.getElementById("countdown-interface");

function setInitialTime() {
  minutes = isWorkSession ? parseInt(workDurationInput.value) : parseInt(breakDurationInput.value);
  seconds = 0;
  updateDisplay();
}

function updateDisplay() {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function startTimer() {
  if (!isPaused) return;

  setupInterface.style.display = "none";
  countdownInterface.style.display = "block";
  
  isPaused = false;
  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        alert(isWorkSession ? "Work session complete! Time for a break." : "Break over! Back to work.");
        isWorkSession = !isWorkSession;
        setInitialTime();
        startTimer();
        return;
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  isPaused = true;
  clearInterval(timer);
}

function resetTimer() {
  isPaused = true;
  clearInterval(timer);
  isWorkSession = true;
  setInitialTime();
  countdownInterface.style.display = "none";
  setupInterface.style.display = "block";
}

// Add Task Function
function addTask() {
  const taskName = prompt("Enter a task:");
  if (taskName) {
    const listItem = document.createElement("li");
    listItem.textContent = taskName;
    taskList.appendChild(listItem);
  }
}

addTaskButton.addEventListener("click", addTask);
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

setInitialTime();

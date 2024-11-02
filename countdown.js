let timer;
let isPaused = true;
let isWorkSession = true;
let minutes;
let seconds = 0;

const params = new URLSearchParams(window.location.search);
const workDuration = parseInt(params.get("work")) || 25;
const breakDuration = parseInt(params.get("break")) || 5;

const encouragementMessages = [
  "You're doing great!",
  "ഇതും ഇതിനപ്പുറവും ചാടി കടന്നവൻ ആണ് ഈ kk ജോസഫ്",
  "ഷമ്മി hero ആട hero",
  "ചന്ദുവിനെ തോൽപ്പിക്കാൻ ആവില്ല മക്കളേ",
  "വർക്കിച്ചാ യെവൻ പുലിയാണ് കേട്ട...",
  "ആറാടുകയാണ്...",
  "You got this!",
  "കാണാൻ ഒരു look ഇല്ലന്നെ ഉള്ളു, ഭയങ്കര ബുദ്ധിയാ...."
];

const egoHurtingDialogues = [
  "പടകക്കട ഗുദാ ഹവാ!!",
  "Sense വേണം,sensibility വേണം,sensitivity വേണം",
  "തനിക്കൊരു വിചാരം ഉണ്ട്,താൻ ഏതോ കോപ്പിലെ രാജാവ് ആണെന്ന്",
  "ലേശം കഞ്ഞി എടുക്കട്ടെ മാണിക്യാ?",
  "എന്തിനോ വേണ്ടി തിളയ്ക്കുന്ന സാമ്പാർ.",
  "Maybe you need to practice more.",
  "എന്താടോ വാര്യരെ താൻ നന്നാവാത്തെ.",
  "തളരരുത് രാമൻകുട്ടി തളരരുത്",
  "ലേശം ഉളുപ്പ്???",
  "ദാസാ,ഏതാ ഈ അലവലാതി."
];

const breakEncouragementMessages = [
  "Take a deep breath and relax.",
  "Grab a coffee and enjoy your break!",
  "നീ പോ മോനെ ദിനേശാ!!",
  "ഇത് ഒക്കെ യെന്ത്",
  "നന്നായി ബാ...!",
  "Step away for a moment and clear your mind.",
  "Reflect on your progress during this break.",
  "ഒരു വരവുടെ വരേണ്ടി വരും!"
];

function setInitialTime() {
  minutes = isWorkSession ? workDuration : breakDuration;
  seconds = 0;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

function pauseTimer() {
  isPaused = true;
  clearInterval(timer);
  document.getElementById("start-stop").textContent = "START"; 
  if (isWorkSession) {
    showRandomEgoHurtDialogue(); 
  } else {
    showRandomBreakEncouragement();
  }
}

function startTimer() {
  if (!isPaused) return;

  isPaused = false;
  if (isWorkSession) {
    showRandomEncouragement(); 
  }
  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        if (isWorkSession) {
          alert("Work session complete! Time for a break.");
          showConfetti(); 
          isWorkSession = false;
          setInitialTime();
          showBreakEncouragement(); 
          showBreakGif(); 
          isPaused = true; 
          document.getElementById("start-stop").textContent = "START"; 
        } else {
          alert("Break over! Back to work.");
          hideBreakGif(); 
          isWorkSession = true; 
          setInitialTime();
        }
        updateDisplay(); 
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

function showConfetti() {
  confetti({
    particleCount: 1000,
    spread: 700,
    origin: { y: 0.6 }
  });
}
function resetTimer() {
  isPaused = true;
  clearInterval(timer);
  isWorkSession = true;
  setInitialTime();
  document.getElementById("start-stop").textContent = "START"; 
  showRandomEncouragement(); 
}

function toggleTimer() {
  const button = document.getElementById("start-stop");
  if (isPaused) {
    startTimer();
    button.textContent = "STOP"; 
  } else {
    pauseTimer();
    button.textContent = "START";
  }
}

function showRandomEncouragement() {
  const quoteDisplay = document.getElementById("quote-display");
  const randomIndex = Math.floor(Math.random() * encouragementMessages.length);
  quoteDisplay.textContent = encouragementMessages[randomIndex];
}

function showBreakEncouragement() {
  const quoteDisplay = document.getElementById("quote-display");
  const randomIndex = Math.floor(Math.random() * breakEncouragementMessages.length);
  quoteDisplay.textContent = breakEncouragementMessages[randomIndex];
}

function showRandomEgoHurtDialogue() {
  const dialogueDisplay = document.getElementById("quote-display");
  const randomIndex = Math.floor(Math.random() * egoHurtingDialogues.length);
  dialogueDisplay.textContent = egoHurtingDialogues[randomIndex];
}

function initializeCountdown() {
  setInitialTime(); 
  showRandomEncouragement(); 
  startTimer(); 
}

document.getElementById("start-stop").addEventListener("click", toggleTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

initializeCountdown();

function createPixelAnimal() {
  const animal = document.createElement('div');
  animal.classList.add('pixel-animal');

  animal.style.top = Math.random() * window.innerHeight + 'px';
  animal.style.left = Math.random() * window.innerWidth + 'px';

  document.querySelector('.background-animation').appendChild(animal);

  setTimeout(() => {
    animal.remove();
  }, 5000); 
}

setInterval(createPixelAnimal, 2000); 


const word = document.querySelector("#word");
const input = document.querySelector("#word-input");
const timeDislay = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");
const msg = document.querySelector("#msg");
const restart = document.querySelector("#restart");
// console.log(word,input,timeDislay,scoreDisplay,msg);

time = 6;
score = 0;
const words = [
  "appraise",
  "bane",
  "circumspect",
  "daunting",
  "contemporary",
  "censure",
  "bureaucracy",
  "boisterous",
  "benevolent",
  "avarice",
  "awry",
  "articulate",
  "assonance",
  "aesthetic",
  "acumen",
  "alliteration",
  "Exacerbate",
  "Exorbitant",
  "Flabbergasted",
  "Frivolous",
  "Gregarious",
  "Hapless",
  "Heterodox",
  "Impetuous",
  "Inscrutable",
  "Munificent",
  "Obsequious ",
  "Opprobrium",
  "Pithy",
];

// functions

window.addEventListener("DOMContentLoaded", start);
function start() {
  showWord();
  setInterval(countdown, 1000);
}

restart.addEventListener("click", function () {
  time = 6;
  score = 0;
  input.disabled = false;
  input.value = "";
  msg.textContent = "";
  scoreDisplay.textContent = score;
  timeDislay.textContent = time;

  showWord();

  // Reset timer
  clearInterval();
  timerId = setInterval(countdown, 1000);
});
function triggerPop() {
  word.classList.remove("animate-pop");
  void word.offsetWidth;
  word.classList.add("animate-pop");
}

function showWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  word.textContent = words[randomIndex];
  triggerPop();
}
//  input to word match

function wordMatch() {
  if (word.textContent === input.value) {
    msg.textContent = "correct!!";
    input.value = "";
    showWord();
    time = 6;
    score++;
  } else {
    msg.textContent = "Incorrect!!";
  }
  scoreDisplay.textContent = score;
}

// timer
function countdown() {
  if (time > 0) {
    time--;
    timeDislay.innerHTML = time;
  } else {
    msg.innerHTML = "OPPS!! Game Over";
    input.disabled = true;
  }
}

// event
input.addEventListener("input", wordMatch);


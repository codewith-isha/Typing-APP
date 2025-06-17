const word = document.querySelector("#word");
const input = document.querySelector("#word-input");
const timeDislay = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");
const msg = document.querySelector("#msg");
// console.log(word,input,timeDislay,scoreDisplay,msg);

time = 8;
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
// random word function

function showWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  word.innerHTML = words[randomIndex];
}
//  input to word match

function wordMatch() {
  if (word.innerHTML === input.value) {
    msg.innerHTML = "correct!!";
    input.value = "";
    showWord(word);
    time = 8;
    score++;
  } else {
    msg.innerHTML = "Incorrect!!";
  }
  scoreDisplay.innerHTML = score;
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

// First thing is the game over msg and we cannot be able of type in that input

const scissorContainer = document.getElementById("scissorContainer");
const paperContainer = document.getElementById("paperContainer");
const rockContainer = document.getElementById("rockContainer");

const computerScissorContainer = document.getElementById(
  "computerScissorContainer"
);
const computerPaperContainer = document.getElementById(
  "computerPaperContainer"
);
const computerRockContainer = document.getElementById("computerRockContainer");

const playerChoiceContainer = document.getElementById("playerChoice");
const computerChoiceContainer = document.getElementById("computerChoice");

const win = document.getElementById("win");
const lose = document.getElementById("lose");
const tie = document.getElementById("tie");

let playerChoice = "";
let computerChoice = "";

const array = ["rock", "paper", "scissor"];

function resetGame() {
  win.classList.add("hidden");
  lose.classList.add("hidden");
  tie.classList.add("hidden");

  rockContainer.classList.remove("self-end");
  paperContainer.classList.remove("self-end");
  scissorContainer.classList.remove("self-end");

  computerRockContainer.classList.remove("self-start");
  computerPaperContainer.classList.remove("self-start");
  computerScissorContainer.classList.remove("self-start");

  computerChoiceContainer.innerText = "Computer:";
  playerChoiceContainer.innerText = "Player :";
}

resetGame();

scissorContainer.addEventListener("click", () => {
  resetGame();

  playerChoiceContainer.innerText = "Player: Scissor";

  scissorContainer.classList.add("self-end");
  scissorContainer.classList.add(
    "transition-all",
    "duration-[5000ms]",
    "ease-in-out"
  );

  computerChoice = array[Math.floor(Math.random() * array.length)];

  computerChoiceContainer.innerText = `Computer: ${computerChoice}`;

  if (computerChoice === "scissor") {
    computerScissorContainer.classList.add("self-start");
    computerScissorContainer.classList.add("transition-all", "duration-700");
  tie.classList.remove("hidden");
  } else if (computerChoice === "rock") {
    computerRockContainer.classList.add("self-start");
    computerRockContainer.classList.add("transition-all", "duration-700");

    win.classList.remove("hidden");
  } else {
    computerPaperContainer.classList.add("self-start");
    computerPaperContainer.classList.add("transition-all", "duration-700");
    lose.classList.remove("hidden");
  }

  setTimeout(() => resetGame(), 2000);
});

paperContainer.addEventListener("click", () => {
  resetGame();
  paperContainer.classList.add("self-end");
  paperContainer.classList.add(
    "transition-all",
    "duration-[5000ms]",
    "ease-in-out"
  );

  playerChoiceContainer.innerText = "Player: Paper";

  computerChoice = array[Math.floor(Math.random() * array.length)];

  computerChoiceContainer.innerText = `Computer: ${computerChoice}`;

  if (computerChoice === "paper") {
    computerPaperContainer.classList.add("transition-all", "duration-700");
    computerPaperContainer.classList.add("self-start");
    tie.classList.remove("hidden");
  } else if (computerChoice === "rock") {
    computerRockContainer.classList.add("transition-all", "duration-700");
    computerRockContainer.classList.add("self-start");
    lose.classList.remove("hidden");
  } else {
    computerScissorContainer.classList.add("transition-all", "duration-700");
    computerScissorContainer.classList.add("self-start");
    win.classList.remove("hidden");
  }
  setTimeout(() => resetGame(), 2000);
});

rockContainer.addEventListener("click", () => {
  resetGame();

  rockContainer.classList.add(
    "transition-all",
    "duration-[5000ms]",
    "ease-in-out"
  );
  rockContainer.classList.add("self-end");

  playerChoiceContainer.innerText = "Player: Rock";

  computerChoice = array[Math.floor(Math.random() * array.length)];

  computerChoiceContainer.innerText = `Computer: ${computerChoice}`;

  if (computerChoice === "rock") {
    computerRockContainer.classList.add("transition-all", "duration-700");
    computerRockContainer.classList.add("self-start");
    tie.classList.remove("hidden");
  } else if (computerChoice === "paper") {
    computerPaperContainer.classList.add("transition-all", "duration-700");
    computerPaperContainer.classList.add("self-start");
    lose.classList.remove("hidden");
  } else {
    computerScissorContainer.classList.add("transition-all", "duration-700");
    computerScissorContainer.classList.add("self-start");
    win.classList.remove("hidden");
  }

  setTimeout(() => resetGame(), 2000);
});

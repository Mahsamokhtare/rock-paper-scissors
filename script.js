// console.log(
//   "           ****************************Game***********************************"
// );
// console.log("Welcome to the rock-paper-scissors game :))");
// console.log("Please enter your choice: rock, paper, or scissors");
// const array = ["rock", "paper", "scissor"];

// const playerChoice = process.argv[2]?.toLowerCase();

// if (!playerChoice || !array.includes(playerChoice)) {
//   console.log("Please choose between this 3 words: rock, paper, scissor ");
//   return;
// }

// console.log(`You choose: ${playerChoice}`);

// const computerChoice = array[Math.floor(Math.random() * array.length)];
// console.log(`Computer choose: ${computerChoice}`);

// if (computerChoice === playerChoice) {
//   console.log("It's a tie!");
// } else if (
//   (playerChoice === "rock" && computerChoice === "scissor") ||
//   (playerChoice === "scissor" && computerChoice === "paper") ||
//   (playerChoice === "paper" && computerChoice === "rock")
// ) {
//   console.log("You win :)))))");
// } else {
//   console.log("You lose :((((");
//   console.log("Try again!");
// }

const readline = require("readline");

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "           ***************************************************************"
);
console.log("Welcome to the rock-paper-scissors game:))");
const array = ["rock", "paper", "scissor"];

rl.question(
  "Please enter your choice: rock , paper or scissor: ",
  (playerChoice) => {
    playerChoice.toLocaleLowerCase();
    console.log(`You chose ${playerChoice}`);
    const computerChoice = array[Math.floor(Math.random() * array.length)];
    console.log(`Computer choose: ${computerChoice}`);

    if (computerChoice === playerChoice) {
      console.log("It's a tie!");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissor") ||
      (playerChoice === "scissor" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      console.log("You win :)))))");
    } else {
      console.log("You lose :((((");
      console.log("Try again!");
    }
    rl.close();
  }
);

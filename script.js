let computerSelection = null;

function computerPlay (computerSelection) {
  let gamechoices = ["rock","paper","scissors"];
  return computerSelection = gamechoices[Math.floor(Math.random() * gamechoices.length)];
}
let computerChoice = computerPlay(computerSelection);

let playerSelection = prompt("Rock,Scissors,Paper?");
playerSelection =playerSelection.toLocaleLowerCase();


function game1(playerSelection,computerChoice) {
  if (playerSelection === computerChoice) {
      console.log("It was a tie!");
  }
  if (playerSelection == "rock" && computerChoice == "paper") {
      console.log("You lost!, Paper beats Rock!");
  }
  if (playerSelection == "paper" && computerChoice == "scissors") {
      console.log("You lost!, Scissors beats Paper!");
  }
  if (playerSelection == "scissors" && computerChoice == "rock") {
      console.log("You lost!, Rock beats Scissors!");
  }
  if (playerSelection == "paper" && computerChoice == "rock") {
      console.log("You won!, Paper beats Rock!");
  }
  if (playerSelection == "scissors" && computerChoice == "paper") {
      console.log("You won!, Scissors beats paper!");
  }
  if (playerSelection == "rock" && computerChoice == "scissors") {
      console.log("You won!, Rock beats Scissors!");
  }
}

game1(playerSelection, computerChoice);
console.log(playerSelection);
console.log(computerChoice)



// const getResults = (playerSelection, computerChoice) => {
//     switch (playerSelection + computerChoice) {
//       case 'scissorspaper':
//       case 'rockscissors':
//       case 'paperrock':
//         console.log(playerSelection + ' beats ' + computerChoice + ' , You won!');
//         break
//       case 'paperscissors':
//       case 'scissorsrock':
//       case 'rockpaper':
//         console.log(playerSelection + ' beats ' + computerChoice + ' , You lost!');
//         break
//       case 'scissorsscissors':
//       case 'rockrock':
//       case 'paperpaper':
//         console.log(playerSelection + ' and the computer chose ' + computerChoice + ' , It was a tie!');
//         break
//     }
//   }
// getResults(playerSelection,computerChoice)

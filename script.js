let computerSelection = null;

function computerPlay (computerSelection) {
    let gamechoices = ["rock","paper","scissors"];
    return computerSelection = gamechoices[Math.floor(Math.random() * gamechoices.length)];
}
let computerChoice = computerPlay(computerSelection);

let playerSelection = prompt("Rock,Scissors,Paper?");
playerSelection =playerSelection.toLocaleLowerCase();

var results = null;

    // function game1(playerSelection,computerSelection, results) {
    // if (computerPlay(computerSelection) === playerSelection) {
    //     results = "It was a tie!";
    // }
    // if (playerSelection == "rock" && computerPlay(computerSelection) == "paper") {
    //     results = "You lost!, Paper beats Rock!";
    // }
    // if (playerSelection == "paper" && computerPlay(computerSelection) == "scissors") {
    //     results = "You lost!, Scissors beats Paper";
    // }
    // if (playerSelection == "scissors" && computerPlay(computerSelection) == "rock") {
    //     results = "You lost!, Rock beats Scissors!";
    // }
    // if (playerSelection == "paper" && computerPlay(computerSelection) == "rock") {
    //     results = "You won!, Paper beats Rock!";
    // }
    // if (playerSelection == "scissors" && computerPlay(computerSelection) == "paper") {
    //     results = "You won!, Scissors beats paper!";
    // }
    // if (playerSelection == "rock" && computerPlay(computerSelection) == "scissors") {
    //     results = "You won!, Rock beats Scissors!";
    // }
    // console.log(results);
// }
// game1(playerSelection, computerSelection);}}}
const getResults = (playerSelection, computerChoice) => {
    switch (playerSelection + computerChoice) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
        console.log('You chose ' + playerSelection + ' and the computer chose ' + computerChoice + ' , YOU WIN!');
        break
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        console.log('You chose ' + playerSelection + ' and the computer chose ' + computerChoice + ' , YOU LOSE!');
        break
      case 'scissorsscissors':
      case 'rockrock':
      case 'paperpaper':
        console.log('You chose ' + playerSelection + ' and the computer chose ' + computerChoice + ' , ITS A DRAW!');
        break
    }
  }
getResults(playerSelection,computerChoice)
console.log(playerSelection);
console.log(computerChoice);
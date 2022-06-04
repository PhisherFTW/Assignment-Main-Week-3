let computerSelection = null;
function computerPlay (computerSelection) {
  let gamechoices = ["rock","paper","scissors"];
  return computerSelection = gamechoices[Math.floor(Math.random() * gamechoices.length)];
}


let playerReaction = confirm("Would you like to play the game?");



function doSomething() {
    
    for(let i = 1; i<6; i++) {
        let playerScore = 0;
        let computerScore = 0;
        let computerChoice = computerPlay(computerSelection);
        let playerSelection =null;

        playerSelection = prompt("pick one of the options: Rock,Paper,Scissors");
        if (playerSelection === null) {
            console.log("Why did you exit the game?");
            return;
        }
        playerSelection = playerSelection.toLocaleLowerCase();
        
        if (playerSelection === computerChoice) {
            console.log("It was a tie!");
        }
        if (playerSelection == "rock" && computerChoice == "paper") {
            console.log("You lost!, Paper beats Rock!") + computerScore+1;
        }
        if (playerSelection == "paper" && computerChoice == "scissors") {
            console.log("You lost!, Scissors beats Paper!") + (computerScore+1);
        }
        if (playerSelection == "scissors" && computerChoice == "rock") {
            console.log("You lost!, Rock beats Scissors!") + (computerScore+1);
        }
        if (playerSelection == "paper" && computerChoice == "rock") {
            console.log("You won!, Paper beats Rock!") + (playerScore+1);
        }
        if (playerSelection == "scissors" && computerChoice == "paper") {
            console.log("You won!, Scissors beats paper!") + (playerScore+1);
        }
        if (playerSelection == "rock" && computerChoice == "scissors") {
            console.log("You won!, Rock beats Scissors!") + (playerScore+1);
        }

        
        console.log("Round " + i + " computer's choice = " + computerChoice + " Your choice = " + playerSelection);
    }
    }
doSomething();
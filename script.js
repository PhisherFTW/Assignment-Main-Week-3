let computerSelection = null;
function computerPlay (computerSelection) {
  let gamechoices = ["rock","paper","scissors"];
  return computerSelection = gamechoices[Math.floor(Math.random() * gamechoices.length)];
}


let playerReaction = confirm("Would you like to play the game?");



function doSomething() {
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;
    for(let i = 0; i<5; i++) {
        
        let round = i + 1;
        let computerChoice = computerPlay(computerSelection);
        let playerSelection =null;

        playerSelection = prompt("pick one of the options: Rock,Paper,Scissors");
        if (playerSelection === null) {
            console.log("Why did you exit the game?");
            return;
        }
        if( playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors" ){
            i = i - 1
            alert("Wrong Input! Choose between Rock Paper & Scissor");
        }

        playerSelection = playerSelection.toLocaleLowerCase();
        
        if (playerSelection === computerChoice) {
            console.log("It was a tie!");
            ties = ties+1;
        }
        if (playerSelection == "rock" && computerChoice == "paper") {
            console.log("You lost!, Paper beats Rock!") + computerScore+1;
            computerScore= computerScore + 1;
        }
        if (playerSelection == "paper" && computerChoice == "scissors") {
            console.log("You lost!, Scissors beats Paper!");
            computerScore= computerScore + 1;
        }
        if (playerSelection == "scissors" && computerChoice == "rock") {
            console.log("You lost!, Rock beats Scissors!");
            computerScore= computerScore + 1;
        }
        if (playerSelection == "paper" && computerChoice == "rock") {
            console.log("You won!, Paper beats Rock!") + (playerScore+1);
            playerScore = playerScore+1;
        }
        if (playerSelection == "scissors" && computerChoice == "paper") {
            console.log("You won!, Scissors beats paper!");
            playerScore = playerScore+1;
        }
        if (playerSelection == "rock" && computerChoice == "scissors") {
            console.log("You won!, Rock beats Scissors!");
            playerScore = playerScore+1;
        }

        
        console.log("Round " + round + "\ncomputer's choice = " + computerChoice + "\nYour choice = " + playerSelection + "\nPlayer's Score:" + playerScore + "\nComputers Score:" +computerScore);
        console.log("\n---------------------------------------")
    }
    if (playerScore >= 3) {
        console.log("You won the game!")
    } else if (computerScore >= 3) {
        console.log("You lost the game!")
    } else if ( playerScore > computerScore){
        console.log("Technically you won.")
    } else if (computerScore > playerScore) { 
        console.log("Technically the computer won.")
    } else {
        console.log("Its a tie!")
    }

}
doSomething();

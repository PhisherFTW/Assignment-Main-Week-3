let computerSelection = null;

function computerPlay (computerSelection) {
    let gamechoices = ["Rock","Paper","Scissors"];
    return computerSelection = gamechoices[Math.floor(Math.random() * gamechoices.length)];
}
console.log(computerPlay(computerSelection))

let playerSelection = prompt("Rock,Scissors,Paper?")

function game1 (playerSelection, computerSelection) {
   if (playerSelection == computerSelection) {
       console.log("Tie")
   }
}
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomDecimal = Math.random();
    let randomNumber = Math.floor(randomDecimal * 3) + 1;

    if (randomNumber == 1) return "Rock";
    else if (randomNumber == 2) return "Paper";
    else return "Scissors"
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection)
    if (playerSelection == computerSelection.toLowerCase()) return "Tie. No one wins."
    else if (playerSelection == "rock")
        if (computerSelection == "Paper") {
            computerScore += 1;
            return "You Lose! Paper beats Rock"
        }
        else if (computerSelection == "Scissors") {
            playerScore += 1;
            return "You Win! Rock beat Scissors"
        }
        else return "Invalid input 1"
    else if (playerSelection == "paper")
        if (computerSelection == "Rock") {
            playerScore += 1;
            return "You Win! Paper beat Rock"
        }
        else if (computerSelection == "Scissors") {
            computerScore += 1;
            return "You Lose! Scissors beats Paper"
        }
        else return "Invalid input 2"
    else if (playerSelection == "scissors")
        if (computerSelection == "Paper") {
            playerScore += 1;
            return "You Win! Scissors beats Paper"
        }
        else if (computerSelection == "Rock") {
            computerScore += 1;
            return "You Lose! Rock beat Scissors" 
        }
        else return "Invalid input 3"
    else
        return "Invalid input, please try again"
}

function game() {

    for (var i = 1; i <= 5; i++) {
        let userInput = prompt("Enter Rock, Paper, or Scissors");

        console.log(playRound(userInput, getComputerChoice()))
    }

    console.log("Player Score: "+playerScore)
    console.log("Computer Score: "+computerScore)
}

game();
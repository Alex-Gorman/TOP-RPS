
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function getComputerChoice() {
    let randomDecimal = Math.random();
    let randomNumber = Math.floor(randomDecimal * 3) + 1;

    if (randomNumber == 1) return "Rock";
    else if (randomNumber == 2) return "Paper";
    else return "Scissors"
}

function playRound(playerSelection, computerSelection) {
    let result = ""

    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection)
    if (playerSelection == computerSelection.toLowerCase()) {
        tieScore += 1;
        result += "Tie!<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore + "<br>Tie score: " + tieScore;
    } 
    else if (playerSelection == "rock")
        if (computerSelection == "Paper") {
            console.log("got here rock 1")
            computerScore += 1;
            result += "You Lose! Paper beats Rock <br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore + "<br>Tie score: " + tieScore;
        }
        else if (computerSelection == "Scissors") {
            console.log("got here rock 1")
            playerScore += 1;
            result += "You Win! Rock beat Scissors <br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore + "<br>Tie score: " + tieScore;
        }
        else {
            console.log("got here rock 1")
            tieScore += 1;
            result += "Tie! Rock and Rock <br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore + "<br>Tie score: " + tieScore;
        } 
    else if (playerSelection == "paper")
        if (computerSelection == "Rock") {
            playerScore += 1;
            result += "You Win! Paper beat Rock <br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore + "<br>Tie score: " + tieScore;
        }
        else if (computerSelection == "Scissors") {
            computerScore += 1;
            result += "You Lose! Scissors beats Paper <br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore + "<br>Tie score: " + tieScore;
        }
        else {
            tieScore += 1;
            result += "Tie! Paper and Paper <br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore + "<br>Tie score: " + tieScore;
        }
    else if (playerSelection == "scissors")
        if (computerSelection == "Paper") {
            playerScore += 1;
            result += "You Win! Scissors beats Paper <br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore + "<br>Tie score: " + tieScore;
        }
        else if (computerSelection == "Rock") {
            computerScore += 1;
            result += "You Lose! Rock beat Scissors <br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore + "<br>Tie score: " + tieScore;
        }
        else {
            tieScore += 1;
            result += "Tie! Scissors and Scissors <br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore + "<br>Tie score: " + tieScore;
        }
    // else
    //     return "Invalid input, please try again"
    // console.log("got here")
    
    document.querySelector('.score').innerHTML = result
}

const rock_btn = document.querySelector('.btn-rock');
rock_btn.addEventListener('click', () => {
    playRound("rock", getComputerChoice())
});

const paper_btn = document.querySelector('.btn-paper');
paper_btn.addEventListener('click', () => {
    playRound("paper", getComputerChoice())
});

const scissors_btn = document.querySelector('.btn-scissors');
scissors_btn.addEventListener('click', () => {
    playRound("scissors", getComputerChoice())
});
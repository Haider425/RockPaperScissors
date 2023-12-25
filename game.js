function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function play(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer) {
        return "tie";
    }
    if (player === "rock") {
        if (computer === "paper") {
            return "computer";
        } else {
            return "player";
        }
    }
    if (player === "paper") {
        if (computer === "scissors") {
            return "computer";
        } else {
            return "player";
        }
    }
    if (player === "scissors") {
        if (computer === "rock") {
            return "computer";
        } else {
            return "player";
        }
    } else {
        return "error";
    }
}


let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let result = document.querySelector("#resultText");
let button = document.querySelector(".button");
let playerCount = 0;
let computerCount = 0;
const maxScore = 5;

rock.addEventListener("click", () => {
    playRound("rock");
});

paper.addEventListener("click", () => {
    playRound("paper");
});

scissors.addEventListener("click", () => {
    playRound("scissors");
});

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = play(playerSelection, computerSelection);

    if (result === "player") {
        playerCount++;
        resultText.textContent = `You win this round! ${playerSelection} beats ${computerSelection}`;

    } else if (result === "computer") {
        computerCount++;
        resultText.textContent = `You lose this round! ${computerSelection} beats ${playerSelection}`;
    }else{
        resultText.textContent = `It's a tie!`;
    }

    playerScore.textContent = playerCount;
    computerScore.textContent = computerCount;

    if (playerCount === maxScore || computerCount === maxScore) {
        endGame();
    }
}

function endGame() {
    let winner = playerCount === maxScore ? "Player" : "Computer";
    resultText.textContent = `${winner} wins the game!`;

    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.disabled = true;
    });

    let resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.addEventListener("click", resetGame);
    button.appendChild(resetButton);

}


function resetGame() {
    playerCount = 0;
    computerCount = 0;
    playerScore.textContent = playerCount;
    computerScore.textContent = computerCount;

    resultText.textContent = "";
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.disabled = false;
    });
    button.removeChild(button.lastChild);
    
}


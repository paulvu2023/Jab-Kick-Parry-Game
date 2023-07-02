function getComputerChoice(){
    randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice == 2) {
        return "Rock";
    } else if (randomChoice == 1){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    if (playerSelection === computerSelection){
        return("Tie. You're lucky.");
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors"
            || playerSelection === "Scissors" && computerSelection === "Paper"
            || playerSelection === "Paper" && computerSelection === "Rock"
    ){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === "Rock" && playerSelection === "Scissors"
            || computerSelection === "Scissors" && playerSelection === "Paper"
            || computerSelection === "Paper" && playerSelection === "Rock")
    {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else {
        return(`You lose! ${computerSelection} beats ${playerSelection}!`);
    }
}

function game(){
    let userChoice;
    for (let i = 0; i < 5; i++) {
        userChoice = prompt();
        console.log(playRound(userChoice, getComputerChoice()))
    }
}

game();
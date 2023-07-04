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
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (computerSelection === "Rock" && playerSelection === "Scissors"
            || computerSelection === "Scissors" && playerSelection === "Paper"
            || computerSelection === "Paper" && playerSelection === "Rock")
    {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else {
        return(`You lose! ${computerSelection} beats ${playerSelection}!`);
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const msg = document.querySelector('div#round');
        const userScoreSelector = document.querySelector('#userScore');
        const compScoreSelector = document.querySelector('#compScore');
        let winner = playRound(button.id, getComputerChoice());
        let userScore = parseInt(userScoreSelector.textContent);
        let compScore = parseInt(compScoreSelector.textContent);
        msg.textContent = winner;
        // check string to see if user won
        if (winner.slice(0, 5) == 'You w') {
            userScore += 1;
        } else if (winner.slice(0, 5) == 'You l') {
            compScore += 1;
        }
        userScoreSelector.textContent = userScore;
        compScoreSelector.textContent = compScore;
    });
});


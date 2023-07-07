window.addEventListener('mousemove', playSong) 
document.getElementById("song").loop = true;
function playSong() {
    document.getElementById("song").play();
}

function playHit() {
    const hitSound = document.getElementById("hit");
    hitSound.currentTime = 0;
    hitSound.play();
}

function getComputerChoice(){
    randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice == 2) {
        return "Jab";
    } else if (randomChoice == 1){
        return "Kick";
    } else {
        return "Parry";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    changeFightImage(playerSelection, computerSelection);
    if (playerSelection === computerSelection){
        return("Tie. You're lucky.");
    }
    else if (playerSelection === "Jab" && computerSelection === "Parry"
            || playerSelection === "Parry" && computerSelection === "Kick"
            || playerSelection === "Kick" && computerSelection === "Jab"
    ){
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (computerSelection === "Jab" && playerSelection === "Parry"
            || computerSelection === "Parry" && playerSelection === "Kick"
            || computerSelection === "Kick" && playerSelection === "Jab")
    {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

function changeFightImage (playerSelection, computerSelection){
    const fightScene = document.querySelector('.fightScene');
    if (playerSelection === "Jab" && computerSelection === "Jab") {
        fightScene.src = "images/jabjab.png";
    } else if (playerSelection === "Kick" && computerSelection === "Kick") {
        fightScene.src = "images/kickkick.png";
    } else if (playerSelection === "Parry" && computerSelection === "Parry") {
        fightScene.src = "images/parryparry.png";
    } else if (playerSelection === "Jab" && computerSelection === "Parry") {
        fightScene.src = "images/jabparry.png";
    } else if (playerSelection === "Parry" && computerSelection === "Kick") {
        fightScene.src = "images/parrykick.png";
    } else if (playerSelection === "Kick" && computerSelection === "Jab") {
        fightScene.src = "images/kickjab.png";
    } else if (computerSelection === "Jab" && playerSelection === "Parry") {
        fightScene.src = "images/parryjab.png";
    } else if (computerSelection === "Parry" && playerSelection === "Kick") {
        fightScene.src = "images/kickparry.png";
    } else if (computerSelection === "Kick" && playerSelection === "Jab") {
        fightScene.src = "images/jabkick.png";
    }
    playHit();
}

const buttons = document.querySelectorAll('.gameButtons');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const gameWinner = document.querySelector('#gameWinner');
        const roundWinner = document.querySelector('div#roundWinner');
        const userScoreSelector = document.querySelector('#userScore');
        const compScoreSelector = document.querySelector('#compScore');
        let userScore = parseInt(userScoreSelector.textContent.slice(12));
        let compScore = parseInt(compScoreSelector.textContent.slice(13));
        if (userScore === 0 && compScore === 0) {
            fightScene = document.querySelector('.fightScene');
            fightScene.src = "images/defaultposition.png";
        }
        let winner = playRound(button.id, getComputerChoice());

        if (userScore < 5 && compScore < 5) {
            roundWinner.textContent = winner;
            // check string to see if user won or if computer won and change score
            if (winner.slice(0, 5) == 'You w') {
                userScore += 1;
            } else if (winner.slice(0, 5) == 'You l') {
                compScore += 1;
            }
            userScoreSelector.textContent = `Your Score: ${userScore}`;
            compScoreSelector.textContent = `Enemy Score: ${compScore}`;
            const newGameButton = document.querySelector('#newGame');
            if (userScore === 5) {
                gameWinner.textContent = 'You win. Humanity is saved.';
                newGameButton.style.visibility = "visible";
            } else if (compScore === 5) {
                gameWinner.textContent = 'You lose. The end of humanity is near.';
                newGameButton.style.visibility = "visible";
            }
        }
    });
});

const newGame = document.querySelector('#newGame');
newGame.addEventListener('click', () => {
    const newGameButton = document.querySelector('#newGame');
    const userScoreSelector = document.querySelector('#userScore');
    const compScoreSelector = document.querySelector('#compScore');
    const gameWinner = document.querySelector('#gameWinner');
    const roundWinner = document.querySelector('div#roundWinner');
    newGameButton.style.visibility = "hidden";
    gameWinner.textContent = '';
    roundWinner.textContent = '';
    userScoreSelector.textContent = 'Your Score: 0';
    compScoreSelector.textContent = 'Enemy Score: 0';
})
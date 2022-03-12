let buttons = document.querySelectorAll(".button");
const rockBtn = document.getElementById('Rock');
const paperBtn = document.getElementById('Paper');
const scissorsBtn = document.getElementById('Scissors');
const playAgainBtn = document.getElementById('play-again');
const gameEndText = document.getElementById('game-end-text');
const cpuScoreText = document.getElementById('cpuScore');
const playerScoreText = document.getElementById('playerScore');
const resultText = document.getElementById('result');
let cpuScore = 0;
let playerScore = 0;

document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("cpuScore").innerHTML = cpuScore;

// Listens for a button click, then executes handleClick()
rockBtn.addEventListener('click', () => handleClick('Rock'));
paperBtn.addEventListener('click', () => handleClick('Paper'));
scissorsBtn.addEventListener('click', () => handleClick('Scissors'));


// Handles what happens after clicking one of the choices
function handleClick(playerSelection){
    let computerSelection = computerPlay();
    game(playerSelection, computerSelection);
}

// Generates the computers random choice
function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2:
            return 'Scissors'
    }
}

function resetGame() {
    playAgainBtn.addEventListener('click', () => {
      window.location.reload();
    });
  }

  function displayResult(result){
      var winArray = [
          'Nice!',
          'Good job!',
          '+1!',
          'Killing it!'
      ]
      var loseArray = [
          'Oh dear...',
          'Unlucky...',
          'Maybe next time',
          'So close!'
      ]

      var tieArray = [
          'Tie!',
          'You chose the same!',
          'Wow!'
      ]

      if(result === 'win'){
          randomNumber = Math.floor(Math.random()*winArray.length);
          resultText.style.color = 'green';
          resultText.textContent = winArray[randomNumber];
      }
      else if (result === 'loss'){
        randomNumber = Math.floor(Math.random()*loseArray.length);
        resultText.style.color = 'red';
        resultText.textContent = loseArray[randomNumber];
      }
      else if (result === 'tie'){
        randomNumber = Math.floor(Math.random()*loseArray.length);
        resultText.style.color = 'yellow';
        resultText.textContent = tieArray[randomNumber];
      }
  }
  

// Runs through a game, providing a result
function game(playerSelection, computerSelection){
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("cpuScore").innerHTML = cpuScore;
    if(playerScore !== 10 && cpuScore !== 10){
        if(playerSelection === computerSelection){
            displayResult('tie');
        }
        else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
                 (playerSelection === 'Paper' && computerSelection === 'Rock') ||
                 (playerSelection === 'Scissors' && computerSelection === 'Paper')){
                    playerScoreText.style.color = 'green';
                    cpuScoreText.style.color = 'inherit';
                    playerScore++;
                    displayResult('win');
         }
        else if ((playerSelection === 'Rock' && computerSelection === 'Paper') ||
                (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
                (playerSelection === 'Scissors' && computerSelection === 'Rock')){
                    result = 'loss';
                    playerScoreText.style.color = 'inherit';
                    cpuScoreText.style.color = 'red';
                    cpuScore++;
                    displayResult('loss');
                }
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("cpuScore").innerHTML = cpuScore;
    }

    if (playerScore >= 10 || cpuScore >= 10){
        if(playerScore === 10){
            gameEndText.textContent = 'You win!';
            gameEndText.style.color = '#62b49c';
        }
        else {
            gameEndText.textContent = "You lost...";
            gameEndText.style.color = '#b96b78';
        }
        playAgainBtn.style.visibility = 'visible';
        resetGame();
    }
}
let userInput, computerInput;
let playButton = document.querySelector(".play");
let roundResult = document.querySelector("#roundResult");
let gameResult = document.querySelector("#gameResult");
let stopUserInput = false; 

let determineWinner = (firstPlayer, secondPlayer) => {
  switch (firstPlayer){
    case "rock":
      switch (secondPlayer){
        case "rock":
          return "draw";
        case "paper":
          return "loses"
        case "scissors":
          return "wins"
      }
    case "paper":
        switch (secondPlayer){
          case "rock":
            return "wins";
          case "paper":
            return "draw"
          case "scissors":
            return "loses"
        }
    case "scissors":
        switch (secondPlayer){
          case "rock":
            return "loses";
          case "paper":
            return "wins"
          case "scissors":
            return "draw"
        }
  }
}

//player chose rock.
function pickRock(){
  if (!stopUserInput){
    userInput = "rock";
    changeBackground();
  }
}
//player chose scissors.
function pickScissors(){
  if (!stopUserInput){  
    userInput = "scissors";
    changeBackground();
  }
}
//player chose paper.
function pickPaper(){
  if (!stopUserInput){
    userInput = "paper";
    changeBackground();
  }
}

// player and computer score elements in the DOM
let playerScoreElement = document.querySelector("#playerScore");
let computerScoreElement = document.querySelector("#computerScore");

// to check the player and computer scores
let playerScore = 0;
let computerScore = 0;

//change the player and computer score
function changePlayerScore(){
  playerScore++;
  playerScoreElement.textContent = playerScore;
  if (playerScore >= 5){
    gameResult.textContent = "Player wins";    
    playButton.textContent = "Play again";
    playerScore = 0;
    computerScore = 0;
    changeBackground();

    // stop the user input buttons(rock,paper,scissors) after
    // game is won.
    stopUserInput = true;
  }
}
function changeComputerScore(){
  computerScore++;
  computerScoreElement.textContent = computerScore;
  if (computerScore >= 5){
    gameResult.textContent = "Computer wins";
    playButton.textContent = "Play again";
    playerScore = 0;
    computerScore = 0;
    changeBackground();

    // stop the user input buttons(rock,paper,scissors) after
    // game is won.
    stopUserInput = true;
  }
}


// change background color of the play button to make it more 
//appealing to start the game.
function changeBackground(){
  playButton.classList.remove("oldbackground");
  playButton.classList.add("newbackground");
  roundResult.textContent = "";
}

function play(){
  switch(Math.floor(Math.random()*Math.floor(3))){
    case 0:
      computerInput = "rock";
      break
    case 1:
      computerInput = "paper";
      break
    case 2:
      computerInput = "scissors";
      break
  }
  playButton.classList.remove("newbackground");
  playButton.classList.add("oldbackground");
  
  if (userInput){
    switch (determineWinner(userInput, computerInput)){
      case "wins":
        roundResult.textContent = "You won";
        changePlayerScore();
        break;
      case "loses":
        roundResult.textContent = "You lose";
        changeComputerScore();
        break;
      case "draw":
        roundResult.textContent = "Draw. Try again";
        break;
    }
    userInput = '';
  }
  else {
    roundResult.textContent = "Choose Rock, Paper or Scissors";
    playButton.textContent = "Play";

    // to restart the game after one game is won
    // it just works I couldn't find another solution.
    if (playerScore == 0 && computerScore == 0){
      gameResult.textContent = "";
      playerScoreElement.textContent = playerScore;
      computerScoreElement.textContent = computerScore;
      stopUserInput = false;
    }
  }
}
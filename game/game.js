let userscore = 0;
let boatscore = 0;
const gameContainer = document.querySelector(".container");
const option_images = document.querySelectorAll(".option_image");
const msg = document.querySelector(".result");

// update score
const playerScorePara = document.querySelector("#player_score");
const boatScorePara = document.querySelector("#Boat_score");

// generta boat choice
const genBoatChoice = () => {
  const choice = ["stone", "paper", "scissors"];
  const randomindex = Math.floor(Math.random() * 3);
  return choice[randomindex];
};

const drawGame = () => {
  msg.innerText = "game is draw!";
};

const showWinner = (playerwin, playerchoice, boatChoice) => {
  if (playerwin) {
    userscore++;
    playerScorePara.innerText = userscore;
    // console.log("player Win!");
    msg.innerText = `player Win!  ${playerchoice} beats ${boatChoice}`;
  } else {
    // console.log("player lose!");
    boatscore++;
    boatScorePara.innerText = boatscore;
    msg.innerText = `player lose!  \n ${boatChoice} beats player ${playerchoice}`;
  }
};

// generate player choice
const playgame = (playerchoice) => {
  // console.log("player choice =", playerchoice);

  // boat choice get by gen boatchoice
  const boatChoice = genBoatChoice();
  let userImg = document.getElementById("user-img");
  document.getElementById("font-color");
  userImg.src = `images/${playerchoice}.png`;

  //setting the image of bot chance
  let botImg = document.getElementById("bot-img");
  botImg.src = `images/${boatChoice}.png`;

  if (playerchoice === boatChoice) {
    // draw situation
    drawGame();
  } else {
    let playerwin = true;
    if (playerchoice === "stone") {
      // scissor,paper
      playerwin = boatChoice === "paper" ? false : true;
    } else if (playerchoice == "paper") {
      // rock,scissors
      playerwin = boatChoice === "scissors" ? false : true;
    } else if (playerchoice == "scissors") {
      // rock,paper
      playerwin = boatChoice === "stone" ? false : true;
    }
    showWinner(playerwin, playerchoice, boatChoice);
  }
};

// select the choice by click and start the game
option_images.forEach((option_image) => {
  option_image.addEventListener("click", () => {
    const playerchoice = option_image.getAttribute("Id");
    playgame(playerchoice);
  });
});

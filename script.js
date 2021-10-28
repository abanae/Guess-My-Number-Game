//Strict Mode
"use strict";

//Setting Score Initail value(STATE DATA)
let score = 20;
let highScore = 0;

//Handle Secret Number using a random number between 0-20

let secretNumb = Math.trunc(Math.random() * 21);
// Testing (NOT FOR PRODUCTION)
// document.querySelector('.number').textContent = secretNumb;

//Display Message Funct
let displayMessg = function (message) {
  document.querySelector(".message").textContent = message;
};
//Display Number Funct
let displayNumb = function (number) {
    document.querySelector('.number').textContent = number;
}
//Display Score Funct
let displayScore = function (score) {
document.querySelector('.score').textContent = score;
}

//Handling Click
document.querySelector(".check").addEventListener("click", function () {
  // Handling value of user's input & changing the type of to 'Number'
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //Setting All Scenerarios
  //Input not recived from user
  if (!guess) {
    displayMessg("⛔️ Must Enter A Number!");
    //Correct Input
  } else if (guess === secretNumb) {
    displayMessg("🎉 Correct Number!");
    displayNumb(secretNumb);
    //color of body change 
    document.querySelector("body").style.backgroundColor = "#40cd16";
    document.querySelector('.number').style.width = "30rem";
    //High Score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //Too High/Too Low Input
  } else if (guess !== secretNumb) {
    //Ternary Condition
    if (score > 1) {
      displayMessg(guess > secretNumb ? "📈 Too high!" : "📉 Too low!");
      // Decreasing the value of score by 1
      score--;
      displayScore(score);
    } else {
      displayMessg("💥You Lost!");
      displayScore(0);
      document.querySelector("body").style.backgroundColor = "#de2d2d";
    }
  }
});

// Initailizing Again! button
document.querySelector(".again").addEventListener("click", function () {
  //reseting score to initial DATA
  score = 20;
  secretNumb = Math.trunc(Math.random() * 21);
  displayMessg("Start guessing...");
  displayScore(score);
  displayNumb("?");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

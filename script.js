//Strict Mode
'use strict';

//Setting Score Initail value(STATE DATA)
let score = 20;
let highScore = 0;

//Handle Secret Number using a random number between 0-20
let secretNumb = Math.trunc(Math.random()* 21);
// Testing (NOT FOR PRODUCTION)
// document.querySelector('.number').textContent = secretNumb;

//Handling Click
 document.querySelector('.check').addEventListener('click', function(){
// Handling value of user's input & changing the type of to 'Number'
     const guess = Number(document.querySelector('.guess').value);
     console.log(guess);

      //Setting All Scenerarios
      //Input not recived from user 
      if (!guess){
          document.querySelector('.message').textContent='⛔️ Must Enter A Number!';
           //Correct Input 
      }else if (guess === secretNumb){
          document.querySelector('.message').textContent='🎉 Correct Number!';
          document.querySelector('body').style.backgroundColor = '#40cd16';
          document.querySelector('.number').style.width = '30rem';
           //High Score
          if(score > highScore){
              highScore = score;
              document.querySelector('.highscore').textContent = highScore;
          }
         
          //Too High/Too Low Input
      }else if(guess !== secretNumb){
          //Ternary Condition
          if (score > 0){
              document.querySelector('.message').textContent = guess > secretNumb ? '📈 Too high!' : '📉 Too low!';
              // Decreasing the value of score by 1
              score --;
              document.querySelector('.score').textContent =score;
          }else{
              document.querySelector('.message').textContent = '💥You Lost!';
              document.querySelector('.score').textContent = 0;
              document.querySelector('body').style.backgroundColor = 'red';
          }
      }
 });

 // Initailizing Again! button 
 document.querySelector('.again').addEventListener('click', function(){
     //reseting score to initial DATA
     score = 20;
     secretNumb = Math.trunc(Math.random() * 21);
     document.querySelector('.message').textContent = 'Start guessing...';
     document.querySelector('.score').textContent = score;
     document.querySelector('.number').textContent = '?';
     document.querySelector('.guess').value = '';
     document.querySelector('body').style.backgroundColor = '#222';
     document.querySelector('.number').style.width = '15rem';
 });



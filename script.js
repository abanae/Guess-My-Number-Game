//Strict Mode
'use strict';

//Setting Score Initail value(STATE DATA)
let score = 20;
let highScore = 0;

//Handle Secret Number using a random number between 0-20
let secretNumber =Math.trunc(Math.random()* 21);
// Testing (NOT FOR PRODUCTION)
document.querySelector('.number').textContent = secretNumber;

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
      }else if (guess === secretNumber){
          document.querySelector('.message').textContent='🎉 Correct Number!';
          document.querySelector('body').style.backgroundColor = '#40cd16';
          document.querySelector('.number').style.width = '30rem';
          //Too High/Too Low Input
      }else if(guess !== secretNumber){
          //Ternary Condition
          if (score > 0){
              document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
          }
      }
 });


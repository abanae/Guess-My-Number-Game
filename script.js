//Strict Mode
'use strict';

//Setting Score Initail value(STATE DATA)
let score = 20;
let highScore = 0;

//Handle Secret Number using a random number between 0-20
let secretNumber =Math.trunc(Math.random()* 21);

//Handling Click
 document.querySelector('.check').addEventListener('click', function(){
// Handling value of user's input & changing the type of to 'Number'
     const guess = Number(document.querySelector('.guess').value);
     console.log(guess);
 });


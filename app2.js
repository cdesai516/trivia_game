
console.log("hello");
var selectedAnswerArr=[];
var startGameBtn = $('#startGame');
var timerCounter =$('.timer');
var number = 30;
var correctAnswers=["BTC","Satoshi Nakamoto","Blockchain","Ripple","TD Bank","Miners","JP Morgan",];
var choicesList = $(".choices");
var userChoice = $(".choices").innerHTML;




$(document).ready(function() {
console.log(selectedAnswerArr);
console.log(startGameBtn);
console.log(timerCounter);


function pushAnswer() {
  $(".choices").on('click',function(event) {
    var userChoice = $(".choices").innerHTML;
    var userStr = toString(userChoice);
    selectedAnswerArr.push(userStr);
  });
}
console.log(selectedAnswerArr);
//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;



///// FUNCTIONSSSSSSSSSSSSSSS
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  console.log(intervalId);

}
//  The decrement function.
function decrement() {

  //  Decrease number by one.
  number--;

  //  Show the number in the #show-number tag.
  $("#timer").html("<h2>" + number + "</h2>");


  //  Once number hits zero...
  if (number === 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
    alert("Time Up!");
  }
}
//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
}

//  Execute the run function.
run();
pushAnswer();
})

//Chapter_26_to_30:

Question_01:
var number = parseInt(prompt("Enter a positive integer:"));
document.write("Number:" + number + "</br>") ;
var roundOff = Math.round(number);
document.write("Round off value:" + roundOff + "</br>");
var floorValue = Math.floor(number);
document.write("Floor value:" + floorValue + "</br>");
var ceilValue = Math.ceil(number);
document.write("Ceil value:" + ceilValue + "</br>");

//Question_02:
var number = parseFloat(prompt("Enter a negative floating-point number:"));
document.write("Number:" + number + "<br>");
var roundOff = Math.round(number);
document.write("Round off value:" + roundOff + "<br>");
var floorValue = Math.floor(number);
document.write("Floor value:" + floorValue + "<br>");
var ceilValue = Math.ceil(number);
document.write("Ceil value:" + ceilValue + "<br>");

//Question_03:
var number = prompt("Enter a number:");
var absoluteValue = Math.abs(Number(number));
document.write('The absolute value of ${number} is ${absoluteValue}.');

//Question_04:
var diceRoll = Math.floor(Math.random() * 6) + 1;
document.write("The Random dice value is : " + diceRoll);

//Question_05:

var randomValue = Math.random();
var coinResult;

if (randomValue < 0.5) {
  coinResult = "Heads";
} else {
  coinResult = "Tails";
}

document.write("The random coin value is: " + randomValue + "</br>")
document.write("The random coin value is: " + coinResult);

//Question_06:
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("Random Number:" + randomNumber);

//Question_07:
var weightInput = prompt("Enter your weight in Kgs :");
var weight = parseFloat(weightInput);
document.write("Your weight is:" +  weight + "kgs");

//Question_08:

var secretNumber = Math.floor(Math.random() * 10) + 1;
var userInput = prompt("Guess the secret number (between 1 and 10):");
var guessedNumber = parseInt(userInput);
if (guessedNumber === secretNumber) {
  document.write("Congratulations! You guessed the secret number!");
} else {
  document.write("Sorry, the secret number was " + secretNumber);
}

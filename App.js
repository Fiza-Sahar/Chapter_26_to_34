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

// Chapter_31_to_34:
// Question_01:
var currentDate = new Date();
document.write("Current Date and Time: " + currentDate);

// Question_02:
var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
alert("Current Month: " + monthNames[currentMonth]);

// Question_03:
var currentDate = new Date();
var currentDay = currentDate.getDay();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
alert("Current Day: " + dayNames[currentDay]);

// Question_04:
var currentDate = new Date();
var currentDay = currentDate.getDay();
if (currentDay === 6 || currentDay === 0) {
  alert("It's Fun day");
} else {
  alert("It's not Fun day");
}

// Question_05:
var currentDate = new Date();
var currentDay = currentDate.getDate();
if (currentDay < 16) {
  document.write("First fifteen days of the month");
} else {
  document.write("Last days of the month");
}

// Question_06:

var currentTime = new Date().getTime();
var minutesSince1970 = Math.floor(currentTime / (1000 * 60));
document.write("Minutes since midnight, Jan. 1, 1970: " + minutesSince1970);


// Question_07:
// Get the current hour
var currentTime = new Date().getHours();
if (currentTime < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}

// Question_08:
var laterDate = new Date(2020, 11, 31);
document.write("Later Date: " + laterDate);

// Question_09:

var startingDate = new Date('June 18, 2015');
var currentDate = new Date();
var timeDifference = currentDate.getTime() - startingDate.getTime();
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
alert("Number of days passed since 1st Ramadan: " + daysPassed);

// Question_10:

var refDate = new Date();
var tarDate = new Date('January 1, 2015');
var timeDiff = Math.floor((refDate - tarDate) / 1000);
document.write("Seconds elapsed since the beginning of 2015: " + timeDiff);

// Question_11:

var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
document.write("Updated Date: " + currentDate);

// Question_12:

var currDate = new Date();
currDate.setFullYear(currDate.getFullYear() - 100);
alert("Updated Date: " + currDate);

// Question_13:

var age = prompt("Enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("Your birth year is: " + birthYear);

//Question_14:

var customerName = prompt("Enter customer name:");
var currentMonth = prompt("Enter current month:");
var numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
var latePaymentSurchargeRate = parseFloat(prompt("Enter late payment surcharge rate (%):"));
var netAmountPayable = numberOfUnits * chargesPerUnit;
var latePaymentSurcharge = (netAmountPayable * latePaymentSurchargeRate) / 100;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
netAmountPayable = netAmountPayable.toFixed(2);
latePaymentSurcharge = latePaymentSurcharge.toFixed(2);
grossAmountPayable = grossAmountPayable.toFixed(2);
document.write("<h2>K-Electric Bill</h2>");
document.write("<strong>Customer Name:</strong> " + customerName + "<br>");
document.write("<strong>Current Month:</strong> " + currentMonth + "<br>");
document.write("<strong>Number of Units:</strong> " + numberOfUnits + "<br>");
document.write("<strong>Charges per Unit:</strong> $" + chargesPerUnit.toFixed(2) + "<br>");
document.write("<strong>Net Amount Payable (within Due Date):</strong> $" + netAmountPayable + "<br>");
document.write("<strong>Late Payment Surcharge:</strong> $" + latePaymentSurcharge + "<br>");
document.write("<strong>Gross Amount Payable (after Due Date):</strong> $" + grossAmountPayable + "<br>");


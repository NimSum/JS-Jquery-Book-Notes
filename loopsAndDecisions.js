//DECISIONS
//Basic Example
var speedLimit = 60;
var speed = 66;

var speeding = speedLimit >= speed;//stores a boolean value
var difference = ((speed - speedLimit) >= 5)//does not need to be in () but its good practice, used to isolate a condition
var message;								

if (speeding == true) {//if its true return this message
	message = ' You are within limits'
}
else {
	message = ' You are too fast!'
}
// if (((speed - speedLimit) >= 5)) {//alternate to using difference operand above
// 	var difference = true;
// }


var insertMessage = document.getElementById('quickExample');
insertMessage.textContent =  message;
var ticket = document.getElementById('ticketed')
ticket.textContent = ' ' +  difference;
//Logical Operators Ex
var score1 = 10;
var score2 = 20;
var pass1 = 5;
var pass2 = 5;

var testScore = ((score1 >= pass1) && (score2 >= pass2));
console.log('&& Operator EX: ' + testScore);
var testScore2 = ((score1 >= pass1) || (score2 >= pass2));
console.log('|| Operator EX: ' + testScore2);
console.log('! Operator EX: ' + !(testScore2));//the ! reverses boolean value

//IF  Statements... Recycling variables above
var msg;
function success() {//returns message if success
	msg = 'Not too bad, keep studying!';
	msg += 'I buy you ice cream lol';
	console.log(msg);
};

if (score2 >= 20) {
	success();//executes function above
}
else {//if above condition returns false, code below is executed
	msg = 'You are a failure! ';
	msg += 'Try Again!';
	console.log(msg); 
	//can also use call functions
}

//Switch Statement-0
var color = 'red';

switch (color) {//retrieves "color" value
	case 'blue'://if the color has string 'blue' value, it will execute code until it reaches break;
	console.log('The color is Blue');
	break;

	case 'red'://if string value in color is 'red', executes below
	console.log('The color is Red');
	break;

	default://if none of the cases are met, code below will execute
	console.log('Please set a color');
	break;
}




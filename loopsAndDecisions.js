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

//LOOOPS
for (var i = 0; i < 5; i++) {//simple counter up to 5
	console.log(i);
};

//Loops & Arrays
var runTimeInMins = [10, 9 , 8, 6];//array or numbers
var arrayLength = runTimeInMins.length;//set array  runtime arr length
var totalRuns = 0;//current round
var forMsg = '';//empty message

for (var i = 0; i < arrayLength; i++) {//loops arraLength times(4)
	totalRuns = (i + 1);//Set starting num to 0
	//current run message
	forMsg += 'Race Track Run ' + totalRuns + '(in minutes): ';
	//insert score from runTimeInMins arr
	forMsg += runTimeInMins[i] + '<br />';//[i] is the current array value each time it ghoues through the loop
}

document.getElementById('forLoop').innerHTML = forMsg;

//While Loop
var i = 1;//set start value to 1 instead of 0
var whileMsg = '';//empty string var
while (i <= 10) {//set to <=  because i starts at 1, and will continue up to 5 (i<6)  will also work
	whileMsg += i + ' X 5 = ' + (i * 10) + '<br />';//create message + result
	i++;//increment i for each iteration
}

document.getElementById('whileLoop').innerHTML = whileMsg;

//Do While Loop
//declare vars and set values
var doWhileMsg = '';
var i = 10000;//initial i value
var divided;//
do {
	divided = (i/10)//divides i for every iteration and is used as the answer
	doWhileMsg += i + ' / 10 = ' + divided + '<br />';	
	i = (i/10)//also divides i for every iteration but is used to track i untill "while" loop evaluates to false
}while (i >= 10);//ends loop when evaluates to false, while portion can be written in a separate line

document.getElementById('doWhileLoop').innerHTML = doWhileMsg;

//Combining Decisions & Loops
//declare variables
var testerString = 'i_am_a_robot';//random string
var unit = 5;
var limitNum = 50;
var i = 1;
var loopAndDecisions = '';//empty string

if (testerString === 'i_am_a_robot') {
	while (i < limitNum) { //keep going untill 50
		loopAndDecisions += i + ' X ' + unit + ' = ' + (i * unit) + '<br />';
		i += unit;
	}
//if statement returns true, code below executes.
} else {
	while (i < limitNum) {//keey going until 50
		loopAndDecisions += i + ' + ' + unit + ' = ' + (i + unit) + '<br />';
		i += unit;//increment by 5 each iteration
	}	
}

document.getElementById('loopsAndDecisionsEx').innerHTML = loopAndDecisions;






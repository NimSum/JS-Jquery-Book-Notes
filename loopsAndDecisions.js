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
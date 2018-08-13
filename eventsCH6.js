//DOM EVENT HANDLER
function checkInputLength() {//function to check input
	var insertNotification = document.getElementById('inputCheck');//insert target in this var
	if (this.value.length < 5) {//if input less than 5, sent message below
		insertNotification.textContent = "Too short! Can't count to 5?"
	}	else {//... pretty self explanatory
		insertNotification.textContent = "Congrats, you can count to 5!";
	}
}
//place input data inside a variable
var checkInput = document.getElementById('traditionalInput');
//once data is recieved, run the code
checkInput.onblur = checkInputLength;//no parenthesis, cannot pass arguments with this model

//EVEN LISTENER EXAMPLE
function checkInputLengthTwo() {//function to check input
	var insertNotification = document.getElementById('eventListenerOutput');//insert target in this var
	if (this.value.length > 5) {//if input less than 5, sent message below
		insertNotification.textContent = "Too long! Can't count to 5?"
	}	else {//... pretty self explanatory
		insertNotification.textContent = "Congrats, you can count to 5!";
	}
}
var eventListener = document.getElementById('eventListenerInput');
//three parameters set, explained inside index.html
eventListener.addEventListener('blur', checkInputLengthTwo, false);

//ADDING PARAMETERS
//place targtets inside a var
var parameterTarget = document.getElementById('parameterInput');
var insertNotification = document.getElementById('parameterOutput');

function checkParameterLengthThree(totalLength) {
	if (parameterInput.value.length != totalLength) {//if parameter does not equal input length, notifies user
		insertNotification.textContent = "That's not " + totalLength + "!!!";
	} else {
		insertNotification.textContent= "That is " + totalLength;
	}
}
parameterTarget.addEventListener('blur', function() {//anonymous function
	checkParameterLengthThree(6);//will not execute right away because its not in an anonymous function
}, false);
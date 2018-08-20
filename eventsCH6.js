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
	checkParameterLengthThree(5);//will not execute right away because its not in an anonymous function
}, false);


//EVENT DELEGATION EXAMPLE AINT WORKINGG!
// function getTarget(e) {
// 	if (!e) {
// 		e = window.event;
// 	}
// 	return e.target || e.srcElement;
// }

// function itemDone(e) {
// 	var target, elParent, elGrandparent;
// 	target = getTarget(e);
// 	elParent = target.parentNode;
// 	elGrandParent = target.parentNode.parentNode;
// 	elGrandparent.removeChild(elParent);

// 	if (e.preventDefault) {
// 		e.preventDefault(); 
// 	} else {
// 		e.returnValue = false;
// 	}
// }

// var el = document.getElementById('shoppingList');
// if (el.addEventListener) {
// 	el.addEventListener('click', function(e) {
// 		itemDone(e);
// 	}, false);
// } else {
// 	el.attachEvent('onclick', function(e) {
// 		itemDone(e);
// 	});
// }


//FOCUS AND BLUR
function checkUserName () {
	var username = el.value;//set value to input of user
	if (username.length < 5) {//condition requiredment
		elMsg.className = 'eventHandler'//set css class for warning message
		elMsg.textContent = 'Not long enough bro, common...';//warning message
	} else {
		el.Msg.textContent = '';//if criteria met, no message needed
	}
}
function tipUsername() {
	elMsg.className = 'eventHandlerChild';//set tip to a specific class
	elMsg.textContent = '5 Chars or more please';//tip text 
}

var el = document.getElementById('focusAndBlurInput');//set targets
var elMsg = document.getElementById('focusAndBlurFeedBack');//set targets

el.addEventListener('focus', tipUsername, false);//listen for focus event
el.addEventListener('blur', checkUserName, false);//listen for blur event


//MOUSE EVENTS
var msg = 'div class=\"header\"><a id=\"close\" href "#">close X</a></div>';
msg += '<div><h2>YOU SHOULD NOT HAVE DONE THAT</h2>';
msg += 'Now you will pay the price!';
msg += 'The price of clicking that exit button on the top right! Muahahaha.</div>';

// var warningMessage = document.createElement('div');
// warningMessage.setAttribute('id', 'note');
// warningMessage.innerHTML = msg;
// document.body.appendChild('warningMessage');

// function dismissWarning() {
// 	document.body.removeChild(warningMessage);
// }

// var closeWarning = document.getElementById('button');
// closeWarning.addEventListener('click', dismissWarning, false);

function warningMessage() {
	var warningPopUp = document.createElement('div');
	warningPopUp.innerHTML = msg;
}
var buttonClick = document.getElementById('button');
buttonClick.addEventListener('click', warningMessage, false);


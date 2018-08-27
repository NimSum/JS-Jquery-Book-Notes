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
///msg in html including css tags
var msg = '<div class=\"closeButton\"><a id=\"close\" href "#">Close X</a></div>';
msg += '<div class=\"messageTemplate\"><div><h2>YOU SHOULD NOT HAVE DONE THAT!</h2>';
msg += '<br>Now you will pay the price!';
msg += '<br>The price of clicking that exit button on the top right! Muahahaha.</div></div>';
//function executes when button is clicked
function warningMessage() {
	var warningPopUp = document.getElementById('warningMsg');
	warningPopUp.innerHTML = msg;
}
//button is placed into a variable and linked to an event
var buttonClick = document.getElementById('bttn');
buttonClick.addEventListener('click', warningMessage, false);


//EVENT OCCURANCE LOCATOR
//place output locations inside a variable
var sx = document.getElementById('sX');
var sy = document.getElementById('sY');
var px = document.getElementById('pX');
var py = document.getElementById('pY');
var cx = document.getElementById('cX');
var cy = document.getElementById('cY');
//set function that will update mouse location live
function whereAtXY(event)  {
	sx.value = event.screenX;
	sy.value = event.screenY;
	px.value = event.pageX;
	py.value = event.pageY;
	cx.value = event.clientX;
	cy.value = event.clientY;
}
//set event listener
var inputLocation = document.getElementById('body');
inputLocation.addEventListener('mousemove', whereAtXY, false);


////KEYPRESS FUNCTION
function charCount(e) {
	var textEntered, charDisplay, counter, lastkey;//variables
	textEntered = document.getElementById('keyPressInput').value;//set text input into a var
	charDisplay = document.getElementById('keyPressOutput');//set output location
	counter = (180 - (textEntered.length));//count chars
	charDisplay.textContent = counter;//combine counter output to output location


	// lastkey = document.getElementById('keyPressOutput2');
	// lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode;//dunno why keycode doesnt work
}
//add set event listener
var keys = document.getElementById('keyPressInput');
keys.addEventListener('keyup', charCount, false);

//FORM EVENTS
var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;
elForm = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint() {
	var pack = this.options[this.selectedIndex].value;
	if (pack == 'oneDay') {
		elPackageHint.innerHTML = 'ONE DAY IS ALL YOU NEED TO CHECK THIS EXPERIENCE OUTTA YOUR BUCKET LIST!';
	} else if (pack == 'oneWeek') {
		elPackageHint.innerHTML = 'ONE WEEK IS ENOUGH TO MAKE YOUR FRIENDS YOU OWN THE CAR! SHOW IT OFF!!';
	} else {
		elPackageHint.innerHTML = 'BABABABABALLLLING OUTTA CONTROL!';
	}
}
function checkTerms(event) {
	if (!elTerms.checked) {
		elTermsHint.innerHTML = 'If you want the lambo, gotta check this box!';
		event.preventDefault();
	}
}

elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);
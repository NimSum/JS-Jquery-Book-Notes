var today = new Date(); //creates new object called date
var hourNow = today.getHours(); //creates hournow object and runs gethours script
var greeting;

//choose which statement based on time
if (hourNow > 18) {
	greeting = 'Good evening!';
} else if (hourNow >12) {
	greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
	greeting = 'Good Morning!';
} else {
	greeting = 'Welcome'
}

document.write('<h3>' + greeting + '</h3>');


//page 63 
var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;
var totalPrice = document.getElementById('cost');
totalPrice.textContent = '$' + total;


///page 64 string insertion
var username;
var message;
username = 'Molly';
message = 'See our upcoming range';

var elName = document.getElementById('name');
elName.textContent = username;
var elNote = document.getElementById('note');
elNote.textContent = message;

//page 65 string insertion with html
var title;
var message;
title = "Molly's Special Offers";
message = '<a href\"sale.html\">25% off!</a>';

var elTitle = document.getElementById('title');
elTitle.innerHTML = title;
var elNote = document.getElementById('note2');
elNote.innerHTML = message;

//page 66 boolean storage
var inStock;
var shipping;
inStock = true;
shipping = false;
//page 68 = changing values
// inStock = false; will change value above with no other requirements
// shipping = true;

var elStock = document.getElementById('inStock');
elStock.className = inStock;
console.log(inStock);
var elShip = document.getElementById('shipping');
elShip.className = shipping;
console.log(shipping);

//page 71 Array Examples
//Array literal is preferred(one with [])
var colors;
colors = ['white', 'blue', 'green', 'custom'];
// OR Array constructor below
// var colors = new Array ('white',
// 						'blue',
// 						'green');
var laColors = document.getElementById('colors');
laColors.textContent = colors[1];
//accessing an array
var theColorGreen = colors[2]
console.log(theColorGreen);
//determining length of arrays
var colorAmount = colors.length;
console.log(colorAmount);
//changing/updating array values
colors[3] = 'yellow'; //can create a new value with any number you want
console.log(colors[3]); // ie colors[20] even if it's not in the current array yet
//Page 74 EXPRESSIONS - 2 Types
//type 1 ONLY a value is assigned
var color = 'black';
//type 2 uses TWO or more values to give return a single value
var multiply = 2 * 6;
//var length = '2'; // cannot use arithmetic operation if numeric value is inside ''
console.log('Two times Six: ' + multiply)

//combining strings using + operator(concatenating)
var robotName = ' Butterbots ';
var purpose = 'purpose is to pass butter ';
var times = 12 + ' times.';
var robotsPurpose = robotName + purpose + times;

var elRobot = document.getElementById('concatenation');
elRobot.textContent = robotsPurpose;

//combining arithmetic operators
var length = 10;
var width = 5;
var area = length * width;

var elArea = document.getElementById('areaCalc');
elArea.textContent = ' Length * Width is equal to area: ' + area;

var elLength = document.getElementById('theLength');
elLength.textContent = ' The length is ' + length;

var elWidth = document.getElementById('theWidth');
elWidth.textContent = ' The Width is ' + width;

///Basic Functions, Methods and Objects
var newMessage = 'You see this instead of what is written insde the html tag.';
function updateNewMessage() {
	var elMsg = document.getElementById('message');
	elMsg.textContent = newMessage;
}
updateNewMessage();
//function that requires parameters
function areaCalc(aLength, aWidth) {
	return aLength * aWidth;
}
var calculatedArea = areaCalc(length, width);
console.log('Used w/ basic variable: ' + calculatedArea);
//can be re-used with different values
var exArray = [5, 10, 15, 20]
var otherArea = areaCalc(exArray[0], exArray[3]);
console.log('Used w/ an Array: ' + otherArea);









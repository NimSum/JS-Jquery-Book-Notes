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

var sayWhatever = document.getElementById('sayWhatNow');
sayWhatever.textContent = greeting;


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
function areaCalc(aLength, aWidth, depth) {
	var calcArea = aLength * aWidth;
	var calcVolume = aLength * aWidth * depth;
	var totals = [calcArea, calcVolume];
	return totals;
}
var calculatedArea = areaCalc(length, width);
console.log('Used w/ basic variable: ' + calculatedArea);
//can be re-used with different values
var exArray = [5, 10, 15, 20]
var otherArea = areaCalc(exArray[0], exArray[3]);
console.log('Used w/ an Array: ' + otherArea);
//using function to return more than one value
var laVolume = areaCalc(2, 2, 4)[1];
console.log('The volume of 2,2,4 is: ' + laVolume);
var laArea = areaCalc(2, 2, 4)[0];
console.log('The area of l:2, w:2 is: ' + laArea);


///ANONYMOUS FUNCTIONS
// below is a function expression also an anonymous function
//because it has no name ... sad :(
var anonMulti = function(number1, number2, number3) {
	return (number1 * number2) / number3;
}
var randomNums = anonMulti(2, 4, 2);
console.log(randomNums);

///IMMEDIATELY INVOKED FUNCTIONS: IIFE
// IIFE's are executed as soon as the interpreter gets to them.
//used to wrap sets of code. used for scope concept.
var iifeMulti = ( function() {
	var length = 10;
	var width = 15;
	var height = 2;
	var volume = length * width * height;
	console.log(volume);
}
());
//When to use IIFE/ANONYMOUSE FUNCTIONS
// 1. Code that needs to be run Once within a task
// 2. To prevent scripts/variables that has the same name


//VARIABLE SCOPE
//Local Variable Example:
function localVol (length, width, height) {
	var volume = length * width * height;// the same variable names are used but it
	var message = 'Local Scope using vars with the same name: ';//won't affect the global scope because
	return message + volume;								//// it is inside a function(Local Scope)						
}									
var localVolume = localVol(2, 2, 2);
console.log(localVolume);

////BASIC OBJECTS
//Literal Notation example:
var myCar = {
	model: 'BMW m235i',///properties
	color: 'Black ',//use ',' to separate each pair
	fast: true,
	interiorColor: ', interior: black ',
	performance: ['Horsepower:320HP ', 'Torque: 330 lb-ft: '],
	showDescription: function() {///method the 'this.' is used to direct interpreter to use vars in this object
		return this.color + this.model + this.interiorColor + this.performance 
		+ 'Is it Fast?' + this.fast;//final value is a semi-colon
	}
};
console.log(myCar.showDescription());
//Accessing Objects
//Dot Notation
var carModel = myCar.model;
console.log('My car model is: ' + carModel);
//Bracket Notation
var carColor = myCar['color'];
console.log('My car color is: ' + carColor);
//more examples using arithmetic
var cookieJar = {
	cookieType:'Chocolate Chip: ',
	cookieAmount: 15,
	cookiesEaten: 5,
	cookieMonster: function() {
		for (var i = this.cookieAmount; i > 0; i--) {
		if (this.cookieAmount >= 2) {
			console.log('want more cookies!');
			}
		else if (this.cookieAmount == 1) {//idk why its not working :/
			console.log('no more cookies, sad! :(');
			}
		};
	},
	cookieCounter: function() {
		return this.cookieType + (this.cookieAmount - this.cookiesEaten);
	}
};
cookieJar.cookieMonster();
var insertCookieAmount = document.getElementById('cookies');
insertCookieAmount.textContent = cookieJar.cookieCounter();

///Example using Constructor Notation
var computer = new Object();
//can also make one using  literal notation
//EX: var computer = {} - creates a blank object
computer.processor = 'Intel i7';
computer.graphics = 'GTX 1080 TI';
///can also insert methods like a normal object literal
console.log(computer);

//updating object values/properties, will work with literal & contructor notations
//updating something that doesnt exist will be added to the object!
computer.processor = 'Intel i5';
computer.graphics = '';///to clear a property
console.log(computer);
//deleting a property
delete computer.graphics;
console.log(computer);

//Multi Object Constructor: Function used as a template
function Cars(brand, model, paintColor) {
	this.brand = brand;
	this.model = model;
	this.paintColor = paintColor;

	this.checkCar = function() {
		return this.brand + this.model + this.paintColor;
	};
}
var bmw = new Cars('BMW', ' 2 Series', ' Black', 'blue');
console.log(bmw.checkCar());//bmw becomes the object;
var ford = new Cars('Ford ', 'Mustang ', 'Lime Green');
console.log(ford.checkCar());

///Function expression as a method 
var height = 10;
var shape = {
	height: 6,
	width: 10,
	length: 2,
};
var showVolume = function () {
	console.log(this.width * this.height * this.length);
} ///the height is taken from the shape object, not from the global variable
shape.thisVolume = showVolume;
shape.thisVolume();


//ARRAYS a lil more in - depth
//Combining arrays and objects and vise versa
//Arrays in an Object


///Built in Objects
//Browser Object Model EX:
var msg = '<h5>Browser window EX:</h5><p>width: ' + window.innerWidth + '</p>';
msg += '<p>height: ' + window.innerHeight + '</p>';
msg += '<h5>History EX:</h5><p>items:' + window.history.length + '</p>';
msg += '<h5>Screen EX:</h5><p>width:' + window.screen.width + '</p>';
msg += '<p>height:' + window.screen.height + '</p>';
var el = document.getElementById('info');
el.innerHTML = msg;
//alert('Current page: ' + window.location); = popup that shows the url

//Document Object EX:
var msg = '<p><b>page title:: </b>' + document.title + '<br />';
msg += '<b>page adress: </b>' + document.URL + '<br />';
msg += '<b>last modified: </b>' + document.lastModified + '<br />';
msg += '<b>The creator: NimSum</b> </p>';

var insertDom = document.getElementById('domExample');
insertDom.innerHTML = msg;


//Global JS Objects
//STRINGS:
var flatTards = 'The earth must be flatt because...';
var msg = '<p class="bold">' + flatTards + '</p>';
msg += '<p>length: ' + flatTards.length + '</p>';
msg += '<p>upperCase: ' + flatTards.toUpperCase() + '</p>';
msg += '<p>lowerCase: ' + flatTards.toLowerCase() + '</p>';
msg += '<p>character index: : ' + flatTards.charAt(9) + '</p>';
msg += '<p>first "tt": ' + flatTards.indexOf('tt') + '</p>';
msg += '<p>last e: ' + flatTards.lastIndexOf('e') + '</p>';
msg += '<p>character index: 5-10: ' + flatTards.substring(5, 10) + '</p>';
msg += '<p>replace: ' + flatTards.replace('flatt', 'round') + '</p>';

var insertStrExample = document.getElementById('stringEx')
insertStrExample.innerHTML = msg;


///Number Object Manipulation
var pi = 3.14159265359;

var msg = '<p class= "bold"> PI up to 11 Decimal Places: ' + pi + '</p>';
msg += '<p> Rounded @ 4 decimal places: ' + pi.toFixed(4) + '</p>';
msg += '<p> Shortened to 4 digits: ' + pi.toPrecision(4) + '</p>';
msg += '<p> Exponential notation:' + pi.toExponential(5) + '</p>';

var insertNumberEx = document.getElementById('numberEx');
insertNumberEx.innerHTML = msg;


///Gloabl Math Object - Random Math creator
var randomNum = Math.floor((Math.random() * 100) + 1);

var insertRandomNum = document.getElementById('mathEx');
insertRandomNum.textContent = randomNum;


//Creating a Date Instance Object:
var today = new Date();
var year = today.getFullYear();//grabs full year

var insertDate = document.getElementById('dateEx');
insertDate.innerHTML = '<p class= "bold">Copyright & Copy:' + year + '</p>'

//Date instance that calculates my birthday
var year = today.getFullYear();//get current year
var theDayIcameToExistance = new Date('Jul 14, 1994 00:01:01');//YYYY, MM, DD, HH, MM, SS -- sets my birthday
var totalExistance =  today.getTime() - theDayIcameToExistance.getTime();//returns total years in miliseconds
var totalMonths = (totalExistance / 2592000000);// to get total months
totalExistance = Math.floor(totalExistance / 31556900000);//to get total years divided by total miliseconds in a year

var insertTotalExistance = document.getElementById('existance');
insertTotalExistance.innerHTML = '<p class="bold">I am ' + totalExistance + ' years old</p>';


///FUNCTIONS, METHODS, AND OBJECTS COMBINED
(function() {//IIFE Wrap
 	
 	var carForSale = {///Object declaration
 		description: 'Black BMW M235i',//object property
 		price: 30000,
 		discount: 10,
 		militaryDiscount: 5,
 		discounted: function () {//object method
 			var discountedPrice = this.price * ((100 - this.discount) / 100);
 			return discountedPrice;
 		},
 		militaryDiscounted: function () {
 			var militaryPrice = this.price * ((100 - (this.discount+this.militaryDiscount)) / 100)
 			return militaryPrice;
 		}
 	};
 	///declare variables and assign values later
 	var description, price, discount, militaryDiscount;

 	description = document.getElementById('carDescription');
 	price = document.getElementById('pricing');
 	discount = document.getElementById('priceWithDiscount');
 	militaryDiscount = document.getElementById('military');
 	///standard insert text
 	description.textContent = carForSale.description;
 	price.textContent = '$' + carForSale.price.toFixed(2);//adds 2 dec places 30000.00
 	discount.textContent = '$' + carForSale.discounted();
 	militaryDiscount.textContent = '$' + carForSale.militaryDiscounted();

 	var offerExpireMsg;
 	var today;
 	var offerEnds;
 	var space;

 	function offerExpires(today) {
 		//declare variables for date setting
 		var twoWeeksFromToday, day, date, month, year, dayNames, monthNames;
 		//add 14 days to current day in Miliseconds
 		twoWeeksFromToday = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);
 		//Day names in a an array
 		dayNames = ['Monday :/', 'Tuesday :|', 'Wednesday :||', 'Thursday :)', 'Friday :D', 'Satpartay', 'Sunday :('];
 		monthNames = ['Jan', 'Feb', 'Mariversarry', 'Apr', 'May', 'Jun', 'Julibirthday', 'Sep', 
 						'Oct', 'Nov', 'Decemhohoho'];
 		//set dates to vars created
 		day = dayNames[twoWeeksFromToday.getDay()];
 		date = twoWeeksFromToday.getDate();
 		month = monthNames[twoWeeksFromToday.getMonth()];
 		year = twoWeeksFromToday.getFullYear();

 		//message creation
 		offerExpireMsg = 'Offer expires in two weeks: ';
 		space = ' ';
 		offerExpireMsg += '<br />(' + day + space + date + space + month + space + year + ')';
 		return offerExpireMsg;
 	}	

 	today = new Date('Jul 1, 2018 00:01:01');//insert start date, current time & date is default when blacnk
 	offerEnds = document.getElementById('offerExpiration');
 	offerEnds.innerHTML = offerExpires(today);//calls function that calculates 2 weeks and gives today as starting date
//IIFE Closing
}());





	















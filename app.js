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
colors = ['white', 'blue', 'green'];
// OR Array constructor below
// var colors = new Array ('white',
// 						'blue',
// 						'green');
var laColors = document.getElementById('colors');
laColors.textContent = colors[2];
//accessing an array
var theColorGreen = colors[2]
console.log(theColorGreen);
//determining length of arrays
var colorAmount = colors.length;
console.log(colorAmount);
//changing/updating array values
colors[1] = 'red';
console.log(colors[1]);






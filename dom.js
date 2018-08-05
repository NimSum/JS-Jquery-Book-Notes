//changing CSS Values
var classSelector = document.getElementById('two');//only grabs the first id that matches even if more than one exist
classSelector.className = 'coolColor';

//Accessing Node Lists(in the order it is written in HTML)
var elementSelector = document.getElementsByClassName('warmColor');
if (elementSelector.length >= 1) {
	var firstItem = elementSelector[3];//array selector
	firstItem.className = 'coolColor';//changes color
	var secondItem = elementSelector.item(4);//item method, indexed like arrays
}
console.log(firstItem);
console.log(secondItem);

//QUERY SELECTORS
var singleQuery = document.querySelector('.queryExample');//Returns first match
singleQuery.className = 'warmColor';

var querySelector = document.querySelectorAll('.queryExample');//Returns nodelist, must att full name of query, including '.'
querySelector[1].className = 'coolColor';

//LOOPING QUERIES
var greenToYellow = document.querySelectorAll('.loopQueryEx');

if (greenToYellow.length > 0) {//checks if query has content(to reduce memory use?)
for(var i = 2; i < greenToYellow.length; i++) {//setting i = 2 skips the first 2 elements
	//[i] inserts query into the loop
	greenToYellow[i].className = 'warmColor';///
}
};
console.log(greenToYellow);

//DOM Traversing
var queryTraversion = document.querySelectorAll('.domTraversing');
var elementUp = queryTraversion[0].nextSibling;
elementUp.className = 'redText';

//access & update text node
var targetId = document.getElementById('nodeManipulation')
var targetNode = targetId.firstChild.nodeValue;
console.log(targetNode)

newTextContent = targetNode.replace('Fast', 'Slow');
targetId.firstChild.nodeValue = newTextContent;// swap/replace values.

//Adding an Element to the DOM tree
//specify what element to create(any html tag?)
var newElement = document.createElement('li');
//specify what kinda text u want in there
var newText = document.createTextNode('Nimsum does not belong in this list');
//insert text inside the element
newElement.appendChild(newText);
//find the element you wanna insert it to, at [1] because i wanna target the second ordered list 
var insertLocation = document.getElementsByTagName('ol')[1];
//insert completed element+text ndoe
insertLocation.appendChild(newElement);

//REMOVING ELEMENTS
//selects the third ordered list inside dom 
var parentElement = document.getElementsByTagName('ol')[2];
//specify which element to be deleted
var deleteElement = parentElement.lastChild.previousSibling;
//delete targetted element
parentElement.removeChild(deleteElement);

//








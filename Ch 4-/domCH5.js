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

//ATTRIBUTE NODES
var attributeNode = document.getElementById('attributeNodeExample');

if (attributeNode.hasAttribute('class')) {//if true, execute code below
	var classContainer = attributeNode.getAttribute('class');//returns class of element selected

	var insertTo = document.getElementById('insertAttributeHere');//locate where to input content
	insertTo.innerHTML = '<p>This element has a class name: ' + classContainer + '</p>';//content being inserted
};

//to create/change attribute values
var attributeNodeList = document.getElementById('attributeNodeListExample');
var firstListItem = attributeNodeList.firstChild.nextSibling;
firstListItem.className = 'domTraversing';

//deleting an attribute
var fourthItem = attributeNodeList.lastChild.previousSibling;
if (fourthItem.hasAttribute('class')) {//its good to check for conntent first because if it doesnt then it will cause an error
	fourthItem.removeAttribute('class');
}

//MORE EXAMPLES FROM BOOK
//adding new item in the beginning of a list
//Create Element & Text Nodes > Combine the two > Add Element Node to DOM Tree
var newFirstItem = document.createElement('li');
var newFirstText = document.createTextNode("I'm Number ONE NOW!");

newFirstItem.appendChild(newFirstText);//combine new element + text 
attributeNodeList.insertBefore(newFirstItem, attributeNodeList.firstChild.nextSibling);//insert into the DOM
//use this template for above code "parent.insertBefore(newItem, target);"

//final Example

//find the ul that you wanna manipulate
var finalListExample = document.getElementById('finalExample');
//creat variable for items inside
var listItems = finalListExample.getElementsByTagName('li')
//set i to 0, run until i = length of the list, increment i
for (var i = 0; i < listItems.length; i++) {
	listItems[i].className = 'warmColor';// set i into list item to loop through them
}
//to add total items on list to bottom of list
var tagSelector = document.getElementById('whatever');
var selectedTagText = tagSelector.firstChild.nodeValue;
var totalListItems = listItems.length;
tagSelector.innerHTML = '<h4>Total List is: ' + totalListItems + '<h4>';
console.log(selectedTagText);

////END OF CHAPTER 5//////










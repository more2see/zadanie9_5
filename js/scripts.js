/*
var itemsWithButtonClass = document.getElementsByClassName('button');
console.log(itemsWithButtonClass);

var elementsLength = document.getElementsByClassName('button').length;
console.log (elementsLength);
*/

var textButtons = document.getElementsByClassName('button');

for (var i = 0; i < textButtons.length; i++){
	alert(textButtons[i].innerText);
}


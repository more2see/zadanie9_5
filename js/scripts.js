/*
var itemsWithButtonClass = document.getElementsByClassName('button');
console.log(itemsWithButtonClass);

var elementsLength = document.getElementsByClassName('button').length;
console.log (elementsLength);
*/

var textInButton = document.getElementsByClassName('button');

for (var k = 0; k < textInButton.length; k++){
	alert(textInButton[k].innerText);
}
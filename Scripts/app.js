// setup your IIFE (Immediately Invoked Function Expression)
(function () {

|"use strict";

var myVariable = "hello";
console.log("myVariable" + myVariable);

var myArray = [
	"Jacob Gittings",
	"19 This-street-does-not-exist drive",
	"Barrie",
	"Ontario",
	22,
	true
];

console.log(myArray.slice(4, 1));

for(var index=0; index < myArray.length; index++) {
	console.log(myArray[index]);
}

})();
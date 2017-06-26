//boolean
var bool = true;
console.log(bool)

//numbers
var num = 4;

var firstName = "Craig";
var lastName = "Asher";

//object
var person = {
	name : "Nick",
	age : 44
}

console.log(person.name + person.age);

//functions
function greeting(){
	var name = "Craig"
	var sentence = name + " how are you today?"
	console.log(sentence);
}

greeting()

function add(num1, num2){
	var sum = num1 + num2
	return sum;
}

console.log(add(2,4));


function niceThingToSay(name){
	return name + ", it's nice to meet you!";
}

console.log(niceThingToSay("Patrick"));
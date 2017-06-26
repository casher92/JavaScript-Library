//iife = immediatley invoked function expression

var userAuth = {
	password : 1234,
	name : "admin"
};
//if any logic preceeds an iife then i need to end line above with ;

(function greeting(){
	console.log("Heyy you guys!")
})();


(function multiply(){
	console.log(5 * 4)
})()

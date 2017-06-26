//closure
function init(){
	var name = "StudentA";

	function displayName(){
		console.log(name)
	}

	displayName()
}

init()

function sendRequest(){
	var apiKey = "1234"
	$.ajax({
		url'www.something.com' + apiKey,
		success : function(response){
			console.log("You did it!")
		}
	})
}

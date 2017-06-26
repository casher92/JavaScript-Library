var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'))

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html')
})

app.get('/contact', function(req,res){
	res.sendFile(__dirname + '/contact.html')
})

http.listen(3000, function(){
	console.log("listening on port 3000")
})
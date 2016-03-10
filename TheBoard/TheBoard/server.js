
var http = require("http");

var express = require("express");

var app = express();

// using ejs
//var ejsEngine = require("ejs-locals");
//app.engine("ejs", ejsEngine); // this takes care of the master pages
//app.set("view engine", "ejs");  // this takes care of the actual views of the application

// using vash
app.set("view engine", "vash"); 

// using jade
//app.set("view engine", "jade");

app.get("/", function (req, res) {
	//res.render("jade/index", { title: "First Jade File" });
	//res.render("ejs/index", { title: "First EJS File" });
	res.render("vash/index", { title: "First VASH File" });
});

app.get("/api/users", function (req, res) { 
	res.send({ name: 'Madhurima', city: 'Hyderbad' });
});
var server = http.createServer(app);

server.listen(3000);
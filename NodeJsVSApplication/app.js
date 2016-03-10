console.log('Hello world');

var x = 10;
var y = 24;

console.log(x * y);

var msgs = require("./msg");
console.log(msgs.first);
console.log(msgs.test);
console.log(msgs.functionOne());
console.log(msgs.testObj);
console.log(msgs.testObj.name + " - " + msgs.testObj.place);

// Can be in any below way  - .js searches for a file // without ext searches for a file or directory.
//var msg = require('./msgWithConstructor.js');
var msg = require('./msgWithConstructor');
var mg = new msg();
console.log(mg.first);

var logger = require('./Logger');
logger.log("test from app.js");


var _ = require("underscore");
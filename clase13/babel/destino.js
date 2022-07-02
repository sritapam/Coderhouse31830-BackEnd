"use strict";

var RandomColor = require('./origen');

var red = Math.floor(Math.random() * 255);
var blue = Math.floor(Math.random() * 255);
var green = Math.floor(Math.random() * 255);
var theColor = new RandomColor(red, blue, green);
console.log(" This color", "color: rgb(".concat(theColor.red, ",").concat(theColor.blue, ",").concat(theColor.green, ")"));
console.log("".concat(theColor.red, " ").concat(theColor.blue, " ").concat(theColor.green));

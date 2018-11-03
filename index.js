// console.log(hoistVariable);
// var hoistVariable = "hoist Variable";

// hoistFunc();
// function hoistFunc() {
// 	console.log("hoist function!");
// }

const myModule = require("./exports_keyword.js");
console.log(myModule.moVal1);
console.log(myModule.moVal2);
console.log(myModule.moVal3);
console.log(myModule.moVal4);
console.log(myModule.moFunc1());
console.log(myModule.moFunc2());

// --------------------------------

const arr = ["a", "b", "c"];
//const obj = { a: 1, b: 2, c: 3 };

for (const item of arr) {
	console.log(item);
}

// for (const item of obj) {
// 	console.log(item);	// error
// }

// ----------------------------------

let map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set(3, "c");
map.set(4, "d");
map.delete(4);
console.log(map.get(3));
console.log(map.has(4));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// ---------------------------------

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(1);
set.add(2);
set.add(3);
set.add({a:1, b:2});
set.add({a:1, b:2});
set.delete(1);

console.log(set.size);
console.log(set.has(3));
console.log(set.has(2));
console.log(set.has(1));
console.log(set.keys());
console.log(set.values());
console.log(set.entries());

var express = require("express");
var app = express();

app.get("/", function (req, res) {
	res.send("Hello World!");
});

app.listen(3000, function () {
	console.log("Example app listening on port 3000!");
});
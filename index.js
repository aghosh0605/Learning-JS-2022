//From video https://www.youtube.com/watch?v=8dWL3wF_OMw&t=383s

console.log("I need a pizza");

//window.alert("Where is my Pizza?");
//This is a comment
/*
This is a multiline comment..
*/
let age;
console.log("This age will be undefined", age);
age = 25;
console.log(typeof age);
age = String(age);
console.log(typeof age);
var firstName = "Aniruddha";
const student = true;
document.getElementById("p1").innerHTML = "Hello" + firstName;
document.getElementById("p2").innerHTML = "My age" + age;
document.getElementById("p3").innerHTML = "isStudent" + student;

// How to accept user input
// 1. Easy with window prompt
// let username = window.prompt("What's your name?");
// console.log(username);
// 2. Difficult with HTML Textbox
document.getElementById("myButton").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myLabel").innerHTML = username;
};

let x, y;
x = Boolean("pizza"); //Check if user done some input or not
y = Number("pizza"); //Will return NaN
console.log(x, y);

//Math Functions
x = Math.PI;
y = 5;
let z = 9;
//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x);
//x = Math.abs(x);
// max = Math.max(x, y, z);
// min = Math.min(x, y, z);

console.log(x);

//Till time 37.15

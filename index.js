//Video at https://www.youtube.com/watch?v=8dWL3wF_OMw

//Hypotenuse Calculation
//--------------------------------------------------------------------
// let a;
// let b;
// let c;

// document.getElementById("submitButton").onclick = function () {
//   a = document.getElementById("aTextbox").value;
//   a = Number(a);
//   //b = window.prompt("Enter side B");
//   b = document.getElementById("bTextbox").value;
//   b = Number(b);
//   c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//   console.log(c);
//   document.getElementById("cLabel").innerHTML = "Side C: " + c;
// };

//Counter Program
//------------------------------------------------------------------------
// let count = 0;
// document.getElementById("decreaseBtn").onclick = function () {
//   count -= 1;
//
// };
// document.getElementById("resetBtn").onclick = function () {
//   count = 0;
//   document.getElementById("countLabel").innerHTML = count;
// };
// document.getElementById("increaseBtn").onclick = function () {
//   count += 1;
//   document.getElementById("countLabel").innerHTML = count;
// };

//Random Number Generator
//--------------------------------------------------------------------------
let x, y, z;
document.getElementById("rollButton").onclick = function () {
  x = Math.floor(Math.random() * 6) + 1; //Random Number between 1-6
  y = Math.floor(Math.random() * 6) + 1;
  z = Math.floor(Math.random() * 6) + 1;
  document.getElementById("xLabel").innerHTML = x;
  document.getElementById("yLabel").innerHTML = y;
  document.getElementById("zLabel").innerHTML = z;
  console.log(x);
  console.log(y);
  console.log(z);
};

//Time till 51.00

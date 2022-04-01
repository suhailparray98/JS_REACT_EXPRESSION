import React from "react";
import ReactDOM from "react-dom";

const Fname = "Suhail";
const Mname = "Ahmad";
const Lname = "Parray";
const luckyNumber = 8;
ReactDOM.render(
<div>
<h1>Hello {Fname +" "+ Mname+" "+  Lname} !</h1>
  <p>your lucky number is {luckyNumber}</p>
  </div>, 
document.getElementById("root"));

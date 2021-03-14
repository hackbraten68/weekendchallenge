// Read Input String

let inputString = document.getElementById("equation-field").value;


// Cut Input String to get the elements
let firstNumber = parseInt(inputString.slice (0,1), 1);
let operation = inputString.slice(2,3);
let secondNumber= parseInt(inputString.slice(4,5), 1);


// Die Grundrechenarten in je einer eigenen Funktion

// Addition
function add( firstNumber, secondNumber){
return firstNumber + secondNumber;
}

//Subtraktion
function sub(firstNumber, secondNumber){
 return firstNumber - secondNumber;
}

// Multiplikation

function mul(firstNumber, secondNumber){
  return  firstNumber * secondNumber;
}

// Division

function div (firstNumber, secondNumber){
 return firstNumber / secondNumber;
}

// calculator

function calculate( operation){
if (operation == "+") 
 {  add();}

if (operation == "-"){
   sub();
}
if (operation == "*")
 {  mul();}
if (operation == "/"){
   div();
}
};

function printsolution(){ document.getElementById("solution-display").innerHTML= calculate()};

// Die Function calculate auf Knopfdruck
document.getElementById("solve-button").addEventListener("click", printsolution); 


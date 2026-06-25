var name = "Jayesh";
let city = "Pune";
const country = "India";

console.log("Name - var : ", name);
console.log("City - let : ", city);
console.log("Country - const : ", country);

console.log("Reassigning and redeclaring-----------------------------------");

var name = "Jayesh Belose";
city = "Pune, Maharashtra";

console.log("Redeclared Name - var (can be reassigned and redeclared) : ", name);
console.log("Reassigned City - let (can't be redeclared): ", city);
console.log("Country - const (can't be reassigned and redeclared) : ", country);

console.log("String behaviour------------------------------------");

const stringType = "String";
const numberType = 20;
const booleanType = true;
let undefinedType;
const nullType = null;

console.log("String type : ", typeof stringType);
console.log("Number type : ", typeof numberType);
console.log("Boolean type : ", typeof booleanType);
console.log("Undefined type : ", typeof undefinedType);
console.log("Null type : ", typeof nullType);

console.log("Operators-----------------------------------");

console.log("Addition operator : +");
console.log("Subtraction operator : -");
console.log("Multiplication operator : *");
console.log("Division operator : /");
console.log("Modulus operator : %");

console.log("Function-----------------------------------");

function calculate(a, b) {
    console.log(a + " + " + b + " = " + (a + b));
    console.log(a + " - " + b + " = " + (a - b));
    console.log(a + " * " + b + " = " + a * b);
    console.log(a + " / " + b + " = " + a / b);
}
calculate(36, 4);

console.log("If-Else block-----------------------------------");

function checkGrade(grade) {
    if (grade >= 90) {
        console.log("Grade : A");
    } else if (grade >= 75) {
        console.log("Grade : B");
    } else if (grade >= 60) {
        console.log("Grade : C");
    } else if (grade >= 50) {
        console.log("Grade : D");
    } else {
        console.log("Grade : Fail");
    }
}
checkGrade(74);

console.log("Array-----------------------------------");

let players = ["Virat", "Rohit", "Dhoni", "Hardik", "Gill"];
console.log("Players : ", players);

players.pop();
console.log("After pop : ", players);

players.push("Rahul");
console.log("After push : ", players);

console.log("Array length : ", players.length);

console.log("String methods-----------------------------------");

let team = "Chennai Super Kings";
console.log("Original string : ", team);

console.log("Upper-cased string : ", team.toUpperCase());
console.log("Lower-cased string : ", team.toLowerCase());
console.log("String length : ", team.length);
console.log("Super sliced out : ", team.slice(8, 13));
console.log("Replacing Chennai with Pune : ", team.replace("Chennai", "Pune"));

console.log("Hoisting-----------------------------------");

console.log("Hoisting");

console.log("var : ", a);
var a = 10;

console.log("let : ", b);
let b = 10;

console.log("const : ", c);
const c = 10;

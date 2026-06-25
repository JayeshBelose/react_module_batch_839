// function greet(name) {
//     return "Hello " + name;
// }
// console.log(greet("Alice"));

// const add = function (a, b) {
//     return a + b;
// };
// console.log(add(5, 3));

// const multiply = (a, b) => a * b;
// console.log(multiply(4, 2));

// setTimeout(function () {
//     console.log("This ran after 1 second");
// }, 1000);

// var count = 0;
// var clicked = () => {
//     console.log("Clicked : ", ++count);
// };

function calculate(a, b, opr) {
    switch (opr) {
        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            return a / b;

        default:
            return "Invalid operator...";
    }
}
console.log(calculate(10, 2, "+"));
console.log(calculate(10, 2, "-"));
console.log(calculate(10, 2, "*"));
console.log(calculate(10, 2, "/"));
console.log(calculate(10, 2, "$"));

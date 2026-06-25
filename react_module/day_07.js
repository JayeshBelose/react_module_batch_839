let obj = [
    {
        id: 101,
        name: "Ramesh raut",
        role: "Developer",
        salary: 25000,
    },
    {
        roll: 23,
        name: "Neha Patil",
        standard: "10th",
        marks: 92.3,
    },
];
console.log(obj);

let fruits = ["Mango", "Apple", 5, null, false];
console.log(fruits);

let person = {
    name: "Neha Patil",
    Age: 21,
    Address: "Pune",
    Occupation: "Developer",
};

console.log(person);

person = { ...person, Address: "Mumbai" };
console.log(person);

let num = 31452;
let dig = num.toString().length;
console.log("Digits : ", dig);

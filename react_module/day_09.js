let products = [
    {
        id: 1,
        name: "Eraser",
        price: 6,
        category: "Stationary",
        quantity: 0,
    },
    {
        id: 2,
        name: "Pencil",
        price: 10,
        category: "Stationary",
        quantity: 45,
    },
    {
        id: 3,
        name: "Notebook",
        price: 50,
        category: "Stationary",
        quantity: 12,
    },
    {
        id: 4,
        name: "Sharpener",
        price: 8,
        category: "Stationary",
        quantity: 12,
    },
    {
        id: 5,
        name: "Scale",
        price: 15,
        category: "Stationary",
        quantity: 18,
    },
];
console.log("Products : ", products);

let updatedProducts = products.filter(p => p.id !== 4 && p.quantity !== 0);
console.log("Updated Products : ", updatedProducts);

console.log("Start");

const greet = () => {
    console.log("Delayed Hello");
};
setTimeout(greet, 2000);

let count = 0;
const hello = () => {
    console.log("Hello : ", ++count);
};
let helloInt = setInterval(() => {
    hello();

    if (count === 5) {
        clearInterval(helloInt);
    }
}, 1000);

console.log("End");

import React, { useState } from "react";

const Counter = () => {
    let name = "Jayesh";
    let [count, setCount] = useState(0);

    const increase = () => {
        setCount(++count);
    };

    const decrease = () => {
        if (count === 0) {
            alert("Count cant be below 0");
            return;
        }
        setCount(--count);
    };

    return (
        <div>
            <h2>Counter App... {name}</h2>

            <h3>Count : {count}</h3>

            <button onClick={increase}>Increase Count</button>
            <button onClick={decrease}>Decrease Count</button>
            <button onClick={() => setCount(0)}>Reset Count</button>
        </div>
    );
};

export default Counter;

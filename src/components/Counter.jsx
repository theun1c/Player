import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    function Increment() {
        setCount(count + 1);
    }

    function Decrement() {
        setCount(count - 1);
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={Increment}>count+</button>
            <button onClick={Decrement}>count-</button>
        </>
    );
};

export default Counter;

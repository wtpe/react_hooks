import React, { useState } from "react";

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            Count:{count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Incre</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decre</button>
            <button onClick={(incrementFive)}>incre 5</button>
        </div>
    )
}
export default HookCounterTwo;
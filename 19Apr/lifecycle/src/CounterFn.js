
import { useState, useEffect } from 'react';
function CounterFn() {
    console.log("CounterFn called");
    const [counterData, setCounter] = useState({
        counter: 0
    })

    useEffect()

    const updateCounter = () => {
        setCounter({ counter: counterData.counter + 1 })
    }
    return (
        <div>
            <h1 onClick={updateCounter}>Counter: {counterData.counter}</h1>
        </div>
    )

}
export default CounterFn;
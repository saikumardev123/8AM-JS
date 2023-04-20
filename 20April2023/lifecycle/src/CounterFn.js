
import { useState, useEffect } from 'react';
function CounterFn() {
    console.log("CounterFn called");
    const [counterData, setCounter] = useState({
        counter: 0
    })
    useEffect(() => {
        if (counterData.counter == 0) {
            componentDidMount();
        }

        if (counterData.counter != 0) {
            componentDidUpdate();
        }
    }, [setCounter]);

    const updateCounter = () => {
        setCounter({ counter: counterData.counter + 1 })
    }
    const componentDidMount = () => {
        console.log("component did mount called");
    }
    const componentDidUpdate = () => {
        console.log("component did update called");
    }
    return (
        <div>
            <h1 onClick={updateCounter}>Counter: {counterData.counter}</h1>
        </div>
    )

}
export default CounterFn;
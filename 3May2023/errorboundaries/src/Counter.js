import { useState } from 'react';
function Counter() {
    const [counter, setCounter] = useState(0);

    const updateCounter = () => {
        setCounter(counter + 1);
    }

    if (counter == 5) {
        throw new Error("some error occured");
    }

    return (
        <div>
            <h1 onClick={updateCounter}>Counter value is {counter}</h1>
        </div>
    )
}
export default Counter;
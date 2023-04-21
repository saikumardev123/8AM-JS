import { useState } from 'react';
import Component2 from './Component2';
function Component1() {

    var [state, setState] = useState(0);

    const square = (input) => {
        input = input * input;
        setState(input);
    }
    return (
        <div>
            <h1>Component1</h1>
            <button onClick={() => square(10)}>Square</button> <br></br>
            <h1>{state}</h1>
            <Component2 result={state}></Component2>
        </div>
    )


}
export default Component1;
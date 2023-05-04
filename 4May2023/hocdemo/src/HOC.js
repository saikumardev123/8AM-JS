
import { useState } from 'react';
function HOC(data, Component) {


    const ResuableComponent = () => {

        const [counter, setCounter] = useState(data);

        const updateCounter = () => {
            setCounter(counter + 1);
        }

        return <Component counter={counter} updateCounter={updateCounter}></Component>

    }
    return ResuableComponent;
}
export default HOC;
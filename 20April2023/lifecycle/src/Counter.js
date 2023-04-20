import React from 'react';
class Counter extends React.Component {
    constructor() {
        console.log("Counter -  constructor called!");
        super();
        this.state = {
            counter: 0
        }
    }
    componentDidMount() {
        console.log("Counter - componentdid mount called");
        // Make API calls, read data from file
    }
    componentDidUpdate() {
        console.log("Counter - component did update called");
    }

    uS = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        console.log("Counter - render called");
        return (
            <div>
                <h1 onClick={this.uS}>Counter: {this.state.counter}</h1>
            </div>
        )
    }
}
export default Counter;

/*





*/

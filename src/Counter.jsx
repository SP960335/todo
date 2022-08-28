import React from "react";

class Counter extends React.Component {
    counter = 0
    
    constructor() {
        super()
        this.state = { counter: 0 }
    }

    increment = () => {
        this.setState({counter:this.state.counter+1})
    }

    render() {
        return <div>
            <h1>
                {this.state.counter}
            </h1>
            <button onClick={this.increment}>Increment</button>
        </div>
    }
}
export default Counter;
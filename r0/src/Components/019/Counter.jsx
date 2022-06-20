import React from 'react';


class Counter extends React.Component {
    constructor() {
        super();
        this.state = {counter: 0};
    }

    doCklick = () => {
        this.setState(s => ({counter: s.counter + 1}));
    }

    componentDidMount() {
        console.log('LOaded');
    }

    componentWillUnmount() {
        console.log('numiro');
    }

    componentDidUpdate() {
        console.log('apsiapdeitino');
    }

    render() {
        return (
            <>
            <div>{this.state.counter}: {this.props.when}</div>
            <button onClick={this.doCklick}>GO +1
            <svg>
                <use href='#star'></use>
            </svg>
            </button>
            </>
        )
    }
}

export default Counter;
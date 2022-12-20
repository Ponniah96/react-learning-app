import React, { Component } from 'react';

export default class ClassStatesIncrement extends Component {
    constructor(props){
        super(props);
        this.state={
            increment:0
        }
    }
    buttonCount(){
        this.setState({increment:this.state.increment+1})
    }
    render() {
        const {increment}=this.state;
        return (
            <div>
                <p>3.2 React State Increment</p>
                <button onClick={this.buttonCount.bind(this)}>Cliked on {increment} times</button>
            </div>
        );
    }
}


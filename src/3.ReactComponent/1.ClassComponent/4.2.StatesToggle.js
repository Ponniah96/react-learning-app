import React, { Component } from 'react';

export default class ClassStatesToggle extends Component {
    constructor(props){
        super(props);
        this.state={
            toggleState:true
        }
    }
    toggeFunction(){
        this.setState({toggleState:!this.state.toggleState})
    }
    render() {
        return (
            <div>
                <p>3.1 React States Toggle</p>
                <div>React States Value: {JSON.stringify(this.state.toggleState)}  <button onClick={this.toggeFunction.bind(this)}>Toggle States</button></div>
            </div>
        );
    }
}


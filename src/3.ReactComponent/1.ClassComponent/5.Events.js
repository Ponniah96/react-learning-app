import React,{Component} from "react"
export default class ClassEvents extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:"",
            inputClick:""
        }
    }
    inputChange(e){
        this.setState({inputValue:e.target.value})
    }
    inputClicks(){
        this.setState({inputClick:this.state.inputValue})
    }
    render(){
        return(
            <>
            <div className="">4.React Class Events</div>
            <input onChange={this.inputChange.bind(this)} value={this.state.inputValue}></input>
            <button onClick={this.inputClicks.bind(this)}>Click Me!!</button>
            <p>OnChange value: {this.state.inputValue}</p>
            <p>OnClick Value: {this.state.inputClick}</p>
            </>
        )
    }
}
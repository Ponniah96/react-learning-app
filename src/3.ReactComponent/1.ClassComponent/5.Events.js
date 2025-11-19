import React,{Component} from "react";
import "../../App.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
export default class ClassEvents extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:"",
            inputClick:"",
            codeString:""
        }
    }
    componentDidMount(){
        const codeString=`
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
    `
        this.setState({codeStringValue:codeString})
    }
    copyFunction(buttonID, functionID){
        var copyText = document.getElementById(functionID);
        if(copyText !==null){
            navigator.clipboard.writeText(copyText.innerText);
            var buttonElement=document.getElementById(buttonID);
            if(buttonElement.innerHTML !==null || buttonElement.innerHTML !==undefined){
                buttonElement.innerHTML= '<i class="bi bi-check2"></i> Copied';
            }
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
                 <div className="flex-body">
                    <div className="flex-left-content">
                        <div className="">4.React Class Events</div>
                        <input onChange={this.inputChange.bind(this)} value={this.state.inputValue}></input>
                        <button onClick={this.inputClicks.bind(this)}>Click Me!!</button>
                        <p>OnChange value: {this.state.inputValue}</p>
                        <p>OnClick Value: {this.state.inputClick}</p>    
                    </div>
                    <div className="flex-right-content">
                        <button className="copy-icon" id="class-events"  onClick={()=>{this.copyFunction('class-events','class-events-code')}}><i className="bi bi-clipboard"></i> Copy</button>
                        <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="class-events-code" >
                            {this.state.codeStringValue}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </>
        )
    }
}
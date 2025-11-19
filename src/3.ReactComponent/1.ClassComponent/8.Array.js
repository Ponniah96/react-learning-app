import React, {Component} from "react";
import "../../App.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
export default class ClassArrays extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            array:[],
            id:0,
            codeString:""
        }
    }
    componentDidMount(){
        const codeString= `
import React, {Component} from "react";

export default class ClassArrays extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            array:[],
            id:0
        }
    }
    addArray(){
        this.setState({id:this.state.id+1});
        var object={};
        object={
            id:this.state.id,
            name:this.state.name
        }
        var array=this.state.array;
        array.push(object);
        this.setState({array:array, name:""})
    }
    render(){
        return(
            <>
                <div>React Arrays</div>
                <div>1.Add Element to Array</div>
                <input type="text" onChange={(e)=>{this.setState({name:e.target.value})}} value={this.state.name} />
                <button onClick={this.addArray.bind(this)}>Submit</button>
                <br></br>
                <div>Aray of Names are:</div>
                <ul>
                    {this.state.array.map(value=>(<li key={value.id}>{value.name}</li>))}
                </ul>
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
    
    addArray(){
        this.setState({id:this.state.id+1});
        var object={};
        object={
            id:this.state.id,
            name:this.state.name
        }
        var array=this.state.array;
        array.push(object);
        this.setState({array:array, name:""})
    }
    render(){
        return(
            <>
                <div className="flex-body">
                    <div className="flex-left-content">
                        <div>React Arrays</div>
                        <div>1.Add Element to Array</div>
                        <input type="text" onChange={(e)=>{this.setState({name:e.target.value})}} value={this.state.name} />
                        <button onClick={this.addArray.bind(this)}>Submit</button>
                        <br></br>
                        <div>Aray of Names are:</div>
                        <ul>
                            {this.state.array.map(value=>(<li key={value.id}>{value.name}</li>))}
                        </ul>  
                    </div>
                    <div className="flex-right-content">
                        <button className="copy-icon" id="class-arrays"  onClick={()=>this.copyFunction('class-arrays','class-arrays-code')}>
                            <i className="bi bi-clipboard"></i> Copy
                        </button>
                        <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="class-arrays-code" >
                            {this.state.codeStringValue}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </>
        )
    }

}
import React,{Component} from "react";
import "../../App.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
export default class ClassForms extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            username:"",
            password:"",
            age:"",
            codeStringValue:""
        }
    }
    componentDidMount(){
        const codeString=`
import React,{Component} from "react";
export default class ClassForms extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            username:"",
            password:"",
            age:""
        }
    }
    handleSubmit(e){
        e.preventDefault();
        alert("Form Values are: ",
        this.state.name,this.state.age,
        this.state.username,this.state.password);
    }
    render(){
        return(
            <>
            <div className="">7.React Forms</div>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Name:
                    <input type="text" onChange={(e)=>{this.setState({name:e.target.value})}}
                     placeholder="Enter Name" value={this.state.name} required/>
                </label>
                <label>Age:
                    <input type="number" onChange={(e)=>{this.setState({age:e.target.value})}}
                     placeholder="Enter Age" value={this.state.age} required/>
                </label>
                <label>Email:
                    <input type="email" onChange={(e)=>{this.setState({username:e.target.value})}}
                     placeholder="Enter Email" value={this.state.username} required/>
                </label>
                <label>Password:
                    <input type="password" onChange={(e)=>{this.setState({password:e.target.value})}}
                     placeholder="Enter Password" value={this.state.password} required/>
                </label>
                <input  type="submit" value="Submit"/>
            </form>
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
    handleSubmit(e){
        e.preventDefault();
        alert("check console");
        console.log("Form Values are: ",this.state.name,this.state.age,this.state.username,this.state.password);
    }
    render(){
        return(
            <>
                <div className="flex-body">
                    <div className="flex-left-content">
                        <div className="">7.React Forms</div>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <label>Name:
                                <input type="text" onChange={(e)=>{this.setState({name:e.target.value})}} placeholder="Enter Name" value={this.state.name} required/>
                            </label>
                            <label>Age:
                                <input type="number" onChange={(e)=>{this.setState({age:e.target.value})}} placeholder="Enter Age" value={this.state.age} required/>
                            </label>
                            <label>Email:
                                <input type="email" onChange={(e)=>{this.setState({username:e.target.value})}} placeholder="Enter Email" value={this.state.username} required/>
                            </label>
                            <label>Password:
                                <input type="password" onChange={(e)=>{this.setState({password:e.target.value})}} placeholder="Enter Password" value={this.state.password} required/>
                            </label>
                            <input  type="submit" value="Submit"/>
                        </form>
                    </div>
                    <div className="flex-right-content">
                        <button className="copy-icon" id="class-forms-intro"  onClick={()=>this.copyFunction('class-forms-intro','class-forms-code')}><i className="bi bi-clipboard"></i> Copy</button>
                        <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="class-forms-code" >
                            {this.state.codeStringValue}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </>
        )
    }
}
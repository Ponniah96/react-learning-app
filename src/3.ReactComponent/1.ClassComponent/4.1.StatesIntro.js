import React,{Component} from "react";
import ClassStatesToggle from "./4.2.StatesToggle";
import ClassStatesIncrement from "./4.3.StatesIncrement";
import "../../App.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default class ClassComponentStates extends Component{
    constructor(props){
        super(props);
        this.state={
            language1:"HTML",
            language2:"CSS",
            language3:"JavaScript",
            language4:"jQuery",
            language5:"React",
            codeString:""
        }
    }
    componentDidMount(){
        const codeString=`
import React,{Component} from "react";
import ClassStatesToggle from "./4.2.StatesToggle";
import ClassStatesIncrement from "./4.3.StatesIncrement";

export default class ClassComponentStates extends Component{
    constructor(props){
        super(props);
        this.state={
            language1:"HTML",
            language2:"CSS",
            language3:"JavaScript",
            language4:"jQuery",
            language5:"React"
        }
    }
    render(){
        const {language1,language2,language3,language4,language5}=this.state;
        return(
            <div>
                <p className="react-app-classComponents-subheader">3.React Class Component States</p>
                <p>Primary Skills:</p>
                <ol>
                    <li>{language1}</li>
                    <li>{language2}</li>
                    <li>{language3}</li>
                    <li>{language4}</li>
                    <li>{language5}</li>
                </ol>
                <br></br>
                <hr></hr>
                <ClassStatesToggle />
                <br></br>
                <hr></hr>
                <ClassStatesIncrement />
                <br></br>
                <hr></hr>
            </div>
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
    render(){
        const {language1,language2,language3,language4,language5}=this.state;
        return(
            <div>                
                <div className="flex-body">
                    <div className="flex-left-content">
                        <p className="react-app-classComponents-subheader">3.React Class Component States</p>
                        <p>Primary Skills:</p>
                        <ol>
                            <li>{language1}</li>
                            <li>{language2}</li>
                            <li>{language3}</li>
                            <li>{language4}</li>
                            <li>{language5}</li>
                        </ol>
                        <br></br>
                        <hr></hr>
                        <ClassStatesToggle />
                        <br></br>
                        <hr></hr>
                        <ClassStatesIncrement />
                        <br></br>
                        <hr></hr>    
                    </div>
                    <div className="flex-right-content">
                        <button className="copy-icon" id="class-states-intro"  onClick={()=>{this.copyFunction('class-states-intro','class-states-intro-code')}}><i className="bi bi-clipboard"></i> Copy</button>
                        <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="class-states-intro-code" >
                            {this.state.codeStringValue}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        )
    }
}
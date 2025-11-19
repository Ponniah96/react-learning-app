import React,{Component} from "react"
import "../../App.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
export default class intro extends Component{
    constructor(props){
        super(props);
        this.state={
            codeStringValue:""
        }
    }
    componentDidMount(){
        const codeString=`
import React,{Component} from "react"
import "../../App.css";

export default class intro extends Component{
    render(){
        return(
            <p className="react-app-classComponents-header">Welcome to React Class Component!!!!</p>
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
        return(
            <>
                <div className="flex-body">
                    <div className="flex-left-content">
                        <p className="react-app-classComponents-header">Welcome to React Class Component!!!!</p>       
                    </div>
                    <div className="flex-right-content">
                        <button className="copy-icon" id="class-intro"  onClick={()=>{this.copyFunction('class-intro','class-intro-code')}}><i className="bi bi-clipboard"></i> Copy</button>
                        <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="class-intro-code" >
                            {this.state.codeStringValue}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </>
        )
    }
}


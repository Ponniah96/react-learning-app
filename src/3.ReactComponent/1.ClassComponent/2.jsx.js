import React, { Component } from 'react';
import "../../App.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
class classComponentJSX extends Component {
    constructor(props){
        super(props);
        this.state={
            codeStringValue:""
        }
    }
    componentDidMount(){
        const codeString=`   
import React, { Component } from 'react';
import "../../App.css";
class classComponentJSX extends Component {
    render() {
        return (
            <div>
                <p className='react-app-classComponents-subheader'>1.React Class JSX</p> 
                <p>Like HTML we can create elements like div, p, a, img, span, etc</p>
            </div>
        );
    }
}
        
export default classComponentJSX`
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
    render() {
        return (
            <div>
               <div className="flex-body">
                    <div className="flex-left-content">
                        <p className='react-app-classComponents-subheader'>1.React Class JSX</p> 
                        <p>Like HTML we can create elements like div, p, a, img, span, etc</p>     
                    </div>
                    <div className="flex-right-content">
                        <button className="copy-icon" id="class-jsx"  onClick={()=>{this.copyFunction('class-jsx','class-jsx-code')}}><i className="bi bi-clipboard"></i> Copy</button>
                        <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="class-jsx-code" >
                            {this.state.codeStringValue}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        );
    }
}

export default classComponentJSX
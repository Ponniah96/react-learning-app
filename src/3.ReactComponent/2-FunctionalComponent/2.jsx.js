import React from 'react';
import "../../App.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
function functionalComponentJSX(props) {
    const codeString = `
import React from 'react';
import "../../App.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
function functionalComponentJSX(props) {
    return (
        <div className="flex-body">
            <div className="flex-left-content">
                <p className='react-app-functionalComponents-subheader'>1.React Functional JSX</p>
                <p>Like Class Component here also we can create html elements</p>        
            </div>
    </div>
    );
}
export default functionalComponentJSX`;
    const copyFunction=(buttonID, functionID)=>{
        var copyText = document.getElementById(functionID)
        navigator.clipboard.writeText(copyText.innerText);
        var buttonElement=document.getElementById(buttonID);
        buttonElement.innerHTML= '<i class="bi bi-check2"></i> Copied';
    }
    return (
        <div className="flex-body">
            <div className="flex-left-content">
                <p className='react-app-functionalComponents-subheader'>1.React Functional JSX</p>
                <p>Like Class Component here also we can create html elements</p>        
            </div>
            <div className="flex-right-content">
            <button className="copy-icon" id="functional-jsx"  onClick={()=>{copyFunction('functional-jsx','function-jsx-code')}}><i className="bi bi-clipboard"></i> Copy</button>
            <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-jsx-code" >
                {codeString}
            </SyntaxHighlighter>
        </div>
    </div>
    );
}

export default functionalComponentJSX
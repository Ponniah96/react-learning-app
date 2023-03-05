import "../../App.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function Intro(){
    const codeString = `
import "../../App.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function Intro(){
    return(
        <div>
            <div>
                <p className="react-app-functionalComponents-header">Welcome to React Functional Component</p>        
            </div>
            <div>
                <SyntaxHighlighter language="javascript" style={atelierCaveDark}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}`;
    const copyFunction=(buttonID, functionID)=>{
        var copyText = document.getElementById(functionID)
        navigator.clipboard.writeText(copyText.innerText);
        var buttonElement=document.getElementById(buttonID);
        buttonElement.innerHTML= '<i class="bi bi-check2"></i> Copied';
    }
    return(
        <div className="flex-body">
            <div className="flex-left-content">
                <p className="react-app-functionalComponents-header">Welcome to React Functional Component</p>        
            </div>
            <div className="flex-right-content">
            <button className="copy-icon" id="functional-intro"  onClick={()=>{copyFunction('functional-intro','function-intro-code')}}><i className="bi bi-clipboard"></i> Copy</button>
            <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-intro-code" >
                {codeString}
            </SyntaxHighlighter>
            </div>
        </div>
    )
}
import "../../App.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function FunctionalComponentProps(props){
    const codeString=`
import "../../App.css";
export default function FunctionalComponentProps(props){
    return(
        <div>
            <p>2.React Functional Component Props</p>
            <p>Name: {props.name}</p>
            <p>Age:  {props.age}</p>
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
                <p>2.React Functional Component Props</p>
                <p>Name: {props.name}</p>
                <p>Age:  {props.age}</p>      
            </div>
            <div className="flex-right-content">
                <button className="copy-icon" id="functional-props"  onClick={()=>{copyFunction('functional-props','function-props-code')}}><i className="bi bi-clipboard"></i> Copy</button>
                <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-props-code" >
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}
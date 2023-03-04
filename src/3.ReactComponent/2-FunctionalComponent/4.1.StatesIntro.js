import { useState } from "react";
import FunctionStatesToggle from "./4.2.StatesToggle";
import FunctionalStatesIncrement from "./4.3.StatesIncrement";
import FunctionalStateDataTypes from "./4.5.StateDataTypes";
import "../../App.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function FunctionalComponentStates(){
    const [language1]=useState("HTML");
    const [language2]=useState("CSS");
    const [language3]=useState("JavaScript");
    const [language4]=useState("jQuery");
    const [language5]=useState("React");
    const codeString=`
import { useState } from "react";
import FunctionStatesToggle from "./4.2.StatesToggle";
import FunctionalStatesIncrement from "./4.3.StatesIncrement";
import FunctionalStateDataTypes from "./4.5.StateDataTypes";

export default function FunctionalComponentStates(){
    const [language1]=useState("HTML");
    const [language2]=useState("CSS");
    const [language3]=useState("JavaScript");
    const [language4]=useState("jQuery");
    const [language5]=useState("React");
    return(
        <div>
            <p>3.React Functional Component States using useState</p>
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
            <br></br>
            <FunctionStatesToggle />
            <br></br>
            <hr></hr>
            <br></br>
            <FunctionalStatesIncrement />
            <br></br>
            <hr></hr>
            <br></br>
            <FunctionalStateDataTypes />
        </div>
    )
}`
    const copyFunction=(buttonID, functionID)=>{
        var copyText = document.getElementById(functionID)
        navigator.clipboard.writeText(copyText.innerText);
        var buttonElement=document.getElementById(buttonID);
        buttonElement.innerHTML= '<i class="bi bi-check2"></i> Copied';
    }
    return(
        <div className="flex-body">
            <div className="flex-left-content">
                <div>
                    <p>3.React Functional Component States using useState</p>
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
                    <br></br>
                    <FunctionStatesToggle />
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <FunctionalStatesIncrement />
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <FunctionalStateDataTypes />
                </div>        
            </div>
            <div className="flex-right-content">
                <button className="copy-icon" id="functional-states"  onClick={()=>{copyFunction('functional-states','function-states-code')}}><i className="bi bi-clipboard"></i> Copy</button>
                <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-states-code" >
                    {codeString}
                </SyntaxHighlighter>
        </div>
    </div>
    )
}
import React,{useState} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function FunctionEvents(){
    const [inputChange,setinputChange]=useState('');
    const [inputClick,setinputClick]=useState("");
    const onChangeFunction=(e)=>{
        setinputChange(e.target.value)
    }
    const codeString=`
import React,{useState} from "react";
export default function FunctionEvents(){
    const [inputChange,setinputChange]=useState('');
    const [inputClick,setinputClick]=useState("");
    const onChangeFunction=(e)=>{
        setinputChange(e.target.value)
    }
    return(
        <>
            <p>4.React Functional Events</p>
            <input placeholder="Type Here" onChange={(e)=>onChangeFunction(e)}/>
            <button onClick={()=>{setinputClick(inputChange)}}>Click me!!</button>
            <p>OnChange Value: {inputChange}</p>
            <p>OnClick  Value: {inputClick}</p>
        </>
    )
}`
    const copyFunction=(buttonID, functionID)=>{
        var copyText = document.getElementById(functionID)
        navigator.clipboard.writeText(copyText.innerText);
        var buttonElement=document.getElementById(buttonID);
        buttonElement.innerHTML= '<i class="bi bi-check2"></i> Copied';
    }
    return(
        <>
            <div className="flex-body">
                <div className="flex-left-content">
                <p>4.React Functional Events</p>
                <input placeholder="Type Here" onChange={(e)=>onChangeFunction(e)}/>
                <button onClick={()=>{setinputClick(inputChange)}}>Click me!!</button>
                <p>OnChange Value: {inputChange}</p>
                <p>OnClick  Value: {inputClick}</p>      
                </div>
                <div className="flex-right-content">
                    <button className="copy-icon" id="functional-intro"  onClick={()=>{copyFunction('functional-intro','function-intro-code')}}><i className="bi bi-clipboard"></i> Copy</button>
                    <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-intro-code" >
                        {codeString}
                    </SyntaxHighlighter>
                </div>
            </div>
        </>
    )
}
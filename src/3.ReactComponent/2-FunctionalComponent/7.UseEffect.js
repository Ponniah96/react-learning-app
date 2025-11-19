import React,{useState,useEffect} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
export default function FunctionalEffects() {
    const [name,setName]=useState("");
    const codeString=`
import React,{useState,useEffect} from 'react';

export default function FunctionalEffects() {
    const [name,setName]=useState("");
    useEffect(()=>{
        setName("Ponniah");
    },[])
    return (
        <div>
            <p>10.React UseEffect Function</p>
            <p>My Name is {name}</p>            
        </div>
    );
}                   
    `
    const copyFunction=(buttonID, functionID)=>{
        var copyText = document.getElementById(functionID)
        navigator.clipboard.writeText(copyText.innerText);
        var buttonElement=document.getElementById(buttonID);
        buttonElement.innerHTML= '<i class="bi bi-check2"></i> Copied';
    }
    useEffect(()=>{
        setName("Ponniah");
    },[])
    return (
        <div>               
            <div className="flex-body">
                <div className="flex-left-content">
                    <p>10.React UseEffect Function</p>
                    <p>My Name is {name}</p>     
                </div>
                <div className="flex-right-content">
                    <button className="copy-icon" id="functional-useEffect"  onClick={()=>{copyFunction('functional-useEffect','function-useEffect-code')}}><i className="bi bi-clipboard"></i> Copy</button>
                    <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-useEffect-code" >
                        {codeString}
                    </SyntaxHighlighter>
                </div>
            </div>        
        </div>
    );
}                   
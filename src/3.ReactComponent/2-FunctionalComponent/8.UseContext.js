import React,{useState,createContext,useContext} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
const Context = createContext();

export default function FunctionalUseContext(){
    const name=useState("Ponniah");
    const codeString=`
import React,{useState,createContext,useContext} from "react";

const Context = createContext();

export default function FunctionalUseContext(){
    const name=useState("Ponniah");
    return(
        <Context.Provider value={name}>
            <p>11.React Function Use Context</p>
            <p>Component1</p>
            <p>Hello {name}</p>
            <Component2 />
        </Context.Provider>
    )
}

function Component2(){
    return(
        <>
        <p>Component2</p>
        <Component3 />
        </>        
    )
}

function Component3(){
    const name=useContext(Context)
    return(
        <>
        <p>Component3</p>
        <p>Hello {name} again!!!</p>
        <Component4 />
        </> 
    )
}

function Component4(){
    return(
        <>
        <p>Component4</p>
        <Component5 />
        </> 
    )
}

function Component5(){
    const name=useContext(Context)
    return(
        <>
        <p>Component5</p>
        <p>Hello {name} again!!!</p>
        </> 
    )
}
    `
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
                <Context.Provider value={name}>
                    <p>11.React Function Use Context</p>
                    <p>Component1</p>
                    <p>Hello {name}</p>
                    <Component2 />
                </Context.Provider>    
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

function Component2(){
    return(
        <>
        <p>Component2</p>
        <Component3 />
        </>        
    )
}

function Component3(){
    const name=useContext(Context)
    return(
        <>
        <p>Component3</p>
        <p>Hello {name} again!!!</p>
        <Component4 />
        </> 
    )
}

function Component4(){
    return(
        <>
        <p>Component4</p>
        <Component5 />
        </> 
    )
}

function Component5(){
    const name=useContext(Context)
    return(
        <>
        <p>Component5</p>
        <p>Hello {name} again!!!</p>
        </> 
    )
}
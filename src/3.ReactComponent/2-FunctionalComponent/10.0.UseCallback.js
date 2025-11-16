import React,{useState,useCallback} from "react";
import WithoutCallbackFunction from "./10.1.WithoutUseCallback";
import WithCallbackFunction from "./10.2.WithUseCallback";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function FunctionalCallback(){
    const [count,setCount]=useState(0);
    const [todoWithoutCallback,setTodoWithoutCallback]=useState([]);
    const [todoWithCallback,setTodoWithCallback]=useState([]);
    const addTodoWithoutCallback = () =>{ setTodoWithoutCallback((todo)=>{return [...todo,"WithoutCallback Item"]})}
    const addTodoWithCallback= useCallback(()=>{setTodoWithCallback((todo)=>{return[...todo,"WithCallback Function"]})},[])
    const codeString=`
import React,{useState,useCallback} from "react";
import WithoutCallbackFunction from "./10.1.WithoutUseCallback";
import WithCallbackFunction from "./10.2.WithUseCallback";
export default function FunctionalCallback(){
    const [count,setCount]=useState(0);
    const [todoWithoutCallback,setTodoWithoutCallback]=useState([]);
    const [todoWithCallback,setTodoWithCallback]=useState([]);
    const addTodoWithoutCallback = () =>{
        setTodoWithoutCallback((todo)=>{return [...todo,"WithoutCallback Item"]})
    }
    const addTodoWithCallback= useCallback(()=>{
        setTodoWithCallback((todo)=>
        {return[...todo,"WithCallback Function"]}
        )},[])
    return(
        <div>
        <p>UseCallback function</p>
        <p>Definition: Usecallback function mainly used to memoization function
        (cache function like resource intensive function or expensive function)
         to avoild rerendering function</p>  
        <p>Advantages: It improves performance by reducing time for calling functions unnecessarily</p>  
        <button onClick={()=>setCount(count+1)}>Button Clicked on {count} times</button>
        <WithoutCallbackFunction todos={todoWithoutCallback} addTodoWithoutCallback={addTodoWithoutCallback} />
        <WithCallbackFunction todos={todoWithCallback} addTodoWithCallback={addTodoWithCallback} />
        </div>
    )
}

WithoutUseCallback.js:

import React from "react";
import "../../App.css";

export default function withoutCallbackFunction(props){
  console.log("WithoutCallback");
    return(
          <>
          <p>WithoutCallback Function</p>
          {props.todos.length>0?
            <ul>{props.todos.map((value,index)=><li key={index}>{value}{index}</li>)}</ul>
            :<p>Please Add Item</p>}
          <button onClick={props.addTodoWithoutCallback} >Add Item</button> 
        </>
    )
}

WithUseCallback.js:

import {memo} from "react";

const withCallbackFunction=({todos,addTodoWithCallback})=>{
  console.log("WithCallback function");
    return(
        <>
          <p>WithCallback Function</p>
          {todos.length>0?
            <ul>{todos.map((value,index)=><li key={index}>{value}{index}</li>)}</ul>
            :<p>Please Add Item</p>}
          <button onClick={addTodoWithCallback} >Add Item</button>
        </>
    )
}
export default memo(withCallbackFunction)

    `
    const copyFunction=(buttonID, functionID)=>{
        var copyText = document.getElementById(functionID)
        navigator.clipboard.writeText(copyText.innerText);
        var buttonElement=document.getElementById(buttonID);
        buttonElement.innerHTML= '<i class="bi bi-check2"></i> Copied';
    }
    return(
        <div>
        
        <div className="flex-body">
            <div className="flex-left-content">
                <p>UseCallback function</p>
                <p>Definition: Usecallback function mainly used to memoization function(cache function like resource intensive function or expensive function) to avoild rerendering function</p>  
                <p>Advantages: It improves performance by reducing time for calling functions unnecessarily</p>  
                <button onClick={()=>setCount(count+1)}>Button Clicked on {count} times</button>
                <WithoutCallbackFunction todos={todoWithoutCallback} addTodoWithoutCallback={addTodoWithoutCallback} />
                <WithCallbackFunction todos={todoWithCallback} addTodoWithCallback={addTodoWithCallback} />       
            </div>
            <div className="flex-right-content">
                <button className="copy-icon" id="functional-intro"  onClick={()=>{copyFunction('functional-intro','function-intro-code')}}><i className="bi bi-clipboard"></i> Copy</button>
                <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-intro-code" >
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </div>
        </div>
    )
}


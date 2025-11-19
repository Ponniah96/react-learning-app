import React, {useState,useRef,useEffect} from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
export default function FunctionRef(){
    const  [state,setState]=useState(true);
    const  [currentValue,setCurrentValue]=useState("");
    const count=useRef(0);
    const previousValue=useRef("");
    const RefDOM1=useRef();
    const RefDOM2=useRef();
    const codeString=`
import React, {useState,useRef,useEffect} from "react"
export default function FunctionRef(){
const  [state,setState]=useState(true);
const  [currentValue,setCurrentValue]=useState("");
const count=useRef(0);
const previousValue=useRef("");
const RefDOM1=useRef();
const RefDOM2=useRef();
useEffect(()=>{
    count.current=count.current+1;
},[state])
useEffect(()=>{
    previousValue.current=currentValue;
},[currentValue])
return(
    <>
        <p>6.UseRef</p>
        <p><b>Definition:</b>
        It is used to hold mutable value(State previous value)
         & and also Access DOM(assigning ref to DOM Element) 
         which does not cause re-render when updated</p>
        <p>It persist values of the component and we can access ref object by calling 
        <b>RefObj.current</b>
        </p>
            <ol>
            <li>Get Count of Component Render Value
                <button onClick={()=>setState(!state)}>Click Here to get count of function</button>
                <p>Function Called on {count.current} times</p>
                <br></br>
            </li>
            <li>Get Previous value of state
                <p>We can also track previous state value using UseRef</p>
                <input value={currentValue} onChange={(e)=>setCurrentValue(e.target.value)}/>
                <p>Current Value: {currentValue}</p>
                <p>Previous Value: {previousValue.current}</p>
            </li>
            <li>We can UseRef for accessing DOM Elements
                <ul>
                    <li><p>UseRef we can focus inputElement</p>
                        <input type='text' ref={RefDOM1}></input>
                        <button onClick={()=>RefDOM1.current.focus()}>Click Here to Focus Input</button>
                    </li>
                    <li><p>UseRef we can Select content of inputElement</p>
                        <input type='text' ref={RefDOM2}></input>
                        <button onClick={()=>RefDOM2.current.select()}>Click Here to Focus Input</button>
                    </li>
                </ul>
                
            </li>
            </ol>

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
    useEffect(()=>{
        count.current=count.current+1;
    },[state])
    useEffect(()=>{
        previousValue.current=currentValue;
    },[currentValue])
    return(
        <>
            <div className="flex-body">
                <div className="flex-left-content">
                    <p>6.UseRef</p>
                    <p><b>Definition:</b>It is used to hold mutable value(State previous value) & and also Access DOM(assigning ref to DOM Element) which does not cause re-render when updated</p>
                    <p>It persist values of the component and we can access ref object by calling <b>RefObj.current</b></p>
                    <ol>
                        <li>Get Count of Component Render Value
                            <button onClick={()=>setState(!state)}>Click Here to get count of function</button>
                            <p>Function Called on {count.current} times</p>
                            <br></br>
                        </li>
                        <li>Get Previous value of state
                            <p>We can also track previous state value using UseRef</p>
                            <input value={currentValue} onChange={(e)=>setCurrentValue(e.target.value)}/>
                            <p>Current Value: {currentValue}</p>
                            <p>Previous Value: {previousValue.current}</p>
                        </li>
                        <li>We can UseRef for accessing DOM Elements
                            <ul>
                                <li><p>UseRef we can focus inputElement</p>
                                    <input type='text' ref={RefDOM1}></input>
                                    <button onClick={()=>RefDOM1.current.focus()}>Click Here to Focus Input</button>
                                </li>
                                <li><p>UseRef we can Select content of inputElement</p>
                                    <input type='text' ref={RefDOM2}></input>
                                    <button onClick={()=>RefDOM2.current.select()}>Click Here to Focus Input</button>
                                </li>
                            </ul>
                            
                        </li>
                    </ol>     
                </div>
                <div className="flex-right-content">
                    <button className="copy-icon" id="functional-ref"  onClick={()=>{copyFunction('functional-ref','function-ref-code')}}><i className="bi bi-clipboard"></i> Copy</button>
                    <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-ref-code" >
                        {codeString}
                    </SyntaxHighlighter>
                </div>
            </div>
        </>
    )
}
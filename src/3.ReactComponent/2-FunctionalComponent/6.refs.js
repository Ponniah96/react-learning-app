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

        </>
    )
}
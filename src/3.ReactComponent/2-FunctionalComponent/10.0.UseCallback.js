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
    const addTodoWithCallback= useCallback(()=>{setTodoWithCallback((todo)=>{return[...todo,"WithCallback Function"]})},[])
    return(
        <div>
        <p>UseCallback function</p>
        <p>Definition: Usecallback function mainly used to memoization function(cache function like resource intensive function or expensive function) to avoild rerendering function</p>  
        <p>Advantages: It improves performance by reducing time for calling functions unnecessarily</p>  
        <button onClick={()=>setCount(count+1)}>Button Clicked on {count} times</button>
        <WithoutCallbackFunction todos={todoWithoutCallback} addTodoWithoutCallback={addTodoWithoutCallback} />
        <WithCallbackFunction todos={todoWithCallback} addTodoWithCallback={addTodoWithCallback} />
        </div>
    )
}


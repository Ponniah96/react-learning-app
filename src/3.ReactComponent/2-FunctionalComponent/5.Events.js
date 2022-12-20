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
}
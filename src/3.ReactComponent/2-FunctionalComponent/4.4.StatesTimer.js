import React, {useState, useEffect} from "react";

export default function FunctionalStatesTimer(){
    const [count,setCount]=useState(0);
    const [startTimers,setStartTimers]=useState(false);
    const [stopTimers,setStopTimers]=useState(false);
    useEffect(()=>{
        console.log("Start Timers: ", startTimers);
        console.log("Stop Timers: ", stopTimers);
        if(startTimers && stopTimers===false){
            var timer=setTimeout(()=>{
                setCount(count+1);
            },1000)  
        }
        else if(stopTimers){
            setCount(0);
            setStopTimers(false);
        }
        else{
            clearTimeout(timer);
        }
    },[startTimers,count,stopTimers])    
    return(
        <>
            <p>React Functional State Timer</p>
            <button onClick={()=>{setStartTimers(true)}}>Start Timer</button>
            <button onClick={()=>{setStartTimers(false)}}>Stop Timer</button>
            <button onClick={()=>{setStopTimers(true)}}>Clear Timer</button>
            <p>Count Value: {count}</p>
        </>
    )
}
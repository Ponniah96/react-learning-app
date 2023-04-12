import { useState } from "react";
import FunctionStatesToggle from "./4.2.StatesToggle";
import FunctionalStatesIncrement from "./4.3.StatesIncrement";
import FunctionalStateDataTypes from "./4.5.StateDataTypes";
import FunctionalStatesTimer from "./4.4.StatesTimer";
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
}

StateToggle

import React, { useState } from 'react';

export default function FunctionStatesToggle(props) {
    const [toggleState,setToggleState]=useState(true);
    function toggleFunction(e){
        setToggleState(!toggleState);
    }
    return (
        <div>
            <p>3.1 React Functional States Toggle</p>
            <div>React State Value: {JSON.stringify(toggleState)} <button onClick={toggleFunction}>Toggle State</button></div>
        </div>
    );
}

StateIncrement

import React, { useState } from 'react';

export default function FunctionalStatesIncrement(props) {
    const [increment,setIncrement]=useState(0);
    return (
        <div>
            <p>3.2 React Functional States Increment</p>
            <button onClick={()=>setIncrement(increment+1)}>Clicked on {increment} times</button>
        </div>
    );
}

StateTimer

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

State Data Types

import React,{useState} from "react";
export default function FunctionalStateDataTypes(){
    const [numbers,setNumbers]=useState(0);
    const [boolean,setBoolean]=useState(true);
    const [strings,setStrings]=useState();
    const [array,setArray]=useState([]);
    const [objects,setObjects]=useState({id:0,name:"Ponniah"});
    const [count,setCount]=useState(0);
    const [arrayofObjects,setArrayofObjects]=useState([]);
    const [updatedArrayofObjects,setUpdatedArrayofObjects]=useState([])
    const setArrayStateValue=() =>{
        let arrays=[10,20,30,40,50];
        setArray(arrays.map(value=>value*2))
    }
    const setObjectStateValue = () =>{
        setCount(count+1)
        setObjects(prevState=>{return {...prevState,id:count}});
    }
    const setArrayofObjectsValue = () =>{
        let ArrayOfObjects=[
            {
                id:1,
                name:"Ponniah",
                Company:"Prodapt Solutions",
                Role:"Associate Software Engineer"
            },
            {
                id:2,
                name:"Ponniah",
                Company:"i-exced technology solutions",
                Role:"Software Engineer"
            }
        ]
        setArrayofObjects(ArrayOfObjects);
    }
    const changeRole=()=>{
        // let ArrayOfObjects= arrayofObjects.map(value=>
        //     {
        //         if(value.Company==="i-exced technology solutions"){
        //            return {...value, Role:"Senior Software Engineer"}
        //         }      
        //         else{
        //             return value
        //         }          
        //     });
        //let ArrayOfObjects= arrayofObjects.map(value=> {return{...value,Company:"Prodapt Solutions"}});
        const inserValue={
            id:3,
            name:"Ponniah",
            Company:"Prodapt Solutions",
            Role:"Software Engineer"
        } 
        const ArrayOfObjects= arrayofObjects.map(value=>{return {...value}});
        ArrayOfObjects.splice(1,0,inserValue)
        setUpdatedArrayofObjects(ArrayOfObjects);
    }
    return(
        <>
            <p>React State Data Types</p>
            <ol>
                <li><p>Number Data Types</p>
                    <button onClick={()=>setNumbers(numbers+1)}>Count on button click</button>
                    <p>Count on button click: {numbers}</p>
                </li>
                <li><p>Boolean Data Type</p>
                    <button onClick={()=>setBoolean(!boolean)}>Show State of Button</button>
                    <p>Boolean value on button click: {boolean.toString()}</p>
                </li>
                <li><p>String Data Type</p>
                    <input onChange={(e)=>setStrings(e.target.value)} value={strings}></input>
                    <p>Resultant Value: {strings}</p>
                </li>
                <li><p>Array Data Type</p>
                    <p>Input Array: [10,20,30,40,50]</p>
                    <button onClick={()=>setArrayStateValue()}>Display Array Value by multiply 2</button>
                    <p>Display Array: {array.join(" ")}</p>
                </li>
                <li><p>Array Object</p>
                    <p>Input Object: id=1,name=Ponniah</p>
                    <button onClick={()=>setObjectStateValue()}>Display Object Value </button>
                    <p>Display Object:{JSON.stringify(objects)}</p>
                </li>
                <li><p>Array of Objects</p>
                    <p>Input Array of Objects:id=1,name=Ponniah id=2,name=Ponniah</p>
                    <button onClick={()=>setArrayofObjectsValue()}>Display Array of Objects</button>
                    <p>Display Array of objects:{JSON.stringify(arrayofObjects)}</p>
                    <button onClick={()=>changeRole()}>Chnage Role</button>
                    <p>Display Array of Objects after condition: {JSON.stringify(updatedArrayofObjects)}</p>
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
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <FunctionalStatesTimer />
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <br></br>
                    <hr></hr>
                    <br></br>
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
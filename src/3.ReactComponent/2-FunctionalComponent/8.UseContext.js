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
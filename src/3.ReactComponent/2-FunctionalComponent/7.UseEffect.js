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
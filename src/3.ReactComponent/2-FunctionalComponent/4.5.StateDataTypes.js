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
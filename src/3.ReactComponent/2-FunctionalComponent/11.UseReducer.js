import React ,{useState,useReducer} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const number ={count:0};
const boolean={value:false};
const string ={result:""};
const array  ={elements:[]};
const objects={carProperty:{
    name:"Rolls Royce",
    color:"black",
    amount:"1.2 crore"
}};
const inputObjects={value:{
    name:"",
    age:"",
    location:""
}}
const arrayofObjects={elements:[]}
const reducerNumber   =(stateNumber,action)=>{
    switch(action.types){
        case "increment": return {count: stateNumber.count+1}
        case "decrement": {
              if(stateNumber.count!==0){
                return {count:stateNumber.count-1}
              }
              else{
                return{count:0}
              }
            }
        default: throw new Error("Please check action type name or else state");
    }
}
const reducerBoolean  =(stateBoolean,action)=>{
   switch(action.type){
        case "on" : return{value:true}
        case "off": return{value:false}
        default   : throw new Error("Please check state, dispatch names")
    }
}
const reducerString   =(stateString,action)=>{
    switch(action.type){
        case "name" : return {result:"Name is Ponniah Kothandaraman"}
        case "exp" : return  {result:"Total Exp is 4.4 Years"}
        case "techstacks" : return {result:"TechStacks: HTML,CSS, Js, React"}
        case "location" : return {result:"Current Location is bangalore"}
        default     : throw new Error("Please check state and dispatch action type values in string reducer")
    }
}
const reducerArray    =(stateArray,action)=>{
    switch(action.type){
        case "addElement"    : return {elements:[...stateArray.elements,"Add Item"]}
        case "removeElement" : return {elements:stateArray.elements.length>1 ? stateArray.elements.filter((val,index)=>index!==action.payload?val:"") :  stateArray.elements}
        default              : throw new Error("Please Check Action type , state names")
    }
}
const reducerObjects  =(stateObjects,action)=>{
    switch(action.type){
        case "carChange"  :return{carProperty:{...stateObjects.carProperty,name:"BMW"}}
        case "colorChange":return{carProperty:{...stateObjects.carProperty,color:"Blue"}}
        case "priceChange":return{carProperty:{...stateObjects.carProperty,amount:"50L"}}
        default           :throw new Error("Please Select State name and action type names")
    }
}
const reducerInputObjects=(stateInputObjects,action)=>{
    switch(action.type){
        case "name"    : return{value:{...stateInputObjects.value, name:action.payload}}
        case "age"     : return{value:{...stateInputObjects.value, age:action.payload}}
        case "location": return{value:{...stateInputObjects.value,location:action.payload}}
        case "clear"   : return{value:{...stateInputObjects.value,name:"",age:"",location:""}}
        default        : throw new Error("Please Check state and action type names")
    }

}
const reducerArrayofObjects=(stateArrayofObjects,action)=>{
    switch(action.type){
        case "addRecord":return{elements:[...stateArrayofObjects.elements,action.payload.stateInputObjects.value]};
        default         :throw new Error("Please Check State and action names")
    }
}
export default function FunctionalReducer(){
    const [states,setState]=useState(0);
    const [object]=useState(objects);
    const [stateNumber,dispatchNumber]   = useReducer(reducerNumber,number);
    const [stateBoolean,dispatchBoolean] = useReducer(reducerBoolean,boolean);
    const [stateString,dispatchString]   = useReducer(reducerString,string);
    const [stateArray,dispatchArray]     = useReducer(reducerArray,array);
    const [stateObjects,dispatchObjects] = useReducer(reducerObjects,objects);
    const [stateInputObjects,dispatchInputobjects] = useReducer(reducerInputObjects,inputObjects);
    const [stateArrayofObjects,dispatchArrayofObjects] = useReducer(reducerArrayofObjects,arrayofObjects);
    const codeString=`
import React ,{useState,useReducer} from "react";
const number ={count:0};
const boolean={value:false};
const string ={result:""};
const array  ={elements:[]};
const objects={carProperty:{
    name:"Rolls Royce",
    color:"black",
    amount:"1.2 crore"
}};
const inputObjects={value:{
    name:"",
    age:"",
    location:""
}}
const arrayofObjects={elements:[]}
const reducerNumber   =(stateNumber,action)=>{
    switch(action.types){
        case "increment": return {count: stateNumber.count+1}
        case "decrement": {
              if(stateNumber.count!==0){
                return {count:stateNumber.count-1}
              }
              else{
                return{count:0}
              }
            }
        default: throw new Error("Please check action type name or else state");
    }
}
const reducerBoolean  =(stateBoolean,action)=>{
   switch(action.type){
        case "on" : return{value:true}
        case "off": return{value:false}
        default   : throw new Error("Please check state, dispatch names")
    }
}
const reducerString   =(stateString,action)=>{
    switch(action.type){
        case "name" : return {result:"Name is Ponniah Kothandaraman"}
        case "exp" : return  {result:"Total Exp is 4.4 Years"}
        case "techstacks" : return {result:"TechStacks: HTML,CSS, Js, React"}
        case "location" : return {result:"Current Location is bangalore"}
        default     : 
        throw new Error("Please check state and dispatch action type values in string reducer")
    }
}
const reducerArray    =(stateArray,action)=>{
    switch(action.type){
        case "addElement"    : return {elements:[...stateArray.elements,"Add Item"]}
        case "removeElement" : return {elements:stateArray.elements.length>1 ? 
                                stateArray.elements.filter((val,index)=>index!==action.payload?val:"") : 
                                 stateArray.elements}
        default              : throw new Error("Please Check Action type , state names")
    }
}
const reducerObjects  =(stateObjects,action)=>{
    switch(action.type){
        case "carChange"  :return{carProperty:{...stateObjects.carProperty,name:"BMW"}}
        case "colorChange":return{carProperty:{...stateObjects.carProperty,color:"Blue"}}
        case "priceChange":return{carProperty:{...stateObjects.carProperty,amount:"50L"}}
        default           :throw new Error("Please Select State name and action type names")
    }
}
const reducerInputObjects=(stateInputObjects,action)=>{
    switch(action.type){
        case "name"    : return{value:{...stateInputObjects.value, name:action.payload}}
        case "age"     : return{value:{...stateInputObjects.value, age:action.payload}}
        case "location": return{value:{...stateInputObjects.value,location:action.payload}}
        case "clear"   : return{value:{...stateInputObjects.value,name:"",age:"",location:""}}
        default        : throw new Error("Please Check state and action type names")
    }

}
const reducerArrayofObjects=(stateArrayofObjects,action)=>{
    switch(action.type){
        case "addRecord":return
        {elements:[...stateArrayofObjects.elements,action.payload.stateInputObjects.value]};
        default         :throw new Error("Please Check State and action names")
    }
}
export default function FunctionalReducer(){
    const [states,setState]=useState(0);
    const [object]=useState(objects);
    const [stateNumber,dispatchNumber]   = useReducer(reducerNumber,number);
    const [stateBoolean,dispatchBoolean] = useReducer(reducerBoolean,boolean);
    const [stateString,dispatchString]   = useReducer(reducerString,string);
    const [stateArray,dispatchArray]     = useReducer(reducerArray,array);
    const [stateObjects,dispatchObjects] = useReducer(reducerObjects,objects);
    const [stateInputObjects,dispatchInputobjects] = 
    useReducer(reducerInputObjects,inputObjects);
    const [stateArrayofObjects,dispatchArrayofObjects] = 
    useReducer(reducerArrayofObjects,arrayofObjects);
    return(
        <>
            <p>UseReducer Hook API</p>
            <p>Definition: useReducer Hook is used to store state value
             like useState API but it used to store complex state logics</p>
            <p>Advantages: UseReducer used for complex state logic, 
            instead of callback it uses dispatch to maximize performance</p>
            <p><b>Syntax: const [state,dispatch]=useReducer(reducer,initialState)</b></p>
            <ol>
                <li>
                    <p> Without UseReducer</p>
                    <button onClick={()=>{states!==0?setState(states-1):setState(0)}}>-</button>
                    <span>{states}</span>
                    <button onClick={()=>{setState(states+1)}}>+</button>
                </li>
                <li>
                    <p>With Reducer Number</p>
                    <button onClick={()=>{dispatchNumber({types:"decrement"})}}>-</button>
                    <span>{stateNumber.count}</span>
                    <button onClick={()=>{dispatchNumber({types:"increment"})}}>+</button>
                </li>
                <li>
                    <p>Reducer Boolean</p>
                    <button onClick={()=>dispatchBoolean({type:"on"})}>ON</button>
                    {stateBoolean.value?<span style={{backgroundColor:"yellow",color:"black"}}>On</span>:
                    <span>Off</span>}
                    <button onClick={()=>{dispatchBoolean({type:"off"})}}>OFF</button>
                </li>
                <li>
                    <p>Reducer String</p>
                    <p>Please Select which field do you want to display</p>
                    <button onClick={()=>{dispatchString({type:"name"})}}>Name</button > 
                    <button onClick={()=>{dispatchString({type:"exp"})}}>Experience</button>
                     <button onClick={()=>{dispatchString({type:"techstacks"})}}>Techstacks</button>
                      <button onClick={()=>{dispatchString({type:"location"})}}>Location</button>
                    <p>{stateString.result}</p>
                </li>
                <li>
                    <p>Reducer Array</p>
                    <button onClick={()=>dispatchArray({type:"addElement"})}>Add item</button>
                    {stateArray.elements.length>0?<ul>{stateArray.elements.map((value,index)=>
                        <li key={index}>{value}  {index} 
                        <button 
                        onClick={()=>dispatchArray({type:"removeElement",payload:index})}>
                        Remove</button>
                        </li>)}</ul>:<p>Please Add Items</p>}
                </li>
                <li>
                    <p>Reducer Objects</p>
                    <p>Car Object : {JSON.stringify(object.carProperty)}</p>
                    <button onClick={()=>dispatchObjects({type:"carChange"})}>Change Car Name</button>
                    <button onClick={()=>dispatchObjects({type:"colorChange"})}>Change Car Colour</button>
                    <button onClick={()=>dispatchObjects({type:"priceChange"})}>Change Car Price</button>
                    <p>Result:{JSON.stringify(stateObjects.carProperty)}</p>
                </li>
                <li>
                    <p>Array of Objects</p>
                    <form onSubmit={(e)=>{e.preventDefault();dispatchArrayofObjects(
                        {type:"addRecord",payload:{stateInputObjects}}
                        ); 
                    dispatchInputobjects({type:"clear"})}}>
                        <input type="text" placeholder="Please Enter Name" required 
                        onChange={(e)=>{dispatchInputobjects({type:"name",payload:e.target.value})}}
                         value={stateInputObjects.value.name} />
                        <input type="number" placeholder="Please Enter Age" required  
                        onChange={(e)=>{dispatchInputobjects({type:"age",payload:e.target.value})}}
                         value={stateInputObjects.value.age}/>
                        <input type="text" placeholder="Please Enter location" required 
                        onChange={(e)=>{dispatchInputobjects({type:"location",payload:e.target.value})}}
                         value={stateInputObjects.value.location}/>
                        <input type="Submit" value="submit" />
                    </form>
                    <table style={{border:"1px solid",borderCollapse:"collapse"}}>
                        <thead>
                            <th style={{border:"1px solid",borderCollapse:"collapse"}}>Name</th>
                            <th style={{border:"1px solid",borderCollapse:"collapse"}}>Age</th>
                            <th style={{border:"1px solid",borderCollapse:"collapse"}}>Location</th>
                        </thead>
                        <tbody>
                            {stateArrayofObjects.elements.length > 0 ? 
                                stateArrayofObjects.elements.map((val,index)=> 
                                <tr key={index}>
                                <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.name}</td>
                                <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.age}</td>
                                <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.location}</td>
                                </tr>):<tr>Please Enter one item atleast</tr>}
                        </tbody>
                    </table>
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
        <>
            <div className="flex-body">
                <div className="flex-left-content">
                    <p>UseReducer Hook API</p>
                    <p>Definition: useReducer Hook is used to store state value like useState API but it used to store complex state logics</p>
                    <p>Advantages: UseReducer used for complex state logic, instead of callback it uses dispatch to maximize performance</p>
                    <p><b>Syntax: const [state,dispatch]=useReducer(reducer,initialState)</b></p>
                    <ol>
                        <li>
                            <p> Without UseReducer</p>
                            <button onClick={()=>{states!==0?setState(states-1):setState(0)}}>-</button>
                            <span>{states}</span>
                            <button onClick={()=>{setState(states+1)}}>+</button>
                        </li>
                        <li>
                            <p>With Reducer Number</p>
                            <button onClick={()=>{dispatchNumber({types:"decrement"})}}>-</button>
                            <span>{stateNumber.count}</span>
                            <button onClick={()=>{dispatchNumber({types:"increment"})}}>+</button>
                        </li>
                        <li>
                            <p>Reducer Boolean</p>
                            <button onClick={()=>dispatchBoolean({type:"on"})}>ON</button>
                            {stateBoolean.value?<span style={{backgroundColor:"yellow",color:"black"}}>On</span>:<span>Off</span>}
                            <button onClick={()=>{dispatchBoolean({type:"off"})}}>OFF</button>
                        </li>
                        <li>
                            <p>Reducer String</p>
                            <p>Please Select which field do you want to display</p>
                            <button onClick={()=>{dispatchString({type:"name"})}}>Name</button > <button onClick={()=>{dispatchString({type:"exp"})}}>Experience</button> <button onClick={()=>{dispatchString({type:"techstacks"})}}>Techstacks</button> <button onClick={()=>{dispatchString({type:"location"})}}>Location</button>
                            <p>{stateString.result}</p>
                        </li>
                        <li>
                            <p>Reducer Array</p>
                            <button onClick={()=>dispatchArray({type:"addElement"})}>Add item</button>
                            {stateArray.elements.length>0?<ul>{stateArray.elements.map((value,index)=><li key={index}>{value}  {index} <button onClick={()=>dispatchArray({type:"removeElement",payload:index})}>Remove</button></li>)}</ul>:<p>Please Add Items</p>}
                        </li>
                        <li>
                            <p>Reducer Objects</p>
                            <p>Car Object : {JSON.stringify(object.carProperty)}</p>
                            <button onClick={()=>dispatchObjects({type:"carChange"})}>Change Car Name</button><button onClick={()=>dispatchObjects({type:"colorChange"})}>Change Car Colour</button><button onClick={()=>dispatchObjects({type:"priceChange"})}>Change Car Price</button>
                            <p>Result:{JSON.stringify(stateObjects.carProperty)}</p>
                        </li>
                        <li>
                            <p>Array of Objects</p>
                            <form onSubmit={(e)=>{e.preventDefault();dispatchArrayofObjects({type:"addRecord",payload:{stateInputObjects}}); dispatchInputobjects({type:"clear"})}}>
                                <input type="text" placeholder="Please Enter Name" required onChange={(e)=>{dispatchInputobjects({type:"name",payload:e.target.value})}} value={stateInputObjects.value.name} />
                                <input type="number" placeholder="Please Enter Age" required  onChange={(e)=>{dispatchInputobjects({type:"age",payload:e.target.value})}} value={stateInputObjects.value.age}/>
                                <input type="text" placeholder="Please Enter location" required onChange={(e)=>{dispatchInputobjects({type:"location",payload:e.target.value})}} value={stateInputObjects.value.location}/>
                                <input type="Submit" value="submit" />
                            </form>
                            <table style={{border:"1px solid",borderCollapse:"collapse"}}>
                                <thead>
                                    <th style={{border:"1px solid",borderCollapse:"collapse"}}>Name</th>
                                    <th style={{border:"1px solid",borderCollapse:"collapse"}}>Age</th>
                                    <th style={{border:"1px solid",borderCollapse:"collapse"}}>Location</th>
                                </thead>
                                <tbody>
                                    {stateArrayofObjects.elements.length > 0 ? stateArrayofObjects.elements.map((val,index)=> <tr key={index}><td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.name}</td><td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.age}</td><td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.location}</td></tr>):<tr>Please Enter one item atleast</tr>}
                                </tbody>
                            </table>
                        </li>
                    </ol>        
                </div>
                <div className="flex-right-content">
                    <button className="copy-icon" id="functional-reducer"  onClick={()=>{copyFunction('functional-reducer','function-reducer-code')}}><i className="bi bi-clipboard"></i> Copy</button>
                    <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-reducer-code" >
                        {codeString}
                    </SyntaxHighlighter>
            </div>
        </div>
        </>
    )
}

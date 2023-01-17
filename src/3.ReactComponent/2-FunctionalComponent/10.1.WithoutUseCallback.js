// import {memo} from "react";

// const withoutCallbackFunction=({todos,addTodoWithoutCallback})=>{
//     return(
//         <>
//           <p>WithoutCallback Function</p>
//           {todos.length>0?<ul>{todos.map((value,index)=><li>{value}{index}</li>)}</ul>:<p>Please Add Item</p>}
//           <button onClick={addTodoWithoutCallback} >Add Item</button>
//         </>
//     )
// }

// export default memo(withoutCallbackFunction)

import React from "react";
import "../../App.css";

export default function withoutCallbackFunction(props){
  console.log("WithoutCallback");
    return(
          <>
          <p>WithoutCallback Function</p>
          {props.todos.length>0?<ul>{props.todos.map((value,index)=><li key={index}>{value}{index}</li>)}</ul>:<p>Please Add Item</p>}
          <button onClick={props.addTodoWithoutCallback} >Add Item</button> 
        </>
    )
}
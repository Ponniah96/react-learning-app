import {memo} from "react";

const withCallbackFunction=({todos,addTodoWithCallback})=>{
  console.log("WithCallback function");
    return(
        <>
          <p>WithCallback Function</p>
          {todos.length>0?<ul>{todos.map((value,index)=><li key={index}>{value}{index}</li>)}</ul>:<p>Please Add Item</p>}
          <button onClick={addTodoWithCallback} >Add Item</button>
        </>
    )
}
export default memo(withCallbackFunction)
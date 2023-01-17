import React ,{useState,useRef,useMemo} from "react";

export default function FunctionalMemo() {
    const[count,setCount]=useState(0);
    const[countMemo,setCountMemo]=useState(0);
    const[item,additem]=useState([]);
    const withoutMemoCount=useRef(0);
    const withMemoCount=useRef(0);     
    const withMemoFunction =useMemo(()=>withMemoFunctionCall(countMemo,withMemoCount),[countMemo])
    const withoutMemoFunction=(count)=>{
        withoutMemoCount.current=withoutMemoCount.current +1
        for(var i=0;i<100000;i++){
            count=count+1 
        }
        return count
    }
    return(
        <>
            <p>UseMemo Function</p>
            <p>Definintion: UseMemo is used to <b>memoization of value (Cache value like</b> resource intense value, long calculation result) to <b>avoild re-render function unnecessarily</b></p>
            <button onClick={()=>additem((item)=>[...item,"Item"])}>Add Item</button>
            <br></br>
            {item.length>0?<ul>{item.map((value,index)=><li>{value}+{index+1}</li>)}</ul>:"Please Select Add item"}
            <br></br>
            <button onClick={()=>setCount(count+1)}>Without Memo</button>
            <p>Get Result: {withoutMemoFunction(count)}</p>
            <p>Without Memo Function Calls :<b>{withoutMemoCount.current}times</b></p>
            <button onClick={()=>setCountMemo(countMemo+1)}>With Memo</button>
            <p>Get Result: {withMemoFunction.countMemo}</p>
            <p>With Memo Function Calls: <b>{withMemoFunction.withMemoCount.current} times</b> </p>
        </>
    )
}
const withMemoFunctionCall=(countMemo,withMemoCount)=>{
    withMemoCount.current=withMemoCount.current+1;
    for(var i=0;i<100000;i++){
        countMemo=countMemo+1 
    }
    return {countMemo,withMemoCount}
}

//export default FunctionalMemo
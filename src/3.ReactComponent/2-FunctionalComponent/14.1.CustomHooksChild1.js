import {useEffect, useState} from "react"

const useAdd= (a,b)=>{
    const[sum,setSum]=useState(0);
    useEffect(()=>{
        setSum(a+b);
    },[a,b])     
    return [sum];   
}

export default useAdd
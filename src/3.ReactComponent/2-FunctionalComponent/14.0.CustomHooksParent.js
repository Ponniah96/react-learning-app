import React, {useState, useEffect} from "react";
import useAdd from "./14.1.CustomHooksChild1"
import useFetchAPI from "./14.2.CustomHookschild2";
import useResponse from "./14.3CustomHooksChild3";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';                
export default function CustomHooks(){
    const [result1]=useAdd(5,10)
    const [result2]=useAdd(100,50);
    const [result3]=useAdd(-50,49);
    const [result4]=useFetchAPI("https://jsonplaceholder.typicode.com/todos");
    const [result1Hook,setresult1Hook]=useState([]);
    const [result4SearchTitle,setResult4SearchTitle]=useState("")
    const [result5]=useFetchAPI("https://engineering-task.elancoapps.com/api/raw");
    const [result, setResult] = useState(0);
    const [response1] = useResponse("https://reqres.in/api/users/1");
    const [response2] = useResponse("https://reqres.in/api/users/2");
    const [response3] = useResponse("https://reqres.in/api/users/3");
    const [response100] = useResponse("https://reqres.in/api/users/100");
    const codeString=`
import React, {useState, useEffect} from "react";
import useAdd from "./14.1.CustomHooksChild1"
import useFetchAPI from "./14.2.CustomHookschild2";
import useResponse from "./14.3CustomHooksChild3";
export default function CustomHooks(){
    const [result1]=useAdd(5,10)
    const [result2]=useAdd(100,50);
    const [result3]=useAdd(-50,49);
    const [result4]=useFetchAPI("https://jsonplaceholder.typicode.com/todos");
    const [result1Hook,setresult1Hook]=useState([]);
    const [result4SearchTitle,setResult4SearchTitle]=useState("")
    const [result5]=useFetchAPI("https://engineering-task.elancoapps.com/api/raw");
    const [result, setResult] = useState(0);
    const [response1] = useResponse("https://reqres.in/api/users/1");
    const [response2] = useResponse("https://reqres.in/api/users/2");
    const [response3] = useResponse("https://reqres.in/api/users/3");
    const [response100] = useResponse("https://reqres.in/api/users/100");
    useEffect(() => {
        if (result !== 0) {
        if (result === 1 && response1 !== null) {
            document.getElementById("email-value").innerText = response1.data.email;
            document.getElementById("name-value").innerText =
            response1.data.first_name;
            document.getElementById("image-source").src = response1.data.avatar;
        } else if (result === 2 && response2 !== null) {
            document.getElementById("email-value").innerText = response2.data.email;
            document.getElementById("name-value").innerText =
            response2.data.first_name;
            document.getElementById("image-source").src = response2.data.avatar;
        } else if (result === 3 && response3 !== null) {
            document.getElementById("email-value").innerText = response3.data.email;
            document.getElementById("name-value").innerText =
            response3.data.first_name;
            document.getElementById("image-source").src = response3.data.avatar;
        } else if (result === 100 && response100.data === undefined) {
            document.getElementById("email-value").innerText = "";
            document.getElementById("name-value").innerText = "";
            document.getElementById("image-source").src =
            "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg";
            alert("Data not Found");
        }
        }
        setResult(0);
    }, [result]);
    useState(()=>{
        setresult1Hook(result4);
        console.log(result1Hook);
    },[result4])
    useEffect(()=>{
        if(result4SearchTitle.length>0){
           const result= result4.filter(val=>
            val.title.toLowerCase().includes(result4SearchTitle.toLowerCase()));  
        }        
    },[result4SearchTitle]);
    return(
        <>
            <p>Custom Hooks</p>
            <p>Definition: React Custom Hooks allows 
            you to resue same functions for maultipe componenets </p>
            <p>Scneario: if we write simple addition function which will 
            gives you result of addition of 2 numbers means we can 
            directly write that functionality above components</p>
            <p>If we want to use that same functionality 
            for multiple screens we need to use custom hooks concept</p>
            <p>Advantages: It reduce code reapetion, user readability, complexity</p>
            <p><b>Note: We have add "use" keyword profix of our custom hooks</b></p>
            <p><b>Basic Example</b></p>
            <p>Example 1: Add 5 + 10. resukt is {result1}</p>
            <p>Example 2: Add 100 + 50. resukt is {result2}</p>
            <p>Example 3: Add -50 + 49. resukt is {result3}</p>
            <p><b>Advance Example(useAPI data)</b></p>
            <input type="text" onChange={(e)=>
                setResult4SearchTitle(e.target.value)} 
                value={result4SearchTitle} placeholder="Search Title"/>
            <table style={{border:"1px solid",borderCollapse:"collapse"}}>
                <thead>
                    <th style={{border:"1px solid",borderCollapse:"collapse"}}>SNo</th>
                    <th style={{border:"1px solid",borderCollapse:"collapse"}}>Name</th>
                    <th style={{border:"1px solid",borderCollapse:"collapse"}}>Status</th>
                </thead>
                <tbody>
                    {result4 !==null ? result4.length > 0 ? result4.map((val,index)=>
                        index < 10 ? 
                        <tr key={index}>
                            <td style={{border:"1px solid",borderCollapse:"collapse"}}>
                            {val.id}</td>
                            <td style={{border:"1px solid",borderCollapse:"collapse"}}>
                            {val.title}</td>
                            <td style={{border:"1px solid",borderCollapse:"collapse"}}>
                            {val.completed?"Active":"Not Active"}</td>
                        </tr> :""
                    ):"":""}
                </tbody>
            </table>      
            <br></br>                                 
            <table style={{border:"1px solid",borderCollapse:"collapse"}}>
                <thead>
                    <th style={{border:"1px solid",borderCollapse:"collapse"}}>SNo</th>
                    <th style={{border:"1px solid",borderCollapse:"collapse"}}>App Name</th>
                    <th style={{border:"1px solid",borderCollapse:"collapse"}}>Service Name</th>
                </thead>
                <tbody>
                    {result5!==null ? result5.length>0 ? result5.map((val,index)=>
                    index < 50 ?
                       <tr key={index}>
                            <td style={{border:"1px solid",borderCollapse:"collapse"}}>
                            {index+1}</td>
                            <td style={{border:"1px solid",borderCollapse:"collapse"}}>
                            {val.ResourceGroup}</td>
                            <td style={{border:"1px solid",borderCollapse:"collapse"}}>
                            {val.MeterCategory}</td>
                        </tr>
                        :""
                    ):"":""}
                </tbody>
            </table>
            <button
                onClick={() => setResult(1)}
                style={{ margin: "20px", padding: "15px" }}
            >
                1
            </button>
            <button
                onClick={() => setResult(2)}
                style={{ margin: "20px", padding: "15px" }}
            >
                2
            </button>
            <button
                onClick={() => setResult(3)}
                style={{ margin: "20px", padding: "15px" }}
            >
                3
            </button>
            <button
                onClick={() => setResult(100)}
                style={{ margin: "20px", padding: "15px" }}
            >
                100
            </button>
            <div>
                <p>
                Email:<span id="email-value"></span>
                </p>
                <p>
                Name:<span id="name-value"></span>
                </p>
                <img
                id="image-source"
                src="https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
                style={{ width: "200px", height: "200px" }}
                alt="imgPath"
                />
            </div>
    
        </>
    )
}

CustomHooksChild1.js

import {useEffect, useState} from "react"

const useAdd= (a,b)=>{
    const[sum,setSum]=useState(0);
    useEffect(()=>{
        setSum(a+b);
    },[a,b])     
    return [sum];   
}

export default useAdd

CustomHooksChild2.js

import { useState,useEffect } from "react";

const useFetchAPI=(url)=>{
    const [data,setData]=useState(null);
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[url]);
    return [data];
}

export default useFetchAPI;

CustomHooksChild3.js

import { useEffect, useState } from "react";

export default function useResponse(data) {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    fetch(data)
      .then((res) => res.json())
      .then((data) => setResponse(data))
      .catch(err=>{});
  }, [data]);
  return [response];
}

    `
    const copyFunction=(buttonID, functionID)=>{
        var copyText = document.getElementById(functionID)
        navigator.clipboard.writeText(copyText.innerText);
        var buttonElement=document.getElementById(buttonID);
        buttonElement.innerHTML= '<i class="bi bi-check2"></i> Copied';
    }
    useEffect(() => {
        if (result !== 0) {
        if (result === 1 && response1 !== null) {
            document.getElementById("email-value").innerText = response1.data.email;
            document.getElementById("name-value").innerText =
            response1.data.first_name;
            document.getElementById("image-source").src = response1.data.avatar;
        } else if (result === 2 && response2 !== null) {
            document.getElementById("email-value").innerText = response2.data.email;
            document.getElementById("name-value").innerText =
            response2.data.first_name;
            document.getElementById("image-source").src = response2.data.avatar;
        } else if (result === 3 && response3 !== null) {
            document.getElementById("email-value").innerText = response3.data.email;
            document.getElementById("name-value").innerText =
            response3.data.first_name;
            document.getElementById("image-source").src = response3.data.avatar;
        } else if (result === 100 && response100.data === undefined) {
            document.getElementById("email-value").innerText = "";
            document.getElementById("name-value").innerText = "";
            document.getElementById("image-source").src =
            "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg";
            alert("Data not Found");
        }
        }
        setResult(0);
    }, [result]);
    useState(()=>{
        setresult1Hook(result4);
        console.log(result1Hook);
    },[result4])
    useEffect(()=>{
        if(result4SearchTitle.length>0){
           const result= result4.filter(val=>val.title.toLowerCase().includes(result4SearchTitle.toLowerCase())); 
        }        
    },[result4SearchTitle]);
    return(
        <>
            <div className="flex-body">
                <div className="flex-left-content">
                    <p>Custom Hooks</p>
                    <p>Definition: React Custom Hooks allows you to resue same functions for maultipe componenets </p>
                    <p>Scneario: if we write simple addition function which will gives you result of addition of 2 numbers means we can directly write that functionality above components</p>
                    <p>If we want to use that same functionality for multiple screens we need to use custom hooks concept</p>
                    <p>Advantages: It reduce code reapetion, user readability, complexity</p>
                    <p><b>Note: We have add "use" keyword profix of our custom hooks</b></p>
                    <p><b>Basic Example</b></p>
                    <p>Example 1: Add 5 + 10. resukt is {result1}</p>
                    <p>Example 2: Add 100 + 50. resukt is {result2}</p>
                    <p>Example 3: Add -50 + 49. resukt is {result3}</p>
                    <p><b>Advance Example(useAPI data)</b></p>
                    <input type="text" onChange={(e)=>setResult4SearchTitle(e.target.value)} value={result4SearchTitle} placeholder="Search Title"/>
                    <table style={{border:"1px solid",borderCollapse:"collapse"}}>
                        <thead>
                            <th style={{border:"1px solid",borderCollapse:"collapse"}}>SNo</th>
                            <th style={{border:"1px solid",borderCollapse:"collapse"}}>Name</th>
                            <th style={{border:"1px solid",borderCollapse:"collapse"}}>Status</th>
                        </thead>
                        <tbody>
                            {result4 !==null ? result4.length > 0 ? result4.map((val,index)=>
                                index < 10 ? 
                                <tr key={index}>
                                    <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.id}</td>
                                    <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.title}</td>
                                    <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.completed?"Active":"Not Active"}</td>
                                </tr> :""
                            ):"":""}
                        </tbody>
                    </table>      
                    <br></br>                                 
                    <table style={{border:"1px solid",borderCollapse:"collapse"}}>
                        <thead>
                            <th style={{border:"1px solid",borderCollapse:"collapse"}}>SNo</th>
                            <th style={{border:"1px solid",borderCollapse:"collapse"}}>App Name</th>
                            <th style={{border:"1px solid",borderCollapse:"collapse"}}>Service Name</th>
                        </thead>
                        <tbody>
                            {result5!==null ? result5.length>0 ? result5.map((val,index)=>
                            index < 50 ?
                            <tr key={index}>
                                    <td style={{border:"1px solid",borderCollapse:"collapse"}}>{index+1}</td>
                                    <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.ResourceGroup}</td>
                                    <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.MeterCategory}</td>
                                </tr>
                                :""
                            ):"":""}
                        </tbody>
                    </table>
                    <button
                        onClick={() => setResult(1)}
                        style={{ margin: "20px", padding: "15px" }}
                    >
                        1
                    </button>
                    <button
                        onClick={() => setResult(2)}
                        style={{ margin: "20px", padding: "15px" }}
                    >
                        2
                    </button>
                    <button
                        onClick={() => setResult(3)}
                        style={{ margin: "20px", padding: "15px" }}
                    >
                        3
                    </button>
                    <button
                        onClick={() => setResult(100)}
                        style={{ margin: "20px", padding: "15px" }}
                    >
                        100
                    </button>
                    <div>
                        <p>
                        Email:<span id="email-value"></span>
                        </p>
                        <p>
                        Name:<span id="name-value"></span>
                        </p>
                        <img
                        id="image-source"
                        src="https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
                        style={{ width: "200px", height: "200px" }}
                        alt="imgPath"
                        />
                    </div>        
                </div>
                <div className="flex-right-content">
                    <button className="copy-icon" id="functional-intro"  onClick={()=>{copyFunction('functional-intro','function-intro-code')}}><i className="bi bi-clipboard"></i> Copy</button>
                    <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-intro-code" >
                        {codeString}
                    </SyntaxHighlighter>
                </div>
            </div>
        </>
    )
}
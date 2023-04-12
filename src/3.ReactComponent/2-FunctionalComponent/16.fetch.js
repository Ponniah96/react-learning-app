import React, {useEffect, useState} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'; 
export default function Fetch() {
  const [result, setResult]=useState([]);
  const codeString=`
import React, {useEffect, useState} from "react"
export default function Fetch() {
  const [result, setResult]=useState([]);
  useEffect(()=>{
   if(result.length ===0){
     fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json()).then(data => setResult(data));
   }  
  })
  return (
    <div className="App">
      <h1>Fetch Method </h1>
      <p>Fetch API through fetch method allows us to make HTTP Request of REST API and it will give response in JSON format</p>
      <p>Fetch API performs 2 types of operations</p>
      <ul>
        <li><b>GET Method: </b>It helps us to send HTTP request to an endpoint</li>
        <li><b>POST Method: </b>It helps us to send data to an endpoint</li>
      </ul>
      <table style={{border:"1px solid",borderCollapse:"collapse"}}>
        <thead>
          {/* <th>User ID</th> */}
          <th style={{border:"1px solid",borderCollapse:"collapse"}}>ID</th>
          <th style={{border:"1px solid",borderCollapse:"collapse"}}>Title</th>
          <th style={{border:"1px solid",borderCollapse:"collapse"}}>Body</th>
        </thead>
        <tbody>
          {result.length > 0?
          result.map(val=>{
            return(
            <tr key={val.id}>
              {/* <td>{val.userId}</td> */}
              <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.id}</td>
              <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.title}</td>
              <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.body}</td>
            </tr>
            )
          })
          :
          "No Data Found"
          }
        </tbody>
      </table>
    </div>
  );
}

  `
  const copyFunction=(buttonID, functionID)=>{
    var copyText = document.getElementById(functionID)
    navigator.clipboard.writeText(copyText.innerText);
    var buttonElement=document.getElementById(buttonID);
    buttonElement.innerHTML= '<i class="bi bi-check2"></i> Copied';
  }
  useEffect(()=>{
   if(result.length ===0){
     fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json()).then(data => setResult(data));
   }  
  })
  return (
    <>
        <div className="flex-body">
            <div className="flex-left-content">
                <div className="fetch">
                    <h1>Fetch Method </h1>
                    <p>Fetch API through fetch method allows us to make HTTP Request of REST API and it will give response in JSON format</p>
                    <p>Fetch API performs 2 types of operations</p>
                    <ul>
                        <li><b>GET Method: </b>It helps us to send HTTP request to an endpoint</li>
                        <li><b>POST Method: </b>It helps us to send data to an endpoint</li>
                    </ul>
                    <table style={{border:"1px solid",borderCollapse:"collapse"}}>
                        <thead>
                        {/* <th>User ID</th> */}
                        <th style={{border:"1px solid",borderCollapse:"collapse"}}>ID</th>
                        <th style={{border:"1px solid",borderCollapse:"collapse"}}>Title</th>
                        <th style={{border:"1px solid",borderCollapse:"collapse"}}>Body</th>
                        </thead>
                        <tbody>
                        {result.length > 0?
                        result.map(val=>{
                            return(
                            <tr key={val.id}>
                            {/* <td>{val.userId}</td> */}
                            <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.id}</td>
                            <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.title}</td>
                            <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.body}</td>
                            </tr>
                            )
                        })
                        :
                        "No Data Found"
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex-right-content">
                <button className="copy-icon" id="functional-fetch"  onClick={()=>{copyFunction('functional-fetch','function-fetch-code')}}><i className="bi bi-clipboard"></i> Copy</button>
                <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-fetch-code" >
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </div>    
    </>   
  );
}

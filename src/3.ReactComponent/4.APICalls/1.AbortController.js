

import "../../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
export default function ReactAbortController(){
     const codeString=`
useEffect(() => {
  const controller = new AbortController();

  axios.get("/users", { signal: controller.signal })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));

  return () => controller.abort();
}, []);
`;
    // const copyFunction=(buttonID, functionID)=>{
    //     var copyText = document.getElementById(functionID)
    //     navigator.clipboard.writeText(copyText.innerText);
    //     var buttonElement=document.getElementById(buttonID);
    //     buttonElement.innerHTML= '<i class="bi bi-check2"></i> Copied';
    // }
    const [data, setData] = useState(null);
    useEffect(() => {
      const controller = new AbortController();

      axios.get("https://api.example.com/users", { signal: controller.signal })
        .then(res => { console.log(res.data); setData(res.data); })
        .catch(err => console.log(err));

      return () => controller.abort();
    }, []);

    return(
        <div className="flex-body">
            <div className="flex-left-content">
                <p className="react-app-functionalComponents-header">Welcome to React AbortController</p>        
                <div>
                  {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
                </div>
            </div>
            <div className="flex-right-content">
            {/* <button className="copy-icon" id="functional-intro"  onClick={()=>{copyFunction('functional-intro','function-intro-code')}}><i className="bi bi-clipboard"></i> Copy</button> */}
            <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-intro-code" >
                {codeString}
            </SyntaxHighlighter>
            </div>
        </div>
    )
}
import React, {useState,useEffect} from "react";
import * as axios from "axios";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'; 
const client=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/posts'
})
export default function Axios(){
    const [getData,getMethod]      = useState([]);
    const [postData,postMethod]    = useState({});
    const [putData,putMethod]      = useState({});
    const [deleteData,deleteMethod]= useState({});
    const [errorData,errorMethod]  = useState({});
    const [createData,createMethod]= useState([]);
    const [asyncData,asynMethod]   = useState({});
    const codeString=`import React, {useState,useEffect} from "react";
    import axios from "axios";
    const client=axios.create({
        baseURL:'https://jsonplaceholder.typicode.com/posts'
    })
    export default function Axios(){
        const [getData,getMethod]      = useState([]);
        const [postData,postMethod]    = useState({});
        const [putData,putMethod]      = useState({});
        const [deleteData,deleteMethod]= useState({});
        const [errorData,errorMethod]  = useState([]);
        const [createData,createMethod]= useState([]);
        const [asyncData,asynMethod]   = useState({});
        useEffect(()=>{   
            if(getData.length===0)  {
                axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
                    getMethod(response.data);
                })
                axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response=>{
                    postMethod(response.data);
                    putMethod(response.data);
                    deleteMethod(response.data);
                })
                axios.get('https://jsonplaceholder.typicode.com/post').catch(error=>{
                    errorMethod(error);
                })
                client.get("/1").then(response=>createMethod(response.data));
            }
            async function getAxiosData(){
                const result=await axios.get('https://jsonplaceholder.typicode.com/posts/1');
                if(asyncData !==null){
                    asynMethod(result.data);
                }
            }
            getAxiosData();
        }, [getData, asyncData])
        function CreatePostRequest(){
            axios.post('https://jsonplaceholder.typicode.com/posts',
            {title:"Post Request ",body:"Axios Post request"}).then(response=>postMethod(response.data))
        }
        function CreatePutRequest(){
            axios.put('https://jsonplaceholder.typicode.com/posts/1',
            {title:'Put Request',body:'Axios Put request'}).then(response=>putMethod(response.data))
        }
        function CreateDeleteRequest(){
            axios.delete('https://jsonplaceholder.typicode.com/posts/1')
            .then(response=>{console.log(response);deleteMethod(null)})
        }
        return(
            <>
                <div className="flex-body" style={{"paddingBottom":"150px"}}>
                <div className="flex-left-content">
                    <h1>Axios</h1>
                    <p>Axios is an HTTP Client Library that allow you to make request to an endpoint </p>
                    <p>Request we can gett it either from thrid party API or else own Node JS Application</p>
                    <p><b>Advantages</b></p>
                    <ul>
                        <li>Axios has good default JSON request data. 
                        It will easily <b>convert requested body into JSON format</b></li>
                        <li>Unlike Fetch method (.then()), axios having multiple callbacks</li>
                        <li>Axios having multiple error codes. eg:400,500</li>
                    </ul>
                    <br></br>
                    <p><b>Axios Request Methods</b></p>
                    <ol>
                        <li><b>GET Request</b>
                            <p>To get response data from our endpoint, call get request</p>
                            <p>Syntax: <b>axios.get(url).then(response)</b></p>
                            {getData.length > 0 ? 
                            <ul>
                                {getData.map((val,index)=>{
                                    if(index<10){
                                        return(
                                            <li key={val.id}>{val.title}</li>
                                        )
                                    }
                                })}
                            </ul> 
                                :
                                    <p>No Get Response Data</p>}                           
                        </li>
                        <li><b>POST Request</b>
                            <p>To send new data into our endpoint, call post request</p>
                            <p>Syntax: <b>axios.post(url,{}).then(response)</b></p>
                            <button onClick={CreatePostRequest}>Call Post Request</button> 
                            {postData!==null ?<div><p>Title: {postData.title}</p>
                             <p> Body: {postData.body}</p> </div>:<p>No Post Response</p>}   
                        </li>
                        <li><b>PUT Request</b>
                            <p>To update existing data, use Put Request</p>
                            <p>Syntax: <b>axios.put(url,{}).then(response)</b></p>
                            <button onClick={CreatePutRequest}>Call Put Request</button>
                            {putData!==null ? <div> <p>Title: {putData.title}</p> 
                            <p> Body: {putData.body}</p></div> :<p>No Put Response</p> }
                        </li>
                        <li><b>Delete Request</b>
                            <p>To delete existing data, use delete request</p>
                            <p>Syntax: <b>axios.delete(url).then(response)</b></p>
                            <button onClick={CreateDeleteRequest}>Call Delete Request</button>
                            {deleteData!==null?<div><p>Title: {deleteData.title}</p>
                             <p>Body: {deleteData.body}</p></div>:<p>No Delete Response</p>}
                        </li>
                        <li><b>Error Method</b>
                            <p>Error method is used to define what is actual error code in axios</p>
                            <p>Syntax: <b>axios.get().catch(error function())</b></p>
                            {errorData && errorData.code ? <div><p>Error Code: {errorData.code}</p> 
                            <p>Error message: {errorData.message}</p></div> : <p>No Error Response</p>}
                        </li>
                    </ol>
                    <br></br>
                    <p><b>Axios Create Instance</b></p>
                    <p>Axios create instance is basically create instance or function which 
                    ontains baseUrl and it is used to replicate calling baseUrl each and every time </p>
                    <p>Syntax: <b>const test=axios.create({}); test.get().response()</b></p>
                    {createData.length !==0? <div><p>Title: {createData.title}</p>
                    <p>Body: {createData.body}</p></div> : <p>No Axios Instance Response</p>}
                    <br></br>
                    <p><b>Axios Async-await function</b></p>
                    <p>With help of async-await function in axios, we can reduce then(), catch() callbacks</p>
                    {asyncData!==null ? <div><p>Title: {asyncData.title}</p>
                    <p>Body: {asyncData.body}</p></div> : <p>No Async Axios Response</p>}
                    <br></br>
                    <p><b>Use Axios Mehod</b></p>
                    <p>Use-axios is used to remove code complexity by calling useeffect
                     and .then(), .catch() callbacks</p>
                    <p>Syntax: <b>const [data, error, loading]=useAxios({"url:url path"})</b></p>
                </div>
                <div className="flex-right-content"></div>
                </div>
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
    useEffect(()=>{   
        if(getData.length===0)  {
            axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
                getMethod(response.data);
            })
            axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response=>{
                postMethod(response.data);
                putMethod(response.data);
                deleteMethod(response.data);
            })
            axios.get('https://jsonplaceholder.typicode.com/post').catch(error=>{
                errorMethod(error);
            })
            client.get("/1").then(response=>createMethod(response.data));
        }
        async function getAxiosData(){
            const result=await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            if(asyncData !==null){
                asynMethod(result.data);
            }
        }
        getAxiosData();
    })
    function CreatePostRequest(){
        axios.post('https://jsonplaceholder.typicode.com/posts',{title:"Post Request ",body:"Axios Post request"}).then(response=>postMethod(response.data))
    }
    function CreatePutRequest(){
        axios.put('https://jsonplaceholder.typicode.com/posts/1',{title:'Put Request',body:'Axios Put request'}).then(response=>putMethod(response.data))
    }
    function CreateDeleteRequest(){
        axios.delete('https://jsonplaceholder.typicode.com/posts/1').then(response=>{console.log(response);deleteMethod(null)})
    }
    return(
        <>
            <div className="flex-body" style={{"paddingBottom":"150px"}}>
                <div className="flex-left-content">
                    <h1>Axios</h1>
                    <p><b>Axios in Brief:</b></p>
                    <p>Axios is a promise-based HTTP client for JavaScript, used to make HTTP requests from browsers and Node.js. It simplifies handling requests and responses, supports automatic JSON transformation, and provides easy error handling.</p>
                    <p><b>Advantages:</b></p>
                    <ul>
                        <li>Automatic JSON data transformation for requests and responses.</li>
                        <li>Supports request and response interceptors for global logic.</li>
                        <li>Handles errors with detailed status codes and messages.</li>
                        <li>Works in both browser and Node.js environments.</li>
                        <li>Supports cancellation of requests and timeout configuration.</li>
                    </ul>
                    <p><b>Disadvantages:</b></p>
                    <ul>
                        <li>Additional dependency compared to native fetch.</li>
                        <li>Bundle size is larger than fetch API.</li>
                        <li>May require polyfills for older browsers.</li>
                    </ul>
                    <p><b>Why Axios is Preferred Over Fetch:</b></p>
                    <ul>
                        <li>Axios automatically transforms request and response data to JSON, while fetch requires manual parsing.</li>
                        <li>Axios provides better error handling; fetch only rejects on network failure, not HTTP errors.</li>
                        <li>Axios supports request cancellation and interceptors, which fetch does not natively support.</li>
                        <li>Axios has built-in support for timeouts and progress events.</li>
                    </ul>
                    <p><b>Latest Updates in Axios (2024):</b></p>
                    <ul>
                        <li>Improved TypeScript support and type safety.</li>
                        <li>Enhanced support for HTTP/2 and modern protocols.</li>
                        <li>Better performance and reduced bundle size.</li>
                        <li>New hooks for React integration (e.g., <code>useAxios</code>).</li>
                        <li>Security improvements and bug fixes.</li>
                    </ul>
                    <p>Axios is an HTTP Client Library that allow you to make request to an endpoint </p>
                    <p>Request we can gett it either from thrid party API or else own Node JS Application</p>
                    <p><b>Advantages</b></p>
                    <ul>
                        <li>Axios has good default JSON request data. It will easily <b>convert requested body into JSON format</b></li>
                        <li>Unlike Fetch method (.then()), axios having multiple callbacks</li>
                        <li>Axios having multiple error codes. eg:400,500</li>
                    </ul>
                    <br></br>
                    <p><b>Axios Request Methods</b></p>
                    <ol>
                        <li><b>GET Request</b>
                            <p>To get response data from our endpoint, call get request</p>
                            <p>Syntax: <b>axios.get(url).then(response)</b></p>
                            {getData.length > 0 ? 
                            <ul>
                                {getData.map((val,index)=>{
                                    if(index<10){
                                        return(
                                            <li key={val.id}>{val.title}</li>
                                        )
                                    }
                                })}
                            </ul> 
                                :
                                    <p>No Get Response Data</p>}                           
                        </li>
                        <li><b>POST Request</b>
                            <p>To send new data into our endpoint, call post request</p>
                            <p>Syntax: <b>axios.post(url,{}).then(response)</b></p>
                            <button onClick={CreatePostRequest}>Call Post Request</button> 
                            {postData!==null ?<div><p>Title: {postData.title}</p> <p> Body: {postData.body}</p> </div>:<p>No Post Response</p>}   
                        </li>
                        <li><b>PUT Request</b>
                            <p>To update existing data, use Put Request</p>
                            <p>Syntax: <b>axios.put(url,{}).then(response)</b></p>
                            <button onClick={CreatePutRequest}>Call Put Request</button>
                            {putData!==null ? <div> <p>Title: {putData.title}</p> <p> Body: {putData.body}</p></div> :<p>No Put Response</p> }
                        </li>
                        <li><b>Delete Request</b>
                            <p>To delete existing data, use delete request</p>
                            <p>Syntax: <b>axios.delete(url).then(response)</b></p>
                            <button onClick={CreateDeleteRequest}>Call Delete Request</button>
                            {deleteData!==null?<div><p>Title: {deleteData.title}</p> <p>Body: {deleteData.body}</p></div>:<p>No Delete Response</p>}
                        </li>
                        <li><b>Error Method</b>
                            <p>Error method is used to define what is actual error code in axios</p>
                            <p>Syntax: <b>axios.get().catch(error function())</b></p>
                            {errorData.length !==0 ?<div><p>Error Code: {errorData.code}</p> <p>Error message: {errorData.message}</p></div>:<p>No Error Response</p>}
                        </li>
                    </ol>
                    <br></br>
                    <p><b>Axios Create Instance</b></p>
                    <p>Axios create instance is basically create instance or function which contains baseUrl and it is used to replicate calling baseUrl each and every time </p>
                    <p>Syntax: <b>const test=axios.create({}); test.get().response()</b></p>
                    {createData.length !==0? <div><p>Title: {createData.title}</p><p>Body: {createData.body}</p></div> : <p>No Axios Instance Response</p>}
                    <br></br>
                    <p><b>Axios Async-await function</b></p>
                    <p>With help of async-await function in axios, we can reduce then(), catch() callbacks</p>
                    {asyncData!==null ? <div><p>Title: {asyncData.title}</p><p>Body: {asyncData.body}</p></div> : <p>No Async Axios Response</p>}
                    <br></br>
                    <p><b>Use Axios Mehod</b></p>
                    <p>Use-axios is used to remove code complexity by calling useeffect and .then(), .catch() callbacks</p>
                    <p>Syntax: <b>const [data, error, loading]=useAxios({"url:url path"})</b></p>
                </div>
                <div className="flex-right-content">
                    <button className="copy-icon" id="functional-axios"  onClick={()=>{copyFunction('functional-axios','function-axios-code')}}><i className="bi bi-clipboard"></i> Copy</button>
                    <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-axios-code" >
                        {codeString}
                    </SyntaxHighlighter>
                </div>
            </div>
        </>
    )
    
}

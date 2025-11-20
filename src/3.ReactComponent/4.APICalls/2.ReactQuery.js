

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function ReactQuery() {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: async () => {
  //     const res = await axios.get("https://api.example.com/users");
  //     return res.data;
  //   }
  // });
  const codeString=`
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);


import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("https://api.example.com/users");
      return res.data;
    }
  });

  if (isLoading) return "Loading...";
  if (error) return "Error fetching data";

  return (
    <div>
      {data.map(user => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}
`;

  // if (isLoading) return "Loading...";
  // if (error) return "Error fetching data";

  return (
     <div className="flex-body">
            <div className="flex-left-content">
                <p className="react-app-functionalComponents-header">Welcome to React Query</p>        
                
                <div>
           	•	Automatic caching
	•	Avoids duplicate calls
	•	Refetch control
	•	Loading + error states
	•	Retry logic
  <p>For complex, corporate apps → teams prefer structure → RTK Query.</p>
                </div>
                {/* <div>
                  {data.map(user => <p key={user.id}>{user.name}</p>)}
                </div> */}
            </div>
            <div className="flex-right-content">
            {/* <button className="copy-icon" id="functional-intro"  onClick={()=>{copyFunction('functional-intro','function-intro-code')}}><i className="bi bi-clipboard"></i> Copy</button> */}
            <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-intro-code" >
                {codeString}
            </SyntaxHighlighter>
            </div>
        </div>
  );
}
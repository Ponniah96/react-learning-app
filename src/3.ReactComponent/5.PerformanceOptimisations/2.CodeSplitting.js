
import { useEffect, useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
export default function CodeSplitting() {
  const [Message, setMessage] = useState(null);

  const codeString=`
import React, { useState } from "react";

function App() {
  const [Message, setMessage] = useState(null);

  const loadComponent = async () => {
    const module = await import("./Message"); // <-- Dynamic Import
    setMessage(() => module.default({name: "Ponniah", age: 26}));
  };

  return (
    <div>
      <h1>Dynamic Import Demo</h1>

      <button onClick={loadComponent}>Load Message Component</button>

      {Message && <Message />}
    </div>
  );
}

export default App;`;

  /* eslint-disable import/first */
  const loadComponent = async () =>{
    // eslint-disable-next-line import/first
    const module = await import("../2-FunctionalComponent/3.Props"); // <-- Dynamic Import
    setMessage(() => module.default("Ponniah"));
  }
  return (
    <div className="flex-body">
      <div className="flex-left-content">
        <p className="react-app-functionalComponents-header">Welcome to React Dynamic Import</p>
        <p>
          Dynamic import is a feature in JavaScript that allows you to load modules asynchronously at runtime. This can be particularly useful in React applications for code-splitting, where you want to load components only when they are needed, rather than including them in the initial bundle.
        </p>
        {/* <button onClick={loadComponent}>Load Message Component</button> */}
        {Message && <Message />}
      </div>
      <div className="flex-right-content">
        <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-intro-code" >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
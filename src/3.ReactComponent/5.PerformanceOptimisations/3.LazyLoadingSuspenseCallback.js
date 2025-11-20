
import { useEffect, useState, lazy, Suspense } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
const ShowComponent = lazy(()=>import("../2-FunctionalComponent/1.Intro"));
export default function CodeSplitting() {
  const codeString=`
import React, { Suspense, useState } from "react";

// Lazy-loaded component (Webpack will split this into a separate chunk)
const LazyMessage = React.lazy(() => import("./Message"));

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>React.lazy + Suspense Example</h1>

      <button onClick={() => setShow(true)}>Load Message Component</button>

      {show && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyMessage />
        </Suspense>
      )}
    </div>
  );
}

export default App;`;


  // const [Message, setMessage] = useState(null);
  const [show, setShow] = useState(false);


  
  return (
    <div className="flex-body">
      <div className="flex-left-content">
        <p className="react-app-functionalComponents-header">Welcome to React Lazy Loading with Suspense</p>
        <p>
          React.lazy and Suspense are features in React that enable lazy loading of components. This means that a component is only loaded when it is needed, which can help improve the performance of your application by reducing the initial load time.
        </p>
        <button onClick={() => setShow(true)}>Implement Lazy Loading</button>
        {show && 
        (<Suspense fallback={<div>Loading...</div>}>
            <ShowComponent />
          </Suspense>
        )}
      </div>
      <div className="flex-right-content">
        <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-intro-code" >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
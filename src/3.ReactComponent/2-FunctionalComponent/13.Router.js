import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import RouterChild1 from "./13.RouterChild1";
import RouterChild2 from "./13.RouterChild2";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/default-highlight";
import { atelierCaveDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function FunctionalRouter() {
  const codeString = `
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import RouterChild1 from "./13.RouterChild1";
import RouterChild2 from "./13.RouterChild2";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/default-highlight";
export default function FunctionalRouter() {
  return (
    <div>
      <div className="flex-body">
        <div className="flex-left-content">
          <p>React Router</p>
          <Link to="/functional-router">Functional Components Intro</Link> |
          <Link to="/functional-router/2">Hooks States</Link>
          <hr style={{ width: "100%" }}></hr>
          <Routes>
            <Route path="/" element={<RouterChild1 />}></Route>
            <Route path="/2" element={<RouterChild2 />}></Route>
          </Routes>
        </div>
        <div className="flex-right-content">
          <button
            className="copy-icon"
            id="functional-intro"
            onClick={() => {
              copyFunction("functional-intro", "function-intro-code");
            }}
          >
            <i className="bi bi-clipboard"></i> Copy
          </button>
          <SyntaxHighlighter
            language="javascript"
            style={atelierCaveDark}
            id="function-intro-code"
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

      `;
  const copyFunction = (buttonID, functionID) => {
    var copyText = document.getElementById(functionID);
    navigator.clipboard.writeText(copyText.innerText);
    var buttonElement = document.getElementById(buttonID);
    buttonElement.innerHTML = '<i class="bi bi-check2"></i> Copied';
  };
  return (
    <div>
      <div className="flex-body">
        <div className="flex-left-content">
          <p>React Router</p>
          <Link to="/functional-router">Functional Components Intro</Link> |
          <Link to="/functional-router/2">Hooks States</Link>
          <hr style={{ width: "100%" }}></hr>
          <Routes>
            <Route path="/" element={<RouterChild1 />}></Route>
            <Route path="/2" element={<RouterChild2 />}></Route>
          </Routes>
        </div>
        <div className="flex-right-content">
          <button
            className="copy-icon"
            id="functional-intro"
            onClick={() => {
              copyFunction("functional-intro", "function-intro-code");
            }}
          >
            <i className="bi bi-clipboard"></i> Copy
          </button>
          <SyntaxHighlighter
            language="javascript"
            style={atelierCaveDark}
            id="function-intro-code"
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

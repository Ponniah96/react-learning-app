import React, {useState} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';



export default function ReactTestingLibraryExample() {
  const [count, setCount] = useState(0);
   const codeString = `
import {render, screen} from "@testing-library/react";
import ReactTestingLibraryExample from "../React-testing-library-examples";


test("Query Method - find elements by RTL query methods", () => {
  render(<ReactTestingLibraryExample />);

  //getByRole
  const roleElement = screen.getByRole("heading", {name: /react testing library - examples/i});
  expect(roleElement).toBeInTheDocument();

  //getByLabelText
  expect(screen.getByLabelText("sample-input")).toBeInTheDocument();


  //getByID
  expect(screen.getByTestId("test-message")).toBeInTheDocument();
});`;

   const codeString2 = `
import {render, screen, fireEvent} from "@testing-library/react";
import ReactTestingLibraryExample from "../React-testing-library-examples";

test("fireEvent - simulate user events", () => {
  render(<ReactTestingLibraryExample />);

  fireEvent.click(screen.getByLabelText("increment-btn"));

  expect(screen.getByRole("status")).toHaveTextContent("Count: 1");

});`;

   const codeString3 = `
import { render } from "@testing-library/react";
import ReactTestingLibraryExample from "../React-testing-library-examples";

test("Snapshot Testing - ReactTestingLibraryExample component", () => {
  const { asFragment } = render(<ReactTestingLibraryExample />);
  expect(asFragment()).toMatchSnapshot();
});`;


   const codeString4 = `
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports['Snapshot Testing - ReactTestingLibraryExample component 1'] = '
<DocumentFragment>
  <div
    class="flex-body"
  >
    <div
      class="flex-left-content"
    >
      <h2
        data-testid="test-message"
      >
        React Testing Library - Examples
      </h2>
      <button
        aria-label="increment-btn"
      >
        Increment
      </button>
      <p
        role="status"
      >
        Count: 0
      </p>
      <input
        aria-label="sample-input"
        type="text"
      />
    </div>
  </div>
</DocumentFragment>
'
`;

  return(
        <div className="flex-body">
            <div className="flex-left-content">
                
                <h2 data-testid="test-message">React Testing Library - Examples</h2>

                <button onClick={() => setCount(count + 1)} aria-label="increment-btn">Increment</button>

                <p role="status">Count: {count}</p>

                <input type="text" aria-label="sample-input" />
                {/* <p>test</p> */}
            </div>
             <div className="flex-right-content">
                <h3>Query Test methods</h3>
                <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-intro-code" >
                    {codeString}
                </SyntaxHighlighter>
                <hr></hr>
                <h3>Fire Events</h3>
                <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-intro-code" >
                    {codeString2}
                </SyntaxHighlighter>
                <hr></hr>
                <h3>snapshots</h3>
                <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-intro-code" >
                    {codeString3}
                </SyntaxHighlighter>
                <h4>Snapshot File</h4>
                <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-intro-code" >
                    {codeString4}
                </SyntaxHighlighter>
              </div>
        </div>
      )
  }
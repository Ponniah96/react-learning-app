import React, { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
function ReactTestingLibraryAPIExampleAPI({ fetchUser }) {
  const [user, setUser] = useState(null);

  const handleLoad = async () => {
    const data = await fetchUser();
    setUser(data);
  };

      const codeString = `
import { render, screen, fireEvent } from "@testing-library/react";
import ReactTestingLibraryAPIExampleAPI from "../React-testing-library-example-api";

test("Mock API: loads and displays user data", async()=>{
  //Mock API Resposne
  const mockFetchUser = jest.fn().mockResolvedValue({
    name: "Jane Doe",
    email: "jane.doe@example.com"
  })

  render(<ReactTestingLibraryAPIExampleAPI fetchUser={mockFetchUser} />);

  //Simulate User Click
  fireEvent.click(screen.getByLabelText("load-user-btn"));

  //Fetch Mock Results

  const results = await screen.findByTestId("user-details");

  //Assertions

  expect(mockFetchUser).toHaveBeenCalledTimes(1);
  expect(results).toHaveTextContent("Name: Jane Doe");
  expect(results).toHaveTextContent("Email: jane.doe@example.com");
})`;

  return (
     <div className="flex-body">
        <div className="flex-left-content">
          <h2>User Profile</h2>

          <button onClick={handleLoad} aria-label="load-user-btn">
            Load User
          </button>

          {user && (
            <div data-testid="user-details">
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          )}
        </div>
        <div className="flex-right-content">
          <h3>Mock API Test</h3>
          <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="function-intro-code" >
              {codeString}
          </SyntaxHighlighter>
        </div>
    </div>
  );
}

export default ReactTestingLibraryAPIExampleAPI;
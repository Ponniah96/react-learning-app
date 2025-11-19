import { render, screen } from "@testing-library/react";
import ReactTestingLibraryExample from "./React-testing-library-examples";
// A simple test example for demonstration purposes
function add(a, b) {
  return a + b;
}

test("adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("execute first test in my life", () => {
  render(<ReactTestingLibraryExample />);
  const message = screen.getByTestId("test-message");
  expect(message).toBeInTheDocument();
})
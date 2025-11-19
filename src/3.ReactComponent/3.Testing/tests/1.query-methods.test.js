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
});
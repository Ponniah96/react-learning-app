import {render, screen, fireEvent} from "@testing-library/react";
import ReactTestingLibraryExample from "../React-testing-library-examples";

test("fireEvent - simulate user events", () => {
  render(<ReactTestingLibraryExample />);

  fireEvent.click(screen.getByLabelText("increment-btn"));

  expect(screen.getByRole("status")).toHaveTextContent("Count: 1");

});
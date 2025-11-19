import { render } from "@testing-library/react";
import ReactTestingLibraryExample from "../React-testing-library-examples";

test("Snapshot Testing - ReactTestingLibraryExample component", () => {
  const { asFragment } = render(<ReactTestingLibraryExample />);
  expect(asFragment()).toMatchSnapshot();
});
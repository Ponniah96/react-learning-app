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
})
export default function ReactTestingLibrary() {
  return(
        <div className="flex-body">
            <div className="flex-left-content">
                <h2>React Testing Library</h2>

                <h3>Introduction</h3>
                <p>React Testing Library (RTL) is a lightweight tool that tests React components from the user’s perspective.</p>
                <p>It focuses on how the UI behaves rather than how it is implemented internally.</p>

                <hr></hr>

                <h3>Basic Terminologies</h3>

                <h4>Test Runner</h4>
                <p>A tool that executes test files and reports results. Jest is the most common test runner used in React projects.</p>

                <h4>Assertion</h4>
                <p>A statement that checks whether a value meets expected conditions. If the condition fails, the test fails.</p>

                <h4>Render</h4>
                <p>Simulates rendering a React component in a virtual DOM. It allows you to test UI behavior as users would interact with it.</p>

                <h4>Query Methods</h4>
                <p>Functions like <code>getByText</code> or <code>getByRole</code> that help find elements in the rendered UI. They represent how users access elements on the screen.</p>

                <h4>FireEvent</h4>
                <p>A utility for simulating user actions such as clicks or typing. It triggers DOM events to test component responses.</p>

                <h4>Screen</h4>
                <p>A global object in RTL that provides access to all rendered elements. It keeps test code cleaner by avoiding manual destructuring from <code>render()</code>.</p>

                <h4>Mocking</h4>
                <p>A technique to replace real functions or modules with fake ones during tests. It isolates components and avoids external side effects.</p>

                <h4>Snapshot Testing</h4>
                <p>A method that stores a component’s rendered output and compares it in future tests. It detects unexpected UI changes.</p>

                <hr></hr>

                <h3>Commonly Used APIs / Functions (Short Definitions)</h3>

                <h4>Query Methods</h4>
                <p><strong>getByRole:</strong> Finds an element by ARIA role; throws error if not found.</p>
                <p><strong>getByText:</strong> Retrieves an element displaying specific text; strict and user-focused.</p>
                <p><strong>getByLabelText:</strong> Selects form elements based on their labels.</p>
                <p><strong>findByRole:</strong> Asynchronous version of getByRole; waits for element to appear.</p>
                <p><strong>queryByText:</strong> Like getByText but returns null instead of throwing error.</p>
                <hr></hr>

                <h4>Fire Event</h4>
                <p><strong>fireEvent.click:</strong> Simulates a user click event on an element.</p>
                <p><strong>fireEvent.change:</strong> Mocks user typing or modifying input values.</p>
                <p><strong>fireEvent.submit:</strong> Triggers a form submission event.</p>
                <p><strong>fireEvent.keyDown:</strong> Simulates pressing a keyboard key.</p>
                <p><strong>fireEvent.mouseOver:</strong> Simulates the mouse hovering over an element.</p>
                <hr></hr>

                <h4>Screen</h4>
                <p><strong>screen.getByText:</strong> Finds an element by visible text through the global screen object.</p>
                <p><strong>screen.getByRole:</strong> Retrieves an element by its accessible role globally.</p>
                <p><strong>screen.queryByText:</strong> Checks for text without throwing errors if missing.</p>
                <p><strong>screen.findByRole:</strong> Asynchronously waits for an element to appear by role.</p>
                <p><strong>screen.getAllByRole:</strong> Gets multiple elements sharing the same role.</p>
                <hr></hr>

                <h4>Mocking</h4>
                <p><strong>jest.fn:</strong> Creates a mock function for tracking calls and behaviors.</p>
                <p><strong>jest.mock:</strong> Mocks an entire module to isolate tests.</p>
                <p><strong>mockResolvedValue:</strong> Sets resolved values for mocked promises.</p>
                <p><strong>mockRejectedValue:</strong> Defines rejected values for async functions.</p>
                <p><strong>jest.spyOn:</strong> Monitors calls to an existing function without replacing it.</p>
                <hr></hr>

                <h4>Snapshot Testing</h4>
                <p><strong>toMatchSnapshot:</strong> Compares output to an existing snapshot file.</p>
                <p><strong>toMatchInlineSnapshot:</strong> Stores snapshot directly in the test file.</p>
                <p><strong>updateSnapshot flag:</strong> Regenerates snapshots when intended changes occur.</p>
                <p><strong>pretty-format:</strong> Used internally to format snapshot output.</p>
                <p><strong>snapshot serializers:</strong> Tools that format components for clearer snapshots.</p>
     
            </div>
            <div className="flex-right-content">            
            </div>
        </div>
    )
}
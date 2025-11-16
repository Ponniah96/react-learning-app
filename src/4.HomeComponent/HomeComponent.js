import React from "react";
import Source from "../reactBasics.pdf";
export default function ReactIntroduction() {
  return (
    <>
      {/* <iframe
        src={Source}
        width="95%"
        height="500px"
        title="React Introduction"
      /> */}
      <div className="flex-body">
        <h2>React Terminologies</h2>
        
        <h3>Components</h3>
        <p><strong>Class Components:</strong> ES6 classes that extend React.Component and use render() method to return JSX.
        They have access to lifecycle methods and state management through this.state.</p>
        
        <p><strong>Functional Components:</strong> JavaScript functions that return JSX elements directly.
        Modern approach using hooks for state and lifecycle management.</p>
        
        <h3>Core Concepts</h3>
        <p><strong>JSX:</strong> JavaScript XML syntax extension that allows writing HTML-like code in JavaScript.
        Gets transpiled to React.createElement() calls by Babel.</p>
        
        <p><strong>State:</strong> Internal data storage that determines component behavior and rendering.
        When state changes, component re-renders automatically.</p>
        
        <p><strong>Props:</strong> Properties passed from parent to child components as read-only data.
        Enable component reusability and data flow down the component tree.</p>
        
        <p><strong>Virtual DOM:</strong> JavaScript representation of the actual DOM kept in memory.
        React compares virtual DOM snapshots to efficiently update only changed elements.</p>
        
        <p><strong>Lifecycle Methods:</strong> Methods that run at specific points in component's existence.
        Include mounting (componentDidMount), updating, and unmounting phases.</p>
        
        <p><strong>Event Handling:</strong> React uses SyntheticEvents that wrap native DOM events.
        Provides consistent behavior across different browsers and platforms.</p>
        
        <h3>React Hooks</h3>
        <p><strong>useState:</strong> Hook for adding state to functional components.
        Returns current state value and a function to update it.</p>
        
        <p><strong>useEffect:</strong> Hook for performing side effects in functional components.
        Replaces componentDidMount, componentDidUpdate, and componentWillUnmount.</p>
        
        <p><strong>useContext:</strong> Hook for consuming React context without nesting.
        Allows components to subscribe to context changes.</p>
        
        <p><strong>useReducer:</strong> Hook for complex state management using reducer pattern.
        Alternative to useState for state objects with multiple sub-values.</p>
        
        <p><strong>useMemo:</strong> Hook for memoizing expensive calculations.
        Only recalculates when dependencies change, optimizing performance.</p>
        
        <p><strong>useCallback:</strong> Hook for memoizing functions to prevent unnecessary re-renders.
        Returns memoized version of callback that only changes if dependencies change.</p>
        
        <p><strong>useRef:</strong> Hook for creating mutable references that persist across renders.
        Commonly used for accessing DOM elements directly.</p>
        
        <h3>Additional Concepts</h3>
        <p><strong>Fragment:</strong> Wrapper component that groups multiple elements without adding extra DOM nodes.
        Can be written as &lt;React.Fragment&gt; or &lt;&gt;&lt;/&gt; shorthand.</p>
        
        <p><strong>Key Prop:</strong> Special prop used to identify list items for efficient re-rendering.
        Helps React track which items have changed, been added, or removed.</p>
        
        <p><strong>Conditional Rendering:</strong> Technique to render different content based on certain conditions.
        Can use ternary operators, logical AND, or if statements.</p>
        
        <p><strong>Controlled Components:</strong> Form elements whose value is controlled by React state.
        Input changes are handled through event handlers that update state.</p>
        
        <p><strong>Uncontrolled Components:</strong> Form elements that maintain their own internal state.
        Values are accessed using refs instead of state management.</p>
        
        <p><strong>Higher-Order Components (HOC):</strong> Functions that take a component and return a new component.
        Used for reusing component logic and cross-cutting concerns.</p>
        
        <p><strong>Render Props:</strong> Pattern for sharing code between components using a prop whose value is a function.
        The function receives data and returns React elements to render.</p>
        
        <p><strong>Context API:</strong> Built-in state management solution for sharing data across component tree.
        Avoids prop drilling by providing data to deeply nested components.</p>
        
        <p><strong>Error Boundaries:</strong> Components that catch JavaScript errors in child component tree.
        Can display fallback UI and prevent entire app from crashing.</p>
      </div>
    </>
  );
}

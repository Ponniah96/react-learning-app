import React from "react";
import Source from "../reactBasics.pdf";

export default function ReactIntroduction() {
  return (
    <>
      <div className="flex-body">
        <h2>React Terminologies</h2>
        
        <h3>Components</h3>
        <h4 style={{marginBottom: 0}}>Class Components:</h4>
        <p>ES6 classes that extend React.Component and use render() method to return JSX.
        They have access to lifecycle methods and state management through this.state.</p>
        
        <h4 style={{marginBottom: 0}}>Functional Components:</h4>
        <p>JavaScript functions that return JSX elements directly.
        Modern approach using hooks for state and lifecycle management.</p>
        
        <hr />
        <h3>Core Concepts</h3>
        <h4 style={{marginBottom: 0}}>JSX:</h4>
        <p>JavaScript XML syntax extension that allows writing HTML-like code in JavaScript.
        Gets transpiled to React.createElement() calls by Babel.</p>
        
        <h4 style={{marginBottom: 0}}>State:</h4>
        <p>Internal data storage that determines component behavior and rendering.
        When state changes, component re-renders automatically.</p>
        
        <h4 style={{marginBottom: 0}}>Props:</h4>
        <p>Properties passed from parent to child components as read-only data.
        Enable component reusability and data flow down the component tree.</p>
        
        <h4 style={{marginBottom: 0}}>Virtual DOM:</h4>
        <p>JavaScript representation of the actual DOM kept in memory.
        React compares virtual DOM snapshots to efficiently update only changed elements.</p>
        
        <h4 style={{marginBottom: 0}}>Lifecycle Methods:</h4>
        <p>Methods that run at specific points in component's existence.
        Include mounting (componentDidMount), updating, and unmounting phases.</p>
        
        <h4 style={{marginBottom: 0}}>Event Handling:</h4>
        <p>React uses SyntheticEvents that wrap native DOM events.
        Provides consistent behavior across different browsers and platforms.</p>
        
        <hr />
        <h3>React Hooks</h3>
        <h4 style={{marginBottom: 0}}>useState:</h4>
        <p>Hook for adding state to functional components.
        Returns current state value and a function to update it.</p>
        
        <h4 style={{marginBottom: 0}}>useEffect:</h4>
        <p>Hook for performing side effects in functional components.
        Replaces componentDidMount, componentDidUpdate, and componentWillUnmount.</p>
        
        <h4 style={{marginBottom: 0}}>useContext:</h4>
        <p>Hook for consuming React context without nesting.
        Allows components to subscribe to context changes.</p>
        
        <h4 style={{marginBottom: 0}}>useReducer:</h4>
        <p>Hook for complex state management using reducer pattern.
        Alternative to useState for state objects with multiple sub-values.</p>
        
        <h4 style={{marginBottom: 0}}>useMemo:</h4>
        <p>Hook for memoizing expensive calculations.
        Only recalculates when dependencies change, optimizing performance.</p>
        
        <h4 style={{marginBottom: 0}}>useCallback:</h4>
        <p>Hook for memoizing functions to prevent unnecessary re-renders.
        Returns memoized version of callback that only changes if dependencies change.</p>
        
        <h4 style={{marginBottom: 0}}>useRef:</h4>
        <p>Hook for creating mutable references that persist across renders.
        Commonly used for accessing DOM elements directly.</p>
        
        <hr />
        <h3>Additional Concepts</h3>
        <h4 style={{marginBottom: 0}}>Fragment:</h4>
        <p>Wrapper component that groups multiple elements without adding extra DOM nodes.
        Can be written as &lt;React.Fragment&gt; or &lt;&gt;&lt;/&gt; shorthand.</p>
        
        <h4 style={{marginBottom: 0}}>Key Prop:</h4>
        <p>Special prop used to identify list items for efficient re-rendering.
        Helps React track which items have changed, been added, or removed.</p>
        
        <h4 style={{marginBottom: 0}}>Conditional Rendering:</h4>
        <p>Technique to render different content based on certain conditions.
        Can use ternary operators, logical AND, or if statements.</p>
        
        <h4 style={{marginBottom: 0}}>Controlled Components:</h4>
        <p>Form elements whose value is controlled by React state.
        Input changes are handled through event handlers that update state.</p>
        
        <h4 style={{marginBottom: 0}}>Uncontrolled Components:</h4>
        <p>Form elements that maintain their own internal state.
        Values are accessed using refs instead of state management.</p>
        
        <h4 style={{marginBottom: 0}}>Higher-Order Components (HOC):</h4>
        <p>Functions that take a component and return a new component.
        Used for reusing component logic and cross-cutting concerns.</p>
        
        <h4 style={{marginBottom: 0}}>Render Props:</h4>
        <p>Pattern for sharing code between components using a prop whose value is a function.
        The function receives data and returns React elements to render.</p>
        
        <h4 style={{marginBottom: 0}}>Context API:</h4>
        <p>Built-in state management solution for sharing data across component tree.
        Avoids prop drilling by providing data to deeply nested components.</p>
        
        <h4 style={{marginBottom: 0}}>Error Boundaries:</h4>
        <p>Components that catch JavaScript errors in child component tree.
        Can display fallback UI and prevent entire app from crashing.</p>

        <hr />
        <h3>Advanced Concepts</h3>
        <h4 style={{marginBottom: 0}}>Code Splitting:</h4>
        <p>Technique to split code into smaller chunks that load on demand.
        Reduces initial bundle size using dynamic imports and React.lazy().</p>
        
        <h4 style={{marginBottom: 0}}>Lazy Loading:</h4>
        <p>Loading components or resources only when needed to improve performance.
        React.lazy() enables lazy loading of components with Suspense boundaries.</p>
        
        <h4 style={{marginBottom: 0}}>React.Suspense:</h4>
        <p>Component that handles loading states for lazy-loaded components.
        Displays fallback UI while waiting for components to load.</p>
        
        <h4 style={{marginBottom: 0}}>API Call Optimization:</h4>
        <p>Techniques like debouncing, caching, and request cancellation.
        Use AbortController, React Query, or SWR for efficient data fetching.</p>
        
        <h4 style={{marginBottom: 0}}>Webpack Bundling:</h4>
        <p>Module bundler that compiles JavaScript modules into optimized bundles.
        Handles code splitting, tree shaking, and asset optimization automatically.</p>
        
        <h4 style={{marginBottom: 0}}>Tree Shaking:</h4>
        <p>Dead code elimination that removes unused exports from final bundle.
        Reduces bundle size by excluding code that's imported but never used.</p>
        
        <h4 style={{marginBottom: 0}}>Memoization:</h4>
        <p>Optimization technique using React.memo() to prevent unnecessary re-renders.
        Components only re-render when their props actually change.</p>
        
        <h4 style={{marginBottom: 0}}>Performance Profiling:</h4>
        <p>Using React DevTools Profiler to identify performance bottlenecks.
        Measures component render times and optimization opportunities.</p>
        
        <h4 style={{marginBottom: 0}}>Server-Side Rendering (SSR):</h4>
        <p>Rendering React components on server for faster initial page loads.
        Improves SEO and perceived performance using frameworks like Next.js.</p>
        
        <h4 style={{marginBottom: 0}}>Static Site Generation (SSG):</h4>
        <p>Pre-building pages at build time for maximum performance.
        Combines benefits of static sites with React's dynamic capabilities.</p>
        
        <h4 style={{marginBottom: 0}}>Progressive Web Apps (PWA):</h4>
        <p>Web applications that provide native app-like experiences.
        Features include offline functionality, push notifications, and app installation.</p>
        
        <h4 style={{marginBottom: 0}}>Micro Frontends:</h4>
        <p>Architectural approach for building scalable frontend applications.
        Breaks monolithic frontends into smaller, independent deployable pieces.</p>

      </div>
    </>
  );
}

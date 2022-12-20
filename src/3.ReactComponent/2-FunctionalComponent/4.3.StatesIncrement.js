import React, { useState } from 'react';

export default function FunctionalStatesIncrement(props) {
    const [increment,setIncrement]=useState(0);
    return (
        <div>
            <p>3.2 React Functional States Increment</p>
            <button onClick={()=>setIncrement(increment+1)}>Clicked on {increment} times</button>
        </div>
    );
}


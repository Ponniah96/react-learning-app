import React, { useState } from 'react';

export default function FunctionStatesToggle(props) {
    const [toggleState,setToggleState]=useState(true);
    function toggleFunction(e){
        setToggleState(!toggleState);
    }
    return (
        <div>
            <p>3.1 React Functional States Toggle</p>
            <div>React State Value: {JSON.stringify(toggleState)} <button onClick={toggleFunction}>Toggle State</button></div>
        </div>
    );
}


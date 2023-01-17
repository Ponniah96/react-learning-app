import React from "react";
import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
import FunctionalIntro from "./1.Intro";
import FunctionStatesToggle from './4.1.StatesIntro';
import FunctionalForms from './12.Forms';

export default function FunctionalRouter(){
    return(
        <>
         <p>React Router</p>
         <BrowserRouter>
            {/* <p>
                <Link to="/">Functional Componets Intro</Link>
            </p>
            <p>
                <Link to="/functional-components-states">Hooks States</Link>
            </p>
            <p>
                <Link to="/functional-components-forms">Hooks Forms</Link>
            </p> */}
                <Link to="/">Functional Componets Intro</Link> | 
                <Link to="/functional-components-states">Hooks States</Link> | 
                <Link to="/functional-components-forms">Hooks Forms</Link> | 
            <br></br>
            {/* <hr style={{width:"50%"}}></hr> */}
            <Routes>
                <Route exact path="/" element={<FunctionalIntro />}></Route>
                <Route path="/functional-components-states" element={<FunctionStatesToggle/>}>  </Route>
                <Route path="/functional-components-forms" element={<FunctionalForms/> }> </Route>
            </Routes>         
         </BrowserRouter>
        </>
    )
}
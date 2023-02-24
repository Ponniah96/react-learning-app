import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import './App.css';

import ReactIntroduction from "./4.HomeComponent/HomeComponent";


import NpmCommands from "./4.HomeComponent/NpmCommands";

import ClassIntro from "./3.ReactComponent/1.ClassComponent/1.Intro";
import ClassComponentJSX from './3.ReactComponent/1.ClassComponent/2.jsx';
import ClassComponentProps from './3.ReactComponent/1.ClassComponent/3.Props';
import ClassComponentStates from './3.ReactComponent/1.ClassComponent/4.1.StatesIntro';
// import ClassStatesToggle from './3.ReactComponent/1.ClassComponent/4.2.StatesToggle';
// import ClassStatesIncrement from './3.ReactComponent/1.ClassComponent/4.3.StatesIncrement';
import ClassEvents from './3.ReactComponent/1.ClassComponent/5.Events';
import ClassForms from './3.ReactComponent/1.ClassComponent/7.Forms';
import ClassArrays from './3.ReactComponent/1.ClassComponent/8.Array';


import FunctionalIntro from "./3.ReactComponent/2-FunctionalComponent/1.Intro";
import FunctionalComponentJSX from './3.ReactComponent/2-FunctionalComponent/2.jsx';
import FunctionalComponentProps from './3.ReactComponent/2-FunctionalComponent/3.Props';
import FunctionalComponentStates from './3.ReactComponent/2-FunctionalComponent/4.1.StatesIntro';
// import FunctionStatesToggle from './3.ReactComponent/2-FunctionalComponent/4.2.StatesToggle';
// import FunctionalStatesIncrement from './3.ReactComponent/2-FunctionalComponent/4.3.StatesIncrement';
// import FunctionalStateDataTypes from './3.ReactComponent/2-FunctionalComponent/4.5.StateDataTypes';
import FunctionEvents from './3.ReactComponent/2-FunctionalComponent/5.Events';
import FunctionRef from './3.ReactComponent/2-FunctionalComponent/6.refs';
import FunctionalEffects from './3.ReactComponent/2-FunctionalComponent/7.UseEffect';
import FunctionalUseContext from './3.ReactComponent/2-FunctionalComponent/8.UseContext';
import FunctionalMemo from './3.ReactComponent/2-FunctionalComponent/9.UseMemo';
import FunctionalCallback from './3.ReactComponent/2-FunctionalComponent/10.0.UseCallback';
import FunctionalReducer from './3.ReactComponent/2-FunctionalComponent/11.UseReducer';
import FunctionalForms from './3.ReactComponent/2-FunctionalComponent/12.Forms';
import FunctionalRouter from './3.ReactComponent/2-FunctionalComponent/13.Router';

import CustomHooks from './3.ReactComponent/2-FunctionalComponent/14.0.CustomHooksParent';
import PromiseFunction from './3.ReactComponent/2-FunctionalComponent/15.PromiseFunction';

export default function App(){
    return(
        <div className="app">
            <BrowserRouter >
                <div className="header-navbar">
                    <nav className="top-nav-bar">
                        <ul style={{"padding":"0px","margin":"0px"}}>
                            <li>
                                <Link className="top-nav-bar-links" to="/react-learning-app">Home</Link>
                            </li>
                            <li>
                                <a className="top-nav-bar-links" onClick={(e)=>e.preventDefault()}>Class Components</a>
                                <div className="top-nav-dropdown"  style={{"display":"none"}}>
                                    <Link className="top-nav-dropdown-links" to="/class-intro">Introduction</Link>
                                    <Link className="top-nav-dropdown-links" to="/class-jsx">JSX</Link>
                                    <Link className="top-nav-dropdown-links" to="/class-props">Props</Link>
                                    <Link className="top-nav-dropdown-links" to="/class-state">States</Link>
                                    {/* <Link className="top-nav-dropdown-links" to="/class-state-toggle">State Togle</Link>
                                    <Link className="top-nav-dropdown-links" to="/class-state-increment">State Increment</Link> */}
                                    <Link className="top-nav-dropdown-links" to="/class-events">Events</Link>
                                    <Link className="top-nav-dropdown-links" to="/class-forms">Forms</Link>
                                    <Link className="top-nav-dropdown-links" to="/class-arrays">Arrays</Link>
                                </div>
                            </li>
                            <li>
                                <a className="top-nav-bar-links" onClick={(e)=>e.preventDefault()}>Functional Components</a>
                                <div className="top-nav-dropdown"  style={{"display":"none"}}>
                                    <Link className="top-nav-dropdown-links" to="/functional-intro">Introduction</Link>
                                    <Link className="top-nav-dropdown-links" to="/functional-jsx">JSX</Link>
                                    <Link className="top-nav-dropdown-links" to="/functional-props">Props</Link>
                                    <Link className="top-nav-dropdown-links" to="/functional-state">useState</Link>
                                    {/* <Link className="top-nav-dropdown-links" to="/functional-state-toggle">State Togle</Link>
                                    <Link className="top-nav-dropdown-links" to="/functional-state-increment">State Increment</Link>
                                    <Link className="top-nav-dropdown-links" to="/functional-state-datatypes">State Data Types</Link> */}
                                    <Link className="top-nav-dropdown-links" to="/functional-events">Events</Link>
                                    <Link className="top-nav-dropdown-links" to="/functional-ref">useRef</Link>
                                    <Link className="top-nav-dropdown-links" to="/functional-effect">useEffect</Link>
                                    <Link className="top-nav-dropdown-links" to="/functional-context">useContext</Link>
                                    <Link className="top-nav-dropdown-links" to="/functional-memo">useMemo</Link>
                                    <Link className="top-nav-dropdown-links" to="/functional-callback">useCallback</Link>
                                    <Link className="top-nav-dropdown-links" to="/functional-reducer">useReducer</Link>
                                </div>
                            </li>
                            <li>
                                <a className="top-nav-bar-links" onClick={(e)=>e.preventDefault()}>Advanced Functional Components</a>
                                <div className="top-nav-dropdown"  style={{"display":"none"}}>
                                    <Link className="top-nav-dropdown-links" to="/functional-custom-hooks">Custom Hooks</Link>
                                    {/* <Link className="top-nav-dropdown-links" to="/functional-router">Router</Link> */}
                                    <Link className="top-nav-dropdown-links" to="/functional-promise">Promise</Link>
                                    <Link className="top-nav-dropdown-links" to="/functional-forms">Forms</Link>
                                </div>
                            </li>
                            <li>
                                <a className="top-nav-bar-links" onClick={(e)=>e.preventDefault()}>React Applications</a>
                                <div className="top-nav-dropdown"  style={{"display":"none"}}>
                                    <a className="top-nav-dropdown-links" href="https://ponniah96.github.io/reactCartApplication/" target="_blank">Cart Application</a>
                                    <a className="top-nav-dropdown-links" href="javascript:void(0)">CRUD Application</a>
                                    <a className="top-nav-dropdown-links" href="javascript:void(0)">Dashboard</a>
                                    <a className="top-nav-dropdown-links" href="javascript:void(0)">Custom Table Using Material UI</a>
                                </div>
                            </li>
                            <li>
                                <a className="top-nav-bar-links" onClick={(e)=>e.preventDefault()}>References</a>
                                <div className="top-nav-dropdown"  style={{"display":"none"}}>
                                    {/* <Link className="top-nav-dropdown-links" to="/functional-custom-hooks">Links</Link> */}
                                    <Link className="top-nav-dropdown-links" to="/npm-commands">NPM Commands</Link>
                                </div>
                            </li>
                        </ul>
                    </nav>             
                </div>
                <div className="body">
                    <Routes>
                        <Route exact path="/react-learning-app" element={<ReactIntroduction />}></Route>
                        <Route path="/class-intro" element={<ClassIntro/>}></Route>
                        <Route path="/class-jsx" element={<ClassComponentJSX/>}></Route>
                        <Route path="/class-props" element={<ClassComponentProps name="Ponniah" age="26"/>}></Route>
                        <Route path="/class-state" element={<ClassComponentStates/>}></Route>
                        {/* <Route path="/class-state-toggle" element={<ClassStatesToggle/>}></Route>
                        <Route path="/class-state-increment" element={<ClassStatesIncrement/>}></Route> */}
                        <Route path="/class-events" element={<ClassEvents/>}></Route>
                        <Route path="/class-forms" element={<ClassForms/>}></Route>
                        <Route path="/class-arrays" element={<ClassArrays/>}></Route>
                        <Route path="/functional-intro" element={<FunctionalIntro/>}></Route>
                        <Route path="/functional-jsx" element={<FunctionalComponentJSX/>}></Route>
                        <Route path="/functional-props" element={<FunctionalComponentProps name="Ponniah" age="26"/>}></Route>
                        <Route path="/functional-state" element={<FunctionalComponentStates/>}></Route>
                        {/* <Route path="/functional-state-toggle" element={<FunctionStatesToggle/>}></Route>
                        <Route path="/functional-state-increment" element={<FunctionalStatesIncrement/>}></Route>
                        <Route path="/functional-state-datatypes" element={<FunctionalStateDataTypes/>}></Route> */}
                        <Route path="/functional-events" element={<FunctionEvents/>}></Route>
                        <Route path="/functional-ref" element={<FunctionRef/>}></Route>
                        <Route path="/functional-effect" element={<FunctionalEffects/>}></Route>
                        <Route path="/functional-context" element={<FunctionalUseContext/>}></Route>
                        <Route path="/functional-memo" element={<FunctionalMemo/>}></Route>
                        <Route path="/functional-callback" element={<FunctionalCallback/>}></Route>
                        <Route path="/functional-reducer" element={<FunctionalReducer/>}></Route>
                        <Route path="/functional-custom-hooks" element={<CustomHooks/>}></Route>
                        <Route path="/functional-promise" element={<PromiseFunction/>}></Route>
                        <Route path="/functional-router" element={<FunctionalRouter/>}></Route>
                        <Route path="/functional-forms" element={<FunctionalForms/>}></Route>
                        {/* <Route path="/react-cart-application" component={() => { window.location = 'https://ponniah96.github.io/reactCartApplication/'; return null;} }/> */}
                        <Route path="/npm-commands" element={<NpmCommands />}></Route>
                    </Routes>
                </div> 
            </BrowserRouter>
        </div>        
    )
}
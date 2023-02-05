import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './App.css';
import source from "./reactBasics.pdf"
import Header from "./1.HeaderComponent/1.header";
import Footer from "./2.FooterComponent/1.Footer";
import ClassIntro from "./3.ReactComponent/1.ClassComponent/1.Intro";
import ClassComponentJSX from './3.ReactComponent/1.ClassComponent/2.jsx';
import ClassComponentProps from './3.ReactComponent/1.ClassComponent/3.Props';
import ClassComponentStates from './3.ReactComponent/1.ClassComponent/4.1.StatesIntro';
import ClassStatesToggle from './3.ReactComponent/1.ClassComponent/4.2.StatesToggle';
import ClassStatesIncrement from './3.ReactComponent/1.ClassComponent/4.3.StatesIncrement';
import ClassEvents from './3.ReactComponent/1.ClassComponent/5.Events';
import ClassForms from './3.ReactComponent/1.ClassComponent/7.Forms';
import ClassArrays from './3.ReactComponent/1.ClassComponent/8.Array';


import FunctionalIntro from "./3.ReactComponent/2-FunctionalComponent/1.Intro";
import FunctionalComponentJSX from './3.ReactComponent/2-FunctionalComponent/2.jsx';
import FunctionalComponentProps from './3.ReactComponent/2-FunctionalComponent/3.Props';
import FunctionalComponentStates from './3.ReactComponent/2-FunctionalComponent/4.1.StatesIntro';
import FunctionStatesToggle from './3.ReactComponent/2-FunctionalComponent/4.2.StatesToggle';
import FunctionalStatesIncrement from './3.ReactComponent/2-FunctionalComponent/4.3.StatesIncrement';
import FunctionalStateDataTypes from './3.ReactComponent/2-FunctionalComponent/4.5.StateDataTypes';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <div className='react-app'>        
        <Header />
        <div className='react-app-components'>
          <iframe src={source} width="100%" height="600px" title="React Introduction" /> <hr></hr>
          <ClassIntro /><hr></hr>
          <ClassComponentJSX /><hr></hr>
          <ClassComponentProps name="Ponniah" age="26"/> <hr></hr>
          <ClassComponentStates /> <hr></hr>
          <ClassStatesToggle /> <hr></hr>
          <ClassStatesIncrement /> <hr></hr>
          <ClassEvents /> <hr></hr>
          <ClassForms /> <hr></hr>
          <ClassArrays /> <hr></hr>
          <FunctionalIntro /> <hr></hr>
          <FunctionalComponentJSX /> <hr></hr>
          <FunctionalComponentProps name="Ponniah" age="26"/> <hr></hr>
          <FunctionalComponentStates /> <hr></hr>
          <FunctionStatesToggle /> <hr></hr>
          <FunctionalStatesIncrement /> <hr></hr>
          <FunctionalStateDataTypes /> <hr></hr>
          <FunctionEvents /> <hr></hr>
          <FunctionRef /> <hr></hr>
          <FunctionalEffects /> <hr></hr>
          <FunctionalUseContext /> <hr></hr>
          <FunctionalMemo /> <hr></hr>
          <FunctionalCallback /> <hr></hr>
          <FunctionalForms /> <hr></hr>
          <FunctionalRouter /> <hr></hr>
          <FunctionalReducer /> <hr></hr>
          <CustomHooks /> <hr></hr>
        </div>
        <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

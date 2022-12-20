import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './App.css';
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
import FunctionEvents from './3.ReactComponent/2-FunctionalComponent/5.Events';
import FunctionalForms from './3.ReactComponent/2-FunctionalComponent/7.Forms';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <div className='react-app'>        
        <Header />
        <div className='react-app-components'>
          <ClassIntro />
          <ClassComponentJSX />
          <ClassComponentProps name="Ponniah" age="26"/>
          <ClassComponentStates />
          <ClassStatesToggle />
          <ClassStatesIncrement />
          <ClassEvents />
          <ClassForms />
          <ClassArrays />
          <FunctionalIntro />
          <FunctionalComponentJSX />
          <FunctionalComponentProps name="Ponniah" age="26"/>
          <FunctionalComponentStates />
          <FunctionStatesToggle />
          <FunctionalStatesIncrement />
          <FunctionEvents />
          <FunctionalForms />
        </div>
        <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

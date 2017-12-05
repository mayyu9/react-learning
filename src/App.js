import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRef from './AppRef';
import AppRefCallback from './AppRefCallback';
import AppNestedData from './AppNestedData';
//import PropTypeValidation from './propTypeValidation';
import Data from './mapArrayData';
import HOC from './higherOrderComponents';
//import Compiler from './liveCompiler';

import ChildUtils from './childReactUtils';
import Clone from './Clone';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />
        <AppRef />
        <hr /> <hr />
        <AppRefCallback />
        <hr />
        <AppNestedData />
        <hr / >
        <hr />
        <Data />
        <hr />
        <HOC />
        <hr />
        <p>props children example</p>
        <ChildUtils />
        <hr />
        <p>React clone elements</p>
        <Clone />

      </div>
    );
  }
}

export default App;

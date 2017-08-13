import React, { Component } from 'react';
import logo from '../res/logo.svg';
import '../res/App.css';
import Clock from "../clock/";
import Link from "react-router-dom/es/Link";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <h1>test</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. <br/>
            Good morning
        </p>
          <Clock />
          <button onClick={activateLasers}>Activate Lasers</button>
          <br />
          <a href="#blah" onClick={handleClick}>Click me</a>
          <Link to={'/welcome'}>Welcome.</Link>
      </div>
    );
  }
}

function activateLasers() {
    alert("pew pew");
}

function handleClick(e) {
    e.preventDefault();
    alert("Hello");
}

export default App;

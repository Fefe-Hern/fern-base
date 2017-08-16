import React, {Component} from 'react';
import logo from '../res/logo.svg';
import '../res/components/App.css';
import Clock from "../clock/";
import Link from "react-router-dom/es/Link";

class App extends Component {
    constructor() {
        super();
        this.state = {users: []};
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>test</h1>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload. <br/>
                    Good morning
                </p>
                <Clock/>
                <button onClick={activateLasers}>Activate Lasers</button>
                <br/>
                <a href="#blah" onClick={this.handleClick}>Click me to fetch users</a>
                <Link to={'/userform'}>Create User</Link>
            </div>
        );
    }

    handleClick(e) {
        e.preventDefault();
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({users}))
    }

    /*componentDidUpdate() {
        console.log(this.state.users);
    }*/
}

function activateLasers() {
    alert("pew pew");
}

export default App;

import React, {Component} from 'react';
import logo from '../res/logo.svg';
import '../res/components/App.css';
import Clock from "../clock/";
import Link from "react-router-dom/es/Link";

import {Button, Container, Header, Icon, Menu, Segment, Visibility} from 'semantic-ui-react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className="App">
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 700, padding: '1em 0em' }}
                        vertical
                    >
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item as='a' active>Home</Menu.Item>
                                <Menu.Item as='a'>Work</Menu.Item>
                                <Menu.Item as='a'>Company</Menu.Item>
                                <Menu.Item as='a'>Careers</Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted>Log in</Button>
                                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                                </Menu.Item>
                            </Menu>
                        </Container>

                        <Container text>
                            <Header
                                as='h1'
                                content='Imagine-a-Company'
                                inverted
                                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
                            />
                            <Header
                                as='h2'
                                content='Do whatever you want when you want to.'
                                inverted
                                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                            />
                            <Button primary size='huge'>
                                Get Started
                                <Icon name='right arrow' />
                            </Button>
                        </Container>
                        <div className="App-header">
                            <h1>test</h1>
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h2>Welcome to React</h2>
                        </div>
                    </Segment>

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

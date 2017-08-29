/**
 * Created by Fefe on 8/11/2017.
 */
import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./Routes";
import '../res/components/Layout.css';
//import Link from "react-router-dom/es/Link";

import {
    Button,
    Container,
    Menu,
    Segment,
    Visibility
} from 'semantic-ui-react';

// header
const FixedMenu = () => (
    <Menu fixed='top' size='large'>
        <Container>
            <Menu.Item as='a' active>Home</Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item className='item'>
                    <Button as='a'>Log in</Button>
                </Menu.Item>
                <Menu.Item>
                    <Button as='a' primary>Sign Up</Button>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
);

class Layout extends Component {
    state = {};

    hideFixedMenu = () => this.setState({ visible: false });
    showFixedMenu = () => this.setState({ visible: true });

    render() {
        const { visible } = this.state;

        return (
                <div className="app-container">
                        { visible ? <FixedMenu /> : null}


                        <main>
                        <BrowserRouter>
                            <Routes/>
                        </BrowserRouter>
                        </main>
                        <footer>
                            <p></p>
                        </footer>
                </div>
        );
    }
}

/*const navItems = [
    {
        exact: true,
        label: "Home",
        to: "/",
        key: "0"
    },
    {
        label: "About",
        to: "welcome",
        key: "1"
    }
];*/

export default Layout;

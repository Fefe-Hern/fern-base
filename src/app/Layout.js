/**
 * Created by Fefe on 8/11/2017.
 */
import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./Routes";
import '../res/components/Layout.css';
//import Link from "react-router-dom/es/Link";


class Layout extends Component {
    render() {
        return (
                <div className="app-container">
                        <header>
                        </header>
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

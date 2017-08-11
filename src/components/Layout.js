/**
 * Created by Fefe on 8/11/2017.
 */
import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Sidebar from "./Sidebar";
import App from "./App";


class Layout extends Component {
    render() {
        return (
            <div className="app-container">
                <Sidebar />
                <header>
                </header>
                <div className="app-content">
                    <Route path="/" component={App} />
                </div>
                <footer>
                    <p>This is a demo app.</p>
                </footer>
            </div>
        );
    }
}

export default Layout;
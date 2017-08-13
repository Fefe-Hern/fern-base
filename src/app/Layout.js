/**
 * Created by Fefe on 8/11/2017.
 */
import React, {Component} from 'react';
import Sidebar from "./Sidebar";
import Routes from "./Routes";


class Layout extends Component {
    render() {
        return (
            <div className="app-container">
                <Sidebar />
                <header>
                </header>
                <main>
                    <Routes />
                </main>
                <footer>
                    <p>This is a demo app.</p>
                </footer>
            </div>
        );
    }
}

export default Layout;
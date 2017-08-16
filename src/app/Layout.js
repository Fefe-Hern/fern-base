/**
 * Created by Fefe on 8/11/2017.
 */
import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./Routes";
import '../res/components/Layout.css';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import Link from "react-router-dom/es/Link";


class Layout extends Component {
    render() {
        return (
                <div className="app-container">
                <BrowserRouter>
                    <NavigationDrawer
                        desktopDrawerType={NavigationDrawer.DrawerTypes.CLIPPED}
                        drawerTitle={"Test"}
                        toolbarTitle={"Hello World!"}
                        navItems={navItems.map(props => {
                                return(<Link key={props.key} to={props.to}>{props.label}</Link>);
                        })}>
                        <header>
                        </header>
                        <main>
                            <Routes/>
                        </main>
                        <footer>
                            <p></p>
                        </footer>
                    </NavigationDrawer>
                </BrowserRouter>
                </div>
        );
    }
}

const navItems = [
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
];

export default Layout;

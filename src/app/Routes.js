import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from "./App";
import Welcome from "../welcome/index";
import NotFound from "./NotFound";

class Routes extends React.Component {
    render () {
        return (
            <div className="app-content">
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/welcome" component={Welcome} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default Routes;
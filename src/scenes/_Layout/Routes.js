import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from "../Home/App";
import NotFound from "../Error/NotFound";

class Routes extends React.Component {
    render () {
        return (
            <div className="app-content">
                <Switch>
                    <Route exact path="/" component={App} />
                    {/* <Route path="/userform" component={UserForm} /> */}
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default Routes;
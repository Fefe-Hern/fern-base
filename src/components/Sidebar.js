/**
 * Created by Fefe on 8/11/2017.
 */

import React from "react";

export default class Sidebar extends React.Component {
    render() {
        return(
            <div className="sidebar">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand"><a href="#blah">Home</a></li>
                    <li><a href="#blah">Another link</a></li>
                    <li><a href="#blah">Next link</a></li>
                    <li><a href="#blah">Last link</a></li>
                </ul>
            </div>
        );
    }
}
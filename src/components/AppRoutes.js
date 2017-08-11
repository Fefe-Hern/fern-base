/**
 * Created by Fefe on 8/11/2017.
 */
import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import Layout from "./Layout";

export default class AppRoutes extends Component {
    render() {
        return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
        );
    }
}
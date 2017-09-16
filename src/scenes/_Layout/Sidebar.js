/**
 * Created by Fefe on 8/11/2017.
 */

import React from "react";
import {Sidebar, Menu} from 'semantic-ui-react';

export default class Side extends React.Component {
    render() {
        return(
                <Sidebar as={Menu} animation="push" width="thin" visible={true} vertical inverted>
                    <Menu.Item>Test</Menu.Item>
                    <Menu.Item><p>Test</p></Menu.Item>
                    <Menu.Item><p>Test</p></Menu.Item>
                    <Menu.Item><p>Test</p></Menu.Item>
                </Sidebar> 
        );
    }
}
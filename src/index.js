import React from 'react';
import ReactDOM from 'react-dom';
import './resources/style.css';
import registerServiceWorker from './registerServiceWorker';
import Layout from "./scenes/_Layout/Layout";

const startingElement = <Layout />;

ReactDOM.render(startingElement, document.getElementById('root'));
registerServiceWorker();

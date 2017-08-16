import React from 'react';
import ReactDOM from 'react-dom';
import './res/style.css';
import registerServiceWorker from './registerServiceWorker';
import Layout from "./app/Layout";

const startingElement = <Layout />;

ReactDOM.render(startingElement, document.getElementById('root'));
registerServiceWorker();

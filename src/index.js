import React from 'react';
import ReactDOM from 'react-dom';
import './res/index.css';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from "./app/AppRouter";

const startingElement = <AppRouter />;

ReactDOM.render(startingElement, document.getElementById('root'));
registerServiceWorker();

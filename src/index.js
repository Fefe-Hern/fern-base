import React from 'react';
import ReactDOM from 'react-dom';
import './res/index.css';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from "./components/AppRoutes";

const element = <AppRoutes />;

ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();

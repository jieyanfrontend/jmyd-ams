import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './pages/';
import globalStore from './store';
import history from './history';
let mount = document.getElementById('root');

let render = Root => {
    ReactDOM.render(
        <Router history={history}>
            <Root globalStore={globalStore} history={history}/>
        </Router>,
        mount
    )
};
render(App);



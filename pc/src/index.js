import 'es6-promise/auto';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router} from 'react-router-dom';
import App from './pages/';
let mount = document.getElementById('root');
let render = Root => {
    ReactDOM.render(
        <Router>
            <Root/>
        </Router>,
        mount
    )
};
render(App);
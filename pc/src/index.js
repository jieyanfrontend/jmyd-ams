import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router} from 'react-router-dom';
import App from './pages/';
import globalStore from './store';
let mount = document.getElementById('root');

let render = Root => {
    ReactDOM.render(
        <Router>
            <Root globalStore={globalStore}/>
        </Router>,
        mount
    )
};
render(App);



import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import { Router } from 'react-router-dom';
import App from './pages/';
import globalStore from './store';
import history from './history';
let mount = document.getElementById('root');

let render = Root => {
    ReactDOM.render(
        <Router history={history}>
            <LocaleProvider locale={zh_CN}>
                <Root globalStore={globalStore} history={history}/>    
            </LocaleProvider>  
        </Router>,
        mount
    )
};
render(App);



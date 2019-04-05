import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import IncludeHeader from './includes/header';
const { Header, Content } = Layout;
import style from './index.css';
import mock from './mock';
class App extends Component {
    render() {
        let { globalStore } = this.props;
        let pathName = this.props.history.location.pathname;
        // console.log(pathName !== '/login' && sessionStorage.getItem('username'))
        // let unLogin = pathName === '/login' || (pathName !== '/login' && sessionStorage.getItem('username'));
        // unLogin ? 
        return (<Layout className={style.layout}>
            <Header className={style.header}>
                <IncludeHeader />
            </Header>
            <Content className={style.content}>
                <div className={style.container}>
                    <Switch>
                        <Route path='/task' render={() => <WrapperComponent globalStore={globalStore} Comp={import('./task/task')} name='task' />} />
                        <Route path='/setting' render={() => <WrapperComponent globalStore={globalStore} Comp={import('./setting/setting')} name='setting'/>}/>
                        {/* <Route path='/batch_process' render={() => <WrapperComponent globalStore={globalStore} Comp={import('./batch_process/batch_process')} name='batch_process'/>}/> */}
                        {/* <Route path='/process/:id/:wf_id' render={({match}) => <WrapperComponent match={match} globalStore={globalStore} Comp={import('./process/process')} name='process'/>}/> */}
                        {/* <Route path='/login' render={() => <WrapperComponent globalStore={globalStore} Comp={import('./login/login')} name='login'/>}/> */}
                        <Route render={() => <WrapperComponent globalStore={globalStore} Comp={import('./task/task')} />} />
                    </Switch>
                </div>
            </Content>
        </Layout>
        )
        // : (
        //     <Redirect to='/login'/>
        // )
    }
}
class WrapperComponent extends React.Component {
    state = {
        Comp: null
    };
    componentDidMount() {
        this.updateComp(this.props);
    }
    render() {
        let Component = this.state.Comp;
        let { Comp, ...other } = this.props;
        return Component ? <Component {...other} /> : Component;
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.Comp !== this.props.Comp) {
            this.updateComp(nextProps);
        }
    }
    updateComp = (props) => {
        props.Comp.then(C => {
            this.setState({
                Comp: C.default
            })
        });
    }
}
export default hot(module)(App);

import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import IncludeHeader from './includes/header';
const { Header, Content } = Layout;
import style from './index.css';
import mock from './mock';
class App extends Component {
    render(){
        let { globalStore } = this.props;
        return (
            <Layout className={style.layout}>
                <Header className={style.header}>
                    <IncludeHeader/>
                </Header>
                <Content className={style.content}>
                    <div className={style.container}>
                        <Switch>
                          <Route path='/task' render={() => <WrapperComponent globalStore={globalStore} Comp={import('./task/task')} name='task'/>}/>
                          <Route path='/setting' render={() => <WrapperComponent globalStore={globalStore} Comp={import('./setting/setting')} name='setting'/>}/>
                          <Route path='/batch_process' render={() => <WrapperComponent globalStore={globalStore} Comp={import('./batch_process/batch_process')} name='batch_process'/>}/>
                          <Route path='/process/:id' render={() => <WrapperComponent globalStore={globalStore} Comp={import('./process/process')} name='process'/>}/>
                          <Route path='/login' render={() => <WrapperComponent globalStore={globalStore} Comp={import('./login/login')} name='login'/>}/>
                          <Route path='/detailpage' render={() => <WrapperComponent globalStore={globalStore} Comp={import('./detailpage/detailpage')} name='detailpage'/>}/>
                          <Route path='/batchprocess' render={() => <WrapperComponent Comp={import('./batchprocess/batchprocess')} name='batchprocess'/>}/>
                          <Route path='/cafile' render={() => <WrapperComponent Comp={import('./cafile/cafile')} name='cafile'/>}/>
                          <Route render={() => <WrapperComponent globalStore={globalStore} Comp={import('./task/task')}/>}/>
                        </Switch>
                    </div>
                </Content>
            </Layout>
        )
    }
}
class WrapperComponent extends React.Component{
    state = {
      Comp: null
    };
    componentDidMount(){
        this.updateComp(this.props);
    }
    render(){
        let Comp = this.state.Comp;
      let { globalStore } = this.props;
        return Comp ? <Comp globalStore={globalStore}/> : Comp;
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.Comp !== this.props.Comp){
            this.updateComp(nextProps);
        }
    }
    updateComp = (props) => {
        props.Comp.then(C => {
            this.setState({
                Comp:C.default
            })
        });
    }
}
export default hot(module)(App);

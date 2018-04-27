import React, { Component } from 'react';
// import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import IncludeHeader from './includes/header';
const { Header, Content, Footer } = Layout;
import style from './index.css';
class App extends Component {
    render(){
        return (
            <Layout className={style.layout}>
                <Header className={style.header}>
                    <IncludeHeader/>
                </Header>
                <Content className={style.content}>
                    <div className={style.container}>
                        <Switch>
                            <Route path='/task' render={() => <WrapperComponent Comp={import('./task/task')} name='task'/>}/>
                            <Route path='/setting' render={() => <WrapperComponent Comp={import('./setting/setting')} name='setting'/>}/>
                            <Route path='/batchprocesstask' render={() => <WrapperComponent Comp={import('./batchprocesstask/batchprocesstask')} name='batchprocesstask'/>}/>
                            <Route path='/detail' render={() => <WrapperComponent Comp={import('./detail/detail')} name='detail'/>}/>
                            <Route path='/login' render={() => <WrapperComponent Comp={import('./login/login')} name='login'/>}/>
                            <Route render={() => <WrapperComponent Comp={import('./task/task')}/>}/>
                        </Switch>
                    </div>
                </Content>
                {/*<Footer className={style.footer}>*/}
                    {/*AMS ©2018 Created by 捷雁*/}
                {/*</Footer>*/}
            </Layout>
        )
    }
}
class WrapperComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Comp: null
        }
    }
    componentDidMount(){
        this.updateComp(this.props);
    }
    render(){
        let Comp = this.state.Comp;
        return Comp ? <Comp/> : Comp;
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
let rootComponent = App;
// if(module.hot){
//     rootComponent = hot(module)(App);
// }
export default rootComponent;
import React, { Component } from 'react';
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import style from './header.css';
class Header extends Component{
    render(){
        return (
            <div className={style.header}>
                <div className={style.logo}/>
                <div className={style.topbar}>
                    <Menu
                        mode="horizontal"
                        className={style.menu}
                    >
                        <Menu.Item key='task'>
                            <Link to='/task'>AMS工单</Link>
                        </Menu.Item>
                        <Menu.Item key='batchprocesstask'>
                            <Link to='/batchprocesstask'>批量处理业务</Link>
                        </Menu.Item>
                        <Menu.Item key=''>
                            <Link to='/detail'>进入详情页</Link>
                        </Menu.Item>
                        <Menu.Item key='setting'>
                            <Link to='/setting'>设置</Link>
                        </Menu.Item>
                        <Menu.Item key='logout'>
                            <Link to='/login'>退出</Link>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        )
    }
}
export default Header;
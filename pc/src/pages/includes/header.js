import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import style from './header.css';
import menu from './menu';
class Header extends Component{
    render(){
        return (
            <div className={style.header}>
                <div className={style.logo}/>
                <div className={style.topbar}>
                    <Menu
                        mode="horizontal"
                        className={style.menu}
                    >{
                      menu.map(item => (
                          <Menu.Item key={item.title}>
                            <Link to={item.path}>{item.title}</Link>
                          </Menu.Item>))
                    }
                    </Menu>
                </div>
            </div>
        )
    }
}
export default Header;
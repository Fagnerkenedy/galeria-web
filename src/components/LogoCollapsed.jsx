import React from 'react';
import { Link } from 'react-router-dom';
import {
    CameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

import logo from '../img/logo.jpeg';
import logopequena from '../img/logopequena.jpg';

function Imgcollapsed(props) {


    if (!props.statelogo) {
        return (
            <div className="div-logo">
                <a href="/"><img className='logo' alt='logo' src={logo}></img></a>
            </div>
        )
    } else {
        return (
            <div >
                <Menu className="div-logo-collapsed">
                    <SubMenu icon={<CameraOutlined />} className="icone-logo-collapsed">
                        <a href="/"></a>
                    </SubMenu>
                </Menu>
            </div>
        )
    }

}

export default Imgcollapsed;
import '../css/Home.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FolderAddOutlined,
  UnorderedListOutlined,
  CameraOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Imgcollapsed from './LogoCollapsed';
import SubMenu from 'antd/lib/menu/SubMenu';
import ContentPages from '../main/ContentPages';
import AuthContext from '../contexts/auth'

const { Sider, Content } = Layout;

const Home = () => {

  const user = JSON.parse(localStorage.getItem('user'))

  const { logout } = useContext(AuthContext)
  const handleLogout = () => {
    logout();
  }

  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Imgcollapsed statelogo={collapsed}></Imgcollapsed>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['2']}
          defaultOpenKeys={['1']}
        >
          <SubMenu key={1} title='Galeria' icon={<CameraOutlined />}>
            <Menu.Item key={2} icon={<UnorderedListOutlined />}><Link to="/listargaleria">Listar</Link></Menu.Item>
            <Menu.Item key={3} icon={<FolderAddOutlined />}><Link to="/criargaleria">Criar</Link></Menu.Item>
          </SubMenu>
        </Menu>

      </Sider>

      <Layout className="site-layout">

        <Menu
          mode="horizontal"
          theme="white">

          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}

          <SubMenu className='Submenu-Navbar' style={{ marginLeft: 'auto' }} icon={<UserOutlined className="site-form-item-icon" />} title={user.name}>
            <Menu.Item key="setting:1"><Link to="/minhaconta">Minha conta</Link></Menu.Item>
            <Menu.Item onClick={handleLogout} key="setting:4">Sair</Menu.Item>
          </SubMenu>
        </Menu>

        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >

          <ContentPages />

        </Content>
      </Layout>
    </Layout >
  );
};

export default Home;
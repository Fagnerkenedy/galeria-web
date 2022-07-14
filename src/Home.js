import './Home.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FolderAddOutlined,
  UnorderedListOutlined,
  CameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Imgcollapsed from './LogoCollapsed';
import SubMenu from 'antd/lib/menu/SubMenu';
import ContentPage from './main/Content';



const { Header, Sider, Content } = Layout;


const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Imgcollapsed statelogo={collapsed}></Imgcollapsed>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          <SubMenu title='Galeria' icon={<CameraOutlined />}>
            <Menu.Item key={1} icon={<UnorderedListOutlined />}><Link to="/listargaleria">Listar Galeria</Link></Menu.Item>
            <Menu.Item key={2} icon={<FolderAddOutlined />}><Link to="/criargaleria">Criar Galeria</Link></Menu.Item>
          </SubMenu>
        </Menu>

      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >

          <ContentPage />
          
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
import React from 'react';
import { Layout as AntdLayout, } from 'antd';

const { Content } = AntdLayout;

function Layout({ children }) {
  return (
    <>
      <AntdLayout>
        <Content>{children}</Content>
      </AntdLayout>
    </>
  );
}

export default Layout;
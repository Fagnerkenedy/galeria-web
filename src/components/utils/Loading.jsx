import { Layout, Row, Col, Spin } from 'antd';
import React from 'react';

const { Content } = Layout;

const Loading = () => {
    return (
        <Layout className="layout">
            <Content>
                <div className='user-row-cadastro'>
                    <Row>
                        <Col span={24} align="middle"  style={{ paddingTop: "15px", fontSize: '1.5em' }}>
                            <Spin size="large" />
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    )
}

export default Loading
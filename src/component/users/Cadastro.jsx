import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Button, Checkbox, Form, Input, Typography, Divider } from 'antd';
import React from 'react';

import logo from '../../img/logo.jpg';

const { Content } = Layout;
const { Title } = Typography;



const Cadastro =  () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
      return (
        <Layout className="layout">
            <Content>
                <div className='user-row-cadastro'>
                <Row>
                    <Col span={6} offset={9}>
                        <div className='user-content-cadastro'>
                            <Row>
                                <Col span={20} offset={2}>
                                    <Row>
                                        <Col span={16} offset={4}>
                                            <img className='user-cadastro-logo' src={logo} />
                                        </Col>
                                    </Row>
                                    <Title level={3} className='user-cadastro-title'>Faça seu cadastro</Title>
                                    <Divider />
                                    <Form
                                        name="normal_login"
                                        className="login-form"
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={onFinish}
                                    >
                                        <Form.Item
                                            name="username"
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Username!',
                                            },
                                            ]}
                                        >
                                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                        </Form.Item>
                                        <Form.Item
                                            name="password"
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Password!',
                                            },
                                            ]}
                                        >
                                            <Input
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            type="password"
                                            placeholder="Password"
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                            <Checkbox>Remember me</Checkbox>
                                            </Form.Item>

                                            <a className="login-form-forgot" href="">
                                            Forgot password
                                            </a>
                                        </Form.Item>

                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" className="login-form-button">
                                            Log in
                                            </Button>
                                            Or <a href="">register now!</a>
                                        </Form.Item>
                                    </Form>

                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                </div>
            </Content>
        </Layout>
    )
};

export default Cadastro;
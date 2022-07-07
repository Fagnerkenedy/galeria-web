import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
const { Content } = Layout;


const Login =  () => {
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
                                            <Checkbox>Lembrar de mim</Checkbox>
                                            </Form.Item>

                                            <a className="login-form-forgot" href="">
                                            Esqueci a senha
                                            </a>
                                        </Form.Item>

                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" className="login-form-button">
                                            Entrar
                                            </Button>
                                            Ou <a href="/cadastro">Registrar-se</a>
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

export default Login;
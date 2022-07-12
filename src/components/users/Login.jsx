import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Button, Form, Input, Typography, Divider } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.jpeg';
import FooterText from '../utils/FooterText';

const { Content } = Layout;
const { Title } = Typography;


const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <Layout className="layout">
            <Content>
                <div className='user-row-cadastro'>
                    <Row>
                        <Col xs={{ span: 20, offset: 2 }}
                             sm={{ span: 15, offset: 5 }}
                             md={{ span: 10, offset: 7 }}
                             lg={{ span: 6, offset: 9 }}>
                            <div className='user-content-cadastro'>
                                <Row>
                                    <Col span={20} offset={2}>
                                        <Row>
                                            <Col span={22} offset={1}>
                                                <img alt='Logo' className='user-cadastro-logo' src={logo} />
                                            </Col>
                                        </Row>
                                        <Title level={4} className='user-cadastro-title'>Informe os dados de acesso</Title>
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
                                            {/*
                                            <Form.Item>
                                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                                    <Checkbox>Lembrar de mim</Checkbox>
                                                </Form.Item>

                                                <a className="login-form-forgot" href="">
                                                    Esqueci a senha
                                                </a>
                                            </Form.Item>
                                            */}
                                            <Form.Item>
                                                <Button type="primary" htmlType="submit" className="login-form-button cad-button">
                                                    Entrar
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={20} offset={2}>
                                        <div className='text-center'>
                                            Não possui conta? Faça o <Link to="/cadastro">Cadastro</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <FooterText />
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    )
};

export default Login;
import { LockOutlined, UserOutlined, MailOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Layout, Row, Col, Button, Checkbox, Form, Input, Typography, Divider, Space } from 'antd';
import { React, useState } from 'react';
import validator from 'validator'
import userApiURI from '../../Utility/userApiURI';

import logo from '../../img/logo.jpg';

const { Content } = Layout;
const { Title } = Typography;

function Cadastro() {

    const [emailStatus, setEmailStatus] = useState("");
    const [msgEmailStatus, setMsgEmailStatus] = useState("");

    async function checkEmail(e) {
        const email = e.target.value

        setEmailStatus("")
        setMsgEmailStatus("")

        // Email não informado
        if (!email) {
            setEmailStatus("error")
            setMsgEmailStatus("E-mail é obrigatório!")
            return
        }

        // Formato inválido
        if (!validator.isEmail(email)) {
            setEmailStatus("error")
            setMsgEmailStatus("Formato de E-mail inválido")
            return
        }

        // Verifica se existe email cadastrado
        const mail = await userApiURI.checkEmail(email);
        if (mail.data.success == true) {
            setEmailStatus("error")
            setMsgEmailStatus("E-mail já cadastrado!")
            return
        }
    }

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };


    const validateMessages = {
        required: 'Campo obrigatório!',
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
                                            name="cadastro-usuario"
                                            className="login-form"
                                            initialValues={{
                                                remember: true,

                                            }}
                                            validateMessages={validateMessages}
                                            onFinish={onFinish}
                                        >
                                            <Form.Item
                                                name="email"
                                                rules={[
                                                    {
                                                        type: 'email',
                                                        required: true,
                                                    },
                                                ]}
                                                hasFeedback
                                                validateStatus={emailStatus}
                                                help={msgEmailStatus}
                                            >
                                                <Input autoFocus prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-mail" onBlur={(e) => { checkEmail(e) }} />
                                            </Form.Item>
                                            <Form.Item
                                                name="username"
                                                rules={[
                                                    {
                                                        required: true,
                                                        //message: 'Please input your Username!',
                                                    },
                                                ]}
                                            >
                                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nome" />
                                            </Form.Item>
                                            <Form.Item
                                                name="sobrenome"
                                                rules={[
                                                    {
                                                        required: true,
                                                        //message: 'Please input your Last Name!',
                                                    },
                                                ]}
                                            >
                                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Sobrenome" />
                                            </Form.Item>
                                            <Form.Item
                                                name="password"
                                                rules={[
                                                    {
                                                        required: true,
                                                        //message: 'Please input your Password!',
                                                    },
                                                ]}
                                            >
                                                <Input.Password
                                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                                    type="password"
                                                    placeholder="Senha"
                                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                name="password2"
                                                rules={[
                                                    {
                                                        required: true,
                                                        //message: 'Please input your Password!',
                                                    },
                                                ]}
                                            >
                                                <Input.Password
                                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                                    type="password"
                                                    placeholder="Repita a Senha"
                                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                                />
                                            </Form.Item>
                                            
                                            <Form.Item 
                                                name="nomesite"
                                                rules={[
                                                    {
                                                        required: true,
                                                        //message: 'Please input your Password!',
                                                    },
                                                ]}>
                                                <Input addonAfter=".galeriapro.com.br" placeholder='meusite'/>
                                            </Form.Item>
                                            <Form.Item>
                                                <Button type="primary" htmlType="submit" className="login-form-button cad-button">
                                                    Cadastrar
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={20} offset={2}>
                                        <div className='text-center'>
                                            Já possui conta? Faça o <a href="/login">Login!</a>
                                        </div>
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
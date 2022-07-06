import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row, Col, Layout } from 'antd';
import React from 'react';

const { Content } = Layout;
const DemoBox = (props) => <p className={`height-${props.value}`}>{props.children}</p>;

const Cadastro = () => (

    <Row justify="space-around" align="middle">
        <Col span={4}>
            <DemoBox value={100}>col-4</DemoBox>
        </Col>
    </Row>

);

export default Cadastro;
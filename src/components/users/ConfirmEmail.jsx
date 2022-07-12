import { Button, Result } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmedEmail = () => (
  <Result
    status="success"
    title="E-mail confirmado com sucesso!"
    subTitle="A plataforma te espera! Seja bem vindo(a)!"
    extra={<Link to='/login'><Button type="primary">Login</Button></Link>}
  />
);

export default ConfirmedEmail;
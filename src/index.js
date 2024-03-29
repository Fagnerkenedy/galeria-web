import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';

import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <ConfigProvider locale={ptBR}>
      <App />
    </ConfigProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
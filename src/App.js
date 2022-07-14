import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.less';
import './style.less'

import Cadastro from './components/users/Cadastro'
import Login from "./components/users/Login"
import PageNotFound from "./PageNotFound"
import ConfirmedEmail from './components/users/ConfirmEmail';
import Aplicacao from './Aplicacao';
import Home from './Home';

function App() {
  return (
  <div className="App">
    <BrowserRouter >
        <Routes >
          <Route exact path="/" element={<Home />}>
            <Route path="/aplicacao" element={<Aplicacao />}/>
          </Route>
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/emailconfirm" element={<ConfirmedEmail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  </div>
)
}

export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.less';
import './style.less'

import Home from './Home'
import Cadastro from './components/users/Cadastro'
import Login from "./components/users/Login"
import PageNotFound from "./PageNotFound"

function App() {
  return (
  <div className="App">
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  </div>
)
}

export default App;
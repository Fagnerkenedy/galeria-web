import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Home from "./Home"
import Cadastro from "./component/users/Cadastro"
import Layout from "./component/layout"
import PageNotFound from "./PageNotFound"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cadastro" element={<Cadastro />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
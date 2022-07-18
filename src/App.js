import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.less';
import './style.less'
import RoutesPage from './main/RoutesPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <RoutesPage />
      </BrowserRouter>
    </div>
  )
}

export default App;
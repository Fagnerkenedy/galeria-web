import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from '../Home';
import ListarGaleria from '../components/galeria/listar'
import CriarGaleria from '../components/galeria/index'
import Cadastro from '../components/users/Cadastro'
import Login from "../components/users/Login"
import ConfirmedEmail from '../components/users/ConfirmEmail';
import PageNotFound from "../PageNotFound"

import AuthContext, { AuthProvider } from '../contexts/auth'
import Loading from '../components/utils/Loading';

function RoutesPage() {

  const Private = ({children}) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <Loading />
    }

    if(!authenticated) {
      return <Navigate to="/login" />
    }

    return children;
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Private><Home /></Private>} >
            <Route path="/listargaleria" element={<ListarGaleria />} />
            <Route path="/criargaleria" element={<CriarGaleria />} />
          </Route>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />

          <Route path="/cadastro/confirmacao/:uuid" element={<ConfirmedEmail />}  />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default RoutesPage;
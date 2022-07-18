import React              from 'react';
import { Route, Routes }  from "react-router-dom";

import Home               from '../Home';
import ListarGaleria      from '../components/galeria/listar'
import CriarGaleria       from '../components/galeria/index'
import Cadastro           from '../components/users/Cadastro'
import Login              from "../components/users/Login"
import ConfirmedEmail     from '../components/users/ConfirmEmail';
import PageNotFound       from "../PageNotFound"

function RoutesPage() {
  return (
    <div>

      <Routes >
        <Route path="/" element={<Home />} >
          <Route exact path="/listargaleria" element={<ListarGaleria />} />
          <Route exact path="/criargaleria" element={<CriarGaleria />} />
        </Route>
        <Route exact path="/cadastro" element={<Cadastro />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/emailconfirm" element={<ConfirmedEmail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </div>
  )
}

export default RoutesPage;
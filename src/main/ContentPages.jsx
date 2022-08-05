import React from "react";
import { Route, Routes } from "react-router-dom";

import ListarGaleria from '../components/galeria/listar'
import CriarGaleria from '../components/galeria/index'
import MinhaConta from '../components/users/MyAccount'

export default props => (
    <main>
        <Routes>
            <Route exact path="/" element={<ListarGaleria />} />
            <Route exact path="/listargaleria" element={<ListarGaleria />} />
            <Route exact path="/criargaleria" element={<CriarGaleria />} />
            <Route exact path="/minhaconta" element={<MinhaConta />} />
        </Routes>
    </main>
)
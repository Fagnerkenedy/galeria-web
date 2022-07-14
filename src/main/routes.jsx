import React from "react";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import ListarGaleria from '../components/galeria/listar'
import CriarGaleria from '../components/galeria/index'
import PageNotFound from "../PageNotFound";

export default props => (
    <BrowserRouter >
        <Routes history={HashRouter}>
            <Route path="/aplicacao/listargaleria" element={<ListarGaleria/>} />
            <Route path="/aplicacao/criargaleria" element={<CriarGaleria/>} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
)
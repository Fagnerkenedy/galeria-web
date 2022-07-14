import React from "react";
import { Route, Routes } from "react-router-dom";

import ListarGaleria from '../components/galeria/listar'
import CriarGaleria from '../components/galeria/index'
import PageNotFound from "../PageNotFound";

export default props => (
    <main>
            <Routes>
                <Route exact path="/listargaleria" element={<ListarGaleria />} />
                <Route exact path="/criargaleria" element={<CriarGaleria />} />
                <Route exact path="*" element={<PageNotFound />} />
            </Routes>
    </main>
)
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Menu from "./components/Menu";

import Principal from "./pages/principal";
import Detalhes from "./pages/detalhes";
import Login from "./pages/login";
import Contato from "./pages/contato";
import Sobre from "./pages/Sobre";

const Router = () => (
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/detalhes" element={<Detalhes />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
)

export default Router;
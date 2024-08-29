import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicial from './components/Inicial';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Principal from './components/Principal';
import GerarRelatorio from './components/GerarRelatorio';
import Periodos from './components/Periodos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/gerarrelatorio" element={<GerarRelatorio />} />
        <Route path="/periodos" element={<Periodos />} />
      </Routes>
    </Router>
  );
}

export default App;

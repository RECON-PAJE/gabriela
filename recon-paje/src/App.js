import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicial from './components/Inicial';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Principal from './components/Principal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/principal" element={<Principal />} />
      </Routes>
    </Router>
  );
}

export default App;

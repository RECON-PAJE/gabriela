import React, { useEffect } from "react";
import { Link } from 'react-router-dom'; 
import '../css/inicial.css'; 

function Inicial() {
  useEffect(() => {
    document.body.style.backgroundColor = 'rgb(0, 83, 134)';

    return () => {
      document.body.style.backgroundColor = '';
    }
  }, []);

  return (
    <div id="container-geral-inicial">
      <main id="main-inicial">
        <div id="icone-inicial">
          <img src="/img/cadastro-login.svg" alt="ícone-usuário" />
        </div>
        <div id="botao">
          <Link to="/login">Entrar</Link>
        </div>
        <div id="botao">
          <Link to="/cadastro">Cadastrar</Link>
        </div>
      </main>
      <footer>
        <div id="imagem">
          <img src="/img/branco-horizontal-ufc.png" alt="logo" />
        </div>
      </footer>
    </div>
  );
}

export default Inicial;
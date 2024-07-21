import React from 'react';
import '../css/inicial.css';

function Cadastro() {
    return (
      <div id="container-geral">
        <main>
          <div id="icone">
            <img src="/img/cadastro-login.svg" alt="ícone-usuário" />
          </div>
          <div id="form-container">
            <form>
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" />
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" />
              <input type="submit" value="Cadastrar" />
            </form>
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
  
  export default Cadastro;
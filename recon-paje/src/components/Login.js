import React, { useEffect } from "react";
import '../css/inicial.css';

function Login() {
  useEffect(() => {
    document.body.style.backgroundColor = 'rgb(0, 83, 134)';

    return () => {
      document.body.style.backgroundColor = '';
    }
  }, []);

  return (
    <div id="container-geral-inicial">
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
            <input type="submit" value="Entrar" />
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

export default Login;

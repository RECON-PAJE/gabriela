import React, { useEffect } from "react";
import "../css/principal.css";

function Principal() {
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(217, 217, 217)";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <header id="menu">
        <div className="funcional">
          <img src="/img/user-check.svg" alt="ícone-de-usuário" />
          <a href="#">Consultar saldo</a>
        </div>
        <div className="funcional">
          <img src="/img/file-text.svg" alt="ícone-de-relatório" />
          <a href="#">Gerar relatório</a>
        </div>
        <div className="funcional">
          <img src="/img/Vector.svg" alt="ícone-de-gráfico" />
          <p>10 Acessos</p>
        </div>
      </header>
      <main id="container-geral-principal">
        <div id="container-reconhecimento">
          <div id="container-imagem">
            <img
              src="/img/reconhecimento_facial.jpg"
              alt="imagem-ilustrativa-reconhecimento-facial"
            />
          </div>
          <div id="mensagem-aviso">
            <span>Acesso registrado com sucesso!</span>
          </div>
        </div>
        <div id="historico">
          <div id="pag-seta">
            <img
              src="/img/anterior.png"
              alt="icone-seta-esquerda"
            />
          </div>
          <table>
            <thead>
              <tr>
                <th>nº do cartão</th>
                <th>CPF</th>
                <th>nome</th>
                <th>saldo</th>
                <th>data/hora</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>220****681</td>
                <td>123********01</td>
                <td>Gabriela Moura Silva</td>
                <td>3 crédito(s)</td>
                <td>20/06 - 11:45</td>
              </tr>
              <tr>
                <td>220****681</td>
                <td>123********01</td>
                <td>Gabriela Moura Silva</td>
                <td>3 crédito(s)</td>
                <td>20/06 - 11:45</td>
              </tr>
              <tr>
                <td>220****681</td>
                <td>123********01</td>
                <td>Gabriela Moura Silva</td>
                <td>3 crédito(s)</td>
                <td>20/06 - 11:45</td>
              </tr>
              <tr>
                <td>220****681</td>
                <td>123********01</td>
                <td>Gabriela Moura Silva</td>
                <td>3 crédito(s)</td>
                <td>20/06 - 11:45</td>
              </tr>
              <tr>
                <td>220****681</td>
                <td>123********01</td>
                <td>Gabriela Moura Silva</td>
                <td>3 crédito(s)</td>
                <td>20/06 - 11:45</td>
              </tr>
              <tr>
                <td>220****681</td>
                <td>123********01</td>
                <td>Gabriela Moura Silva</td>
                <td>3 crédito(s)</td>
                <td>20/06 - 11:45</td>
              </tr>
              <tr>
                <td>220****681</td>
                <td>123********01</td>
                <td>Gabriela Moura Silva</td>
                <td>3 crédito(s)</td>
                <td>20/06 - 11:45</td>
              </tr>
            </tbody>
          </table>
          <div id="pag-seta">
            <img
              src="/img/posterior.png"
              alt="icone-seta-direita"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Principal;

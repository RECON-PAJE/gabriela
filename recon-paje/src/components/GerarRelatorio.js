import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/gerar-relatorio.css";

function GerarRelatorio() {
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(193, 193, 193)";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <header id="menu-relatorio">
        <div className="funcional-relatorio">
          <img src="/img/periodos.svg" alt="ícone-de-calendario" />
          <Link to="#">Períodos</Link>
        </div>
        <div className="funcional-relatorio">
          <img src="/img/exportar.svg" alt="ícone-de-download" />
          <Link to="#">Exportar</Link>
        </div>
      </header>
      <main id="container-geral-relatorio">
        <div id="titulo">
          <h2>Relatório Atual</h2>
        </div>
        <div id="historico-relatorio">
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
              <tr>
                <td>220****681</td>
                <td>123********01</td>
                <td>Gabriela Moura Silva</td>
                <td>3 crédito(s)</td>
                <td>20/06 - 11:45</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="infos">
          <div id="pagina">
            <span>Página 1/5</span>
          </div>
          <div id="atualizacao">
            <span>ÚLTIMA ATUALIZAÇÃO - 12:00</span>
          </div>
        </div>
      </main>
    </>
  );
}

export default GerarRelatorio;

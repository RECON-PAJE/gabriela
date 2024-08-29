import React from "react";
import { Link } from "react-router-dom";
import "../css/periodos.css";

const Periodos = () => {
  return (
    <div>
      <header id="menu-periodos">
        <div className="input-container">
          <input type="date" />
          <img src="/img/pesquisa.svg" alt="Ícone de pesquisa" />
        </div>
        <div className="home-periodos">
          <Link to="/principal">
            <img src="/img/home-white.svg" alt="Ícone de home" />
          </Link>
        </div>
      </header>
      <main id="container-geral-periodos">
        <div id="titulo">
          <h2>Prévia relatório 31/08/2024</h2>
        </div>
        <div id="historico-periodos">
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
              {Array.from({ length: 11 }).map((_, index) => (
                <tr key={index}>
                  <td>220****681</td>
                  <td>123********01</td>
                  <td>Gabriela Moura Silva</td>
                  <td>3 crédito(s)</td>
                  <td>20/06 - 11:45</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button>Baixar</button>
      </main>
    </div>
  );
};

export default Periodos;

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/gerar-relatorio.css";

function GerarRelatorio() {
  const location = useLocation();
  const historico = location.state?.historico || [];

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
          <Link to="/periodos">Períodos</Link>
        </div>
        <div className="funcional-relatorio">
          <img src="/img/exportar.svg" alt="ícone-de-download" />
          <Link to="#">Exportar</Link>
        </div>
        <div id="home-relatorio">
          <Link to="/principal">
            <img src="/img/home-white.svg" alt="Ícone de home" />
          </Link>
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
              {historico.length > 0 ? (
                historico.slice(0, 10).map((item, index) => (
                  <tr key={index}>
                    <td>{item.cartao}</td>
                    <td>{item.cpf}</td>
                    <td>{item.nome}</td>
                    <td>{item.saldo}</td>
                    <td>{item.dataHora}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">Nenhum dado disponível</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div id="infos">
          <div id="pagina">
            <span>Página 1/1</span>
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
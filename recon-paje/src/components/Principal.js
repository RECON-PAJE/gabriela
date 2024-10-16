import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/principal.css";

function Principal() {
  const [mostrarInput, setMostrarInput] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [dadosPorPagina] = useState(10);
  const [historico, setHistorico] = useState([
    {
      cartao: "220****681",
      cpf: "123********01",
      nome: "Gabriela Moura Silva",
      saldo: "3 crédito(s)",
      dataHora: "20/06 - 11:45",
    },
    {
      cartao: "220****681",
      cpf: "123********01",
      nome: "Nelson Felipe Anrade Araújo",
      saldo: "3 crédito(s)",
      dataHora: "20/06 - 11:45",
    },
    {
      cartao: "220****681",
      cpf: "123********01",
      nome: "Sofia Soares Cavalcante",
      saldo: "3 crédito(s)",
      dataHora: "20/06 - 11:45",
    },
    {
      cartao: "220****681",
      cpf: "123********01",
      nome: "José Henrique Viana Santos",
      saldo: "3 crédito(s)",
      dataHora: "20/06 - 11:45",
    },
    {
      cartao: "220****681",
      cpf: "123********01",
      nome: "Pedro Henrique Braga Melo",
      saldo: "3 crédito(s)",
      dataHora: "20/06 - 11:45",
    },
    {
      cartao: "220****681",
      cpf: "123********01",
      nome: "Francisco Douglas Sabóia Araújo Barbosa",
      saldo: "3 crédito(s)",
      dataHora: "20/06 - 11:45",
    },
    {
      cartao: "220****681",
      cpf: "123********01",
      nome: "Gabriela Moura Silva",
      saldo: "3 crédito(s)",
      dataHora: "20/06 - 11:45",
    },
    {
      cartao: "220****681",
      cpf: "123********01",
      nome: "Gabriela Moura Silva",
      saldo: "3 crédito(s)",
      dataHora: "20/06 - 11:45",
    },
    {
      cartao: "220****681",
      cpf: "123********01",
      nome: "Gabriela Moura Silva",
      saldo: "3 crédito(s)",
      dataHora: "20/06 - 11:45",
    },
    {
      cartao: "220****681",
      cpf: "123********01",
      nome: "Gabriela Moura Silva",
      saldo: "3 crédito(s)",
      dataHora: "20/06 - 11:45",
    },
    {
      cartao: "220****681",
      cpf: "123********01",
      nome: "Gabriela Moura Silva",
      saldo: "3 crédito(s)",
      dataHora: "20/06 - 11:45",
    },
  ]);

  const inputRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setMostrarInput(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (mostrarInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [mostrarInput]);

  const handleConsultarSaldoClick = () => {
    setMostrarInput(true);
  };

  useEffect(() => {
    if (videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => {
          console.error("Erro ao acessar a câmera: ", err);
        });
    }
  }, [videoRef]);

  const totalPaginas = Math.ceil(historico.length / dadosPorPagina);
  const dadosPaginaAtual = historico.slice(
    (paginaAtual - 1) * dadosPorPagina,
    paginaAtual * dadosPorPagina
  );

  const mudarPagina = (pagina) => {
    if (pagina >= 1 && pagina <= totalPaginas) {
      setPaginaAtual(pagina);
    }
  };

  return (
    <>
      <header id="menu">
        <div className="funcional">
          <img src="/img/user-check.svg" alt="Ícone de usuário" />
          <a href="#" onClick={handleConsultarSaldoClick}>
            Consultar saldo
          </a>
        </div>
        <div className="funcional">
          <img src="/img/file-text.svg" alt="Ícone de relatório" />
          <Link to="/gerarrelatorio" state={{ historico }}>
            Gerar relatório
          </Link>
        </div>
        <div className="funcional">
          <img src="/img/Vector.svg" alt="Ícone de gráfico" />
          <p>10 Acessos</p>
        </div>
      </header>
      <div
        className="input-container"
        style={{ display: mostrarInput ? "block" : "none" }}
      >
        <input type="text" placeholder="Insira uma matrícula" ref={inputRef} />
        <img src="/img/pesquisa.svg" alt="Ícone" />
      </div>
      <main id="container-geral-principal">
        <div id="container-reconhecimento">
          <div id="container-imagem">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              style={{ width: "100%" }}
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
              alt="Ícone seta esquerda"
              onClick={() => mudarPagina(paginaAtual - 1)}
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
              {dadosPaginaAtual.map((item, index) => (
                <tr key={index}>
                  <td>{item.cartao}</td>
                  <td>{item.cpf}</td>
                  <td>{item.nome}</td>
                  <td>{item.saldo}</td>
                  <td>{item.dataHora}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div id="pag-seta">
            <img
              src="/img/posterior.png"
              alt="Ícone seta direita"
              onClick={() => mudarPagina(paginaAtual + 1)}
            />
          </div>
        </div>
        <div id="paginacao">
          {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(
            (pagina) => (
              <img
                key={pagina}
                src={`/img/${pagina}.png`}
                alt={`Página ${pagina}`}
                className={pagina === paginaAtual ? "pagina-atual" : ""}
                onClick={() => mudarPagina(pagina)}
              />
            )
          )}
        </div>
      </main>
    </>
  );
}

export default Principal;

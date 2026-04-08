import { useState } from "react";
import "./App.css";
import logo from "./assets/tokstok.png";
import fescritorio from "./assets/escritorio.png";
import fgamer from "./assets/gamer.png";
import fcozinha from "./assets/cozinha.png";

export default function App() {
  const CATEGORIA = [
    { nome: "Escritorio" },
    { nome: "Gamer" },
    { nome: "Cozinha" },
  ];
  //Variaveis useStates
  const [nome, setNome] = useState(""); //texto
  const [valor, setValor] = useState(1.0); //texto
  const [estoque, setEstoque] = useState(true); //boolean
  const [foto, setFoto] = useState("");
  const [info, setInfo] = useState("");

  const escritorio = () => {
    setNome("ADJUST");
    setValor(629.9);
    setEstoque(true);
    setFoto(fescritorio);
    setInfo("CADEIRA DE ESCRITÓRIO ADJUST");
  };
  const gamer = () => {
    setNome("EVOLUTION");
    setValor(1200.0);
    setEstoque(false);
    setFoto(fgamer);
    setInfo("CADEIRA GAMER EVOLUTION");
  };
  const cozinha = () => {
    setNome("WISHBONE");
    setValor(1149.0);
    setEstoque(true);
    setFoto(fcozinha);
    setInfo("CADEIRA WISHBONE");
  };

  return (
    <>
      <main>
        <header>
          <img src={logo} alt="Logo Tok&Stok"  />
        </header>

        {/* 1. Conectando as funções aos botões e dando nome a eles */}
        <button onClick={escritorio}>Escritório</button>
        <button onClick={gamer}>Gamer</button>
        <button onClick={cozinha}>Cozinha</button>

        {nome && (
          <div className="div1">
            <img src={foto} alt=""/>
            <h2 id="inf1">{nome}</h2>
            <p id="inf2">{info}</p>
            <p id="inf3">Preço: R${valor.toFixed(2)}</p>

            {/* Lógica extra: mostrar se tem no estoque ou não */}
            <p>{estoque ? "✅ Disponível" : "❌ Indisponível"}</p>
          </div>
        )}
      </main>
    </>
  );
}

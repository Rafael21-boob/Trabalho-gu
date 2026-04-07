import { useState } from 'react'
import './App.css'
import gamer from './assets/'

export default function App() {

  const CATEGORIA = [
    { nome: "Escritorio"},
    { nome: "Gamer"},
    { nome: "Ergonomica"},
  ];
  //Variaveis useStates
  const [nome, setNome] = useState(""); //texto
  const [valor, setValor] = useState(1.0); //texto
  const [estoque, setEstoque] = useState(true); //boolean
 

  const escritorio= () => {
    setNome("Escritorio");
    setValor(500.00)
    setEstoque(true)
  }
  const gamer= () => {
    setNome("Gamer");
    setValor(500.00)
    setEstoque(false)
  }
  const escritorio= () => {
    setNome("Escritorio");
    setValor(500.00)
    setEstoque(true)
  }

  const curar = () => {
    setHp(100);
    setVivo(true);
  }

  const pct = hp/100;

  
  return (
    <>
      <main>
        <section>
          
          <h1>RPG useStates</h1>
          <div className="thumb">
           
          </div>
          
          <div className="status">
            <p>Status</p>
            <p>Vivo (boolean)</p>
            
          </div>

          <p id='pontosVida'>Pontos de vida (HP) {hp}/100</p>
          <div className="barra" style={{background: corBarra}}>
          </div>

          <button 
            className='BTcura'
            
          >Receber Dano</button>
          
          <button 
            className='BTcura'
            onClick={curar} 
          >Curar</button>
          
          <div className="classes">
            <button onClick={() => setClasse(CLASSES[0])}>🧙‍♂️ Cadeira</button>
            <button onClick={() => setClasse(CLASSES[1])}>⚔️ Guerreiro</button>
            <button onClick={() => setClasse(CLASSES[2])}>🏹 Arqueiro</button>
            <button onClick={() => setClasse(CLASSES[3])}>➕ Curandeiro</button>
          </div>

        </section>
      </main>
    </>
  )
}


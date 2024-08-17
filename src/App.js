import React, { useState } from 'react';
import './App.css'; // Importando estilos

function App() {
  // Estados para altura, peso e resultado
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  // Função para calcular o IMC
  const calcularIMC = () => {
    if (altura && peso) {
      const alturaEmMetros = altura / 100;
      const imc = peso / (alturaEmMetros * alturaEmMetros);
      let classificacao = '';

      if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
      } else if (imc < 24.9) {
        classificacao = 'Peso normal';
      } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
      } else {
        classificacao = 'Obesidade';
      }

      setResultado({ imc: imc.toFixed(2), classificacao });
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calcularIMC();
        }}
      >
        <div>
          <label htmlFor="altura">Altura (em cm):</label>
          <input
            type="number"
            id="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="peso">Peso (em kg):</label>
          <input
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      {resultado && (
        <div>
          <h2>Resultado:</h2>
          <p>IMC: {resultado.imc}</p>
          <p>Classificação: {resultado.classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;

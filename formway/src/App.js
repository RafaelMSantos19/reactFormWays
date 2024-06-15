import './App.css';
import React, { useState, useEffect } from 'react';
import Questionario from './Questionario';

function App() {
  const [showQuestionario, setShowQuestionario] = useState(false);
  const [rota, setRota] = useState('');
  const [escolha, setEscolha] = useState('');
  const [rotaEscolhida, setRotaEscolhida] = useState(false);

  useEffect(() => {
    switch (rota) {
      case 'rota1':
        document.documentElement.style.setProperty('--color-route-bg', 'blue');
        break;
      case 'rota2':
        document.documentElement.style.setProperty('--color-route-bg', 'red');
        break;
      case 'rota3':
        document.documentElement.style.setProperty('--color-route-bg', 'yellow');
        break;
      case 'rota4':
        document.documentElement.style.setProperty('--color-route-bg', 'green');
        break;
      default:
        document.documentElement.style.setProperty('--color-route-bg', 'gray');
    }
  }, [rota]);

  const handleSelectChange = (e) => {
    setRota(e.target.value);
    setRotaEscolhida(false); // Resetar a escolha ao mudar a rota
  };

  const handleButtonClick = () => {
    if (rota) {
      setRotaEscolhida(true);
    } else {
      alert('Por favor, selecione uma rota antes de iniciar.');
    }
  };

  const handleEscolhaChange = (e) => {
    setEscolha(e.target.value);
  };

  const handleStartQuestionario = () => {
    setShowQuestionario(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Color-route">
          <div className="Form-layer">
            {!showQuestionario ? (
              <>
                {!rotaEscolhida ? (
                  <>
                    <h3>Check List Rotas</h3>
                    <div>
                      <label htmlFor="rota">Selecione uma rota:</label>
                      <select id="rota" value={rota} onChange={handleSelectChange}>
                        <option value="">Selecione uma rota</option>
                        <option value="rota1">Rota 1</option>
                        <option value="rota2">Rota 2</option>
                        <option value="rota3">Rota 3</option>
                        <option value="rota4">Rota 4</option>
                      </select>
                    </div>
                    <button onClick={handleButtonClick}>Iniciar agora</button>
                  </>
                ) : (
                  <>
                    <h3>Escolha uma opção:</h3>
                    <div>
                      <select id="escolha" value={escolha} onChange={handleEscolhaChange}>
                        <option value="">Selecione uma opção</option>
                        <option value="A">Opção A</option>
                        <option value="B">Opção B</option>
                        <option value="C">Opção C</option>
                      </select>
                    </div>
                    <button onClick={handleStartQuestionario}>Iniciar Questionário</button>
                  </>
                )}
              </>
            ) : (
              <Questionario escolhaAnterior={escolha} />
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function SelecaoOpcao({ rota }) {
  const [escolha, setEscolha] = useState('');

  const handleEscolhaChange = (e) => {
    setEscolha(e.target.value);
  };

  const handleSubmit = () => {
    if (escolha) {
      // Aqui você pode fazer o que for necessário com a escolha
      console.log(`Rota selecionada: ${rota}, Escolha selecionada: ${escolha}`);
      // Exemplo: enviar para API, armazenar no estado global, etc.
    } else {
      alert('Por favor, selecione uma opção antes de continuar.');
    }
  };

  return (
    <div className="SelecaoOpcao">
      <h3>Seleção de Opção</h3>
      <div>
        <label htmlFor="opcao">Selecione uma opção:</label>
        <select id="opcao" value={escolha} onChange={handleEscolhaChange}>
          <option value="">Selecione uma opção</option>
          <option value="A">Opção A</option>
          <option value="B">Opção B</option>
          <option value="C">Opção C</option>
        </select>
      </div>
      <button onClick={handleSubmit}>Confirmar</button>
    </div>
  );
}

export default SelecaoOpcao;

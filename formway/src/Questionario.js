// Questionario.js

import React from 'react';
import './Questionario.css'; // Importa o arquivo de estilos local

const Questionario = ({ escolhaAnterior }) => {
  return (
    <div className="Form-layer">
      <h3>Equipamento: <br/> {escolhaAnterior}</h3>
      <div className="FormItem">
        <label htmlFor="equipamentoChecado">Equipamento Checado?</label>
        <div>
          <input type="radio" id="sim1" name="equipamentoChecado" value="sim" />
          <label htmlFor="sim1">Sim</label>
          <input type="radio" id="nao1" name="equipamentoChecado" value="nao" />
          <label htmlFor="nao1">Não</label>
        </div>
      </div>

      <div className="FormItem">
        <label htmlFor="pressaoEncontrada">Pressão Encontrada (KG/CM²)</label>
        <input type="text" id="pressaoEncontrada" name="pressaoEncontrada" placeholder="Insira sua resposta" />
      </div>

      <div className="FormItem">
        <label htmlFor="ajusteGaxeta">Realizou Ajuste de Gaxeta?</label>
        <div>
          <input type="radio" id="sim2" name="ajusteGaxeta" value="sim" />
          <label htmlFor="sim2">Sim</label>
          <input type="radio" id="nao2" name="ajusteGaxeta" value="nao" />
          <label htmlFor="nao2">Não</label>
        </div>
      </div>

      <div className="FormItem">
        <label htmlFor="trocarGaxeta">Trocar Gaxeta na Primeira Oportunidade?</label>
        <div>
          <input type="radio" id="sim3" name="trocarGaxeta" value="sim" />
          <label htmlFor="sim3">Sim</label>
          <input type="radio" id="nao3" name="trocarGaxeta" value="nao" />
          <label htmlFor="nao3">Não</label>
        </div>
      </div>

      <div className="FormItem">
        <label htmlFor="motivoTrocaGaxeta">Motivo da Troca da Gaxeta?</label>
        <select id="motivoTrocaGaxeta" name="motivoTrocaGaxeta">
          <option value="">Selecione uma opção</option>
          <option value="finalAjuste">FINAL DE AJUSTE</option>
          <option value="gaxetaIncrustada">GAXETA INCRUSTADA</option>
          <option value="outra">Outra</option>
        </select>
      </div>

      <div className="FormItem">
        <label htmlFor="vazamentoCritico">Vazamento Crítico?</label>
        <div>
          <input type="radio" id="sim4" name="vazamentoCritico" value="sim" />
          <label htmlFor="sim4">Sim</label>
          <input type="radio" id="nao4" name="vazamentoCritico" value="nao" />
          <label htmlFor="nao4">Não</label>
        </div>
      </div>

      <div className="FormItem">
        <label htmlFor="projecaoMancal">Há Projeção no Mancal?</label>
        <div>
          <input type="radio" id="sim5" name="projecaoMancal" value="sim" />
          <label htmlFor="sim5">Sim</label>
          <input type="radio" id="nao5" name="projecaoMancal" value="nao" />
          <label htmlFor="nao5">Não</label>
        </div>
      </div>

      <div className="FormItem">
        <label htmlFor="bombaParada">Bomba Parada (P) ou Funcionando (F)?</label>
        <div>
          <input type="radio" id="parada" name="bombaParada" value="P" />
          <label htmlFor="parada">P</label>
          <input type="radio" id="funcionando" name="bombaParada" value="F" />
          <label htmlFor="funcionando">F</label>
        </div>
      </div>

      <div className="FormItem">
        <label htmlFor="observacoes">Observações</label>
        <textarea id="observacoes" name="observacoes" rows="4" placeholder="Insira sua resposta"></textarea>
      </div>

      <button>Voltar para escolha de rotas</button>
    </div>
  );
};

export default Questionario;

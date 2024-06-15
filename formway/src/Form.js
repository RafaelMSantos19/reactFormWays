import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados para um servidor, por exemplo.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input 
          type="text" 
          id="nome" 
          name="nome" 
          value={formData.nome} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea 
          id="mensagem" 
          name="mensagem" 
          value={formData.mensagem} 
          onChange={handleChange} 
        ></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;

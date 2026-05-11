import { useState } from 'react';
import styles from './Contato.module.css';

function Contato() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nome && formData.email && formData.mensagem) {
      alert(`Obrigado, ${formData.nome}! Receberemos sua mensagem.`);
      setFormData({ nome: '', email: '', mensagem: '' });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className={styles.contatoContainer}>
      <h1>Entre em Contato</h1>
      <p>Temos prazer em ouvir você. Envie uma mensagem e responderemos em breve.</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="nome">Nome</label>
          <input 
            type="text" 
            id="nome"
            name="nome" 
            placeholder="Seu nome completo" 
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">E-mail</label>
          <input 
            type="email" 
            id="email"
            name="email" 
            placeholder="seu.email@exemplo.com" 
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="mensagem">Mensagem</label>
          <textarea 
            id="mensagem"
            name="mensagem" 
            placeholder="Sua mensagem aqui..." 
            value={formData.mensagem}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Enviar Mensagem</button>
      </form>
    </div>
  );
}
export default Contato;
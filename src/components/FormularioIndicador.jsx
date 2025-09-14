import { useState } from 'react';

function FormularioIndicador() {
  const [formData, setFormData] = useState({
    nome: '',
    sigla: '',
    valor: '',
    descricao: '',
    parametros: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/indicador', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar dados para o backend.');
      }

      const data = await response.json();
      console.log('Resposta do backend:', data);

      setFormData({ nome: '', sigla: '', valor: '', descricao: '', parametro: '' });

      alert('Dados enviados com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Falha ao enviar os dados.');
    }
  };
  
  return (
    <div className="container mt-4">
      <h3>Cadastro de Indicador</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite o nome"
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="sigla" className="form-label">Sigla</label>
          <input
            type="text"
            className="form-control"
            id="sigla"
            name="sigla"
            value={formData.sigla}
            onChange={handleChange}
            placeholder="Digite a sigla"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="descricao" className="form-label">Descrição</label>
          <input
            type="text"
            className="form-control"
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            placeholder="Digite a descrição"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}

export default FormularioIndicador;
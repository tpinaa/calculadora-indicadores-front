import { useState } from 'react';

function FormularioParametro() {
  const [formData, setFormData] = useState({
    sigla: '',
    descricao: '',
    valor: ''
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
      const response = await fetch('/api/parametro', {
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

      setFormData({ sigla: '', descricao: '', valor: '' });

      alert('Dados enviados com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Falha ao enviar os dados.');
    }
  };
  
  return (
    <div className="container mt-4">
      <h3>Cadastro</h3>
      <form onSubmit={handleSubmit}>
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

        <div className="mb-3">
          <label htmlFor="valor" className="form-label">Valor</label>
          <input
            type="number"
            className="form-control"
            id="valor"
            name="valor"
            value={formData.valor}
            onChange={handleChange}
            placeholder="Digite o valor"
            min="0"
            step="0.01"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}

export default FormularioParametro;
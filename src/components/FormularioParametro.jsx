import { useState } from 'react';
import FormControl from './FormControl';

function FormularioParametro() {
  const [formData, setFormData] = useState({
    sigla: '',
    descricao: '',
    valor: ''
  });
  /*Cria um objeto chamado formData que será o estado para os campos do formulário. Sempre que o usuário inserir um dado, a função setFormData mantem o objeto atualizado. A variavel de estado formData, de função setFormData, com valor inicial vazio para os campos sigla, descricao e valor, armazenam os dados atuais que o usuário digita*/

  const [isLoading, setisLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  /*A variavel de estado isLoading, de função setIsLoading, com valor inicial false, rastreia o status de carregamento*/
  /*A variavel de estado submissionError, de função setSubmissionError, com valor inicial null, armazena qualquer mensagem de erro durante o processo de submissão*/

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  /*A função handleChange é o manipulador de eventos para gerenciar formulários, garantindo que o estado local (formData) seja atualizado sempre que o usuário digitar em qualquer campo. A função peg o nome do campo modificado e seu novo valor, criando um novo objeto de estado, mantendo o restante dos dados do formulário intactos*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    setSubmissionError(null);

    const dataToSend = {
      ...formData,
      valor: parseFloat(formData.valor)
    };
  /*A função handleSubmit prepara os dados e inicia o processo de submissão assincrona. O evento de submissão de formulário (e) padrão do navegador tenta recarregar a página, então o método e.preventDefault impede esse comportamento, permitindo ao JavaScript controlar os envios. setisLoading define o estado de carregamento como true, fazendo com que o botão de envio seja desabilitado e mudando seu texto para Enviando. o setSubmissionError limpa mensagens de erros anteriores*/

    try {
      const response = await fetch('/api/parametro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });
    /*A estrutura try envolve o código que pode gerar erros, que são capturados e tratados no bloco catch. A variável const response declarada armazena o resultado da requisição HTTP. Await pausa a execução da função handleSubmit (declarada como async) até que a requisição fetch seja concluída. O fetch inicia a requisição de rede com o primeiro argumento (a URL do endpoint para onde os dados serão enviados) e o segundo argumento (objeto de configuração da requisição). Define que o cabeçalho Content-Type que informa que o corpo está formatado como string JSON. Define que o corpo da requisição com o objeto dataToSend será convertido em string JSON*/

      if (!response.ok) {
        throw new Error('Erro ao enviar dados para o backend.');
      }
      /* Verifica o status da resposta HTTP, se response.ok for falso, lança um erro, que interrompe o try e lança o catch */

      const data = await response.json();
      console.log('Resposta do backend:', data);

      setFormData({ sigla: '', descricao: '', valor: '' });

      alert('Dados enviados com sucesso!');
      /* Se response.ok for verdadeiro, o método assincrono response.json converte a string json em objeto e armazena na variavel data. O setFormData restaura o formulário aos seu estado inicial vazio */

    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      setSubmissionError('Falha ao enviar os dados. Tente novamente');
    /* setSubmissonError define o estado de erro e faz o componente exibir a mensagem na interface para o usuário */

    } finally {
      setisLoading(false);
    }
    /* O bloco finally sempre é executado depois a conclusão do try, no sucesso ou no erro. O setisLoading finaliza o carregamento e define o estado isLoading para false, garantindo que o botão de envio seja reativado */

  };
    
  return (
    <div className="container mt-4">
      <h3>Cadastro de Parâmetro</h3>
      <form onSubmit={handleSubmit}>
        <FormControl
          label="Sigla"
          id="sigla"
          type="text"
          value={formData.sigla}
          onChange={handleChange}
          placeholder="Digite e sigla"
          required
        />

        <FormControl
          label="Descrição"
          id="descricao"
          type="text"
          value={formData.descricao}
          onChange={handleChange}
          placeholder="Digite a descrição"
          required
        />

        <FormControl
          label="Valor"
          id="valor"
          type="number"
          value={formData.valor}
          onChange={handleChange}
          placeholder="Digite o valor"
          min="0"
          step="0.01"
          required
        />
  
        {submissionError && (
          <div className='alert alert-danger' role='alert'>
            {submissionError}
          </div>
        )}

        <button 
          type="submit"
          className="btn btn-primary"
          disabled={isLoading}
        >
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
}

/* Renderiza a estrutura HTML do formulário a partir do componente FormControl. O form onSubmit define o elemento form, o evento de submissão do formulário, que é delegado a função handleSubmit. Na renderização condicional, o operador && (and) significa que se o submissionError for verdadeiro, será renderizado o código a seguir: uma div em vermelho com o conteúdo da variável submissionError */
/* O botão HTML é definido como tipo submit, que quando clicado dispara o evento onSubmit definido no tag <form>. O botão será desabilitado se a variável de estado isLoading for verdadeira, indicando que a requisição está em andamento e será habilitado se for falso. O operador ternário define o texto que aparece no botão no caso da variável isLoading for verdadeiro e falso */

export default FormularioParametro;
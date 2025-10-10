import { useContext } from 'react';
import TelaContext from '../context/TelaContext';
import { useFetchIndicadores } from '../hooks/useFetchIndicadores';
import CardHistorico from './CardHistorico';
import FormularioParametro from './FormularioParametro';
import FormularioIndicador from './FormularioIndicador';

function Painel() {
  const { tela } = useContext(TelaContext);
  /*O componente Painel usa o useContext para pegar o valor atual da variável tela, que está sendo gerenciada no TelaContext. O valor determinará se o componente Painel irá mostrar o layout painel, indicador ou patâmetro*/

  const { indicadores, loading, error } = useFetchIndicadores();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Ocorreu um erro: {error}</div>;
  }

  return (
    <section>
      {tela === 'painel' &&
        indicadores?.map(({ nome, sigla, valor, descricao, parametros }) => (
          <CardHistorico
            key={nome}
            title={sigla}
            valor={valor}
            descricao={descricao}
            parametros={parametros}
          />
        ))}
      {tela === 'indicador' && <FormularioIndicador />}
      {tela === 'parametro' && <FormularioParametro />}
    </section>
  );
}
/*O useFetch é um hook, uma função que encapsula a lógica de buscar dados de uma API. Ele retorna uma renderização condicional: array (indicadores), um booleano (loading) ou um objeto (error). O encadeamento opcional em indicadores?.map garante que indicadores seja um array antes de iterá-lo, ele simplifica a leitura de propriedades aninhadas em uma cadeia de objetos, sem causar erros se alguma referência for null ou indefined */

export default Painel;
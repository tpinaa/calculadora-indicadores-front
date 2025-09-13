import { useContext, useEffect, useState } from 'react';
import TelaContext from '../context/TelaContext';
import CardHistorico from './CardHistorico';
import FormularioParametro from './FormularioParametro';
import FormularioIndicador from './FormularioIndicador';

function Painel() {
  const { tela } = useContext(TelaContext);

  const [listaIndicadores, setlistaIndicadores] = useState([]);

  useEffect(() => {
    async function getIndicadores() {
      try {
        const indicadores = await fetch('/api/indicador/');
        const dados = await indicadores.json();
        setlistaIndicadores(dados);
      } catch (erro) {
        console.error('Erro ao buscar indicadores', erro);
      }
    }
    getIndicadores();
  }, []);

  return (
    <section>
      {tela === 'painel' &&
        listaIndicadores.map((indicador) => (
          <CardHistorico
            key={indicador.nome}
            title={indicador.sigla}
            valor={indicador.valor}
            descricao={indicador.descricao}
            parametros={indicador.parametros}
          />
        ))}
      {tela === 'indicador' && <FormularioIndicador />}
      {tela === 'parametro' && <FormularioParametro />}
    </section>
  );
}
export default Painel;
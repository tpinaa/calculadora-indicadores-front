import { useEffect, useState } from 'react';
import CardHistorico from './CardHistorico';
function Painel() {
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

  console.log(listaIndicadores[0]);

  return (
      <section>
        {listaIndicadores.map((indicador) => (
          <CardHistorico
            key={indicador.nome}
            title={indicador.sigla}
            valor={indicador.valor}
            descricao={indicador.descricao}
            parametros={indicador.parametros}
          />
        ))}
      </section>
  );
}
export default Painel;
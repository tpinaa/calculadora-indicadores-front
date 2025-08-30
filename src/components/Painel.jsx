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

  return (
    <CardHistorico
      title={listaIndicadores[0]?.sigla}
      valor={listaIndicadores[0]?.valor}
    />
  );
}
export default Painel;
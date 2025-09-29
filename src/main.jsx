import { StrictMode } from 'react'
/*Importa o componente StrictMode da biblioteca React, uma ferramenta que destaca potenciais problemas ativando verificações para os componentes filhos, como um modo de segurança*/

import { createRoot } from 'react-dom/client'
/*Importa a função createRoot da biblioteca React, uma nova maneira de montar a aplicação no DOM do site de forma assíncrona, ao ativar o Concurrent Mode*/

import App from './App.jsx'

const container = document.getElementById('root');
/* Procura o elemento no DOM e armazena o resultado de document.getElementById('root')  */

if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  console.error("Falha ao encontrar elemento 'root'.");
};
/* Verifica se o elemento container foi encontrado. Se encontrado cria a raiz e renderiza, se não (null) registra o erro no console. Conecta e renderiza a aplicação (App) na página web, montando a partir do elemento de id=root e através da função createRoot */
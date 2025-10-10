import './assets/style/App.css';
//importa o arquivo de estilos App.css para aplicação nos componentes desse script.

import './assets/style/Footer.css';
import TelaProvider from './context/TelaProvider';
//importa o componente TelaProvider da Biblioteca React, que provê dados para todos os componentes aninhados dentro dele (estados globais acessados por componentes diferentes).

import Navbar from './components/Navbar';
//importa o componente barra de navegação Navbar da Biblioteca do React.

import Painel from './components/Painel';
//importa o arquivo Painel, parte do código que está modularizado em componentes para melhor organização e reutilização.

export default function App() {
//exporta a função App como padrão, para que possa ser importado em outros arquivos como default (principal item importado)

  return (
    <TelaProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <Painel />
      </main>
      <footer className='footer-container'>Developed by Tatiana Pina</footer>
    </TelaProvider>
  );
}
//estrutura a interface principal da página a partir de uma função que retorna:
// a Tela Provider (provedor de contexto/estados, para que os componentes internos Navbar e Painel possam dados ou funções globais)
//o header é um elemento HTML5 que contém o cabeçalho da página
//o main é um elemento HTML5 que contém o conteúdo principal da página
//o footer é um elemento HTML5 que contém info de rodapé da página
//o Navbar renderiza a barra de navegação
//o Painel renderiza o Dashboard de indicadores
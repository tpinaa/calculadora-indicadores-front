import { useState, useMemo } from 'react';
/*Importa duas funções da biblioteca React. useState um hook que permite adicionar uma variável de estado a um componente. E useMemo hook que memoriza o resultado de um cálculo caro, e só o refaz quando uma das dependências é alterada*/

import TelaContext from './TelaContext';

const TelaProvider = ({ children }) => {
  const [tela, setTela] = useState('painel');
  /*Define um componente funcional chamado TelaProvider e indica que é um componente pai e pode envolver outros. E usa o hook useState para criar e gerenciar o estado chamado tela (variável que armazena o estado atual). A função setTela atualiza a variável tela. E painel é o valor inicial do estado*/

  const escolherTela = (opcaoTela) => setTela(opcaoTela);
  /*Declara uma constante para armazenar a função opcaoTela, que é passada para a função setTela como argumento. A função escolherTela é um encapsulamento que muda o estado da tela para o valor que é passado através da opcaoTela*/

  const contextValue = useMemo(() => ({
    tela,
    escolherTela,
  }), [tela, escolherTela]);
  /*A função useMemo recebe os argumentos tela e escolherTela, criando um objeto que será passado para o value do ContextProvider. O array de dependências serão vigiados pelo useMemo que só executará a função para criar um novo objeto se os valores de tela ou escolherTela mudarem. A constante contextValue armazenará o resultado da função useMemo*/
  
  return (
    <TelaContext.Provider value={contextValue}>
      {children}
    </TelaContext.Provider>
  );
};
/*O TelaContext.Provider é o componente provedor do contexto e serve como invólucro para tornar outros componentes disponíveis para os filhos. A propriedade value recebe os estados tela e escolherTela armazenados no contextValue, então qualquer componente que consumir TelaContext terá acesso a esses dados. Ao usar o children garantimos que todos os componentes dentro de TelaProvider terão acesso ao value (tais como Navbar e Painer)*/

export default TelaProvider;
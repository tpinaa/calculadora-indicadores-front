import { useState } from 'react';
import TelaContext from './TelaContext';

const TelaProvider = ({ children }) => {
  const [tela, setTela] = useState('painel');

  const escolherTela = (opcaoTela) => setTela(opcaoTela);

  return (
    <TelaContext.Provider value={{ tela, escolherTela }}>
      {children}
    </TelaContext.Provider>
  );
};

export default TelaProvider;
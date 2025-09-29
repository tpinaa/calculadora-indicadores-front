import { createContext } from "react";
/*Importa a função createContext da biblioteca React, que permite o compartilhamento de dados entre componentes*/

export const TelaContext = createContext()
/*Função que cria um contexto, um estado global acessado por qualquer componente distante na árvore de componentes*/

export default TelaContext;
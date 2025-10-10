import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    };
/* Define a classe ErrorBoundary, herdada do React.Component, contendo os métodos de ciclo de vida do React. O constructor(prop) define o construtor da classe que recebe as propriedades passadas para o componente. O super(props) chama o construtor da classe pai. O this.state inicializa o estado local do componente  */

    static getDerivedStateFromError(error) {
        return {hasError: true};
    };
    /* Define um método de ciclo de vida estático (chamado na classe), invocado se um erro for lançado por um componente filho. Recomendado para renderizar uma UI de fallback após um erro. Retorna um novo objeto de estado definindo hasError como true, sinalizando que deve re-renderizar */

    render() {
     if (this.state.hasError) {
        return <h1>Algo deu errado!</h1>;
     }
     return this.props.children;
    };
    /* O método render determina o que deve ser exibido na tela, se this.state.hasError for true, ele renderizará a mensagem de fallback. Se has.Error for false, o componente renderiza os componentes envolvidos pelo ErrorBoundary */
}

export default ErrorBoundary;
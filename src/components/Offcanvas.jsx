import '../assets/style/Offcanvas.css';
import { useContext } from 'react';
/*Importa o hook useContext que serve para evitar o prop drilling, prática de passar dados através de múltiplos níveis de componentes aninhados. O hook permite que o componente consuma dados de um contexto*/

import TelaContext from '../context/TelaContext';
/*Importa um contexto, uma maneira de compartilhar valores, como estado e função, entre componentes sem ter que passar props manualmente em todos os níveis de componentes aninhados*/

const menuItens = [
  { label: 'Equipe', link: '#', active: true },
  { label: 'Publicações', link: '#' },
];
/*const é uma variável cujo valor não pode ser reatribuido, no entanto, o conteúdo do array pode ser modificado*/

const dropdownItens = [
  {
    label: 'Indicadores',
    items: [
      { label: 'Novo+', action: 'indicador' },
      { label: 'IGPUB', link: '#' },
      { label: 'IPUB', link: '#' },
    ],
  },
  {
    label: 'Parâmetros',
    items: [
      { label: 'Novo+', action: 'parametro' },
      { label: 'NGPB', link: '#' },
      { label: 'TNSE', link: '#' },
    ],
  },
];

function Offcanvas() {
  const { escolherTela } = useContext(TelaContext);
/*Uma sintaxe de desestruturação de objeto que extrai a função escolherTela de dentro do objeto fornecido pelo TelaContext. Dessa forma, o componente Offcanvas tem acesso direto a essa função que é responsável por alterar o estado para exibir uma nova tela*/

  const handleItemClick = (tela) => {
    if (window.bootstrap) {
      const offCanvasElement = document.getElementById('offcanvasNavbar');
      const offcanvas = bootstrap.Offcanvas.getInstance(offCanvasElement);
      if (offcanvas) {
        offcanvas.hide();
      }
    }
    /*A função handleItemClick é executada sempre que houver um clique em um item do menu, onde o argumento tela serve para identificar o item (estado) clicado. O window.bootstrap é uma verificação de sergurança para garantir que a biblioteca do Bootstrap foi carregada no objeto global window do navegador, evitando erros. E o if (offcanvas) se uma instância válida do OffCanvas foi retornada. O restante identifica o elemento HTML no DOM pelo seu id e o estado associado a ele. Finalmente, o OffCanvas fecha e a tela é carregada com o contexto selecionado pelo usuário*/

    if (typeof escolherTela === 'function') {
      escolherTela(tela);
    } else {
      console.error("ERRO DE CONTEXTO: 'escolherTela' não é uma função. O componente Offcanvas pode estar fora do TelaProvider.");
    };
    /* Verifica se a variável escolherTela é uma função. Se a condição for falsa, o else é executado e registra um erro no console */
  };

  return (
    <div
      className='offcanvas offcanvas-start'
      tabIndex='-1'
      id='offcanvasNavbar'
      aria-labelledby='offcanvasNavbarLabel'
    >
      <div className='offcanvas-header'>
        <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
          Menu
        </h5>
        <button
          type='button'
          className='btn-close'
          data-bs-dismiss='offcanvas'
          aria-label='Close'
        ></button>
      </div>
      <div className='offcanvas-body'>
        <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
          {menuItens.map((item) => (
            <li key={item.label} className='nav-item'>
              <a
                className={`nav-link ${item.active ? 'active' : ''}`}
                aria-current={item.active ? 'page' : undefined}
                href={item.link}
              >
                {item.label}
              </a>
            </li>
          ))}

          {dropdownItens.map((dropdown) => (
            <li key={dropdown.label} className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                {dropdown.label}
              </a>
              <ul className='dropdown-menu dropdown-menu-end'>
                {dropdown.items.map((item) => (
                  <li key={item.label}>
                    {item.link ? (
                      <a className='dropdown-item' href={item.link}>{item.label}</a>
                    ) : (
                      <button
                        className='dropdown-item'
                        type='button'
                        data-bs-dismiss='offcanvas'
                        aria-label='Close'
                        onClick={() => handleItemClick(item.action)}
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Offcanvas;
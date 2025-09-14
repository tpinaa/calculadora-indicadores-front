import '../assets/style/Offcanvas.css';

import { useContext } from 'react';
import TelaContext from '../context/TelaContext';

function Offcanvas() {
  const { escolherTela } = useContext(TelaContext);

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
          <li className='nav-item'>
            <a
              className='nav-link active'
              aria-current='page'
              href='#'
            >
              Equipe
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Publicações
            </a>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              href='#'
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Indicadores
            </a>
<ul className='dropdown-menu dropdown-menu-end'>
              <button
                className='dropdown-item'
                type='button'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
                onClick={() => escolherTela('indicador')}
              >
                Novo +
              </button>
              <li>
                <a className='dropdown-item' href='#'>
                  IGPUB
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  IPUB
                </a>
              </li>
            </ul>
          </li>

          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              href='#'
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Parâmetros
            </a>
<ul className='dropdown-menu dropdown-menu-end'>
              <li>
                <button
                  className='dropdown-item'
                  type='button'
                  data-bs-dismiss='offcanvas'
                  aria-label='Close'
                  onClick={() => escolherTela('parametro')}
                >
                  Novo +
                </button>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  NGPB
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  TNSE
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Offcanvas;
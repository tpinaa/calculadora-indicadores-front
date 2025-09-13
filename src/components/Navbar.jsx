import Offcanvas from "./Offcanvas";
import "../assets/style/Navbar.css"

function Navbar() {
  return (
    // Horizontal Navbar + Offcanvas Navbar
    <nav className='navbar bg-body-tertiary fixed-top ms-2'>
      <div className='d-flex gap-3'>
        {/* Menu Hamburger */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasNavbar'
          aria-controls='offcanvasNavbar'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* Logo */}
        <a className='navbar-brand' href='#'>
          <img src='CETEM.png' width={'100px'} />
        </a>
      </div>
      {/* Menu Group 1 */}
      <div className='d-flex'>
        {/* Search Bar */}
        <form className='d-flex' role='search'>
          <input
            className='form-control'
            type='search'
            placeholder='Pesquisar'
            aria-label='Search'
          />
          <button className='btn btn-outline-success' type='submit'>
            <i className="bi bi-search"></i>
          </button>
        </form>

        {/* User-specific links */}
        <ul className='d-flex list-unstyled align-items-center px-4 my-0 gap-3'>
          <li className='nav-item'>
            <a
              className='nav-link active'
              aria-current='page'
              href='#'
            >
              Suporte
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
              Configurações
            </a>
            <ul className='dropdown-menu dropdown-menu-end'>
              <li>
                <a className='dropdown-item' href='#'>
                  Perfil
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  Visualização
                </a>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  Sair
                </a>
              </li>
            </ul>
          </li>
        </ul>
        {/* Offcanvas */}
        <Offcanvas/>
      </div>
    </nav>
  );
}

export default Navbar;
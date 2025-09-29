import Offcanvas from "./Offcanvas";
import SearchBar from "./SearchBar";
import UserSettings from "./UserSettings";
import CetemLogo from '../assets/images/CETEM.png';
import "../assets/style/Navbar.css"

function Navbar() {
  return (
    <nav className='navbar bg-body-tertiary fixed-top ms-2'>
      {/* Menu + Logo */}
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
        <a className='navbar-brand' href='/'>
          <img
          src={CetemLogo}
          alt="CETEM Logo"
          className="navbar-logo"
          />
        </a>
      </div>

      {/* Busca + Configurações + Offcanvas */}
      <div className='d-flex'>
        <SearchBar />
        <UserSettings />
        <Offcanvas />
      </div>
    </nav>
  );
}

export default Navbar;
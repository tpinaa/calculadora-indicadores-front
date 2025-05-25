import "../assets/style/Offcanvas.css"
function Offcanvas() {
    return (<div
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
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Equipe</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Publicações</a>
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
            </ul>
        </div>
    </div>
    )
}
export default Offcanvas
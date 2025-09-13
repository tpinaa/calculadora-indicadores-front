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
                        <li>
                            <a className='dropdown-item' href='#'>
                                PcTD
                            </a>
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                NPROE
                            </a>
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                STEC
                            </a>
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                IDTEC
                            </a>
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                APME
                            </a>
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                NPPI
                            </a>
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                NPROG
                            </a>
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                IAL
                            </a>
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                PPCI
                            </a>
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                PPCN
                            </a>
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                ICT
                            </a>
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                IEO
                            </a>
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                IEPCI
                            </a>
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                ETCO
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
                        Parâmetro
                    </a>
                    <ul className='dropdown-menu dropdown-menu-end'>
                        <li>
                            <a className='dropdown-item' href='#'>
                                TNSE
                            </a>
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                NGPB
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
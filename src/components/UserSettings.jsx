function UserSettings() {
    return (
        <ul className='d-flex list-unstyled align-items-center px-4 my-0 gap-3'>
            <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>Suporte</a>
            </li>
            <li className='nav-item dropdown'>
                <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    role="button"
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                >
                    Configurações
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="#">Perfil</a></li>
                    <li><a className="dropdown-item" href="#">Visualização</a></li>
                    <li><a className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sair</a></li>
                </ul>
            </li>
        </ul>
    );
}
export default UserSettings;
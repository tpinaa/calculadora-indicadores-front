function SearchBar() {
    const handleSubmit = (e) => {
        e.preventDefault();
        //Inserir lógica de busca.
    };

    return (
        <form className='d-flex' role='search' onSubmit={handleSubmit}>
            <input
            className='form-control'
            type='search'
            placeholder='Pesquisar'
            aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
                <i className='bi bi-search'></i>
            </button>
        </form>
    );
}
export default SearchBar;
function CardHistorico({ title, valor, descricao, parametros }) {
  return (
    <div
      className='card mb-3 bg-light shadow-lg'
      style={{ maxWidth: '320px', margin: '20px' }}
    >
      <div className='row g-0'>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>FÓRMULA: {descricao}</p>
            <p className='card-text'>VALOR: {valor}</p>
            <hr />
            {parametros && parametros.map((parametro) => (
              <p key={parametro._id} className='card-text'>
                {parametro.sigla}: {parametro.valor}
              </p>
            ))}
            {/* <p className='card-text'>{}: {valor}</p> /}
          </div>
        </div>
        <div className='col-md-4'>
          {/ <img
            src='...'
            className='img-fluid rounded-start'
            alt='...'
          /> */}
          </div>
        </div>
      </div>
     </div>
     );
}

      export default CardHistorico;
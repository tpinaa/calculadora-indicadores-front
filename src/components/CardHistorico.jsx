function CardHistorico({ title, valor }) {
  return (
    <div
      className='card mb-3'
      style={{ maxWidth: '240px', margin: '20px' }}
    >
      <div className='row g-0'>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>Valor: {valor}</p>
          </div>
        </div>
        <div className='col-md-4'>
          {/* <img
            src='...'
            className='img-fluid rounded-start'
            alt='...'
          /> */}
        </div>
      </div>
    </div>
  );
}
export default CardHistorico;
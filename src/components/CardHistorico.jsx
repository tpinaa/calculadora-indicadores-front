import '../assets/style/CardHistorico.css';
import PropTypes from 'prop-types';
/*Importa a ferramenta de segurança prop-types do React para verificar se as propriedades de um componente está recebendo o tipo correto*/

function CardHistorico({ title, valor, descricao, parametros = [] }) {
/*Define o componente CardHistorico e suas propriedades*/

  return (
    <div className='card mb-3 bg-light shadow-lg card-historico'>
      <div className='row g-0'>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>FÓRMULA: {descricao}</p>
            <p className='card-text'>VALOR: {valor}</p>
            <hr />
            {parametros.length > 0 && (
              <>
                {parametros.map((parametro) => (
                  <p key={parametro._id} className='card-text'>
                    {parametro.sigla}: {parametro.valor}
                  </p>
                ))}
              </>
            )}
          </div>
        </div>
        <div className='col-md-4'>
          {/* Adicione sua imagem aqui */}
        </div>
      </div>
    </div>
  );
}
/*Combina elementos HTML e classes do Bootstrap para exibição do card. Os parâmetros possuem uma renderização condicional, ou seja, se o array parametros contem algum item o método map itera os itens e cria um paragrafo para cada parametro encontrado. */

CardHistorico.propTypes = {
  title: PropTypes.string.isRequired,
  valor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  descricao: PropTypes.string.isRequired,
  parametros: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      sigla: PropTypes.string.isRequired,
      valor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  )
}

export default CardHistorico;
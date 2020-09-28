import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => { //aca cambiamos los elemenos de los props
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () => { //esta es la funcion de handlefavorite, esta funcion pasa los elementos que necesita un item para volverse a mostrar  y abajo antes del export esta la constante que encampzula la funcion setfavorite
    props.setFavorite(
      { //esto aca comprueba los objetos para que no ocurra un error
        id, cover, title, year, contentRating, duration,
      },
    );
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className='carousel-item'>
      <img
        className='carousel-item__img'
        src={cover}
        alt={title}
      />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={playIcon}
              alt='Play Icon'
            />
          </Link>
          {isList ? (
            <img
              className='carousel-item__details--img'
              src={removeIcon}
              alt='remove Icon'
              onClick={() => handleDeleteFavorite(id)}
            />
          ) :
            (
              <img
                className='carousel-item__details--img'
                src={plusIcon}
                alt='Plus Icon'
                onClick={handleSetFavorite}
              />
            )}

        </div>
        <p className='carousel-item__details--title'>
          {' '}
          {title}
          {' '}
        </p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};
CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = { //esto encapzula la funcion setfavorite, y deletefavorite y a bajao esta el conect con los elementos necesarios para para hacer el despatch para cambiar el estado osea el state
  setFavorite,
  deleteFavorite,
};

// aca debemos exportar este componente con el connect, y el connect recibe dos elementos el primero es mapstatetoprops pero como no vamos a mapear lo colocamos NULL pasamos el segundo mapdispatchtoprops

export default connect(null, mapDispatchToProps)(CarouselItem);

//ACA LE PASAMOS LOS ELEMENTOS QUE EL CAROUSEL NECESITA: los encontramos en la fake API y los colocamos abajo en cada div para que los llame//
//DOCUMENTACION PEQUEÑA DEL PORQUE LOS PROPS
// Los PropTypes son una propiedad de nuestros componentes que nos permiten especificar qué tipo de elementos son nuestras props: arrays, strings, números, etc.

// Instalación de PropTypes:

// npm install --save prop-types
// Uso de PropTypes:

// import React from 'react';
// import PropTypes from 'prop-types';

// const Component = ({ name, lastName, age, list }) => {
//   // ...
// };

// Component.propTypes = {
//   name: PropTypes.string,
//   lastName: PropTypes.string,
//   age: PropTypes.number,
//   list: PropTypes.array,
// };

// export default Component;
// Por defecto, enviar todas nuestras props es opcional, pero con los propTypes podemos especificar cuáles props son obligatorias para que nuestro componente funcione correctamente con el atributo isRequired.

// Component.propTypes = {
//   name: PropTypes.string.isRequired, // obligatorio
//   lastName: PropTypes.string.isRequired, // obligatorio
//   age: PropTypes.number, // opcional,
//   list: PropTypes.array, // opcional
// };

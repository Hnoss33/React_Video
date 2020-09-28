/* eslint-disable eol-last */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

//ESTE ES EL ESTADO !!

const initialState = {
  'user': {},
  'playing': {},
  'mylist': [],
  'trends': [
    {
      'id': 2,
      'slug': 'tvshow-2',
      'title': 'In the Dark',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'http://dummyimage.com/800x600.png/99118E/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://www.youtube.com/watch?v=f02mOEt11OQ',
    },
    {
      'id': 3,
      'slug': 'tvshow-3',
      'title': 'Instinct',
      'type': 'Adventure',
      'language': 'English',
      'year': 2002,
      'contentRating': '16+',
      'duration': 137,
      'cover': 'http://dummyimage.com/800x600.png/302140/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://www.youtube.com/watch?v=f02mOEt11OQ',
    },
    {
      'id': 4,
      'slug': 'tvshow-4',
      'title': 'Grand Hotel',
      'type': 'Comedy',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 163,
      'cover': 'http://dummyimage.com/800x600.png/5472FF/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://www.youtube.com/watch?v=f02mOEt11OQ',
    },
    {
      'id': 5,
      'slug': 'tvshow-5',
      'title': 'Stargate Atlantis',
      'type': 'Scripted',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 194,
      'cover': 'http://dummyimage.com/800x600.png/B36F20/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://www.youtube.com/watch?v=f02mOEt11OQ',
    },
    {
      'id': 6,
      'slug': 'tvshow-6',
      'title': 'Final Space',
      'type': 'Scripted',
      'language': 'English',
      'year': 2017,
      'contentRating': '16+',
      'duration': 124,
      'cover': 'http://dummyimage.com/800x600.png/CCC539/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://www.youtube.com/watch?v=f02mOEt11OQ',
    },
    {
      'id': 7,
      'slug': 'tvshow-7',
      'title': 'The InBetween',
      'type': 'Drama',
      'language': 'English',
      'year': 2011,
      'contentRating': '16+',
      'duration': 179,
      'cover': 'http://dummyimage.com/800x600.png/FF7A90/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://www.youtube.com/watch?v=f02mOEt11OQ',
    },
    {
      'id': 8,
      'slug': 'tvshow-4',
      'title': 'Grand Hotel',
      'type': 'Comedy',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 163,
      'cover': 'http://dummyimage.com/800x600.png/5472FF/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://www.youtube.com/watch?v=f02mOEt11OQ',
    },
    {
      'id': 9,
      'slug': 'tvshow-4',
      'title': 'Grand Hotel',
      'type': 'Comedy',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 163,
      'cover': 'http://dummyimage.com/800x600.png/5472FF/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://www.youtube.com/watch?v=f02mOEt11OQ',
    },
    {
      'id': 10,
      'slug': 'tvshow-6',
      'title': 'Final Space',
      'type': 'Scripted',
      'language': 'English',
      'year': 2017,
      'contentRating': '16+',
      'duration': 124,
      'cover': 'http://dummyimage.com/800x600.png/CCC539/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://www.youtube.com/watch?v=f02mOEt11OQ',
    },
  ],
  'originals': [
    {
      'id': 8,
      'slug': 'tvshow-8',
      'title': 'Stargate Atlantis',
      'type': 'Action',
      'language': 'English',
      'year': 2012,
      'contentRating': '16+',
      'duration': 148,
      'cover': 'http://dummyimage.com/800x600.png/306880/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://www.youtube.com/watch?v=f02mOEt11OQ',
    },
    {
      'id': 9,
      'slug': 'tvshow-9',
      'title': 'Alien Highway',
      'type': 'Action',
      'language': 'English',
      'year': 2019,
      'contentRating': '16+',
      'duration': 128,
      'cover': 'http://dummyimage.com/800x600.png/604180/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://www.youtube.com/watch?v=f02mOEt11OQ',
    },
    {
      'id': 10,
      'slug': 'tvshow-10',
      'title': 'Elementary',
      'type': 'Animation',
      'language': 'English',
      'year': 2011,
      'contentRating': '16+',
      'duration': 346,
      'cover': 'http://dummyimage.com/800x600.png/FF91BA/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://www.youtube.com/watch?v=f02mOEt11OQ',
    },
    {
      'id': 11,
      'slug': 'tvshow-11',
      'title': 'Strange Angel',
      'type': 'War',
      'language': 'English',
      'year': 2015,
      'contentRating': '16+',
      'duration': 226,
      'cover': 'http://dummyimage.com/800x600.png/45807C/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://www.youtube.com/watch?v=f02mOEt11OQ',
    },
    {
      'id': 12,
      'slug': 'tvshow-12',
      'title': 'Private Eyes',
      'type': 'Comedy',
      'language': 'English',
      'year': 2018,
      'contentRating': '16+',
      'duration': 190,
      'cover': 'http://dummyimage.com/800x600.png/577380/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://www.youtube.com/watch?v=f02mOEt11OQ',
    },
    {
      'id': 13,
      'slug': 'tvshow-13',
      'title': 'NCIS: Los Angeles',
      'type': 'Drama',
      'language': 'English',
      'year': 2010,
      'contentRating': '16+',
      'duration': 160,
      'cover': 'http://dummyimage.com/800x600.png/FF91BA/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://www.youtube.com/watch?v=f02mOEt11OQ',
    },
    {
      'id': 14,
      'slug': 'tvshow-14',
      'title': 'NCIS: Los Angeles',
      'type': 'Drama',
      'language': 'English',
      'year': 2010,
      'contentRating': '16+',
      'duration': 160,
      'cover': 'http://dummyimage.com/800x600.png/CCC539/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://www.youtube.com/watch?v=f02mOEt11OQ',
    },
    {
      'id': 15,
      'slug': 'tvshow-3',
      'title': 'Instinct',
      'type': 'Adventure',
      'language': 'English',
      'year': 2002,
      'contentRating': '16+',
      'duration': 137,
      'cover': 'http://dummyimage.com/800x600.png/302140/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://www.youtube.com/watch?v=f02mOEt11OQ',
    },
    {
      'id': 16,
      'slug': 'tvshow-16',
      'title': 'NCIS: Los Angeles',
      'type': 'Drama',
      'language': 'English',
      'year': 2010,
      'contentRating': '16+',
      'duration': 160,
      'cover': 'http://dummyimage.com/800x600.png/5472FF/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://www.youtube.com/watch?v=f02mOEt11OQ',
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('app'),
);

// Para crear un Store necesitamos llamar a la función createStore del paquete de redux pasándole los parámetros del reducer y initialState.
// Para conectar un componente a Redux vamos a necesitar importar connect de react-redux, connect va a aceptar dos parámetros:
// mapStateToProps: es una función que le va a indicar al provider qué información necesitamos del store.
// mapDispatchToProps: es un objeto con las distintas funciones para ejecutar una action en Redux.

// QUE ES REDUX :
// *Esta basado en el patrón de diseño Flux

// *Toda la data de la aplicación, se encuentra en una estructura previamente definida.

// *Toda la informción se encontrará almacenada en un único lugar llamado STORE.

// *El STORE jamas se modifica de forma directa.

// *Interacciones de usuario y/o código, dispara acciones que describen qué sucedió

// *El valor actual de la información de la aplicación se llama - State

// *Un nuevo estado es creado, en base a la combinanción del viejo estado y una acción, por una función llamada Reducer.
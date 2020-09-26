
const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

// con este caso en el switch desestructuramos y retornamos un nuevo state con mylist y action.paylod que es el objeto que vamos a guardar ahi
// Un action de Redux va a contener dos elementos:
// type: para indicar la acción que se va a ejecutar.
// payload: es la información que estamos mandando al reducer.
// Dentro de los reducers usaremos un switch para separar la lógica por cada tipo de acción que tendremos en Redux.

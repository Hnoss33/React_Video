import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import Logo from '../assets/static/logo.png';
import userIcon from '../assets/static/user-icon.png';
import { logoutRequest } from '../actions';

//Connect se encarga de proveer el estado a este componente, y cuando lo exportamos debemos colocar export default connect(mapStateToProps, mapDispatchToProps)(Header);
// estamos importanto link para manejar los enlaces a donde nos dirigimos
// traemos el action logoutRequest que se encarga de cerrar session
const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={Logo} alt='Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ? ( //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator
            <img src={gravatar(user.email)} alt={' '} />
          ) : (
            <img src={userIcon} alt='User icon' />
          )}
          <p>Profile</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <Link to='/'>{user.name}</Link>
            </li>
          ) : null}
          {hasUser ? (
            <li>
              <Link to='/' onClick={handleLogout}>
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

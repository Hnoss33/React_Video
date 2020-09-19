import React from 'react';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
import Logo from '../assets/static/logo.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={Logo} alt='Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={userIcon} alt='' />
          <p>Profile</p>
        </div>
        <ul>
          <li><a href='/'>Account</a></li>
          <li>
            <Link to='/login'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

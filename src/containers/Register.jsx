import React from 'react';
import '../assets/styles/Register.scss';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div>
      <section className='register'>
        <section className='register__container'>
          <h2>Regístrate</h2>
          <form className='register__container--form'>
            <input className='input' type='text' placeholder='Nombre' />
            <input className='input' type='text' placeholder='Correo' />
            <input className='input' type='password' placeholder='Contraseña' />
            <button className='button'>Registrarme</button>
          </form>
          <Link to='login'>
            Iniciar sesión
          </Link>
        </section>
      </section>
    </div>
  );
}

export default Register;

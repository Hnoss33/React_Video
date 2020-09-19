import React from 'react';

import Travolta from '../assets/static/travolta-crunched.gif';
import '../assets/styles/components/NotFound.scss';

function NotFound() {
  return (
    <>
      <section className='error'>
        <div className='group__error'>
          <h1 className='text__Error'>Looks Like you got lost</h1>
        </div>
        <div className='travolta'>
          <div className='group__travolta'>
            <img src={Travolta} alt='travolta' />
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;


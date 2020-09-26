import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => {
  return (

    <section className='main'>
      <h2 className='main__title'>What do you want to watch today?</h2>
      <input type='text' className='input__search' placeholder='Search...' />
    </section>

  );
};

export default Search;

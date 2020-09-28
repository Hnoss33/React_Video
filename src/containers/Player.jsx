import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';

import NotFound from './NotFound';

import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { id } = props.match.params;
  const [loading, setLoading] = useState(true);
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
    setLoading(false);
  }, []);

  if (loading) return <h2>Cargando video...</h2>;

  return hasPlaying ? (
    <div className='player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Go Back
        </button>
      </div>
    </div>
  ) : <NotFound />;
};

const mapStateToProps = (state) => (
  {
    playing: state.playing,
  }
);

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);

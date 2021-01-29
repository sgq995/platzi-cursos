import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getVideoSource } from '../actions';

import '../assets/styles/components/Player.scss';

const Player = ({ history, match, playing, getVideoSource }) => {
  const { id } = match.params;
  const hasPlaying = Object.keys(playing).length > 0;

  useEffect(() => {
    getVideoSource(id);
  }, []);

  return hasPlaying
    ? <div className="Player">
      <video controls autoPlay>
        <source src={playing.source} type="video/mp4" />
      </video>

      <div className="Player-back">
        <button className="button" onClick={() => history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
    : <Redirect to="/404" />;
}

const mapStateToProps = state => {
  return {
    playing: state.playing,
  }
}

const mapDispatchToProps = {
  getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);

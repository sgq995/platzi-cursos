import React from 'react';

import '../assets/styles/components/Player.scss';

const Player = ({ history, match }) => {
  const { id } = match.params;

  return (
    <div className="Player">
      <video controls autoPlay>
        <source src="" type="video/mp4" />
      </video>

      <div className="Player-back">
        <button className="button" onClick={() => history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  );
}

export default Player;

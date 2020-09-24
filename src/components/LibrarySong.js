import React from "react";

const LibrarySong = ({ name, artist, cover }) => {
  return (
    <div className="library-song">
      <img src={cover} alt="" />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;

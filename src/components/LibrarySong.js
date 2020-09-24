import React from "react";

const LibrarySong = ({ name, artist, cover, id, setCurrentSong, songs }) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(selectedSong[0]);
  };
  return (
    <div onClick={songSelectHandler} className="library-song">
      <img src={cover} alt="" />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;

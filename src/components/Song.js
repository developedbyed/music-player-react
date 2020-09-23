import React from "react";
import Aiguille from "../assets/covers/Aiguille.jpg";
import CanaryForest from "../assets/covers/CanaryForest.jpg";

const Song = ({ currentSong }) => {
  console.log(currentSong.cover);
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt="" />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;

import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";

const MusicPlayer = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <CoverArt />
      <SongTitle />
      <PlayControls />
    </div>
  );
};

export default MusicPlayer;

import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControls";

const MusicPlayer = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControl />
    </div>
  );
};

export default MusicPlayer;

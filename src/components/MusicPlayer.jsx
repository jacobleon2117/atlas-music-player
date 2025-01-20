import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import PlayListItem from "./PlayListItem";

export default function MusicPlayer() {
  return (
    <div className="flex w-[400px] flex-col">
      <div className="h-[400px] w-[400px]">
        <CoverArt />
      </div>
      <div className="mt-6 h-[62px] w-full">
        <SongTitle />
      </div>
      <div className="mt-6 h-[62px] w-full">
        <PlayControls />
      </div>
      <div className="mt-6 h-[18px] w-full">
        <VolumeControls />
      </div>
      <div className="mt-6 w-full">
        <PlayListItem
          title="Electric Fever"
          artist="Neon Jungle"
          duration="8:41"
        />
      </div>
    </div>
  );
}
